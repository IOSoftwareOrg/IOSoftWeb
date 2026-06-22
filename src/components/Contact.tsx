"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
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
            <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">
              Parlons de votre projet
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
              Prenons contact
            </h2>
            <p className="text-white/70 leading-relaxed mb-10">
              Quel que soit votre besoin — conseil, audit, développement logiciel ou
              accompagnement stratégique — nous reviendrons vers vous dans les 24h.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white">Adresse</p>
                  <p className="text-white/60 text-sm">Rue Denis Magdelon, 13009 Marseille</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <a href="mailto:contact@io-software.fr" className="text-white/60 text-sm hover:text-[#c9a84c] transition-colors">
                    contact@io-software.fr
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white">Réponse sous</p>
                  <p className="text-white/60 text-sm">24 heures ouvrées</p>
                </div>
              </div>
            </div>
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
                <p className="text-[#64748b]">Nous vous répondrons dans les 24 heures ouvrées.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
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
