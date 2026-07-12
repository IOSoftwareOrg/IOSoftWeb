import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { logiciels, getLogicielBySlug } from "@/lib/logiciels";
import { hasLocale, locales, type Locale } from "@/lib/i18n";
import { logicielsSegment } from "@/lib/routes";

const BASE_URL = "https://www.io-software.fr";

export async function generateStaticParams() {
  return locales.flatMap((lang) => logiciels.map((l) => ({ lang, slug: l.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params;
  const logiciel = getLogicielBySlug(slug);
  if (!logiciel) return {};
  return {
    title: `${logiciel.name} — ${logiciel.tagline}`,
    description: logiciel.description,
    alternates: {
      canonical: `${BASE_URL}/${lang}/${logicielsSegment(lang as Locale)}/${slug}`,
      languages: { fr: `${BASE_URL}/fr/logiciels/${slug}`, en: `${BASE_URL}/en/software/${slug}` },
    },
  };
}

const t = {
  fr: { back: "Logiciels", discover: "Découvrir nos services →", discoverHref: "/fr/services" },
  en: { back: "Software", discover: "Discover our services →", discoverHref: "/en/services" },
};

export default async function LogicielPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  const logiciel = getLogicielBySlug(slug);
  if (!logiciel) notFound();
  const d = t[lang as Locale];

  return (
    <>
      <section className={`bg-gradient-to-br ${logiciel.color} pt-32 pb-16`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href={`/${lang}/${logicielsSegment(lang as Locale)}`} className="text-white hover:text-white/80 transition-colors">{d.back}</Link>
            <span>/</span>
            <span className="text-white/80">{logiciel.name}</span>
          </div>
          <span className="text-white/60 text-xs font-semibold uppercase tracking-widest">{logiciel.category}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2">{logiciel.name}</h1>
          <p className="text-white/70 mt-4 max-w-xl text-lg">{logiciel.tagline}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#475569] leading-relaxed max-w-3xl text-lg mb-12">{logiciel.description}</p>


          <Link href={d.discoverHref} className="text-sm font-semibold text-[#1e3a5f] hover:text-[#c9a84c] transition-colors">
            {d.discover}
          </Link>
        </div>
      </section>
    </>
  );
}
