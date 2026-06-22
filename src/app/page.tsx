import Link from "next/link";
import Hero from "@/components/Hero";

const sections = [
  {
    href: "/services",
    label: "Services",
    title: "8 domaines d'expertise",
    description:
      "Management, Stratégie, Finance, Data, Process Mining, SI, Rédaction technique et Développement logiciel.",
    color: "from-blue-600 to-blue-800",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    href: "/expertise",
    label: "Expertise",
    title: "30 ans d'expérience",
    description:
      "Un partenaire de confiance pour les dirigeants. Présence France & International dans des secteurs exigeants.",
    color: "from-[#1e3a5f] to-[#0f172a]",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    href: "/logiciels",
    label: "Logiciels",
    title: "Éditeur de logiciels",
    description:
      "FinAnalyzer, ProcessMap, DataBridge — des solutions métier conçues pour les besoins réels des entreprises.",
    color: "from-violet-600 to-violet-900",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    href: "/blog",
    label: "Blog",
    title: "Ressources & Actualités",
    description:
      "Finance, stratégie, management, lean, droit, économie et informatique — les insights de nos consultants.",
    color: "from-emerald-600 to-emerald-900",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Navigation cards */}
      <section className="pt-10 md:pt-24 pb-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">
              Explorer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mt-3">
              Tout ce qu&apos;IO Software peut faire pour vous
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sections.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group rounded-2xl overflow-hidden border border-[#e2e8f0] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className={`bg-gradient-to-br ${s.color} p-6 text-white`}>
                  <div className="mb-3 opacity-80">{s.icon}</div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-1">
                    {s.label}
                  </p>
                  <p className="text-lg font-bold leading-snug">{s.title}</p>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <p className="text-sm text-[#64748b] leading-relaxed">{s.description}</p>
                  <span className="mt-4 text-sm font-semibold text-[#1e3a5f] group-hover:text-[#c9a84c] transition-colors flex items-center gap-1">
                    Découvrir
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-[#c9a84c] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Vous avez un projet ? Parlons-en.
          </h2>
          <p className="text-white/80 mb-8">
            Réponse garantie sous 24 heures ouvrées.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#1e3a5f] font-bold px-8 py-4 rounded-md hover:bg-[#f1f5f9] transition-colors"
          >
            Prendre contact →
          </Link>
        </div>
      </section>
    </>
  );
}
