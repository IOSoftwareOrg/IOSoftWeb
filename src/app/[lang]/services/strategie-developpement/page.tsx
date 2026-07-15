import type { Metadata } from "next";
import Link from "next/link";
import RelatedServices from "@/components/RelatedServices";
import { StrategyIllustration } from "@/components/illustrations";
import { hasLocale, locales, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

const BASE_URL = "https://www.io-software.fr";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  return {
    title: isFr ? "Stratégie & Développement" : "Strategy & Development",
    description: isFr
      ? "Définissez l'avenir de votre entreprise avec une démarche stratégique rigoureuse. Segmentation, analyse concurrentielle, avantage compétitif et développement basé sur la data."
      : "Define your company's future with a rigorous strategic approach. Segmentation, competitive analysis, sustainable competitive advantage and data-driven development.",
    alternates: { canonical: `${BASE_URL}/${lang}/services/strategie-developpement`, languages: { fr: `${BASE_URL}/fr/services/strategie-developpement`, en: `${BASE_URL}/en/services/strategie-developpement` } },
  };
}

const data = {
  fr: {
    label: "Nos services", title: "Stratégie & Développement",
    quote: "« Connaissez l'ennemi et connaissez vous vous-même ; en cent batailles vous ne courrez jamais aucun danger. »",
    quoteAuthor: "— Sun Tzu, L'Art de la guerre",
    illustrationAlt: "Illustration abstraite d'une trajectoire de croissance ascendante avec repère de cap stratégique",
    intro1: "Dès le milieu des années 1960, de nombreux modèles d'analyse stratégique sont venus des États-Unis (LCAG, SWOT, etc.). Depuis, la réflexion stratégique n'a cessé d'évoluer, de s'affiner et de s'enrichir de nouvelles méthodes innovantes.",
    intro2: "Notre activité de consulting en stratégie s'appuie sur une démarche cohérente inspirée des dernières méthodes d'analyse stratégique, enrichie par la puissance de la donnée. À l'issue de notre analyse, vous aurez une vision claire de l'avenir de votre entreprise — croissance interne, croissance externe, relocalisation, évolution de gamme.",
    etapesTitle: "Notre démarche en 5 étapes",
    etapes: [
      { num: "01", title: "Segmentation stratégique", desc: "Identification et délimitation des domaines d'activité stratégiques de votre entreprise." },
      { num: "02", title: "Analyse concurrentielle", desc: "Étude approfondie de chacun de vos domaines d'activité face à la concurrence." },
      { num: "03", title: "Avantage compétitif", desc: "Construction d'un avantage compétitif durable et défendable dans la durée." },
      { num: "04", title: "Nouvelles voies", desc: "Identification de nouvelles opportunités de développement stratégique." },
      { num: "05", title: "Portefeuille d'activités", desc: "Management d'un portefeuille diversifié d'activités pour optimiser la création de valeur." },
    ],
    outilsTitle: "Le rôle central de la data dans la stratégie",
    outilsIntro: "Les données internes (ventes, performances produits, satisfaction client) et externes (marché, concurrence, évolutions réglementaires) sont essentielles pour définir une stratégie pertinente.",
    outils: [
      { title: "Analyse SWOT", sub: "Forces, Faiblesses, Opportunités, Menaces", desc: "Avec l'intégration de la data, l'analyse SWOT devient plus précise : performances financières, satisfaction client, tendances de marché et identification des menaces concurrentielles." },
      { title: "Matrice BCG", sub: "Gestion du portefeuille produits", desc: "Catégorisation de vos produits (Stars, Vaches à lait, Dilemmes, Poids morts) à partir des données de ventes, marges et parts de marché. Ajustement des investissements selon les projections IA." },
      { title: "Analyse PESTEL", sub: "Anticiper l'environnement", desc: "Surveillance des évolutions politiques, économiques, socioculturelles, technologiques, environnementales et légales via des tableaux de bord alimentés en temps réel." },
      { title: "KPI Data-Driven", sub: "Pilotage par la performance", desc: "Identification d'indicateurs clés de performance basés sur des analyses précises, suivis via des outils comme Tableau ou Power BI pour des décisions fondées sur les données." },
    ],
    convictionLabel: "Notre conviction",
    conviction: "Dans un monde en perpétuelle évolution, il est vital d'avoir une vision claire du futur.",
    convictionDesc: "Nous intégrons la donnée dans l'ensemble de nos démarches stratégiques — optimisation des coûts, développement commercial, amélioration des relations client — pour faire de votre stratégie un levier de transformation durable.",
    related: [
      { title: "Finance d'entreprise", desc: "Toute stratégie repose sur une analyse financière solide. Mesurez la rentabilité et la solvabilité de votre structure.", href: "/fr/services/finance-entreprise" },
      { title: "Data Consulting", desc: "Enrichissez votre démarche stratégique avec des insights data pour des décisions fondées sur les faits.", href: "/fr/services/data-consulting" },
    ],
    ctaTitle: "Définissons ensemble votre stratégie d'entreprise",
    ctaDesc: "Chaque entreprise est unique. Décrivez-nous votre contexte et construisons ensemble votre feuille de route.",
    ctaBtn: "Prendre contact →",
  },
  en: {
    label: "Our services", title: "Strategy & Development",
    quote: '"Know the enemy and know yourself; in a hundred battles you will never be in peril."',
    quoteAuthor: "— Sun Tzu, The Art of War",
    illustrationAlt: "Abstract illustration of an ascending growth trajectory with a strategic compass marker",
    intro1: "Since the mid-1960s, many strategic analysis models have emerged from the United States (LCAG, SWOT, etc.). Since then, strategic thinking has continued to evolve, be refined and be enriched by new innovative methods.",
    intro2: "Our strategy consulting approach is built on a coherent methodology inspired by the latest strategic analysis methods, enriched by the power of data. By the end of our analysis, you will have a clear vision of your company's future — internal growth, external growth, relocation, product line evolution.",
    etapesTitle: "Our 5-step approach",
    etapes: [
      { num: "01", title: "Strategic segmentation", desc: "Identification and definition of your company's strategic business areas." },
      { num: "02", title: "Competitive analysis", desc: "In-depth study of each of your business areas against the competition." },
      { num: "03", title: "Competitive advantage", desc: "Building a sustainable and defensible competitive advantage." },
      { num: "04", title: "New pathways", desc: "Identification of new strategic development opportunities." },
      { num: "05", title: "Activity portfolio", desc: "Management of a diversified portfolio of activities to optimise value creation." },
    ],
    outilsTitle: "The central role of data in strategy",
    outilsIntro: "Internal data (sales, product performance, customer satisfaction) and external data (market, competition, regulatory changes) are essential for defining a relevant strategy.",
    outils: [
      { title: "SWOT Analysis", sub: "Strengths, Weaknesses, Opportunities, Threats", desc: "With data integration, SWOT analysis becomes more precise: financial performance, customer satisfaction, market trends and competitive threat identification." },
      { title: "BCG Matrix", sub: "Product portfolio management", desc: "Categorise your products (Stars, Cash Cows, Dilemmas, Dogs) based on sales data, margins and market share. Adjust investments according to AI projections." },
      { title: "PESTEL Analysis", sub: "Anticipating the environment", desc: "Monitor political, economic, sociocultural, technological, environmental and legal developments via real-time dashboards." },
      { title: "Data-Driven KPIs", sub: "Performance-based management", desc: "Identify key performance indicators based on precise analysis, tracked via tools like Tableau or Power BI for data-driven decisions." },
    ],
    convictionLabel: "Our conviction",
    conviction: "In a perpetually evolving world, having a clear vision of the future is vital.",
    convictionDesc: "We integrate data into all our strategic approaches — cost optimisation, business development, customer relationship improvement — to make your strategy a lever for lasting transformation.",
    related: [
      { title: "Corporate Finance", desc: "Every strategy rests on solid financial analysis. Measure your structure's profitability and solvency.", href: "/en/services/finance-entreprise" },
      { title: "Data Consulting", desc: "Enrich your strategic approach with data insights for fact-based decisions.", href: "/en/services/data-consulting" },
    ],
    ctaTitle: "Let's define your business strategy together",
    ctaDesc: "Every company is unique. Describe your context and let's build your roadmap together.",
    ctaBtn: "Get in touch →",
  },
};

export default async function StrategiePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const d = data[lang as Locale];

  return (
    <>
      <section className="bg-[#1e3a5f] pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.3fr_1fr] md:items-center gap-10">
          <div>
            <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
              <Link href={`/${lang}/services`} className="text-white hover:text-white/80 transition-colors">Services</Link>
              <span>/</span><span className="text-white/80">{d.title}</span>
            </div>
            <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">{d.label}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">{d.title}</h1>
            <blockquote className="border-l-2 border-[#c9a84c] pl-6 text-white/70 italic max-w-2xl leading-relaxed">
              {d.quote}
              <footer className="mt-2 text-white/40 not-italic text-sm">{d.quoteAuthor}</footer>
            </blockquote>
          </div>
          <StrategyIllustration className="hidden md:block w-full h-auto" label={d.illustrationAlt} />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#475569] leading-relaxed max-w-3xl text-lg mb-6">{d.intro1}</p>
          <p className="text-[#475569] leading-relaxed max-w-3xl">{d.intro2}</p>
        </div>
      </section>

      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#0f172a] mb-8">{d.etapesTitle}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {d.etapes.map((e) => (
              <div key={e.num} className="bg-white rounded-sm p-6 border border-[#e2e8f0]">
                <p className="text-3xl font-bold text-[#c9a84c] mb-3">{e.num}</p>
                <h3 className="font-bold text-[#0f172a] mb-2 text-sm">{e.title}</h3>
                <p className="text-xs text-[#475569] leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#0f172a] mb-4">{d.outilsTitle}</h2>
          <p className="text-[#475569] leading-relaxed max-w-3xl mb-12">{d.outilsIntro}</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {d.outils.map((o) => (
              <div key={o.title} className="bg-[#f8fafc] rounded-sm p-8 border border-[#e2e8f0]">
                <h3 className="font-bold text-[#0f172a] mb-1">{o.title}</h3>
                <p className="text-xs text-[#c9a84c] font-semibold uppercase tracking-widest mb-4">{o.sub}</p>
                <p className="text-sm text-[#475569] leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1e3a5f]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-4">{d.convictionLabel}</p>
          <p className="text-2xl font-bold text-white mb-6 leading-relaxed">{d.conviction}</p>
          <p className="text-white/60 leading-relaxed max-w-2xl mx-auto">{d.convictionDesc}</p>
        </div>
      </section>

      <RelatedServices services={d.related} lang={lang as Locale} />

      <section className="bg-[#c9a84c] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{d.ctaTitle}</h2>
          <p className="text-white/80 mb-8">{d.ctaDesc}</p>
          <Link href={`/${lang}/contact?subject=${encodeURIComponent(d.title)}`} className="inline-block bg-white text-[#1e3a5f] font-bold px-8 py-4 rounded-md hover:bg-[#f1f5f9] transition-colors">{d.ctaBtn}</Link>
        </div>
      </section>
    </>
  );
}
