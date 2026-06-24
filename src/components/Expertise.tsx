const sectors = [
  "Banque & Finance",
  "Luxe & Retail",
  "Télécommunications",
  "Aéronautique",
  "Industrie",
  "Services",
  "Santé",
  "Énergie",
];

const values = [
  {
    title: "Impact",
    description:
      "Nos recommandations sont concrètes, actionnables et orientées résultat. Nous mesurons notre succès au vôtre.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#1e3a5f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="12" />
        <polyline points="10,16 14,20 22,12" />
      </svg>
    ),
  },
  {
    title: "Objectivité",
    description:
      "Notre indépendance est notre force. Elle nous permet de vous conseiller sans compromis.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#1e3a5f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="12" />
        <line x1="16" y1="4" x2="16" y2="28" />
        <line x1="4" y1="16" x2="28" y2="16" />
      </svg>
    ),
  },
  {
    title: "Expertise",
    description:
      "Nous intervenons là où nous excellons. Chaque mission est conduite avec la rigueur que votre confiance exige.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#1e3a5f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="16,4 20,12 28,13 22,19 24,28 16,24 8,28 10,19 4,13 12,12" />
      </svg>
    ),
  },
];

export default function Expertise({ hideHeader }: { hideHeader?: boolean } = {}) {
  return (
    <section id="expertise" className="py-24 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-6">
        {!hideHeader && (
          <div className="text-center mb-16">
            <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">
              Notre ADN
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mt-3 mb-4">
              30 ans d&apos;expertise au service de votre croissance
            </h2>
            <p className="text-[#64748b] max-w-xl mx-auto">
              IO Software accompagne entreprises françaises et internationales avec une vision
              transversale et des compétences éprouvées dans des secteurs exigeants.
            </p>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
          {/* Left: story */}
          <div>
            <h3 className="text-xl font-bold text-[#0f172a] mb-4">
              Un partenaire de confiance pour les dirigeants
            </h3>
            <p className="text-[#64748b] leading-relaxed mb-4">
              Fondée à Marseille, IO Software est une firme de conseil et un éditeur de logiciels
              positionnés sur la stratégie, l&apos;organisation, les process, la data et l&apos;IA.
              Nos consultants allient expérience terrain et expertise académique pour proposer des
              solutions concrètes et durables.
            </p>
            <p className="text-[#64748b] leading-relaxed mb-8">
              Nous intervenons en France et à l&apos;international, auprès des TPE/PME comme des
              grandes entreprises, avec la même exigence de qualité et d&apos;impact.
            </p>

            {/* Sectors */}
            <div>
              <p className="text-sm font-semibold text-[#0f172a] mb-3">Secteurs d&apos;intervention</p>
              <div className="flex flex-wrap gap-2">
                {sectors.map((s) => (
                  <span
                    key={s}
                    className="text-sm border border-[#1e3a5f]/20 text-[#1e3a5f] px-3 py-1 rounded-full bg-white"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: highlight card */}
          <div className="bg-[#1e3a5f] rounded-2xl p-8 text-white">
            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-6">
              Pourquoi IO Software ?
            </p>
            <ul className="space-y-5">
              {[
                "Vision 360° couvrant stratégie, finance, RH et IT",
                "Expérience dans des secteurs à forte exigence",
                "Approche pragmatique orientée résultats mesurables",
                "Engagement de qualité sur chaque mission",
                "Présence France & International",
              ].map((item) => (
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

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-white rounded-xl p-6 border border-[#e2e8f0]">
              <div className="mb-4">{v.icon}</div>
              <h4 className="font-bold text-[#0f172a] mb-2">{v.title}</h4>
              <p className="text-sm text-[#64748b] leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
