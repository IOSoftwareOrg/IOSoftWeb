import type { Metadata } from "next";
import Expertise from "@/components/Expertise";
import { hasLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

const BASE_URL = "https://www.io-software.fr";

const meta = {
  fr: { title: "Expertise", description: "30 ans d'expérience en conseil. Banque, Luxe, Télécoms, Aéronautique — une vision transversale au service de votre croissance." },
  en: { title: "Expertise", description: "30 years of consulting experience. Banking, Luxury, Telecoms, Aeronautics — a transversal vision at the service of your growth." },
};

const hero = {
  fr: { label: "Notre ADN", title: "30 ans d'expertise", subtitle: "IO Software accompagne entreprises françaises et internationales avec une vision transversale et des compétences éprouvées dans des secteurs exigeants." },
  en: { label: "Our DNA", title: "30 years of expertise", subtitle: "IO Software supports French and international companies with a transversal vision and proven expertise in demanding sectors." },
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return { title: meta[lang].title, description: meta[lang].description, alternates: { canonical: `${BASE_URL}/${lang}/expertise`, languages: { fr: `${BASE_URL}/fr/expertise`, en: `${BASE_URL}/en/expertise` } } };
}

export default async function ExpertisePage({ params }: { params: Promise<{ lang: string }> }) {
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
      <Expertise hideHeader lang={lang as Locale} />
    </>
  );
}
