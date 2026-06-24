"use server";

import { z } from "zod";
import { BrevoClient, BrevoEnvironment } from "@getbrevo/brevo";
import { headers } from "next/headers";

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

const schema = z.object({
  genre: z.enum(["Madame", "Monsieur", "Autre", ""]).optional(),
  firstname: z.string().min(1, "Prénom requis").max(100),
  name: z.string().min(1, "Nom requis").max(100),
  email: z.string().email("Email invalide"),
  phoneCode: z.string().max(10).optional(),
  phone: z.string().max(20).optional(),
  company: z.string().max(200).optional(),
  subject: z.enum([
    "Conseil en Management",
    "Conseil en Stratégie",
    "Finance d'entreprise",
    "Data Consulting",
    "Process Mining",
    "Systèmes d'information",
    "Développement logiciel",
    "Autre",
  ], { message: "Sujet invalide" }),
  message: z.string().min(10, "Message trop court").max(5000),
  // honeypot — doit rester vide
  _hp: z.string().max(0, "Bot detected"),
});

export type ContactState = {
  success?: boolean;
  error?: string;
  fieldErrors?: Partial<Record<keyof z.infer<typeof schema>, string>>;
};

export async function sendContactForm(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const headersList = await headers();
  const ip = headersList.get("x-forwarded-for")?.split(",")[0].trim();
  if (ip && isRateLimited(ip)) {
    return { error: "Trop de tentatives. Veuillez patienter quelques minutes." };
  }

  const raw = Object.fromEntries(formData.entries());
  const parsed = schema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: ContactState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof z.infer<typeof schema>;
      if (key === "_hp") return { error: "Erreur inattendue." }; // bot silencieux
      fieldErrors[key] = issue.message;
    }
    return { fieldErrors };
  }

  const { genre, firstname, name, email, phoneCode, phone, company, subject, message } =
    parsed.data;

  const apiKey = process.env.BREVO_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const toName = process.env.CONTACT_TO_NAME ?? "IO Software";

  if (!apiKey || !toEmail) {
    console.error("Brevo env vars missing");
    return { error: "Service temporairement indisponible." };
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
        <p style="margin:0 0 16px">Bonjour ${civility}${firstname},</p>
        <p style="margin:0 0 16px;color:#475569">Votre message concernant <strong>${subject}</strong> a bien été reçu. Nous vous répondrons dans les meilleurs délais.</p>
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
    return { error: "Erreur lors de l'envoi. Veuillez réessayer." };
  }
}
