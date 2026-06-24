import type { Metadata } from "next";
import Link from "next/link";
import RelatedServices from "@/components/RelatedServices";

export const metadata: Metadata = {
  title: "Conseil en Management",
  description:
    "Optimisez vos performances opérationnelles avec nos experts en management des organisations, leadership et management interculturel. Marseille, France & International.",
  alternates: { canonical: "https://www.io-software.fr/services/conseil-en-management" },
  openGraph: {
    title: "Conseil en Management — IO Software",
    description:
      "Management des organisations, leadership et management interculturel. Meilleures pratiques issues du monde anglo-saxon.",
    url: "https://www.io-software.fr/services/conseil-en-management",
  },
};

const sections = [
  {
    title: "Management des organisations et des comportements",
    items: [
      "Définition de la culture d'entreprise",
      "Adaptation de l'organisation au sein de la structure",
      "Identification des jeux individuels : jeux d'alliance et de pouvoir",
      "Gestion du changement avec identification des leaders : traits de caractères et caractéristiques émotionnelles",
    ],
  },
  {
    title: "Développer votre leadership",
    items: [
      "Participation à la manière de vivre des collaborateurs",
      "Compréhension mutuelle",
      "Éviter l'excès de stress",
      "Comment agir face à un « évitant » ?",
      "Comment agir face à un « histrionique » ?",
    ],
  },
  {
    title: "Management interculturel",
    items: [
      "Identification des groupes culturels",
      "Définition des traits de caractères types des populations visées",
      "Gestion de l'expatriation (US, Europe, Asie)",
    ],
  },
];

export default function ConseilManagementPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1e3a5f] pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href="/services" className="text-white hover:text-white/80 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white/80">Conseil en Management</span>
          </div>
          <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">
            Nos services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            Conseil en Management
          </h1>
          <p className="text-white/70 max-w-2xl leading-relaxed">
            Notre activité de conseil en management vise à optimiser les performances opérationnelles
            de votre structure. Que vous réunissiez deux sites, ouvriez une succursale à l&apos;étranger
            ou gériez des problématiques comportementales, nous vous apportons les meilleures pratiques
            issues du monde anglo-saxon pour minimiser les risques d&apos;échec.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#475569] leading-relaxed max-w-3xl text-lg">
            Il s&apos;agit d&apos;identifier les traits de caractère des populations, de repérer les leaders
            sur lesquels vous pourrez vous appuyer, de contourner les jeux de pouvoir individuels,
            d&apos;identifier les détenteurs d&apos;influence — et parfois de définir une nouvelle culture
            d&apos;entreprise et d&apos;y faire adhérer vos équipes.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="pb-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {sections.map((s) => (
              <div key={s.title} className="bg-[#f8fafc] rounded-2xl p-8 border border-[#e2e8f0]">
                <h2 className="text-lg font-bold text-[#0f172a] mb-6 pb-4 border-b border-[#e2e8f0]">
                  {s.title}
                </h2>
                <ul className="space-y-3">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-[#c9a84c] shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-[#475569] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices services={[
        { title: "Stratégie & Développement", desc: "Une fois votre organisation consolidée, définissez les orientations stratégiques pour accélérer votre croissance.", href: "/services/strategie-developpement" },
        { title: "Finance d'entreprise", desc: "Pilotez la performance financière de votre structure avec rigueur pour soutenir vos décisions managériales.", href: "/services/finance-entreprise" },
      ]} />

      {/* CTA */}
      <section className="bg-[#c9a84c] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Parlons de votre projet de management
          </h2>
          <p className="text-white/80 mb-8">
            Chaque organisation est unique. Décrivez-nous votre contexte et nous vous proposerons une approche adaptée.
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
