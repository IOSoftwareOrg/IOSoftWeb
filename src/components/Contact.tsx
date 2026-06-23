"use client";

import { useState } from "react";

export default function Contact({ hideHeader }: { hideHeader?: boolean } = {}) {
  const [form, setForm] = useState({
    genre: "",
    name: "",
    firstname: "",
    email: "",
    phoneCode: "+33",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire up to API route / email service
    setSent(true);
  }

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
              Quel que soit votre besoin — conseil, audit, développement logiciel ou
              accompagnement stratégique — décrivez-nous votre contexte.
            </p>

          </div>

          {/* Right: form */}
          <div className="bg-white rounded-2xl p-8">
            {sent ? (
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
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#0f172a] mb-1">Genre</label>
                  <div className="flex gap-4">
                    {["Madame", "Monsieur", "Autre"].map((g) => (
                      <label key={g} className="flex items-center gap-1.5 text-sm text-[#0f172a] cursor-pointer">
                        <input
                          type="radio"
                          name="genre"
                          value={g}
                          checked={form.genre === g}
                          onChange={handleChange}
                          className="accent-[#1e3a5f]"
                        />
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
                      value={form.firstname}
                      onChange={handleChange}
                      className="w-full border border-[#e2e8f0] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/30 focus:border-[#1e3a5f]"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-1">Nom *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full border border-[#e2e8f0] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/30 focus:border-[#1e3a5f]"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0f172a] mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-[#e2e8f0] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/30 focus:border-[#1e3a5f]"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0f172a] mb-1">Téléphone</label>
                  <div className="flex gap-2">
                    <select
                      name="phoneCode"
                      value={form.phoneCode}
                      onChange={handleChange}
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
                      value={form.phone}
                      onChange={handleChange}
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
                    value={form.company}
                    onChange={handleChange}
                    className="w-full border border-[#e2e8f0] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/30 focus:border-[#1e3a5f]"
                    placeholder="Nom de votre entreprise"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0f172a] mb-1">Sujet *</label>
                  <select
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full border border-[#e2e8f0] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/30 focus:border-[#1e3a5f] bg-white"
                  >
                    <option value="">Sélectionner un sujet</option>
                    <option>Conseil en Management</option>
                    <option>Conseil en Stratégie</option>
                    <option>Finance d&apos;entreprise</option>
                    <option>Data Consulting</option>
                    <option>Process Mining</option>
                    <option>Systèmes d&apos;information</option>
                    <option>Développement logiciel</option>
                    <option>Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0f172a] mb-1">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full border border-[#e2e8f0] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/30 focus:border-[#1e3a5f] resize-none"
                    placeholder="Décrivez votre besoin..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1e3a5f] hover:bg-[#2d5a8e] text-white font-semibold py-3 rounded-lg transition-colors text-sm"
                >
                  Envoyer le message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
