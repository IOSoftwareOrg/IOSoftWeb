"use server";

import { z } from "zod";
import { BrevoClient, BrevoEnvironment } from "@getbrevo/brevo";
import { headers } from "next/headers";
import { servicesCatalog } from "@/lib/services-catalog";

// Rate limiter en mémoire : max 3 soumissions par IP par fenêtre de 10 minutes
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 3;
const ipMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipMap.get(ip);
  if (!entry || now > entry.resetAt) {
    ipMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (entry.count >= MAX_REQUESTS) return true;
  entry.count++;
  return false;
}

const subjectsFr = [...servicesCatalog.fr.map((s) => s.title), "Autre"] as const;
const subjectsEn = [...servicesCatalog.en.map((s) => s.title), "Other"] as const;

// Clés de message génériques, traduites au moment de construire fieldErrors (voir validationMessages)
const schema = z.object({
  genre: z.enum(["Madame", "Monsieur", "Autre", "Ms", "Mr", "Other", ""]).optional(),
  firstname: z.string().min(1, "firstname_required").max(100),
  name: z.string().min(1, "lastname_required").max(100),
  email: z.string().email("invalid_email"),
  phoneCode: z.string().max(10).optional(),
  phone: z.string().min(1, "phone_required").max(20),
  company: z.string().max(200).optional(),
  subject: z.enum([...subjectsFr, ...subjectsEn] as unknown as [string, ...string[]], { message: "invalid_subject" }),
  message: z.string().min(10, "message_too_short").max(5000),
  lang: z.enum(["fr", "en"]).optional(),
  // honeypot — doit rester vide
  _hp: z.string().max(0, "bot_detected"),
});

const validationMessages = {
  fr: {
    firstname_required: "Prénom requis",
    lastname_required: "Nom requis",
    invalid_email: "Email invalide",
    phone_required: "Téléphone requis",
    invalid_subject: "Sujet invalide",
    message_too_short: "Message trop court (10 caractères minimum)",
  },
  en: {
    firstname_required: "First name required",
    lastname_required: "Last name required",
    invalid_email: "Invalid email",
    phone_required: "Phone required",
    invalid_subject: "Invalid subject",
    message_too_short: "Message too short (minimum 10 characters)",
  },
} satisfies Record<"fr" | "en", Record<string, string>>;

export type ContactState = {
  success?: boolean;
  error?: string;
  fieldErrors?: Partial<Record<keyof z.infer<typeof schema>, string>>;
  values?: Record<string, string>;
};

export async function sendContactForm(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const raw = Object.fromEntries(formData.entries()) as Record<string, string>;
  const { _hp: _ignored, ...values } = raw;
  const uiLang = raw.lang === "en" ? "en" : "fr";

  const headersList = await headers();
  const ip = headersList.get("x-forwarded-for")?.split(",")[0].trim();
  if (ip && isRateLimited(ip)) {
    return { error: "Trop de tentatives. Veuillez patienter quelques minutes.", values };
  }

  const parsed = schema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: ContactState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof z.infer<typeof schema>;
      if (key === "_hp") return { error: "Erreur inattendue.", values }; // bot silencieux
      const messageKey = issue.message as keyof (typeof validationMessages)["fr"];
      fieldErrors[key] = validationMessages[uiLang][messageKey] ?? issue.message;
    }
    return { fieldErrors, values };
  }

  const { genre, firstname, name, email, phoneCode, phone, company, subject, message, lang } =
    parsed.data;

  const apiKey = process.env.BREVO_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const toName = process.env.CONTACT_TO_NAME ?? "IO Software";

  if (!apiKey || !toEmail) {
    console.error("Brevo env vars missing");
    return { error: "Service temporairement indisponible.", values };
  }

  const client = new BrevoClient({ apiKey, environment: BrevoEnvironment.Default });

  const civility = genre ? `${genre} ` : "";
  const phoneDisplay = phone ? `${phoneCode ?? ""} ${phone}`.trim() : "—";

  // Email interne — récapitulatif complet pour IO Software
  const internalHtml = `
    <h2>Nouveau message de contact — IO Software</h2>
    <table cellpadding="6" style="border-collapse:collapse">
      <tr><td><strong>Civilité</strong></td><td>${genre || "—"}</td></tr>
      <tr><td><strong>Prénom</strong></td><td>${firstname}</td></tr>
      <tr><td><strong>Nom</strong></td><td>${name}</td></tr>
      <tr><td><strong>Email</strong></td><td>${email}</td></tr>
      <tr><td><strong>Téléphone</strong></td><td>${phoneDisplay}</td></tr>
      <tr><td><strong>Société</strong></td><td>${company || "—"}</td></tr>
      <tr><td><strong>Sujet</strong></td><td>${subject}</td></tr>
    </table>
    <h3>Message</h3>
    <p style="white-space:pre-wrap">${message.replace(/</g, "&lt;")}</p>
  `;

  // Email de confirmation — envoyé à l'expéditeur
  const confirmationHtml = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#0f172a">
      <div style="background:#1e3a5f;padding:32px;border-radius:12px 12px 0 0">
        <p style="color:#c9a84c;font-size:13px;font-weight:600;letter-spacing:2px;margin:0 0 8px">IO SOFTWARE</p>
        <h1 style="color:#fff;margin:0;font-size:24px">Nous avons bien reçu votre message</h1>
      </div>
      <div style="background:#f8fafc;padding:32px;border-radius:0 0 12px 12px;border:1px solid #e2e8f0;border-top:none">
        <p style="margin:0 0 16px">${lang === "en" ? `Hello ${firstname},` : `Bonjour ${civility}${firstname},`}</p>
        <p style="margin:0 0 16px;color:#475569">${lang === "en" ? `Your message regarding <strong>${subject}</strong> has been received. We will get back to you as soon as possible.` : `Votre message concernant <strong>${subject}</strong> a bien été reçu. Nous vous répondrons dans les meilleurs délais.`}</p>
        <div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:16px;margin:24px 0">
          <p style="margin:0 0 8px;font-size:13px;color:#64748b;font-weight:600;text-transform:uppercase;letter-spacing:1px">Votre message</p>
          <p style="margin:0;white-space:pre-wrap;color:#334155">${message.replace(/</g, "&lt;")}</p>
        </div>
        <p style="margin:0;color:#64748b;font-size:13px">Si vous n'êtes pas à l'origine de ce message, vous pouvez ignorer cet email.</p>
        <hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0">
        <p style="margin:0 0 4px;font-size:12px;color:#94a3b8;font-weight:600">IO Software</p>
        <p style="margin:0;font-size:12px;color:#94a3b8">Conseil en Stratégie, Organisation, Process, Data et IA · Marseille, France</p>
      </div>
    </div>
  `;

  try {
    await Promise.all([
      // Email interne
      client.transactionalEmails.sendTransacEmail({
        sender: { name: toName, email: toEmail },
        replyTo: { email, name: `${firstname} ${name}` },
        to: [{ email: toEmail, name: toName }],
        subject: `[Contact] ${subject} — ${firstname} ${name}`,
        htmlContent: internalHtml,
      }),
      // Confirmation à l'expéditeur
      client.transactionalEmails.sendTransacEmail({
        sender: { name: toName, email: toEmail },
        to: [{ email, name: `${firstname} ${name}` }],
        subject: `Votre message a bien été reçu — IO Software`,
        htmlContent: confirmationHtml,
      }),
    ]);
    return { success: true };
  } catch (err) {
    console.error("Brevo send error:", err);
    return { error: "Erreur lors de l'envoi. Veuillez réessayer.", values };
  }
}
