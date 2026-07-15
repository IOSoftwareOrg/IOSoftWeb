import type { Metadata } from "next";
import Link from "next/link";
import RelatedServices from "@/components/RelatedServices";
import { ProcessMiningIllustration } from "@/components/illustrations";
import { hasLocale, locales, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

const BASE_URL = "https://www.io-software.fr";
export async function generateStaticParams() { return locales.map((lang) => ({ lang })); }

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  return {
    title: "Process Mining",
    description: isFr ? "Cartographiez et optimisez vos processus métiers grâce au Process Mining. Expertise UIPath et Celonis." : "Map and optimise your business processes with Process Mining. UIPath and Celonis expertise.",
    alternates: { canonical: `${BASE_URL}/${lang}/services/process-mining`, languages: { fr: `${BASE_URL}/fr/services/process-mining`, en: `${BASE_URL}/en/services/process-mining` } },
  };
}

const checkIcon = <svg className="w-4 h-4 text-[#c9a84c] shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>;
const checkIconWhite = <svg className="w-4 h-4 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>;

const data = {
  fr: {
    label: "Nos services",
    hero: "Le Process Mining est une approche innovante qui permet d'extraire des informations à partir des données d'événements d'une organisation pour analyser et optimiser ses processus métiers. Devenu un levier stratégique, il permet aux entreprises de maximiser leur efficacité opérationnelle en s'appuyant sur leurs données réelles.",
    illustrationAlt: "Illustration abstraite d'un flowchart de processus métier avec nœuds reliés",
    defTitle: "Qu'est-ce que le Process Mining ?",
    defText: "Le Process Mining permet de faire une cartographie détaillée des processus métiers d'une organisation en se basant sur les données brutes générées par les systèmes d'information (ERP, CRM, etc.). Il ne s'agit pas simplement de visualiser les processus, mais de les analyser pour identifier les goulots d'étranglement, les inefficacités et les risques de non-conformité.",
    etapesTitle: "Les étapes du Process Mining",
    etapes: [
      { num: "01", title: "Collecte des données", desc: "Extraction des événements et logs générés par les systèmes existants (ERP, CRM, etc.)." },
      { num: "02", title: "Modélisation des processus", desc: "Création de modèles de processus visuels à partir des données brutes." },
      { num: "03", title: "Analyse", desc: "Identification des inefficacités, des divergences et des opportunités d'amélioration." },
      { num: "04", title: "Optimisation", desc: "Mise en œuvre des recommandations pour améliorer les processus selon les analyses." },
    ],
    toolsTitle: "UIPath et Celonis",
    toolsIntroFr: true,
    uipathTitle: "UIPath — Automatisation & Process Mining",
    uipath: [
      { title: "Analyse des processus", desc: "Cartographie des processus actuels pour comprendre comment les robots interagissent et identifier où l'automatisation a le plus d'impact." },
      { title: "Optimisation avec l'IA", desc: "L'intelligence artificielle intégrée recommande des optimisations spécifiques, réduisant le temps d'exécution et augmentant l'efficacité." },
      { title: "Visualisation en continu", desc: "Outils de suivi des améliorations en temps réel pour des décisions basées sur des données concrètes." },
    ],
    celonisTitle: "Celonis — Leader en Process Mining",
    celonis: [
      { title: "Discovery des processus", desc: "Découverte des processus actuels à partir des données SI, offrant une visibilité totale sur l'ensemble des workflows." },
      { title: "Optimisation et prédiction", desc: "Algorithmes avancés pour identifier les goulots d'étranglement et fournir des recommandations concrètes avec des capacités prédictives." },
      { title: "Intégration ERP", desc: "Intégration native avec les systèmes ERP populaires (SAP notamment) pour une analyse fluide dans des environnements complexes." },
    ],
    avantagesTitle: "Les avantages du Process Mining",
    avantages: [
      { title: "Vision claire des processus", desc: "Visualisation en temps réel des flux de travail sans dépendre de modèles théoriques. Détection rapide des écarts par rapport aux standards." },
      { title: "Amélioration continue", desc: "Ajustement dynamique des processus grâce à l'analyse continue, pour s'adapter aux besoins du marché avec agilité." },
      { title: "Réduction des coûts", desc: "Élimination des inefficacités et automatisation des tâches répétitives pour réduire les coûts d'exploitation et améliorer la productivité." },
      { title: "Décisions fondées sur les données", desc: "Des informations précises issues des systèmes réels pour des décisions éclairées, non basées sur des suppositions." },
    ],
    related: [
      { title: "Data Consulting", desc: "Le Process Mining génère une masse de données précieuses. Exploitez-les avec une stratégie data pour maximiser leur valeur.", href: "/fr/services/data-consulting" },
      { title: "Systèmes d'information", desc: "L'efficacité de votre Process Mining dépend de la qualité de votre SI. Alignez vos outils pour des analyses fiables.", href: "/fr/services/systemes-information" },
    ],
    ctaTitle: "Optimisez vos processus avec le Process Mining",
    ctaDesc: "Découvrez comment UIPath et Celonis peuvent transformer votre efficacité opérationnelle.",
    ctaBtn: "Prendre contact →",
  },
  en: {
    label: "Our services",
    hero: "Process Mining is an innovative approach that extracts information from an organisation's event data to analyse and optimise business processes. It has become a strategic lever allowing companies to maximise operational efficiency based on their real data.",
    illustrationAlt: "Abstract illustration of a business process flowchart with connected nodes",
    defTitle: "What is Process Mining?",
    defText: "Process Mining enables detailed mapping of an organisation's business processes based on raw data generated by information systems (ERP, CRM, etc.). It is not simply about visualising processes, but about analysing them to identify bottlenecks, inefficiencies and non-compliance risks.",
    etapesTitle: "The Process Mining steps",
    etapes: [
      { num: "01", title: "Data collection", desc: "Extraction of events and logs generated by existing systems (ERP, CRM, etc.)." },
      { num: "02", title: "Process modelling", desc: "Creation of visual process models from raw data." },
      { num: "03", title: "Analysis", desc: "Identification of inefficiencies, deviations and improvement opportunities." },
      { num: "04", title: "Optimisation", desc: "Implementation of recommendations to improve processes based on analysis." },
    ],
    toolsTitle: "UIPath and Celonis",
    toolsIntroFr: false,
    uipathTitle: "UIPath — Automation & Process Mining",
    uipath: [
      { title: "Process analysis", desc: "Mapping current processes to understand how robots interact and identify where automation has the most impact." },
      { title: "AI-powered optimisation", desc: "Integrated artificial intelligence recommends specific optimisations, reducing execution time and increasing efficiency." },
      { title: "Continuous visualisation", desc: "Real-time improvement tracking tools for decisions based on concrete data." },
    ],
    celonisTitle: "Celonis — Process Mining Leader",
    celonis: [
      { title: "Process discovery", desc: "Discovery of current processes from IS data, providing full visibility across all workflows." },
      { title: "Optimisation and prediction", desc: "Advanced algorithms to identify bottlenecks and provide concrete recommendations with predictive capabilities." },
      { title: "ERP integration", desc: "Native integration with popular ERP systems (especially SAP) for smooth analysis in complex environments." },
    ],
    avantagesTitle: "The advantages of Process Mining",
    avantages: [
      { title: "Clear view of processes", desc: "Real-time visualisation of workflows without relying on theoretical models. Rapid detection of deviations from standards." },
      { title: "Continuous improvement", desc: "Dynamic process adjustment through continuous analysis, adapting to market needs with agility." },
      { title: "Cost reduction", desc: "Elimination of inefficiencies and automation of repetitive tasks to reduce operating costs and improve productivity." },
      { title: "Data-driven decisions", desc: "Precise information from real systems for informed decisions, not based on assumptions." },
    ],
    related: [
      { title: "Data Consulting", desc: "Process Mining generates valuable data. Leverage it with a data strategy to maximise its value.", href: "/en/services/data-consulting" },
      { title: "Information Systems", desc: "Process Mining effectiveness depends on IS quality. Align your tools for reliable analysis.", href: "/en/services/systemes-information" },
    ],
    ctaTitle: "Optimise your processes with Process Mining",
    ctaDesc: "Discover how UIPath and Celonis can transform your operational efficiency.",
    ctaBtn: "Get in touch →",
  },
};

export default async function ProcessMiningPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const d = data[lang as Locale];
  const isFr = lang === "fr";

  return (
    <>
      <section className="bg-[#1e3a5f] pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.3fr_1fr] md:items-center gap-10">
          <div>
            <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
              <Link href={`/${lang}/services`} className="text-white hover:text-white/80 transition-colors">Services</Link>
              <span>/</span><span className="text-white/80">Process Mining</span>
            </div>
            <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">{d.label}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">Process Mining</h1>
            <p className="text-white/70 max-w-2xl leading-relaxed">{d.hero}</p>
          </div>
          <ProcessMiningIllustration className="hidden md:block w-full h-auto" label={d.illustrationAlt} />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#0f172a] mb-4">{d.defTitle}</h2>
          <p className="text-[#475569] leading-relaxed max-w-3xl">{d.defText}</p>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#0f172a] mb-8">{d.etapesTitle}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {d.etapes.map((e) => (
              <div key={e.num} className="bg-[#f8fafc] rounded-sm p-6 border border-[#e2e8f0]">
                <p className="text-3xl font-bold text-[#c9a84c] mb-3">{e.num}</p>
                <h3 className="font-bold text-[#0f172a] mb-2">{e.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#0f172a] mb-2">{d.toolsTitle}</h2>
          <p className="text-[#475569] mb-10">
            {isFr ? (
              <>Des leaders reconnus dans le domaine du Process Mining —{" "}<a href="https://www.uipath.com/fr" target="_blank" rel="noopener noreferrer" className="text-[#1e3a5f] font-semibold hover:text-[#c9a84c] transition-colors">UIPath</a>{" "}et{" "}<a href="https://www.celonis.com/fr" target="_blank" rel="noopener noreferrer" className="text-[#1e3a5f] font-semibold hover:text-[#c9a84c] transition-colors">Celonis</a>.</>
            ) : (
              <>Recognised leaders in Process Mining —{" "}<a href="https://www.uipath.com" target="_blank" rel="noopener noreferrer" className="text-[#1e3a5f] font-semibold hover:text-[#c9a84c] transition-colors">UIPath</a>{" "}and{" "}<a href="https://www.celonis.com" target="_blank" rel="noopener noreferrer" className="text-[#1e3a5f] font-semibold hover:text-[#c9a84c] transition-colors">Celonis</a>.</>
            )}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-sm p-8 border border-[#e2e8f0]">
              <h3 className="text-xl font-bold text-[#0f172a] mb-6 pb-4 border-b border-[#e2e8f0]">{d.uipathTitle}</h3>
              <ul className="space-y-4">
                {d.uipath.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">{checkIcon}<span className="text-sm text-[#475569] leading-relaxed"><strong className="text-[#0f172a]">{item.title} : </strong>{item.desc}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-sm p-8 border border-[#e2e8f0]">
              <h3 className="text-xl font-bold text-[#0f172a] mb-6 pb-4 border-b border-[#e2e8f0]">{d.celonisTitle}</h3>
              <ul className="space-y-4">
                {d.celonis.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">{checkIcon}<span className="text-sm text-[#475569] leading-relaxed"><strong className="text-[#0f172a]">{item.title} : </strong>{item.desc}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#0f172a] mb-8">{d.avantagesTitle}</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {d.avantages.map((a) => (
              <div key={a.title} className="flex items-start gap-4 p-6 bg-[#f8fafc] rounded-sm border border-[#e2e8f0]">
                <div className="w-8 h-8 bg-[#1e3a5f] rounded-lg flex items-center justify-center shrink-0">{checkIconWhite}</div>
                <div><h3 className="font-bold text-[#0f172a] mb-1">{a.title}</h3><p className="text-sm text-[#475569] leading-relaxed">{a.desc}</p></div>
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
          <Link href={`/${lang}/contact?subject=${encodeURIComponent("Process Mining")}`} className="inline-block bg-white text-[#1e3a5f] font-bold px-8 py-4 rounded-md hover:bg-[#f1f5f9] transition-colors">{d.ctaBtn}</Link>
        </div>
      </section>
    </>
  );
}
