"use client";

import { useActionState } from "react";
import { sendContactForm, type ContactState } from "@/app/actions/contact";
import type { Locale } from "@/lib/i18n";

const INITIAL: ContactState = {};

const phoneCodes = [
  { code: "+33", label: "🇫🇷 +33" }, { code: "+32", label: "🇧🇪 +32" },
  { code: "+41", label: "🇨🇭 +41" }, { code: "+352", label: "🇱🇺 +352" },
  { code: "+1", label: "🇺🇸 +1" }, { code: "+44", label: "🇬🇧 +44" },
  { code: "+49", label: "🇩🇪 +49" }, { code: "+34", label: "🇪🇸 +34" },
  { code: "+39", label: "🇮🇹 +39" }, { code: "+31", label: "🇳🇱 +31" },
  { code: "+351", label: "🇵🇹 +351" }, { code: "+212", label: "🇲🇦 +212" },
  { code: "+213", label: "🇩🇿 +213" }, { code: "+216", label: "🇹🇳 +216" },
  { code: "+7", label: "🇷🇺 +7" }, { code: "+48", label: "🇵🇱 +48" },
];

const t = {
  fr: {
    label: "Parlons de votre projet",
    heading: "Prenons contact",
    intro: "Quel que soit votre besoin — stratégie, organisation, process, data ou IA — décrivez-nous votre contexte.",
    gender: "Genre", madame: "Madame", monsieur: "Monsieur", autre: "Autre",
    firstname: "Prénom *", firstnamePlaceholder: "Votre prénom",
    lastname: "Nom *", lastnamePlaceholder: "Votre nom",
    email: "Email *", emailPlaceholder: "votre@email.com",
    phone: "Téléphone", phonePlaceholder: "06 12 34 56 78",
    company: "Société", companyPlaceholder: "Nom de votre entreprise",
    subject: "Sujet *", selectSubject: "Sélectionner un sujet",
    subjects: ["Conseil en Management", "Conseil en Stratégie", "Finance d'entreprise", "Data Consulting", "Process Mining", "Systèmes d'information", "Développement logiciel", "Autre"],
    message: "Message *", messagePlaceholder: "Décrivez votre besoin...",
    send: "Envoyer le message", sending: "Envoi en cours…",
    successTitle: "Message envoyé !", successDesc: "Nous vous répondrons dans les meilleurs délais.",
  },
  en: {
    label: "Let's talk about your project",
    heading: "Get in touch",
    intro: "Whatever your need — strategy, organisation, process, data or AI — describe your context to us.",
    gender: "Title", madame: "Ms", monsieur: "Mr", autre: "Other",
    firstname: "First name *", firstnamePlaceholder: "Your first name",
    lastname: "Last name *", lastnamePlaceholder: "Your last name",
    email: "Email *", emailPlaceholder: "your@email.com",
    phone: "Phone", phonePlaceholder: "+44 7700 900000",
    company: "Company", companyPlaceholder: "Your company name",
    subject: "Subject *", selectSubject: "Select a subject",
    subjects: ["Management Consulting", "Strategy & Development", "Corporate Finance", "Data Consulting", "Process Mining", "Information Systems", "Software Development", "Other"],
    message: "Message *", messagePlaceholder: "Describe your need...",
    send: "Send message", sending: "Sending...",
    successTitle: "Message sent!", successDesc: "We will get back to you as soon as possible.",
  },
};

export default function Contact({ hideHeader, lang = "fr" }: { hideHeader?: boolean; lang?: Locale } = {}) {
  const [state, action, pending] = useActionState(sendContactForm, INITIAL);
  const d = t[lang];
  const inputClass = "w-full border border-[#e2e8f0] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/30 focus:border-[#1e3a5f]";

  return (
    <section id="contact" className="py-24 bg-[#1e3a5f]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="text-white">
            {!hideHeader && (
              <>
                <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">{d.label}</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">{d.heading}</h2>
              </>
            )}
            <p className="text-white/70 leading-relaxed mb-10">{d.intro}</p>
          </div>

          <div className="bg-white rounded-sm p-8">
            {state.success ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-2">{d.successTitle}</h3>
                <p className="text-[#64748b]">{d.successDesc}</p>
              </div>
            ) : (
              <form action={action} className="space-y-4">
                <input type="text" name="_hp" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                <input type="hidden" name="lang" value={lang} />

                {state.error && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">{state.error}</p>
                )}

                <div>
                  <label className="block text-sm font-medium text-[#0f172a] mb-1">{d.gender}</label>
                  <div className="flex gap-4">
                    {[{ label: d.madame, value: "Madame" }, { label: d.monsieur, value: "Monsieur" }, { label: d.autre, value: "Autre" }].map((g) => (
                      <label key={g.value} className="flex items-center gap-1.5 text-sm text-[#0f172a] cursor-pointer">
                        <input type="radio" name="genre" value={g.value} className="accent-[#1e3a5f]" />
                        {g.label}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-1">{d.firstname}</label>
                    <input type="text" name="firstname" required className={inputClass} placeholder={d.firstnamePlaceholder} />
                    {state.fieldErrors?.firstname && <p className="text-xs text-red-500 mt-1">{state.fieldErrors.firstname}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-1">{d.lastname}</label>
                    <input type="text" name="name" required className={inputClass} placeholder={d.lastnamePlaceholder} />
                    {state.fieldErrors?.name && <p className="text-xs text-red-500 mt-1">{state.fieldErrors.name}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0f172a] mb-1">{d.email}</label>
                  <input type="email" name="email" required className={inputClass} placeholder={d.emailPlaceholder} />
                  {state.fieldErrors?.email && <p className="text-xs text-red-500 mt-1">{state.fieldErrors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0f172a] mb-1">{d.phone}</label>
                  <div className="flex gap-2">
                    <select name="phoneCode" defaultValue="+33" className="border border-[#e2e8f0] rounded-lg px-2 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/30 focus:border-[#1e3a5f] bg-white w-36 shrink-0">
                      {phoneCodes.map(({ code, label }) => <option key={code} value={code}>{label}</option>)}
                    </select>
                    <input type="tel" name="phone" className={inputClass} placeholder={d.phonePlaceholder} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0f172a] mb-1">{d.company}</label>
                  <input type="text" name="company" className={inputClass} placeholder={d.companyPlaceholder} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0f172a] mb-1">{d.subject}</label>
                  <select name="subject" required defaultValue="" className={`${inputClass} bg-white`}>
                    <option value="" disabled>{d.selectSubject}</option>
                    {d.subjects.map((s) => <option key={s}>{s}</option>)}
                  </select>
                  {state.fieldErrors?.subject && <p className="text-xs text-red-500 mt-1">{state.fieldErrors.subject}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0f172a] mb-1">{d.message}</label>
                  <textarea name="message" required rows={4} className={`${inputClass} resize-none`} placeholder={d.messagePlaceholder} />
                  {state.fieldErrors?.message && <p className="text-xs text-red-500 mt-1">{state.fieldErrors.message}</p>}
                </div>

                <button type="submit" disabled={pending} className="w-full bg-[#1e3a5f] hover:bg-[#2d5a8e] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-colors text-sm">
                  {pending ? d.sending : d.send}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
