import Link from "next/link";
import { logiciels } from "@/lib/logiciels";
import type { Locale } from "@/lib/i18n";

const t = {
  fr: {
    label: "Éditeur logiciel",
    title: "Nos solutions logicielles",
    subtitle: "IO Software développe et édite des logiciels métier conçus pour répondre aux besoins spécifiques des entreprises.",
    learnMore: "En savoir plus",
    ctaDesc: "Besoin d'une solution sur mesure adaptée à vos processus ?",
    cta: "Discutons de votre projet",
  },
  en: {
    label: "Software publisher",
    title: "Our software solutions",
    subtitle: "IO Software develops and publishes business software designed to meet the specific needs of companies.",
    learnMore: "Learn more",
    ctaDesc: "Need a custom solution tailored to your processes?",
    cta: "Let's discuss your project",
  },
};

export default function Logiciels({ hideHeader, lang = "fr" }: { hideHeader?: boolean; lang?: Locale } = {}) {
  const d = t[lang];

  return (
    <section id="logiciels" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {!hideHeader && (
          <div className="text-center mb-16">
            <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">{d.label}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mt-3 mb-4">{d.title}</h2>
            <p className="text-[#64748b] max-w-xl mx-auto">{d.subtitle}</p>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-8">
          {logiciels.map((logiciel) => (
            <div
              key={logiciel.slug}
              className="group rounded-2xl overflow-hidden border border-[#e2e8f0] hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`bg-gradient-to-br ${logiciel.color} p-8 flex items-end`}>
                <div>
                  <span className="text-xs font-semibold text-white/70 uppercase tracking-widest">{logiciel.category}</span>
                  <h3 className="text-2xl font-bold text-white mt-1">{logiciel.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-[#64748b] leading-relaxed mb-4">{logiciel.description}</p>
                <Link
                  href={`/${lang}/logiciels/${logiciel.slug}`}
                  className="text-sm font-semibold text-[#1e3a5f] hover:text-[#c9a84c] transition-colors flex items-center gap-1"
                >
                  {d.learnMore}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#64748b] text-sm mb-4">{d.ctaDesc}</p>
          <Link
            href={`/${lang}/contact`}
            className="inline-flex items-center gap-2 bg-[#1e3a5f] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#2d5a8e] transition-colors text-sm"
          >
            {d.cta}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
