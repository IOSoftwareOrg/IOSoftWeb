import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { articles, getArticleBySlug } from "@/lib/articles";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} — IO Software`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-[#1e3a5f] pt-32 pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-white/60 hover:text-[#c9a84c] text-sm transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour au blog
          </Link>
          <span className="inline-block bg-[#c9a84c]/20 text-[#c9a84c] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            {article.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            {article.title}
          </h1>
          <p className="text-white/60 text-sm">{article.date} · IO Software</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-slate prose-headings:text-[#0f172a] prose-headings:font-bold prose-a:text-[#1e3a5f] prose-strong:text-[#0f172a] prose-blockquote:border-[#c9a84c] prose-blockquote:text-[#64748b] max-w-none">
            <ReactMarkdown>{article.content}</ReactMarkdown>
          </div>

          <div className="mt-12 pt-8 border-t border-[#e2e8f0]">
            <p className="text-sm text-[#64748b] mb-4">Cet article vous a été utile ?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#1e3a5f] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#2d5a8e] transition-colors text-sm"
            >
              Parlons de votre projet
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
