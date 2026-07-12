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
    title: isFr ? "Finance d'entreprise" : "Corporate Finance",
    description: isFr ? "Analyse financière complète : rentabilité, solvabilité et perspectives de développement." : "Complete financial analysis: profitability, solvency and development perspectives.",
    alternates: { canonical: `${BASE_URL}/${lang}/services/finance-entreprise`, languages: { fr: `${BASE_URL}/fr/services/finance-entreprise`, en: `${BASE_URL}/en/services/finance-entreprise` } },
  };
}

const checkSvg = <svg className="w-4 h-4 text-[#c9a84c] shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>;
const checkSvgLg = <svg className="w-5 h-5 text-[#c9a84c] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>;

const data = {
  fr: {
    label: "Nos services", title: "Finance d'entreprise",
    hero: "La responsabilité du chef d'entreprise est d'assurer une gestion saine des finances de sa société et d'anticiper les investissements futurs pour mener à bien ses projets stratégiques. La génération de richesse nécessite des investissements qui doivent être financés et suffisamment rentables.",
    pillars: [
      { title: "Rentabilité", desc: "Mesurer la capacité de l'entreprise à générer des bénéfices par rapport aux ressources engagées." },
      { title: "Solvabilité", desc: "Évaluer la capacité à honorer ses engagements financiers à court, moyen et long terme." },
      { title: "Perspectives", desc: "Identifier les leviers de développement et les risques pour construire une stratégie solide." },
    ],
    methodTitle: "Notre méthodologie",
    etapes: [
      { num: "01", title: "Diagnostic économique", desc: "Analyse de l'environnement sectoriel, du marché visé, du positionnement concurrentiel, de l'organisation interne et de la stratégie d'évolution." },
      { num: "02", title: "Diagnostic financier", desc: "Étude de plusieurs exercices comptables pour mettre en évidence la formation du résultat, la création de valeur et les indicateurs clés de performance." },
      { num: "03", title: "Analyse des ratios", desc: "Sélection des ratios les plus pertinents au regard de votre activité pour analyser la rentabilité, la gestion et la structure financière." },
      { num: "04", title: "Conclusions & recommandations", desc: "Remise d'un rapport clair sur la solvabilité, la rentabilité et les perspectives d'évolution de votre entreprise." },
    ],
    indicTitle: "Indicateurs analysés",
    indicIntro: "Il existe de nombreux ratios qui servent à analyser la rentabilité, la gestion et la structure financière de l'entreprise. Nous sélectionnons les plus pertinents en corrélation directe avec votre activité.",
    indicateurs: ["Évolution du chiffre d'affaires", "Évolution des marges commerciales", "Seuil de rentabilité", "Valeur ajoutée", "Valeur des immobilisations", "Besoin en fonds de roulement (BFR)", "Capacité d'autofinancement (CAF)", "Politique de financement (dettes court, moyen, long terme)", "Rentabilité (EBE, comparaison des taux dégagés avec les taux exigés)"],
    youGetLabel: "Ce que vous obtenez",
    youGet: ["Une vision claire de la santé financière de votre entreprise", "Un diagnostic sur plusieurs exercices pour identifier les tendances", "Des ratios sélectionnés selon votre secteur et votre activité", "Des conclusions actionnables sur la rentabilité et la solvabilité", "Des recommandations concrètes pour vos décisions stratégiques"],
    related: [
      { title: "Stratégie & Développement", desc: "L'analyse financière est le socle de toute décision stratégique. Construisez votre feuille de route sur des bases solides.", href: "/fr/services/strategie-developpement" },
      { title: "Data Consulting", desc: "Transformez vos données financières en tableaux de bord actionnables pour un pilotage en temps réel.", href: "/fr/services/data-consulting" },
    ],
    ctaTitle: "Parlons de la santé financière de votre entreprise",
    ctaDesc: "Un diagnostic financier rigoureux est le point de départ de toute décision stratégique éclairée.",
    ctaBtn: "Prendre contact →",
  },
  en: {
    label: "Our services", title: "Corporate Finance",
    hero: "A business leader's responsibility is to ensure sound financial management and anticipate future investments to achieve strategic goals. Wealth creation requires investments that must be financed and sufficiently profitable.",
    pillars: [
      { title: "Profitability", desc: "Measure the company's capacity to generate profits relative to resources engaged." },
      { title: "Solvency", desc: "Assess the capacity to meet financial obligations in the short, medium and long term." },
      { title: "Prospects", desc: "Identify growth levers and risks to build a solid strategy." },
    ],
    methodTitle: "Our methodology",
    etapes: [
      { num: "01", title: "Economic diagnosis", desc: "Analysis of the sector environment, target market, competitive positioning, internal organisation and growth strategy." },
      { num: "02", title: "Financial diagnosis", desc: "Study across multiple financial years to highlight result formation, value creation and key performance indicators." },
      { num: "03", title: "Ratio analysis", desc: "Selection of the most relevant ratios for your activity to analyse profitability, management and financial structure." },
      { num: "04", title: "Conclusions & recommendations", desc: "Delivery of a clear report on your company's solvency, profitability and development perspectives." },
    ],
    indicTitle: "Analysed indicators",
    indicIntro: "There are many ratios used to analyse profitability, management and financial structure. We select the most relevant ones directly correlated with your activity.",
    indicateurs: ["Revenue evolution", "Commercial margin evolution", "Break-even point", "Value added", "Fixed assets value", "Working capital requirement (WCR)", "Self-financing capacity (SFC)", "Financing policy (short, medium, long-term debt)", "Profitability (EBITDA vs required rates)"],
    youGetLabel: "What you get",
    youGet: ["A clear view of your company's financial health", "A diagnosis across multiple years to identify trends", "Ratios selected according to your sector and activity", "Actionable conclusions on profitability and solvency", "Concrete recommendations for your strategic decisions"],
    related: [
      { title: "Strategy & Development", desc: "Financial analysis is the foundation of every strategic decision. Build your roadmap on solid ground.", href: "/en/services/strategie-developpement" },
      { title: "Data Consulting", desc: "Transform your financial data into actionable dashboards for real-time management.", href: "/en/services/data-consulting" },
    ],
    ctaTitle: "Let's talk about your company's financial health",
    ctaDesc: "A rigorous financial diagnosis is the starting point for every informed strategic decision.",
    ctaBtn: "Get in touch →",
  },
};

export default async function FinancePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const d = data[lang as Locale];

  return (
    <>
      <section className="bg-[#1e3a5f] pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href={`/${lang}/services`} className="text-white hover:text-white/80 transition-colors">Services</Link>
            <span>/</span><span className="text-white/80">{d.title}</span>
          </div>
          <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">{d.label}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">{d.title}</h1>
          <p className="text-white/70 max-w-2xl leading-relaxed">{d.hero}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {d.pillars.map((item) => (
              <div key={item.title} className="text-center p-8 bg-[#f8fafc] rounded-sm border border-[#e2e8f0]">
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">{item.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#0f172a] mb-8">{d.methodTitle}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {d.etapes.map((e) => (
              <div key={e.num} className="bg-white rounded-sm p-6 border border-[#e2e8f0]">
                <p className="text-3xl font-bold text-[#c9a84c] mb-3">{e.num}</p>
                <h3 className="font-bold text-[#0f172a] mb-2">{e.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">{d.indicTitle}</h2>
              <p className="text-[#475569] leading-relaxed mb-8">{d.indicIntro}</p>
              <ul className="space-y-3">
                {d.indicateurs.map((ind) => (
                  <li key={ind} className="flex items-start gap-3">{checkSvg}<span className="text-sm text-[#475569]">{ind}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-[#1e3a5f] rounded-sm p-8 text-white">
              <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-6">{d.youGetLabel}</p>
              <ul className="space-y-5">
                {d.youGet.map((item) => (
                  <li key={item} className="flex items-start gap-3">{checkSvgLg}<span className="text-white/80 text-sm">{item}</span></li>
                ))}
              </ul>
            </div>
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
