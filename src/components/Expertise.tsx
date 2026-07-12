import type { Locale } from "@/lib/i18n";

const icons = [
  <svg key="impact" width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#1e3a5f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="16" cy="16" r="12" /><polyline points="10,16 14,20 22,12" /></svg>,
  <svg key="objectivity" width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#1e3a5f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="16" cy="16" r="12" /><line x1="16" y1="4" x2="16" y2="28" /><line x1="4" y1="16" x2="28" y2="16" /></svg>,
  <svg key="expertise" width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#1e3a5f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="16,4 20,12 28,13 22,19 24,28 16,24 8,28 10,19 4,13 12,12" /></svg>,
];

const t = {
  fr: {
    label: "Notre ADN",
    title: "30 ans d'expertise au service de votre croissance",
    subtitle: "IO Software accompagne entreprises françaises et internationales avec une vision transversale et des compétences éprouvées dans des secteurs exigeants.",
    partner: "Un partenaire de confiance pour les dirigeants",
    story1: "Fondée à Marseille, IO Software est une firme de conseil et un éditeur de logiciels positionnés sur la stratégie, l'organisation, les process, la data et l'IA. Nos consultants allient expérience terrain et expertise académique pour proposer des solutions concrètes et durables.",
    story2: "Nous intervenons en France et à l'international, auprès des TPE/PME comme des grandes entreprises, avec la même exigence de qualité et d'impact.",
    sectors: "Secteurs d'intervention",
    sectorsList: ["Banque & Finance", "Luxe & Retail", "Télécommunications", "Aéronautique", "Industrie", "Services", "Santé", "Énergie"],
    why: "Pourquoi IO Software ?",
    highlights: ["Vision 360° couvrant stratégie, finance, RH et IT", "Expérience dans des secteurs à forte exigence", "Approche pragmatique orientée résultats mesurables", "Engagement de qualité sur chaque mission", "Présence France & International"],
    values: [
      { title: "Impact", description: "Nos recommandations sont concrètes, actionnables et orientées résultat. Nous mesurons notre succès au vôtre." },
      { title: "Objectivité", description: "Notre indépendance est notre force. Elle nous permet de vous conseiller sans compromis." },
      { title: "Expertise", description: "Nous intervenons là où nous excellons. Chaque mission est conduite avec la rigueur que votre confiance exige." },
    ],
  },
  en: {
    label: "Our DNA",
    title: "30 years of expertise at the service of your growth",
    subtitle: "IO Software supports French and international companies with a transversal vision and proven expertise in demanding sectors.",
    partner: "A trusted partner for executives",
    story1: "Founded in Marseille, IO Software is a consulting firm and software publisher focused on strategy, organisation, processes, data and AI. Our consultants combine field experience and academic expertise to deliver concrete and lasting solutions.",
    story2: "We operate in France and internationally, working with SMEs and large companies alike, with the same commitment to quality and impact.",
    sectors: "Sectors",
    sectorsList: ["Banking & Finance", "Luxury & Retail", "Telecommunications", "Aeronautics", "Industry", "Services", "Healthcare", "Energy"],
    why: "Why IO Software?",
    highlights: ["360° view covering strategy, finance, HR and IT", "Experience in high-demand sectors", "Pragmatic results-oriented approach", "Quality commitment on every mission", "France & International presence"],
    values: [
      { title: "Impact", description: "Our recommendations are concrete, actionable and results-oriented. We measure our success by yours." },
      { title: "Objectivity", description: "Our independence is our strength. It allows us to advise you without compromise." },
      { title: "Expertise", description: "We operate where we excel. Every mission is conducted with the rigour your trust demands." },
    ],
  },
};

export default function Expertise({ hideHeader, lang = "fr" }: { hideHeader?: boolean; lang?: Locale } = {}) {
  const d = t[lang];

  return (
    <section id="expertise" className="py-24 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-6">
        {!hideHeader && (
          <div className="text-center mb-16">
            <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">{d.label}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mt-3 mb-4">{d.title}</h2>
            <p className="text-[#64748b] max-w-xl mx-auto">{d.subtitle}</p>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
          <div>
            <h3 className="text-xl font-bold text-[#0f172a] mb-4">{d.partner}</h3>
            <p className="text-[#64748b] leading-relaxed mb-4">{d.story1}</p>
            <p className="text-[#64748b] leading-relaxed mb-8">{d.story2}</p>
            <div>
              <p className="text-sm font-semibold text-[#0f172a] mb-3">{d.sectors}</p>
              <div className="flex flex-wrap gap-2">
                {d.sectorsList.map((s) => (
                  <span key={s} className="text-sm border border-[#1e3a5f]/20 text-[#1e3a5f] px-3 py-1 rounded-sm bg-white">{s}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#1e3a5f] rounded-sm p-8 text-white">
            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-6">{d.why}</p>
            <ul className="space-y-5">
              {d.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#c9a84c] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {d.values.map((v, i) => (
            <div key={v.title} className="bg-white rounded-sm p-6 border border-[#e2e8f0]">
              <div className="mb-4">{icons[i]}</div>
              <h4 className="font-bold text-[#0f172a] mb-2">{v.title}</h4>
              <p className="text-sm text-[#64748b] leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
