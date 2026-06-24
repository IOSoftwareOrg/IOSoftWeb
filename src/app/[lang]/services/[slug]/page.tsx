import { notFound } from "next/navigation";
import { hasLocale, locales, type Locale } from "@/lib/i18n";
import type { Metadata } from "next";
import Link from "next/link";
import RelatedServices from "@/components/RelatedServices";

const BASE_URL = "https://www.io-software.fr";

// Registry of all service pages
const serviceRegistry: Record<string, {
  fr: { title: string; description: string };
  en: { title: string; description: string };
}> = {
  "conseil-en-management": {
    fr: { title: "Conseil en Management", description: "Management des organisations, leadership et management interculturel." },
    en: { title: "Management Consulting", description: "Organisational management, leadership and intercultural management." },
  },
  "strategie-developpement": {
    fr: { title: "Stratégie & Développement", description: "Analyse stratégique, SWOT, BCG, PESTEL et développement basé sur la data." },
    en: { title: "Strategy & Development", description: "Strategic analysis, SWOT, BCG, PESTEL and data-driven development." },
  },
  "finance-entreprise": {
    fr: { title: "Finance d'entreprise", description: "Analyse financière, rentabilité, solvabilité et perspectives de développement." },
    en: { title: "Corporate Finance", description: "Financial analysis, profitability, solvency and development perspectives." },
  },
  "data-consulting": {
    fr: { title: "Data Consulting", description: "Transformez vos données en actifs stratégiques. Audit, architecture, analyse prédictive et IA." },
    en: { title: "Data Consulting", description: "Transform your data into strategic assets. Audit, architecture, predictive analysis and AI." },
  },
  "process-mining": {
    fr: { title: "Process Mining", description: "Cartographie et optimisation de vos processus métiers via UIPath et Celonis." },
    en: { title: "Process Mining", description: "Map and optimise your business processes using UIPath and Celonis." },
  },
  "systemes-information": {
    fr: { title: "Systèmes d'information", description: "Maintenance informatique et alignement du système d'information. MOA et MOE." },
    en: { title: "Information Systems", description: "IT maintenance and information system alignment. Business and technical project management." },
  },
  "redaction-technique": {
    fr: { title: "Rédaction technique", description: "Documentation logicielle bilingue FR/EN. Normes ISO/IEC 82079, S1000D, DITA XML." },
    en: { title: "Technical Writing", description: "Bilingual FR/EN software documentation. ISO/IEC 82079, S1000D, DITA XML standards." },
  },
  "developpement-logiciel": {
    fr: { title: "Développement logiciel", description: "Applications sur mesure, sites internet par l'IA et logiciels métier." },
    en: { title: "Software Development", description: "Custom applications, AI-powered websites and business software." },
  },
};

const relatedMap: Record<string, { fr: { title: string; desc: string; href: string }[]; en: { title: string; desc: string; href: string }[] }> = {
  "conseil-en-management": {
    fr: [{ title: "Stratégie & Développement", desc: "Définissez vos orientations stratégiques après avoir consolidé votre organisation.", href: "/fr/services/strategie-developpement" }, { title: "Finance d'entreprise", desc: "Pilotez la performance financière de votre structure.", href: "/fr/services/finance-entreprise" }],
    en: [{ title: "Strategy & Development", desc: "Set your strategic direction after consolidating your organisation.", href: "/en/services/strategie-developpement" }, { title: "Corporate Finance", desc: "Drive the financial performance of your structure.", href: "/en/services/finance-entreprise" }],
  },
  "strategie-developpement": {
    fr: [{ title: "Finance d'entreprise", desc: "Toute stratégie repose sur une analyse financière solide.", href: "/fr/services/finance-entreprise" }, { title: "Data Consulting", desc: "Enrichissez votre démarche stratégique avec des insights data.", href: "/fr/services/data-consulting" }],
    en: [{ title: "Corporate Finance", desc: "Every strategy rests on solid financial analysis.", href: "/en/services/finance-entreprise" }, { title: "Data Consulting", desc: "Enrich your strategic approach with data insights.", href: "/en/services/data-consulting" }],
  },
  "finance-entreprise": {
    fr: [{ title: "Stratégie & Développement", desc: "L'analyse financière est le socle de toute décision stratégique.", href: "/fr/services/strategie-developpement" }, { title: "Data Consulting", desc: "Transformez vos données financières en tableaux de bord actionnables.", href: "/fr/services/data-consulting" }],
    en: [{ title: "Strategy & Development", desc: "Financial analysis is the foundation of every strategic decision.", href: "/en/services/strategie-developpement" }, { title: "Data Consulting", desc: "Transform your financial data into actionable dashboards.", href: "/en/services/data-consulting" }],
  },
  "data-consulting": {
    fr: [{ title: "Process Mining", desc: "Exploitez les logs de vos systèmes pour visualiser vos processus.", href: "/fr/services/process-mining" }, { title: "Systèmes d'information", desc: "Une architecture SI solide est la condition pour exploiter vos données.", href: "/fr/services/systemes-information" }],
    en: [{ title: "Process Mining", desc: "Exploit system logs to visualise your processes.", href: "/en/services/process-mining" }, { title: "Information Systems", desc: "A solid IS architecture is the prerequisite for exploiting your data.", href: "/en/services/systemes-information" }],
  },
  "process-mining": {
    fr: [{ title: "Data Consulting", desc: "Le Process Mining génère des données précieuses à exploiter stratégiquement.", href: "/fr/services/data-consulting" }, { title: "Systèmes d'information", desc: "Alignez vos outils SI pour des analyses fiables.", href: "/fr/services/systemes-information" }],
    en: [{ title: "Data Consulting", desc: "Process Mining generates valuable data to exploit strategically.", href: "/en/services/data-consulting" }, { title: "Information Systems", desc: "Align your IS tools for reliable analysis.", href: "/en/services/systemes-information" }],
  },
  "systemes-information": {
    fr: [{ title: "Process Mining", desc: "Exploitez les logs de votre SI pour cartographier vos processus.", href: "/fr/services/process-mining" }, { title: "Développement logiciel", desc: "Complétez votre SI avec des applications sur mesure.", href: "/fr/services/developpement-logiciel" }],
    en: [{ title: "Process Mining", desc: "Exploit IS logs to map your business processes.", href: "/en/services/process-mining" }, { title: "Software Development", desc: "Complement your IS with custom applications.", href: "/en/services/developpement-logiciel" }],
  },
  "redaction-technique": {
    fr: [{ title: "Systèmes d'information", desc: "Une documentation rigoureuse s'appuie sur une architecture SI maîtrisée.", href: "/fr/services/systemes-information" }, { title: "Développement logiciel", desc: "Nous documentons les logiciels que nous développons.", href: "/fr/services/developpement-logiciel" }],
    en: [{ title: "Information Systems", desc: "Rigorous documentation relies on a mastered IS architecture.", href: "/en/services/systemes-information" }, { title: "Software Development", desc: "We document the software we develop.", href: "/en/services/developpement-logiciel" }],
  },
  "developpement-logiciel": {
    fr: [{ title: "Systèmes d'information", desc: "Assurez l'alignement entre vos outils et vos nouveaux logiciels.", href: "/fr/services/systemes-information" }, { title: "Process Mining", desc: "Analysez vos processus actuels pour concevoir des solutions adaptées.", href: "/fr/services/process-mining" }],
    en: [{ title: "Information Systems", desc: "Ensure alignment between your tools and new software.", href: "/en/services/systemes-information" }, { title: "Process Mining", desc: "Analyse your current processes to design the right solutions.", href: "/en/services/process-mining" }],
  },
};

export async function generateStaticParams() {
  return locales.flatMap((lang) =>
    Object.keys(serviceRegistry).map((slug) => ({ lang, slug }))
  );
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!hasLocale(lang) || !serviceRegistry[slug]) return {};
  const m = serviceRegistry[slug][lang as Locale];
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: `${BASE_URL}/${lang}/services/${slug}`, languages: { fr: `${BASE_URL}/fr/services/${slug}`, en: `${BASE_URL}/en/services/${slug}` } },
  };
}

const cta = {
  fr: { title: "Parlons de votre projet", desc: "Décrivez-nous votre contexte et nous vous proposerons une approche adaptée.", button: "Prendre contact →", href: "/fr/contact", back: "Services" },
  en: { title: "Let's talk about your project", desc: "Describe your context and we will propose an adapted approach.", button: "Get in touch →", href: "/en/contact", back: "Services" },
};

export default async function ServicePage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  if (!hasLocale(lang) || !serviceRegistry[slug]) notFound();

  const locale = lang as Locale;
  const service = serviceRegistry[slug][locale];
  const related = relatedMap[slug]?.[locale] ?? [];
  const d = cta[locale];

  return (
    <>
      <section className="bg-[#1e3a5f] pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href={`/${lang}/services`} className="text-white hover:text-white/80 transition-colors">{d.back}</Link>
            <span>/</span>
            <span className="text-white/80">{service.title}</span>
          </div>
          <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">
            {locale === "fr" ? "Nos services" : "Our services"}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">{service.title}</h1>
          <p className="text-white/70 max-w-2xl leading-relaxed">{service.description}</p>
        </div>
      </section>

      {related.length > 0 && <RelatedServices services={related} lang={locale} />}

      <section className="bg-[#c9a84c] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{d.title}</h2>
          <p className="text-white/80 mb-8">{d.desc}</p>
          <Link href={d.href} className="inline-block bg-white text-[#1e3a5f] font-bold px-8 py-4 rounded-md hover:bg-[#f1f5f9] transition-colors">{d.button}</Link>
        </div>
      </section>
    </>
  );
}
