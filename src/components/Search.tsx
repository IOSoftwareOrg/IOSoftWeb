"use client";

import { useState, useEffect, useMemo, useRef, useCallback, type KeyboardEvent } from "react";
import { useRouter } from "next/navigation";
import Fuse from "fuse.js";
import type { Locale } from "@/lib/i18n";
import { getSearchIndex, type SearchDoc } from "@/lib/search-content";

const t = {
  fr: {
    open: "Rechercher",
    placeholder: "Rechercher un service, un article, un logiciel...",
    noResults: "Aucun résultat pour",
    close: "Fermer",
  },
  en: {
    open: "Search",
    placeholder: "Search a service, article, software...",
    noResults: "No results for",
    close: "Close",
  },
};

export default function Search({ lang, dark }: { lang: Locale; dark: boolean }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevQuery, setPrevQuery] = useState(query);
  if (query !== prevQuery) {
    setPrevQuery(query);
    setActiveIndex(0);
  }
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const labels = t[lang];

  const docs = useMemo(() => getSearchIndex(lang), [lang]);
  const fuse = useMemo(
    () =>
      new Fuse(docs, {
        keys: [
          { name: "title", weight: 2 },
          { name: "excerpt", weight: 1 },
          { name: "category", weight: 0.5 },
        ],
        threshold: 0.35,
        ignoreLocation: true,
      }),
    [docs]
  );

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return fuse.search(query).slice(0, 8).map((r) => r.item);
  }, [fuse, query]);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActiveIndex(0);
  }, []);

  const goTo = useCallback(
    (doc: SearchDoc) => {
      close();
      router.push(doc.url);
    },
    [close, router]
  );

  useEffect(() => {
    if (!open) return;
    const id = requestAnimationFrame(() => inputRef.current?.focus());
    return () => cancelAnimationFrame(id);
  }, [open]);

  useEffect(() => {
    function onKeyDown(e: globalThis.KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "Escape") {
        setOpen((o) => (o ? false : o));
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  function handleInputKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const doc = results[activeIndex];
      if (doc) goTo(doc);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label={labels.open}
        className={`flex items-center transition-colors hover:text-[#c9a84c] ${dark ? "text-white" : "text-[#0f172a]"}`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35M18 11a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center bg-[#0f172a]/60 backdrop-blur-sm px-4 pt-24"
          onClick={close}
        >
          <div
            className="w-full max-w-xl bg-white rounded-xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-[#e2e8f0]">
              <svg className="w-5 h-5 text-[#64748b] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M18 11a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleInputKeyDown}
                placeholder={labels.placeholder}
                className="flex-1 outline-none text-[#0f172a] placeholder:text-[#94a3b8] bg-transparent"
              />
              <button
                onClick={close}
                aria-label={labels.close}
                className="text-xs font-semibold text-[#94a3b8] hover:text-[#0f172a] border border-[#e2e8f0] rounded px-1.5 py-0.5"
              >
                Esc
              </button>
            </div>

            {results.length > 0 && (
              <ul className="max-h-96 overflow-y-auto py-2">
                {results.map((doc, i) => (
                  <li key={doc.url}>
                    <button
                      onClick={() => goTo(doc)}
                      onMouseEnter={() => setActiveIndex(i)}
                      className={`w-full text-left px-4 py-3 flex flex-col gap-0.5 transition-colors ${
                        i === activeIndex ? "bg-[#f1f5f9]" : ""
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-[#c9a84c]">
                          {doc.category}
                        </span>
                        <span className="font-medium text-[#0f172a]">{doc.title}</span>
                      </span>
                      <span className="text-sm text-[#64748b] line-clamp-1">{doc.excerpt}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {query.trim() !== "" && results.length === 0 && (
              <p className="px-4 py-6 text-center text-sm text-[#64748b]">
                {labels.noResults} « {query} »
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
