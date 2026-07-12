"use client";

import { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Fuse from "fuse.js";
import {
  articles,
  categories,
  getArticleTitle,
  getArticleExcerpt,
  getArticleDate,
  getCategoryLabel,
} from "@/lib/articles";
import type { Category } from "@/lib/articles";
import type { Locale } from "@/lib/i18n";

const t = {
  fr: {
    label: "Ressources",
    title: "Blog & Actualités",
    allArticles: "Tous les articles",
    all: "Tous",
    none: "Aucun article dans cette catégorie.",
    noneSearch: "Aucun article ne correspond à votre recherche.",
    read: "Lire →",
    searchPlaceholder: "Rechercher un article...",
  },
  en: {
    label: "Resources",
    title: "Blog & News",
    allArticles: "All articles",
    all: "All",
    none: "No articles in this category.",
    noneSearch: "No articles match your search.",
    read: "Read →",
    searchPlaceholder: "Search an article...",
  },
};

export default function Blog({
  hideHeader,
  lang = "fr",
  initialQuery = "",
}: { hideHeader?: boolean; lang?: Locale; initialQuery?: string } = {}) {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [query, setQuery] = useState(initialQuery);
  const router = useRouter();
  const d = t[lang];

  const searchable = useMemo(
    () => articles.map((a) => ({ article: a, title: getArticleTitle(a, lang), excerpt: getArticleExcerpt(a, lang) })),
    [lang]
  );
  const fuse = useMemo(
    () =>
      new Fuse(searchable, {
        keys: [
          { name: "title", weight: 2 },
          { name: "excerpt", weight: 1 },
        ],
        threshold: 0.35,
        ignoreLocation: true,
      }),
    [searchable]
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (query.trim()) {
      params.set("q", query);
    } else {
      params.delete("q");
    }
    const qs = params.toString();
    router.replace(`/${lang}/blog${qs ? `?${qs}` : ""}`, { scroll: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, lang]);

  const byCategory = activeCategory ? articles.filter((a) => a.category === activeCategory) : articles;
  const bySearch = query.trim() ? fuse.search(query).map((r) => r.item.article) : articles;
  const filtered = byCategory.filter((a) => bySearch.includes(a));

  return (
    <section id="blog" className="py-24 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-6">
        {!hideHeader && (
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
            <div>
              <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">{d.label}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mt-3">{d.title}</h2>
            </div>
            <Link
              href={`/${lang}/blog`}
              className="text-sm font-semibold text-[#1e3a5f] hover:text-[#c9a84c] transition-colors flex items-center gap-1 self-start md:self-auto"
            >
              {d.allArticles}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}

        <div className="relative mb-6 max-w-md">
          <svg className="w-4 h-4 text-[#94a3b8] absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M18 11a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={d.searchPlaceholder}
            className="w-full pl-9 pr-3 py-2 text-sm border border-[#e2e8f0] rounded-sm bg-white text-[#0f172a] placeholder:text-[#94a3b8] outline-none focus:border-[#1e3a5f] transition-colors"
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveCategory(null)}
            className={`text-xs px-3 py-1.5 rounded-sm border transition-colors ${
              activeCategory === null
                ? "bg-[#1e3a5f] border-[#1e3a5f] text-white"
                : "border-[#e2e8f0] bg-white text-[#64748b] hover:border-[#1e3a5f] hover:text-[#1e3a5f]"
            }`}
          >
            {d.all} ({articles.length})
          </button>
          {categories.map((cat) => {
            const count = articles.filter((a) => a.category === cat).length;
            if (count === 0) return null;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat === activeCategory ? null : cat)}
                className={`text-xs px-3 py-1.5 rounded-sm border transition-colors ${
                  activeCategory === cat
                    ? "bg-[#1e3a5f] border-[#1e3a5f] text-white"
                    : "border-[#e2e8f0] bg-white text-[#64748b] hover:border-[#1e3a5f] hover:text-[#1e3a5f]"
                }`}
              >
                {getCategoryLabel(cat, lang)} ({count})
              </button>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {filtered.map((article) => (
            <article
              key={article.slug}
              className="bg-white rounded-sm overflow-hidden border border-[#e2e8f0] hover:border-[#1e3a5f] transition-colors group flex flex-col"
            >
              <div className="h-2 bg-[#1e3a5f] group-hover:bg-[#c9a84c] transition-colors" />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="font-bold text-[#0f172a] leading-snug group-hover:text-[#1e3a5f] transition-colors flex-1">
                    {getArticleTitle(article, lang)}
                  </h3>
                  <span className="text-xs font-semibold text-[#c9a84c] uppercase tracking-widest shrink-0 mt-0.5">
                    {getCategoryLabel(article.category, lang)}
                  </span>
                </div>
                <p className="text-sm text-[#64748b] leading-relaxed mb-4 line-clamp-3">{getArticleExcerpt(article, lang)}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs text-[#94a3b8]">{getArticleDate(article, lang)}</span>
                  <Link
                    href={`/${lang}/blog/${article.slug}`}
                    className="text-xs font-semibold text-[#1e3a5f] hover:text-[#c9a84c] transition-colors"
                  >
                    {d.read}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-[#64748b] py-12">{query.trim() ? d.noneSearch : d.none}</p>
        )}
      </div>
    </section>
  );
}
