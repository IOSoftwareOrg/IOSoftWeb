"use client";

import { useActionState } from "react";
import { sendContactForm, type ContactState } from "@/app/actions/contact";

const INITIAL: ContactState = {};

export default function Contact({ hideHeader }: { hideHeader?: boolean } = {}) {
  const [state, action, pending] = useActionState(sendContactForm, INITIAL);

  return (
    <section id="contact" className="py-24 bg-[#1e3a5f]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div className="text-white">
            {!hideHeader && (
              <>
                <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">
                  Parlons de votre projet
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
                  Prenons contact
                </h2>
              </>
            )}
            <p className="text-white/70 leading-relaxed mb-10">
              Quel que soit votre besoin — stratégie, organisation, process, data ou IA — décrivez-nous votre contexte.
            </p>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-2xl p-8">
            {state.success ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-2">Message envoyé !</h3>
                <p className="text-[#64748b]">Nous vous répondrons dans les meilleurs délais.</p>
              </div>
            ) : (
              <form action={action} className="space-y-4">
                {/* Honeypot — invisible, piège les bots */}
                <input type="text" name="_hp" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

                {state.error && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                    {state.error}
                  </p>
                )}

                <div>
                  <label className="block text-sm font-medium text-[#0f172a] mb-1">Genre</label>
                  <div className="flex gap-4">
                    {["Madame", "Monsieur", "Autre"].map((g) => (
                      <label key={g} className="flex items-center gap-1.5 text-sm text-[#0f172a] cursor-pointer">
                        <input type="radio" name="genre" value={g} className="accent-[#1e3a5f]" />
                        {g}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-1">Prénom *</label>
                    <input
                      type="text"
                      name="firstname"
                      required
                      className="w-full border border-[#e2e8f0] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/30 focus:border-[#1e3a5f]"
                      placeholder="Votre prénom"
                    />
                    {state.fieldErrors?.firstname && (
                      <p className="text-xs text-red-500 mt-1">{state.fieldErrors.firstname}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-1">Nom *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full border border-[#e2e8f0] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/30 focus:border-[#1e3a5f]"
                      placeholder="Votre nom"
                    />
                    {state.fieldErrors?.name && (
                      <p className="text-xs text-red-500 mt-1">{state.fieldErrors.name}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0f172a] mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full border border-[#e2e8f0] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/30 focus:border-[#1e3a5f]"
                    placeholder="votre@email.com"
                  />
                  {state.fieldErrors?.email && (
                    <p className="text-xs text-red-500 mt-1">{state.fieldErrors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0f172a] mb-1">Téléphone</label>
                  <div className="flex gap-2">
                    <select
                      name="phoneCode"
                      defaultValue="+33"
                      className="border border-[#e2e8f0] rounded-lg px-2 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/30 focus:border-[#1e3a5f] bg-white w-36 shrink-0"
                    >
                      {[
                        { code: "+33", label: "🇫🇷 +33" },
                        { code: "+32", label: "🇧🇪 +32" },
                        { code: "+41", label: "🇨🇭 +41" },
                        { code: "+352", label: "🇱🇺 +352" },
                        { code: "+1", label: "🇺🇸 +1" },
                        { code: "+44", label: "🇬🇧 +44" },
                        { code: "+49", label: "🇩🇪 +49" },
                        { code: "+34", label: "🇪🇸 +34" },
                        { code: "+39", label: "🇮🇹 +39" },
                        { code: "+31", label: "🇳🇱 +31" },
                        { code: "+351", label: "🇵🇹 +351" },
                        { code: "+212", label: "🇲🇦 +212" },
                        { code: "+213", label: "🇩🇿 +213" },
                        { code: "+216", label: "🇹🇳 +216" },
                        { code: "+7", label: "🇷🇺 +7" },
                        { code: "+48", label: "🇵🇱 +48" },
                        { code: "+420", label: "🇨🇿 +420" },
                        { code: "+421", label: "🇸🇰 +421" },
                        { code: "+36", label: "🇭🇺 +36" },
                        { code: "+40", label: "🇷🇴 +40" },
                        { code: "+359", label: "🇧🇬 +359" },
                        { code: "+385", label: "🇭🇷 +385" },
                        { code: "+381", label: "🇷🇸 +381" },
                        { code: "+386", label: "🇸🇮 +386" },
                        { code: "+372", label: "🇪🇪 +372" },
                        { code: "+371", label: "🇱🇻 +371" },
                        { code: "+370", label: "🇱🇹 +370" },
                        { code: "+380", label: "🇺🇦 +380" },
                        { code: "+375", label: "🇧🇾 +375" },
                      ].map(({ code, label }) => (
                        <option key={code} value={code}>{label}</option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full border border-[#e2e8f0] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/30 focus:border-[#1e3a5f]"
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0f172a] mb-1">Société</label>
                  <input
                    type="text"
                    name="company"
                    className="w-full border border-[#e2e8f0] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/30 focus:border-[#1e3a5f]"
                    placeholder="Nom de votre entreprise"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0f172a] mb-1">Sujet *</label>
                  <select
                    name="subject"
                    required
                    defaultValue=""
                    className="w-full border border-[#e2e8f0] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/30 focus:border-[#1e3a5f] bg-white"
                  >
                    <option value="" disabled>Sélectionner un sujet</option>
                    <option>Conseil en Management</option>
                    <option>Conseil en Stratégie</option>
                    <option>Finance d&apos;entreprise</option>
                    <option>Data Consulting</option>
                    <option>Process Mining</option>
                    <option>Systèmes d&apos;information</option>
                    <option>Développement logiciel</option>
                    <option>Autre</option>
                  </select>
                  {state.fieldErrors?.subject && (
                    <p className="text-xs text-red-500 mt-1">{state.fieldErrors.subject}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0f172a] mb-1">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full border border-[#e2e8f0] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/30 focus:border-[#1e3a5f] resize-none"
                    placeholder="Décrivez votre besoin..."
                  />
                  {state.fieldErrors?.message && (
                    <p className="text-xs text-red-500 mt-1">{state.fieldErrors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={pending}
                  className="w-full bg-[#1e3a5f] hover:bg-[#2d5a8e] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-colors text-sm"
                >
                  {pending ? "Envoi en cours…" : "Envoyer le message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
