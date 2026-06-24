"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { Locale } from "@/lib/i18n";

const t = {
  fr: {
    services: "Services",
    expertise: "Expertise",
    software: "Logiciels",
    blog: "Blog",
    contact: "Contact",
    cta: "Prendre contact",
  },
  en: {
    services: "Services",
    expertise: "Expertise",
    software: "Software",
    blog: "Blog",
    contact: "Contact",
    cta: "Get in touch",
  },
};

export default function Navbar({ lang }: { lang: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const labels = t[lang];

  const isHome = pathname === `/${lang}` || pathname === `/${lang}/`;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const dark = mounted && isHome && !scrolled;

  const navLinks = [
    { label: labels.services, href: `/${lang}/services` },
    { label: labels.expertise, href: `/${lang}/expertise` },
    { label: labels.software, href: `/${lang}/logiciels` },
    { label: labels.blog, href: `/${lang}/blog` },
    { label: labels.contact, href: `/${lang}/contact` },
  ];

  function switchLang() {
    const otherLang = lang === "fr" ? "en" : "fr";
    // Replace the current lang prefix with the other lang
    const newPath = pathname.replace(`/${lang}`, `/${otherLang}`);
    router.push(newPath);
  }

  return (
    <header
      suppressHydrationWarning
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link href={`/${lang}`} className="flex items-center gap-2">
          <span
            className={`text-xl font-bold tracking-tight transition-colors ${
              dark ? "text-white" : "text-[#1e3a5f]"
            }`}
          >
            <span className="text-[#c9a84c] font-mono">&lt;/&gt;</span>{" "}IO Software
          </span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#c9a84c] ${
                  pathname === link.href
                    ? "text-[#c9a84c]"
                    : dark
                    ? "text-white"
                    : "text-[#0f172a]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          {/* Language switcher */}
          <li>
            <button
              onClick={switchLang}
              className={`text-sm font-semibold border rounded-md px-3 py-1.5 transition-colors ${
                dark
                  ? "border-white/30 text-white hover:border-white"
                  : "border-[#1e3a5f]/30 text-[#1e3a5f] hover:border-[#1e3a5f]"
              }`}
              aria-label={lang === "fr" ? "Switch to English" : "Passer en français"}
            >
              {lang === "fr" ? "🇺🇸 EN" : "🇫🇷 FR"}
            </button>
          </li>
          <li>
            <Link
              href={`/${lang}/contact`}
              className="text-sm font-semibold bg-[#c9a84c] text-white px-4 py-2 rounded-md hover:bg-[#b8943d] transition-colors"
            >
              {labels.cta}
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={switchLang}
            className={`text-sm font-semibold border rounded-md px-2 py-1 transition-colors ${
              dark
                ? "border-white/30 text-white"
                : "border-[#1e3a5f]/30 text-[#1e3a5f]"
            }`}
          >
            {lang === "fr" ? "🇺🇸" : "🇫🇷"}
          </button>
          <button
            className={`transition-colors ${dark ? "text-white" : "text-[#1e3a5f]"}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-medium hover:text-[#c9a84c] ${
                    pathname === link.href ? "text-[#c9a84c]" : "text-[#0f172a]"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={`/${lang}/contact`}
                className="block text-center bg-[#1e3a5f] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#2d5a8e]"
                onClick={() => setMenuOpen(false)}
              >
                {labels.cta}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
