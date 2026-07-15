"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";

const t = {
  fr: {
    badge: "Plus de 30 ans d'expérience professionnelle",
    title1: "L'expérience des grands groupes",
    title2: "au service de votre entreprise",
    subtitle: "Conseil en Stratégie, Organisation, Process, Data et IA — une vision transversale pour bâtir votre succès.",
    cta1: "Découvrir nos services",
    cta2: "Prendre contact",
    stats: [
      { value: "30+", label: "Ans d'expérience" },
      { value: "8", label: "Domaines d'expertise" },
      { value: "TPE/PME", label: "& Grands groupes" },
      { value: "France", label: "& International" },
    ],
  },
  en: {
    badge: "Over 30 years of professional experience",
    title1: "Big company expertise",
    title2: "at the service of your business",
    subtitle: "Strategy, Organisation, Process, Data & AI consulting — a transversal vision to build your success.",
    cta1: "Discover our services",
    cta2: "Get in touch",
    stats: [
      { value: "30+", label: "Years of experience" },
      { value: "8", label: "Areas of expertise" },
      { value: "SME/Corp", label: "& Major groups" },
      { value: "France", label: "& International" },
    ],
  },
};

export default function Hero({}: { lang?: Locale } = {}) {
  const sectionRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  // Dérive la locale depuis l'URL pour éviter la désynchronisation après hydration
  const lang: Locale = pathname.startsWith("/en") ? "en" : "fr";
  const d = t[lang];

  function scrollDown() {
    if (sectionRef.current) {
      const bottom = sectionRef.current.getBoundingClientRect().bottom + window.scrollY;
      window.scrollTo({ top: bottom, behavior: "smooth" });
    }
  }

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center bg-[#1e3a5f] pb-24">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="absolute inset-0 bg-[#1e3a5f]/95 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-20">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-sm px-4 py-1.5 text-white/80 text-sm mb-8">
          <span className="w-2 h-2 bg-[#c9a84c] rounded-sm" />
          {d.badge}
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          {d.title1}
          <br />
          <span className="text-[#c9a84c]">{d.title2}</span>
        </h1>

        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          {d.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#services" className="bg-[#c9a84c] hover:bg-[#b8943d] text-white font-semibold px-8 py-4 rounded-md transition-colors text-sm">
            {d.cta1}
          </a>
          <a href="#contact" className="border border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-md transition-colors text-sm">
            {d.cta2}
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10 pb-8 md:pb-0">
          {d.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-[#c9a84c]">{stat.value}</p>
              <p className="text-white/60 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20"
        aria-label="Scroll down"
      >
        <svg className="w-6 h-6 text-white/40 hover:text-white/70 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </section>
  );
}
