import type { Metadata } from "next";
import Blog from "@/components/Blog";
import { hasLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

const BASE_URL = "https://www.io-software.fr";

const meta = {
  fr: { title: "Blog", description: "Articles et ressources sur la finance, la stratégie, le management, le lean, le droit, l'économie et l'informatique." },
  en: { title: "Blog", description: "Articles and resources on finance, strategy, management, lean, law, economics and IT — insights from our consultants." },
};

const hero = {
  fr: { label: "Ressources", title: "Blog & Actualités", subtitle: "Finance, stratégie, management, lean, droit, économie et informatique — les ressources de nos consultants pour les dirigeants." },
  en: { label: "Resources", title: "Blog & News", subtitle: "Finance, strategy, management, lean, law, economics and IT — resources from our consultants for executives." },
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return { title: meta[lang].title, description: meta[lang].description, alternates: { canonical: `${BASE_URL}/${lang}/blog`, languages: { fr: `${BASE_URL}/fr/blog`, en: `${BASE_URL}/en/blog` } } };
}

export default async function BlogPage({ params }: { params: Promise<{ lang: string }> }) {
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
      <Blog hideHeader lang={lang as Locale} />
    </>
  );
}
