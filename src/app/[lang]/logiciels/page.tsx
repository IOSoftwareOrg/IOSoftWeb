import type { Metadata } from "next";
import Logiciels from "@/components/Logiciels";
import { hasLocale, type Locale } from "@/lib/i18n";
import { logicielsSegment } from "@/lib/routes";
import { notFound } from "next/navigation";

const BASE_URL = "https://www.io-software.fr";

const meta = {
  fr: { title: "Logiciels", description: "IO Software éditeur de logiciels métier : FinAnalyzer, ProcessMap. Solutions sur mesure pour vos besoins spécifiques." },
  en: { title: "Software", description: "IO Software business software publisher: FinAnalyzer, ProcessMap. Custom solutions for your specific needs." },
};

const hero = {
  fr: { label: "Éditeur logiciel", title: "Nos solutions logicielles", subtitle: "Des logiciels métier conçus pour répondre aux besoins spécifiques des entreprises, de la finance à l'analyse de processus." },
  en: { label: "Software publisher", title: "Our software solutions", subtitle: "Business software designed to meet the specific needs of companies, from finance to process analysis." },
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return {
    title: meta[lang].title,
    description: meta[lang].description,
    alternates: {
      canonical: `${BASE_URL}/${lang}/${logicielsSegment(lang)}`,
      languages: { fr: `${BASE_URL}/fr/logiciels`, en: `${BASE_URL}/en/software` },
    },
  };
}

export default async function LogicielsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const d = hero[lang as Locale];

  return (
    <>
      <section className="bg-[#1e3a5f] pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">{d.label}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3">{d.title}</h1>
          <p className="text-white/70 mt-4 max-w-xl">{d.subtitle}</p>
        </div>
      </section>
      <Logiciels hideHeader lang={lang as Locale} />
    </>
  );
}
