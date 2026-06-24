import type { Metadata } from "next";
import Link from "next/link";
import RelatedServices from "@/components/RelatedServices";
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
    title: isFr ? "Conseil en Management" : "Management Consulting",
    description: isFr
      ? "Optimisez vos performances opérationnelles avec nos experts en management des organisations, leadership et management interculturel."
      : "Optimise your operational performance with our experts in organisational management, leadership and intercultural management.",
    alternates: { canonical: `${BASE_URL}/${lang}/services/conseil-en-management`, languages: { fr: `${BASE_URL}/fr/services/conseil-en-management`, en: `${BASE_URL}/en/services/conseil-en-management` } },
  };
}

const checkIcon = (
  <svg className="w-4 h-4 text-[#c9a84c] shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const data = {
  fr: {
    label: "Nos services",
    title: "Conseil en Management",
    hero: "Notre activité de conseil en management vise à optimiser les performances opérationnelles de votre structure. Que vous réunissiez deux sites, ouvriez une succursale à l'étranger ou gériez des problématiques comportementales, nous vous apportons les meilleures pratiques issues du monde anglo-saxon pour minimiser les risques d'échec.",
    intro: "Il s'agit d'identifier les traits de caractère des populations, de repérer les leaders sur lesquels vous pourrez vous appuyer, de contourner les jeux de pouvoir individuels, d'identifier les détenteurs d'influence — et parfois de définir une nouvelle culture d'entreprise et d'y faire adhérer vos équipes.",
    sections: [
      {
        title: "Management des organisations et des comportements",
        items: ["Définition de la culture d'entreprise", "Adaptation de l'organisation au sein de la structure", "Identification des jeux individuels : jeux d'alliance et de pouvoir", "Gestion du changement avec identification des leaders : traits de caractères et caractéristiques émotionnelles"],
      },
      {
        title: "Développer votre leadership",
        items: ["Participation à la manière de vivre des collaborateurs", "Compréhension mutuelle", "Éviter l'excès de stress", "Comment agir face à un « évitant » ?", "Comment agir face à un « histrionique » ?"],
      },
      {
        title: "Management interculturel",
        items: ["Identification des groupes culturels", "Définition des traits de caractères types des populations visées", "Gestion de l'expatriation (US, Europe, Asie)"],
      },
    ],
    related: [
      { title: "Stratégie & Développement", desc: "Une fois votre organisation consolidée, définissez les orientations stratégiques pour accélérer votre croissance.", href: "/fr/services/strategie-developpement" },
      { title: "Finance d'entreprise", desc: "Pilotez la performance financière de votre structure avec rigueur pour soutenir vos décisions managériales.", href: "/fr/services/finance-entreprise" },
    ],
    ctaTitle: "Parlons de votre projet de management",
    ctaDesc: "Chaque organisation est unique. Décrivez-nous votre contexte et nous vous proposerons une approche adaptée.",
    ctaBtn: "Prendre contact →",
  },
  en: {
    label: "Our services",
    title: "Management Consulting",
    hero: "Our management consulting activity aims to optimise the operational performance of your organisation. Whether you are merging two sites, opening a branch abroad, or managing behavioural issues, we bring you the best practices from the Anglo-Saxon world to minimise the risks of failure.",
    intro: "The goal is to identify the character traits of your teams, spot the leaders you can rely on, navigate individual power games, identify key influencers — and sometimes define a new corporate culture that your employees genuinely embrace.",
    sections: [
      {
        title: "Organisational & behavioural management",
        items: ["Defining corporate culture", "Adapting the organisation within the structure", "Identifying individual games: alliances and power plays", "Change management with leader identification: character traits and emotional characteristics"],
      },
      {
        title: "Developing your leadership",
        items: ["Understanding how your teams live and work", "Mutual understanding", "Avoiding excessive stress", "How to manage an 'avoidant' personality?", "How to manage a 'histrionic' personality?"],
      },
      {
        title: "Intercultural management",
        items: ["Identifying cultural groups", "Defining typical character traits of target populations", "Managing expatriation (US, Europe, Asia)"],
      },
    ],
    related: [
      { title: "Strategy & Development", desc: "Once your organisation is consolidated, define your strategic direction to accelerate growth.", href: "/en/services/strategie-developpement" },
      { title: "Corporate Finance", desc: "Drive the financial performance of your structure with rigour to support your management decisions.", href: "/en/services/finance-entreprise" },
    ],
    ctaTitle: "Let's talk about your management project",
    ctaDesc: "Every organisation is unique. Describe your context and we will propose an adapted approach.",
    ctaBtn: "Get in touch →",
  },
};

export default async function ConseilManagementPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const d = data[lang as Locale];

  return (
    <>
      <section className="bg-[#1e3a5f] pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href={`/${lang}/services`} className="text-white hover:text-white/80 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white/80">{d.title}</span>
          </div>
          <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">{d.label}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">{d.title}</h1>
          <p className="text-white/70 max-w-2xl leading-relaxed">{d.hero}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#475569] leading-relaxed max-w-3xl text-lg">{d.intro}</p>
        </div>
      </section>

      <section className="pb-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {d.sections.map((s) => (
              <div key={s.title} className="bg-[#f8fafc] rounded-2xl p-8 border border-[#e2e8f0]">
                <h2 className="text-lg font-bold text-[#0f172a] mb-6 pb-4 border-b border-[#e2e8f0]">{s.title}</h2>
                <ul className="space-y-3">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">{checkIcon}<span className="text-sm text-[#475569] leading-relaxed">{item}</span></li>
                  ))}
                </ul>
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
