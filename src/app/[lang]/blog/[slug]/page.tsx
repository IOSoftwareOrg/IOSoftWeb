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
            <span className="inline-block bg-[#c9a84c]/20 text-[#c9a84c] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full shrink-0">
              {getCategoryLabel(article.category, lang)}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">{title}</h1>
          <p className="text-white/60 text-sm">{displayDate} · IO Software</p>
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
