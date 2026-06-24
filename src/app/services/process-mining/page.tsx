import type { Metadata } from "next";
import Link from "next/link";
import RelatedServices from "@/components/RelatedServices";

export const metadata: Metadata = {
  title: "Process Mining",
  description:
    "Cartographiez et optimisez vos processus métiers grâce au Process Mining. Expertise UIPath et Celonis pour identifier les inefficacités et améliorer votre performance opérationnelle.",
  alternates: { canonical: "https://www.io-software.fr/services/process-mining" },
  openGraph: {
    title: "Process Mining — IO Software",
    description:
      "Analyse et optimisation des processus métiers par l'exploitation des logs systèmes. Expertise UIPath et Celonis.",
    url: "https://www.io-software.fr/services/process-mining",
  },
};

const etapes = [
  { num: "01", title: "Collecte des données", desc: "Extraction des événements et logs générés par les systèmes existants (ERP, CRM, etc.)." },
  { num: "02", title: "Modélisation des processus", desc: "Création de modèles de processus visuels à partir des données brutes." },
  { num: "03", title: "Analyse", desc: "Identification des inefficacités, des divergences et des opportunités d'amélioration." },
  { num: "04", title: "Optimisation", desc: "Mise en œuvre des recommandations pour améliorer les processus selon les analyses." },
];

const avantages = [
  {
    title: "Vision claire des processus",
    desc: "Visualisation en temps réel des flux de travail sans dépendre de modèles théoriques. Détection rapide des écarts par rapport aux standards.",
  },
  {
    title: "Amélioration continue",
    desc: "Ajustement dynamique des processus grâce à l'analyse continue, pour s'adapter aux besoins du marché avec agilité.",
  },
  {
    title: "Réduction des coûts",
    desc: "Élimination des inefficacités et automatisation des tâches répétitives pour réduire les coûts d'exploitation et améliorer la productivité.",
  },
  {
    title: "Décisions fondées sur les données",
    desc: "Des informations précises issues des systèmes réels pour des décisions éclairées, non basées sur des suppositions.",
  },
];

export default function ProcessMiningPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1e3a5f] pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href="/services" className="text-white hover:text-white/80 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white/80">Process Mining</span>
          </div>
          <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">
            Nos services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            Process Mining
          </h1>
          <p className="text-white/70 max-w-2xl leading-relaxed">
            Le Process Mining est une approche innovante qui permet d&apos;extraire des informations
            à partir des données d&apos;événements d&apos;une organisation pour analyser et optimiser
            ses processus métiers. Devenu un levier stratégique, il permet aux entreprises de
            maximiser leur efficacité opérationnelle en s&apos;appuyant sur leurs données réelles.
          </p>
        </div>
      </section>

      {/* Définition */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#0f172a] mb-4">Qu&apos;est-ce que le Process Mining ?</h2>
          <p className="text-[#475569] leading-relaxed max-w-3xl">
            Le Process Mining permet de faire une cartographie détaillée des processus métiers d&apos;une
            organisation en se basant sur les données brutes générées par les systèmes d&apos;information
            (ERP, CRM, etc.). Il ne s&apos;agit pas simplement de visualiser les processus, mais de les
            analyser pour identifier les goulots d&apos;étranglement, les inefficacités et les risques
            de non-conformité.
          </p>
        </div>
      </section>

      {/* Étapes */}
      <section className="pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#0f172a] mb-8">Les étapes du Process Mining</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {etapes.map((e) => (
              <div key={e.num} className="bg-[#f8fafc] rounded-2xl p-6 border border-[#e2e8f0]">
                <p className="text-3xl font-bold text-[#c9a84c] mb-3">{e.num}</p>
                <h3 className="font-bold text-[#0f172a] mb-2">{e.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UIPath & Celonis */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#0f172a] mb-2">UIPath et Celonis</h2>
          <p className="text-[#475569] mb-10">
            Des leaders reconnus dans le domaine du Process Mining —{" "}
            <a href="https://www.uipath.com/fr" target="_blank" rel="noopener noreferrer" className="text-[#1e3a5f] font-semibold hover:text-[#c9a84c] transition-colors">UIPath</a>{" "}
            et{" "}
            <a href="https://www.celonis.com/fr" target="_blank" rel="noopener noreferrer" className="text-[#1e3a5f] font-semibold hover:text-[#c9a84c] transition-colors">Celonis</a>.
          </p>
          <div className="grid md:grid-cols-2 gap-8">

            {/* UIPath */}
            <div className="bg-white rounded-2xl p-8 border border-[#e2e8f0]">
              <h3 className="text-xl font-bold text-[#0f172a] mb-6 pb-4 border-b border-[#e2e8f0]">
                UIPath — Automatisation & Process Mining
              </h3>
              <ul className="space-y-4">
                {[
                  { title: "Analyse des processus", desc: "Cartographie des processus actuels pour comprendre comment les robots interagissent et identifier où l'automatisation a le plus d'impact." },
                  { title: "Optimisation avec l'IA", desc: "L'intelligence artificielle intégrée recommande des optimisations spécifiques, réduisant le temps d'exécution et augmentant l'efficacité." },
                  { title: "Visualisation en continu", desc: "Outils de suivi des améliorations en temps réel pour des décisions basées sur des données concrètes." },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-[#c9a84c] shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-[#475569] leading-relaxed">
                      <strong className="text-[#0f172a]">{item.title} : </strong>{item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Celonis */}
            <div className="bg-white rounded-2xl p-8 border border-[#e2e8f0]">
              <h3 className="text-xl font-bold text-[#0f172a] mb-6 pb-4 border-b border-[#e2e8f0]">
                Celonis — Leader en Process Mining
              </h3>
              <ul className="space-y-4">
                {[
                  { title: "Discovery des processus", desc: "Découverte des processus actuels à partir des données SI, offrant une visibilité totale sur l'ensemble des workflows." },
                  { title: "Optimisation et prédiction", desc: "Algorithmes avancés pour identifier les goulots d'étranglement et fournir des recommandations concrètes avec des capacités prédictives." },
                  { title: "Intégration ERP", desc: "Intégration native avec les systèmes ERP populaires (SAP notamment) pour une analyse fluide dans des environnements complexes." },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-[#c9a84c] shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-[#475569] leading-relaxed">
                      <strong className="text-[#0f172a]">{item.title} : </strong>{item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#0f172a] mb-8">Les avantages du Process Mining</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {avantages.map((a) => (
              <div key={a.title} className="flex items-start gap-4 p-6 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
                <div className="w-8 h-8 bg-[#1e3a5f] rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#0f172a] mb-1">{a.title}</h3>
                  <p className="text-sm text-[#475569] leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices services={[
        { title: "Data Consulting", desc: "Le Process Mining génère une masse de données précieuses. Exploitez-les avec une stratégie data pour maximiser leur valeur.", href: "/services/data-consulting" },
        { title: "Systèmes d'information", desc: "L'efficacité de votre Process Mining dépend de la qualité de votre SI. Alignez vos outils pour des analyses fiables.", href: "/services/systemes-information" },
      ]} />

      {/* CTA */}
      <section className="bg-[#c9a84c] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Optimisez vos processus avec le Process Mining
          </h2>
          <p className="text-white/80 mb-8">
            Découvrez comment UIPath et Celonis peuvent transformer votre efficacité opérationnelle.
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
