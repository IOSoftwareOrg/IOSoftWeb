import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  articles,
  getArticleBySlug,
  getArticleTitle,
  getArticleExcerpt,
  getArticleContent,
  getArticleDate,
  getCategoryLabel,
} from "@/lib/articles";
import type { Metadata } from "next";
import { hasLocale, locales, type Locale } from "@/lib/i18n";

const BASE_URL = "https://www.io-software.fr";
const ogLocale = { fr: "fr_FR", en: "en_US" } as const;

const articleIllustrations: Record<string, { file: string; alt: Record<Locale, string> }> = {
  "claude-anthropic-best-practices": {
    file: "claude-anthropic-best-practices.svg",
    alt: {
      fr: "Bulle de conversation reliée à un panneau de code, représentant l'utilisation de l'API Claude",
      en: "Chat bubble connected to a code panel, representing use of the Claude API",
    },
  },
  "ia-management-adapter-organisation": {
    file: "ia-management-adapter-organisation.svg",
    alt: {
      fr: "Organigramme dont le nœud sommital est une étincelle d'intelligence artificielle",
      en: "Org chart whose top node is an artificial intelligence spark",
    },
  },
  "takt-time-optimise-gerer-backlog-demandes": {
    file: "takt-time-optimise-gerer-backlog-demandes.svg",
    alt: {
      fr: "Chronomètre au-dessus d'une file de tickets de support",
      en: "Stopwatch above a queue of support tickets",
    },
  },
  "controle-de-gestion-pilier-performance": {
    file: "controle-de-gestion-pilier-performance.svg",
    alt: {
      fr: "Comparaison de barres entre budget prévisionnel et réalisations sur quatre périodes",
      en: "Bar comparison between planned budget and actuals across four periods",
    },
  },
  "effet-de-levier-financier": {
    file: "effet-de-levier-financier.svg",
    alt: {
      fr: "Levier financier amplifiant un rendement via une flèche ascendante",
      en: "Financial lever amplifying a return via an ascending arrow",
    },
  },
  "matrice-swot-analyse-strategique": {
    file: "matrice-swot-analyse-strategique.svg",
    alt: {
      fr: "Quatre colonnes représentant les forces, faiblesses, opportunités et menaces d'une matrice SWOT",
      en: "Four columns representing the strengths, weaknesses, opportunities and threats of a SWOT matrix",
    },
  },
  "le-marketing-definition": {
    file: "le-marketing-definition.svg",
    alt: {
      fr: "Mégaphone diffusant un message vers une cible concentrique",
      en: "Megaphone broadcasting a message toward a concentric target",
    },
  },
  "securiser-son-site-internet": {
    file: "securiser-son-site-internet.svg",
    alt: {
      fr: "Fenêtre de navigateur protégée par un badge bouclier et cadenas",
      en: "Browser window protected by a shield-and-padlock badge",
    },
  },
  pib: {
    file: "pib.svg",
    alt: {
      fr: "Globe terrestre et graphique en barres à la courbe ascendante",
      en: "Globe and bar chart with an ascending trend line",
    },
  },
  "transmission-entreprise-artisanale": {
    file: "transmission-entreprise-artisanale.svg",
    alt: {
      fr: "Une clé dorée remise d'une main à une autre",
      en: "A golden key passed from one hand to another",
    },
  },
  "technostructure-organisation-entreprise": {
    file: "technostructure-organisation-entreprise.svg",
    alt: {
      fr: "Pyramide hiérarchique à trois niveaux, chacun marqué d'une icône d'engrenage",
      en: "Three-tier hierarchical pyramid, each level marked with a gear icon",
    },
  },
};

export async function generateStaticParams() {
  return locales.flatMap((lang) => articles.map((a) => ({ lang, slug: a.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article || !hasLocale(lang)) return {};
  const title = getArticleTitle(article, lang);
  const description = getArticleExcerpt(article, lang);
  return {
    title,
    description,
    alternates: { canonical: `${BASE_URL}/${lang}/blog/${slug}`, languages: { fr: `${BASE_URL}/fr/blog/${slug}`, en: `${BASE_URL}/en/blog/${slug}` } },
    openGraph: {
      type: "article",
      title,
      description,
      url: `${BASE_URL}/${lang}/blog/${slug}`,
      locale: ogLocale[lang],
      publishedTime: article.dateISO ?? article.date,
      authors: ["IO Software"],
      tags: [getCategoryLabel(article.category, lang)],
    },
    twitter: { card: "summary", title, description },
  };
}

const t = {
  fr: { back: "Retour au blog", backHref: "/fr/blog", useful: "Cet article vous a été utile ?", cta: "Parlons de votre projet", ctaHref: "/fr/contact" },
  en: { back: "Back to blog", backHref: "/en/blog", useful: "Did you find this article useful?", cta: "Let's talk about your project", ctaHref: "/en/contact" },
};

export default async function ArticlePage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  const article = getArticleBySlug(slug);
  if (!article) notFound();
  const d = t[lang as Locale];
  const title = getArticleTitle(article, lang);
  const excerpt = getArticleExcerpt(article, lang);
  const content = getArticleContent(article, lang);
  const displayDate = getArticleDate(article, lang);
  const url = `${BASE_URL}/${lang}/blog/${slug}`;
  const illustration = articleIllustrations[slug];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: excerpt,
    author: { "@type": "Organization", name: "IO Software", url: BASE_URL },
    publisher: { "@type": "Organization", name: "IO Software", url: BASE_URL },
    datePublished: article.dateISO ?? article.date,
    url,
    articleSection: getCategoryLabel(article.category, lang),
    inLanguage: lang === "en" ? "en-US" : "fr-FR",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="bg-[#1e3a5f] pt-32 pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-start justify-between gap-4 mb-6">
            <Link href={d.backHref} className="inline-flex items-center gap-1 text-white/60 hover:text-[#c9a84c] text-sm transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {d.back}
            </Link>
            <span className="inline-block bg-[#c9a84c]/20 text-[#c9a84c] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-sm shrink-0">
              {getCategoryLabel(article.category, lang)}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">{title}</h1>
          <p className="text-white/60 text-sm">{displayDate} · IO Software</p>
          {illustration && (
            <img
              src={`/illustrations/${illustration.file}`}
              alt={illustration.alt[lang as Locale]}
              width={480}
              height={200}
              className="w-full h-auto mt-8 rounded-lg"
            />
          )}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-slate prose-headings:text-[#0f172a] prose-headings:font-bold prose-a:text-[#1e3a5f] prose-strong:text-[#0f172a] prose-blockquote:border-[#c9a84c] prose-blockquote:text-[#64748b] max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </div>
          <div className="mt-12 pt-8 border-t border-[#e2e8f0]">
            <p className="text-sm text-[#64748b] mb-4">{d.useful}</p>
            <Link href={d.ctaHref} className="inline-flex items-center gap-2 bg-[#1e3a5f] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#2d5a8e] transition-colors text-sm">
              {d.cta}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
