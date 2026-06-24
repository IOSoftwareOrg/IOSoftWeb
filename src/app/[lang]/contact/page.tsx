import type { Metadata } from "next";
import Contact from "@/components/Contact";
import { hasLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

const BASE_URL = "https://www.io-software.fr";

const meta = {
  fr: { title: "Contact", description: "Contactez IO Software pour vos projets de stratégie, organisation, process, data ou IA. Marseille, France & International." },
  en: { title: "Contact", description: "Contact IO Software for your strategy, organisation, process, data or AI projects. Marseille, France & International." },
};

const hero = {
  fr: { label: "Parlons de votre projet", title: "Prenons contact", subtitle: "Décrivez votre besoin et nous vous répondrons rapidement." },
  en: { label: "Let's talk about your project", title: "Get in touch", subtitle: "Describe your need and we will get back to you quickly." },
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return { title: meta[lang].title, description: meta[lang].description, alternates: { canonical: `${BASE_URL}/${lang}/contact`, languages: { fr: `${BASE_URL}/fr/contact`, en: `${BASE_URL}/en/contact` } } };
}

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const d = hero[lang as Locale];

  return (
    <>
      <section className="bg-[#0f172a] pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">{d.label}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3">{d.title}</h1>
          <p className="text-white/70 mt-4 max-w-xl">{d.subtitle}</p>
        </div>
      </section>
      <Contact hideHeader lang={lang as Locale} />
    </>
  );
}
