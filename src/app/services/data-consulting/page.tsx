import type { Metadata } from "next";
import Link from "next/link";
import RelatedServices from "@/components/RelatedServices";

export const metadata: Metadata = {
  title: "Data Consulting",
  description:
    "Transformez vos données en actifs stratégiques. Audit, architecture, analyse prédictive et intelligence artificielle pour piloter votre entreprise par la donnée.",
  alternates: { canonical: "https://www.io-software.fr/services/data-consulting" },
  openGraph: {
    title: "Data Consulting — IO Software",
    description:
      "Collectez, traitez, analysez et valorisez vos données pour booster votre compétitivité et votre innovation.",
    url: "https://www.io-software.fr/services/data-consulting",
  },
};

const services = [
  {
    title: "Audit des données",
    desc: "Identifier les sources existantes (ERP, CRM, IoT, etc.), évaluer leur qualité et analyser leur pertinence pour vos objectifs métiers.",
  },
  {
    title: "Architecture de données",
    desc: "Concevoir une infrastructure robuste et scalable pour gérer des volumes croissants de données — cloud, data lakes ou solutions hybrides.",
  },
  {
    title: "Stratégie analytique et data-driven",
    desc: "Définir les KPIs, prioriser les cas d'usage et développer des tableaux de bord pour suivre les progrès en temps réel.",
  },
  {
    title: "Analyse prédictive et IA",
    desc: "Tirer parti des technologies avancées pour anticiper les tendances, automatiser les décisions et personnaliser l'expérience client.",
  },
];

const benefices = [
  { title: "Meilleure prise de décision", desc: "Les décisions data-driven réduisent l'incertitude et augmentent l'efficacité opérationnelle." },
  { title: "Réduction des coûts", desc: "Identification des inefficacités par des analyses détaillées pour optimiser les ressources." },
  { title: "Anticipation des risques", desc: "L'analyse prédictive aide à prévoir les tendances du marché et les comportements clients." },
  { title: "Conformité réglementaire", desc: "Mise en place de pratiques respectant les normes en vigueur, notamment le RGPD." },
];

const casUses = [
  { num: "−20%", label: "délais de production", desc: "Une entreprise industrielle détecte les goulets d'étranglement via des capteurs IoT et l'analyse de données." },
  { num: "+15%", label: "de ventes", desc: "Un e-commerçant personnalise ses recommandations grâce à des modèles d'apprentissage automatique." },
  { num: "−30%", label: "de fraudes", desc: "Une institution financière identifie en temps réel des transactions suspectes via des algorithmes de machine learning." },
];

const etapes = [
  { num: "01", title: "Diagnostic initial", desc: "Comprendre l'état actuel : données disponibles, outils en place et objectifs stratégiques." },
  { num: "02", title: "Feuille de route", desc: "Plan aligné sur les priorités métiers, intégrant les cas d'usage à forte valeur ajoutée." },
  { num: "03", title: "Implémentation", desc: "Déploiement d'outils comme Power BI, Tableau ou plateformes cloud (AWS, Azure, Google Cloud)." },
  { num: "04", title: "Formation & adoption", desc: "Accompagnement des équipes dans la maîtrise des outils et l'intégration d'une culture data-driven." },
];

export default function DataConsultingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1e3a5f] pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href="/services" className="text-white hover:text-white/80 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white/80">Data Consulting</span>
          </div>
          <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">
            Nos services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            Data Consulting
          </h1>
          <p className="text-white/70 max-w-2xl leading-relaxed">
            Dans un monde où la donnée est devenue un moteur de transformation digitale, nous aidons
            les entreprises à collecter, traiter, analyser et valoriser leurs informations pour
            booster leur compétitivité et leur capacité d&apos;innovation.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#0f172a] mb-8">Nos domaines d&apos;intervention</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-[#f8fafc] rounded-2xl p-8 border border-[#e2e8f0]">
                <h3 className="font-bold text-[#0f172a] mb-3">{s.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bénéfices */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#0f172a] mb-8">Pourquoi investir dans la data ?</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {benefices.map((b) => (
              <div key={b.title} className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#1e3a5f] rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#0f172a] mb-1">{b.title}</h3>
                  <p className="text-sm text-[#475569] leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cas pratiques */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#0f172a] mb-8">L&apos;impact concret</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {casUses.map((c) => (
              <div key={c.num} className="bg-[#1e3a5f] rounded-2xl p-8 text-white">
                <p className="text-4xl font-bold text-[#c9a84c] mb-1">{c.num}</p>
                <p className="text-sm font-semibold text-white/60 uppercase tracking-widest mb-4">{c.label}</p>
                <p className="text-sm text-white/70 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Étapes */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#0f172a] mb-8">Les étapes d&apos;une transformation réussie</h2>
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

      <RelatedServices services={[
        { title: "Process Mining", desc: "Allez plus loin en exploitant les logs de vos systèmes pour visualiser et optimiser vos processus métiers en profondeur.", href: "/services/process-mining" },
        { title: "Systèmes d'information", desc: "Une architecture SI solide est la condition pour exploiter pleinement le potentiel de vos données.", href: "/services/systemes-information" },
      ]} />

      {/* CTA */}
      <section className="bg-[#c9a84c] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Transformez vos données en levier de croissance
          </h2>
          <p className="text-white/80 mb-8">
            Le conseil en data n&apos;est plus un luxe — c&apos;est une nécessité stratégique.
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
