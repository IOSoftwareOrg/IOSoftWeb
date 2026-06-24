import type { Metadata } from "next";
import Link from "next/link";
import RelatedServices from "@/components/RelatedServices";
import { hasLocale, locales, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

const BASE_URL = "https://www.io-software.fr";
export async function generateStaticParams() { return locales.map((lang) => ({ lang })); }

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  return {
    title: "Data Consulting",
    description: isFr ? "Transformez vos données en actifs stratégiques. Audit, architecture, analyse prédictive et IA." : "Transform your data into strategic assets. Audit, architecture, predictive analysis and AI.",
    alternates: { canonical: `${BASE_URL}/${lang}/services/data-consulting`, languages: { fr: `${BASE_URL}/fr/services/data-consulting`, en: `${BASE_URL}/en/services/data-consulting` } },
  };
}

const checkIconWhite = <svg className="w-4 h-4 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>;

const data = {
  fr: {
    label: "Nos services",
    hero: "Dans un monde où la donnée est devenue un moteur de transformation digitale, nous aidons les entreprises à collecter, traiter, analyser et valoriser leurs informations pour booster leur compétitivité et leur capacité d'innovation.",
    domainesTitle: "Nos domaines d'intervention",
    domaines: [
      { title: "Audit des données", desc: "Identifier les sources existantes (ERP, CRM, IoT, etc.), évaluer leur qualité et analyser leur pertinence pour vos objectifs métiers." },
      { title: "Architecture de données", desc: "Concevoir une infrastructure robuste et scalable pour gérer des volumes croissants de données — cloud, data lakes ou solutions hybrides." },
      { title: "Stratégie analytique et data-driven", desc: "Définir les KPIs, prioriser les cas d'usage et développer des tableaux de bord pour suivre les progrès en temps réel." },
      { title: "Analyse prédictive et IA", desc: "Tirer parti des technologies avancées pour anticiper les tendances, automatiser les décisions et personnaliser l'expérience client." },
    ],
    beneficesTitle: "Pourquoi investir dans la data ?",
    benefices: [
      { title: "Meilleure prise de décision", desc: "Les décisions data-driven réduisent l'incertitude et augmentent l'efficacité opérationnelle." },
      { title: "Réduction des coûts", desc: "Identification des inefficacités par des analyses détaillées pour optimiser les ressources." },
      { title: "Anticipation des risques", desc: "L'analyse prédictive aide à prévoir les tendances du marché et les comportements clients." },
      { title: "Conformité réglementaire", desc: "Mise en place de pratiques respectant les normes en vigueur, notamment le RGPD." },
    ],
    casTitle: "L'impact concret",
    cas: [
      { num: "−20%", label: "délais de production", desc: "Une entreprise industrielle détecte les goulets d'étranglement via des capteurs IoT et l'analyse de données." },
      { num: "+15%", label: "de ventes", desc: "Un e-commerçant personnalise ses recommandations grâce à des modèles d'apprentissage automatique." },
      { num: "−30%", label: "de fraudes", desc: "Une institution financière identifie en temps réel des transactions suspectes via des algorithmes de machine learning." },
    ],
    etapesTitle: "Les étapes d'une transformation réussie",
    etapes: [
      { num: "01", title: "Diagnostic initial", desc: "Comprendre l'état actuel : données disponibles, outils en place et objectifs stratégiques." },
      { num: "02", title: "Feuille de route", desc: "Plan aligné sur les priorités métiers, intégrant les cas d'usage à forte valeur ajoutée." },
      { num: "03", title: "Implémentation", desc: "Déploiement d'outils comme Power BI, Tableau ou plateformes cloud (AWS, Azure, Google Cloud)." },
      { num: "04", title: "Formation & adoption", desc: "Accompagnement des équipes dans la maîtrise des outils et l'intégration d'une culture data-driven." },
    ],
    related: [
      { title: "Process Mining", desc: "Allez plus loin en exploitant les logs de vos systèmes pour visualiser et optimiser vos processus métiers en profondeur.", href: "/fr/services/process-mining" },
      { title: "Systèmes d'information", desc: "Une architecture SI solide est la condition pour exploiter pleinement le potentiel de vos données.", href: "/fr/services/systemes-information" },
    ],
    ctaTitle: "Transformez vos données en levier de croissance",
    ctaDesc: "Le conseil en data n'est plus un luxe — c'est une nécessité stratégique.",
    ctaBtn: "Prendre contact →",
  },
  en: {
    label: "Our services",
    hero: "In a world where data has become a driver of digital transformation, we help companies collect, process, analyse and leverage their information to boost competitiveness and innovation capacity.",
    domainesTitle: "Our areas of intervention",
    domaines: [
      { title: "Data audit", desc: "Identify existing sources (ERP, CRM, IoT, etc.), assess their quality and analyse their relevance to your business objectives." },
      { title: "Data architecture", desc: "Design a robust and scalable infrastructure to manage growing data volumes — cloud, data lakes or hybrid solutions." },
      { title: "Analytics strategy and data-driven approach", desc: "Define KPIs, prioritise use cases and develop dashboards to track progress in real time." },
      { title: "Predictive analysis and AI", desc: "Leverage advanced technologies to anticipate trends, automate decisions and personalise the customer experience." },
    ],
    beneficesTitle: "Why invest in data?",
    benefices: [
      { title: "Better decision-making", desc: "Data-driven decisions reduce uncertainty and increase operational efficiency." },
      { title: "Cost reduction", desc: "Identification of inefficiencies through detailed analysis to optimise resources." },
      { title: "Risk anticipation", desc: "Predictive analysis helps forecast market trends and customer behaviour." },
      { title: "Regulatory compliance", desc: "Implementation of practices complying with applicable standards, including GDPR." },
    ],
    casTitle: "Concrete impact",
    cas: [
      { num: "−20%", label: "production delays", desc: "An industrial company detects bottlenecks using IoT sensors and data analysis." },
      { num: "+15%", label: "sales increase", desc: "An e-commerce company personalises its recommendations using machine learning models." },
      { num: "−30%", label: "fraud reduction", desc: "A financial institution identifies suspicious transactions in real time using machine learning algorithms." },
    ],
    etapesTitle: "Steps to a successful transformation",
    etapes: [
      { num: "01", title: "Initial diagnosis", desc: "Understand the current state: available data, tools in place and strategic objectives." },
      { num: "02", title: "Roadmap", desc: "Plan aligned with business priorities, integrating high-value use cases." },
      { num: "03", title: "Implementation", desc: "Deployment of tools like Power BI, Tableau or cloud platforms (AWS, Azure, Google Cloud)." },
      { num: "04", title: "Training & adoption", desc: "Supporting teams in mastering tools and integrating a data-driven culture." },
    ],
    related: [
      { title: "Process Mining", desc: "Go further by exploiting your system logs to visualise and optimise your business processes in depth.", href: "/en/services/process-mining" },
      { title: "Information Systems", desc: "A solid IS architecture is the prerequisite for fully exploiting your data's potential.", href: "/en/services/systemes-information" },
    ],
    ctaTitle: "Transform your data into a growth lever",
    ctaDesc: "Data consulting is no longer a luxury — it's a strategic necessity.",
    ctaBtn: "Get in touch →",
  },
};

export default async function DataConsultingPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const d = data[lang as Locale];

  return (
    <>
      <section className="bg-[#1e3a5f] pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href={`/${lang}/services`} className="text-white hover:text-white/80 transition-colors">Services</Link>
            <span>/</span><span className="text-white/80">Data Consulting</span>
          </div>
          <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">{d.label}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">Data Consulting</h1>
          <p className="text-white/70 max-w-2xl leading-relaxed">{d.hero}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#0f172a] mb-8">{d.domainesTitle}</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {d.domaines.map((s) => (
              <div key={s.title} className="bg-[#f8fafc] rounded-2xl p-8 border border-[#e2e8f0]">
                <h3 className="font-bold text-[#0f172a] mb-3">{s.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#0f172a] mb-8">{d.beneficesTitle}</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {d.benefices.map((b) => (
              <div key={b.title} className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#1e3a5f] rounded-lg flex items-center justify-center shrink-0 mt-0.5">{checkIconWhite}</div>
                <div><h3 className="font-bold text-[#0f172a] mb-1">{b.title}</h3><p className="text-sm text-[#475569] leading-relaxed">{b.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#0f172a] mb-8">{d.casTitle}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {d.cas.map((c) => (
              <div key={c.num} className="bg-[#1e3a5f] rounded-2xl p-8 text-white">
                <p className="text-4xl font-bold text-[#c9a84c] mb-1">{c.num}</p>
                <p className="text-sm font-semibold text-white/60 uppercase tracking-widest mb-4">{c.label}</p>
                <p className="text-sm text-white/70 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#0f172a] mb-8">{d.etapesTitle}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {d.etapes.map((e) => (
              <div key={e.num} className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
                <p className="text-3xl font-bold text-[#c9a84c] mb-3">{e.num}</p>
                <h3 className="font-bold text-[#0f172a] mb-2">{e.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices services={d.related} lang={lang as Locale} />

      <section className="bg-[#c9a84c] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{d.ctaTitle}</h2>
          <p className="text-white/80 mb-8">{d.ctaDesc}</p>
          <Link href={`/${lang}/contact`} className="inline-block bg-white text-[#1e3a5f] font-bold px-8 py-4 rounded-md hover:bg-[#f1f5f9] transition-colors">{d.ctaBtn}</Link>
        </div>
      </section>
    </>
  );
}
