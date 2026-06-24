import type { Metadata } from "next";
import Link from "next/link";
import RelatedServices from "@/components/RelatedServices";

export const metadata: Metadata = {
  title: "Finance d'entreprise",
  description:
    "Analyse financière complète : rentabilité, solvabilité et perspectives de développement. Diagnostic économique et financier sur mesure pour les dirigeants.",
  alternates: { canonical: "https://www.io-software.fr/services/finance-entreprise" },
  openGraph: {
    title: "Finance d'entreprise — IO Software",
    description:
      "Établissez la santé financière de votre entreprise autour de trois axes : rentabilité, solvabilité et perspectives de développement.",
    url: "https://www.io-software.fr/services/finance-entreprise",
  },
};

const indicateurs = [
  "Évolution du chiffre d'affaires",
  "Évolution des marges commerciales",
  "Seuil de rentabilité",
  "Valeur ajoutée",
  "Valeur des immobilisations",
  "Besoin en fonds de roulement (BFR)",
  "Capacité d'autofinancement (CAF)",
  "Politique de financement (dettes court, moyen, long terme)",
  "Rentabilité (EBE, comparaison des taux dégagés avec les taux exigés)",
];

const etapes = [
  {
    num: "01",
    title: "Diagnostic économique",
    desc: "Analyse de l'environnement sectoriel, du marché visé, du positionnement concurrentiel, de l'organisation interne et de la stratégie d'évolution.",
  },
  {
    num: "02",
    title: "Diagnostic financier",
    desc: "Étude de plusieurs exercices comptables pour mettre en évidence la formation du résultat, la création de valeur et les indicateurs clés de performance.",
  },
  {
    num: "03",
    title: "Analyse des ratios",
    desc: "Sélection des ratios les plus pertinents au regard de votre activité pour analyser la rentabilité, la gestion et la structure financière.",
  },
  {
    num: "04",
    title: "Conclusions & recommandations",
    desc: "Remise d'un rapport clair sur la solvabilité, la rentabilité et les perspectives d'évolution de votre entreprise.",
  },
];

export default function FinanceEntreprisePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1e3a5f] pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href="/services" className="text-white hover:text-white/80 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white/80">Finance d&apos;entreprise</span>
          </div>
          <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">
            Nos services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            Finance d&apos;entreprise
          </h1>
          <p className="text-white/70 max-w-2xl leading-relaxed">
            La responsabilité du chef d&apos;entreprise est d&apos;assurer une gestion saine des finances
            de sa société et d&apos;anticiper les investissements futurs pour mener à bien ses projets
            stratégiques. La génération de richesse nécessite des investissements qui doivent être
            financés et suffisamment rentables.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Rentabilité", desc: "Mesurer la capacité de l'entreprise à générer des bénéfices par rapport aux ressources engagées." },
              { title: "Solvabilité", desc: "Évaluer la capacité à honorer ses engagements financiers à court, moyen et long terme." },
              { title: "Perspectives", desc: "Identifier les leviers de développement et les risques pour construire une stratégie solide." },
            ].map((item) => (
              <div key={item.title} className="text-center p-8 bg-[#f8fafc] rounded-2xl border border-[#e2e8f0]">
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">{item.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Étapes */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#0f172a] mb-8">Notre méthodologie</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {etapes.map((e) => (
              <div key={e.num} className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
                <p className="text-3xl font-bold text-[#c9a84c] mb-3">{e.num}</p>
                <h3 className="font-bold text-[#0f172a] mb-2">{e.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Indicateurs */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">Indicateurs analysés</h2>
              <p className="text-[#475569] leading-relaxed mb-8">
                Il existe de nombreux ratios qui servent à analyser la rentabilité, la gestion et
                la structure financière de l&apos;entreprise. Nous sélectionnons les plus pertinents
                en corrélation directe avec votre activité.
              </p>
              <ul className="space-y-3">
                {indicateurs.map((ind) => (
                  <li key={ind} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-[#c9a84c] shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-[#475569]">{ind}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#1e3a5f] rounded-2xl p-8 text-white">
              <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-6">
                Ce que vous obtenez
              </p>
              <ul className="space-y-5">
                {[
                  "Une vision claire de la santé financière de votre entreprise",
                  "Un diagnostic sur plusieurs exercices pour identifier les tendances",
                  "Des ratios sélectionnés selon votre secteur et votre activité",
                  "Des conclusions actionnables sur la rentabilité et la solvabilité",
                  "Des recommandations concrètes pour vos décisions stratégiques",
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
        </div>
      </section>

      <RelatedServices services={[
        { title: "Stratégie & Développement", desc: "L'analyse financière est le socle de toute décision stratégique. Construisez votre feuille de route sur des bases solides.", href: "/services/strategie-developpement" },
        { title: "Data Consulting", desc: "Transformez vos données financières en tableaux de bord actionnables pour un pilotage en temps réel.", href: "/services/data-consulting" },
      ]} />

      {/* CTA */}
      <section className="bg-[#c9a84c] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Parlons de la santé financière de votre entreprise
          </h2>
          <p className="text-white/80 mb-8">
            Un diagnostic financier rigoureux est le point de départ de toute décision stratégique éclairée.
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
