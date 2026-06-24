"use client";

import { useState } from "react";
import Link from "next/link";
import { articles, categories } from "@/lib/articles";
import type { Category } from "@/lib/articles";
import type { Locale } from "@/lib/i18n";

const t = {
  fr: {
    label: "Ressources",
    title: "Blog & Actualités",
    allArticles: "Tous les articles",
    all: "Tous",
    none: "Aucun article dans cette catégorie.",
    read: "Lire →",
  },
  en: {
    label: "Resources",
    title: "Blog & News",
    allArticles: "All articles",
    all: "All",
    none: "No articles in this category.",
    read: "Read →",
  },
};

export default function Blog({ hideHeader, lang = "fr" }: { hideHeader?: boolean; lang?: Locale } = {}) {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const d = t[lang];

  const filtered = activeCategory
    ? articles.filter((a) => a.category === activeCategory)
    : articles;

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

        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveCategory(null)}
            className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
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
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  activeCategory === cat
                    ? "bg-[#1e3a5f] border-[#1e3a5f] text-white"
                    : "border-[#e2e8f0] bg-white text-[#64748b] hover:border-[#1e3a5f] hover:text-[#1e3a5f]"
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {filtered.map((article) => (
            <article
              key={article.slug}
              className="bg-white rounded-xl overflow-hidden border border-[#e2e8f0] hover:shadow-md transition-shadow group flex flex-col"
            >
              <div className="h-2 bg-[#1e3a5f] group-hover:bg-[#c9a84c] transition-colors" />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="font-bold text-[#0f172a] leading-snug group-hover:text-[#1e3a5f] transition-colors flex-1">
                    {article.title}
                  </h3>
                  <span className="text-xs font-semibold text-[#c9a84c] uppercase tracking-widest shrink-0 mt-0.5">
                    {article.category}
                  </span>
                </div>
                <p className="text-sm text-[#64748b] leading-relaxed mb-4 line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs text-[#94a3b8]">{article.date}</span>
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
          <p className="text-center text-[#64748b] py-12">{d.none}</p>
        )}
      </div>
    </section>
  );
}
