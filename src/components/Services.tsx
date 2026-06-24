const services = [
  {
    href: "/services/conseil-en-management",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Conseil en Management",
    description:
      "Accompagnement dans l'organisation des équipes, la gestion des ressources humaines et la transformation managériale pour des structures plus agiles et performantes.",
    tags: ["Organisation", "RH", "Leadership"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    href: "/services/strategie-developpement",
    title: "Stratégie & Développement",
    description:
      "Définition des orientations stratégiques, plans de développement commercial et accompagnement à la croissance durable pour TPE/PME et grandes entreprises.",
    tags: ["Stratégie", "Commercial", "Croissance"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    href: "/services/finance-entreprise",
    title: "Finance d'entreprise",
    description:
      "Analyse financière, contrôle de gestion, corporate finance et accompagnement aux décisions d'investissement. Une expertise couvrant les secteurs banque, luxe et télécoms.",
    tags: ["Corporate Finance", "Analyse", "Contrôle de gestion"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    href: "/services/data-consulting",
    title: "Data Consulting",
    description:
      "Transformation de vos données en actifs stratégiques. Modélisation, analyse avancée et mise en place de tableaux de bord pour piloter votre activité par la donnée.",
    tags: ["Data", "BI", "Analytics"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    href: "/services/process-mining",
    title: "Process Mining",
    description:
      "Analyse et optimisation de vos processus métier grâce à l'exploitation des logs systèmes. Identification des goulots d'étranglement et leviers d'amélioration continue.",
    tags: ["BPM", "Lean", "Automatisation"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    href: "/services/systemes-information",
    title: "Systèmes d'information",
    description:
      "Conseil en architecture SI, choix des solutions logicielles, conduite du changement et audit de vos systèmes d'information pour aligner technologie et stratégie.",
    tags: ["SI", "Architecture", "Audit"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    href: "/services/redaction-technique",
    title: "Rédaction technique",
    description:
      "Production de documentations logicielles, manuels utilisateurs, spécifications fonctionnelles et contenus techniques pour vos projets IT et industriels.",
    tags: ["Documentation", "Spécifications", "Manuels"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    href: "/services/developpement-logiciel",
    title: "Développement logiciel",
    description:
      "Conception et développement d'applications sur mesure, éditeur de logiciels métier. De la spécification au déploiement, des solutions adaptées à vos besoins spécifiques.",
    tags: ["Développement", "Sur mesure", "Éditeur"],
  },
];

import Link from "next/link";

export default function Services({ hideHeader }: { hideHeader?: boolean } = {}) {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {!hideHeader && (
          <div className="text-center mb-16">
            <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">
              Ce que nous faisons
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mt-3 mb-4">
              Nos domaines d&apos;expertise
            </h2>
            <p className="text-[#64748b] max-w-xl mx-auto">
              Une approche transversale couvrant l&apos;ensemble des dimensions de votre entreprise,
              de la stratégie à l&apos;opérationnel.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const className = "group p-6 rounded-xl border border-[#e2e8f0] hover:border-[#1e3a5f] hover:shadow-lg transition-all duration-300 flex flex-col";
            const inner = (
              <>
                <div className="w-12 h-12 bg-[#1e3a5f]/8 rounded-lg flex items-center justify-center text-[#1e3a5f] mb-4 group-hover:bg-[#1e3a5f] group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="font-semibold text-[#0f172a] mb-2">{service.title}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {service.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-[#f1f5f9] text-[#64748b] px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            );
            return service.href ? (
              <Link key={service.title} href={service.href} className={className}>
                {inner}
              </Link>
            ) : (
              <div key={service.title} className={className}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
