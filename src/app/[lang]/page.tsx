import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import { hasLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

const BASE_URL = "https://www.io-software.fr";

const meta = {
  fr: {
    title: "IO Software — Conseil en Stratégie, Organisation, Process, Data et IA",
    description: "Cabinet de conseil basé à Marseille. Stratégie, Organisation, Process, Data et IA. Plus de 30 ans d'expérience.",
  },
  en: {
    title: "IO Software — Strategy, Organisation, Process, Data & AI Consulting",
    description: "Consulting firm based in Marseille. Strategy, Organisation, Process, Data & AI. Over 30 years of experience.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const m = meta[lang];
  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: `${BASE_URL}/${lang}`,
      languages: { fr: `${BASE_URL}/fr`, en: `${BASE_URL}/en` },
    },
    openGraph: { title: m.title, description: m.description, url: `${BASE_URL}/${lang}`, type: "website" },
  };
}

const t = {
  fr: {
    explore: "Explorer",
    exploreTitle: "Tout ce qu'IO Software peut faire pour vous",
    discover: "Découvrir",
    sections: [
      { href: "/fr/services", label: "Services", title: "8 domaines d'expertise", desc: "Stratégie, Organisation, Process, Data, IA et Développement logiciel.", color: "from-blue-600 to-blue-800" },
      { href: "/fr/expertise", label: "Expertise", title: "30 ans d'expérience", desc: "Un partenaire de confiance pour les dirigeants. Présence France & International.", color: "from-[#1e3a5f] to-[#0f172a]" },
      { href: "/fr/logiciels", label: "Logiciels", title: "Éditeur de logiciels", desc: "FinAnalyzer, ProcessMap, DataBridge — des solutions métier conçues pour vos besoins.", color: "from-violet-600 to-violet-900" },
      { href: "/fr/blog", label: "Blog", title: "Ressources & Actualités", desc: "Finance, stratégie, management, lean, droit, économie et informatique.", color: "from-emerald-600 to-emerald-900" },
    ],
    ctaTitle: "Vous avez un projet ? Parlons-en.",
    ctaSubtitle: "Réponse garantie sous 24 heures ouvrées.",
    ctaButton: "Prendre contact →",
    ctaHref: "/fr/contact",
  },
  en: {
    explore: "Explore",
    exploreTitle: "Everything IO Software can do for you",
    discover: "Discover",
    sections: [
      { href: "/en/services", label: "Services", title: "8 areas of expertise", desc: "Strategy, Organisation, Process, Data, AI and Software development.", color: "from-blue-600 to-blue-800" },
      { href: "/en/expertise", label: "Expertise", title: "30 years of experience", desc: "A trusted partner for executives. France & International presence.", color: "from-[#1e3a5f] to-[#0f172a]" },
      { href: "/en/logiciels", label: "Software", title: "Software publisher", desc: "FinAnalyzer, ProcessMap, DataBridge — business solutions for your needs.", color: "from-violet-600 to-violet-900" },
      { href: "/en/blog", label: "Blog", title: "Resources & News", desc: "Finance, strategy, management, law, economics and IT — insights from our consultants.", color: "from-emerald-600 to-emerald-900" },
    ],
    ctaTitle: "Have a project? Let's talk.",
    ctaSubtitle: "Response guaranteed within 24 business hours.",
    ctaButton: "Get in touch →",
    ctaHref: "/en/contact",
  },
};

const icons = [
  <svg key="services" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
  <svg key="expertise" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>,
  <svg key="logiciels" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
  <svg key="blog" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>,
];

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
if (!hasLocale(lang)) notFound();
  const d = t[lang as Locale];

  return (
    <>
      <Hero lang={lang as Locale} />

      <section id="next-section" className="pt-10 md:pt-24 pb-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">{d.explore}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mt-3">{d.exploreTitle}</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {d.sections.map((s, i) => (
              <Link
                key={s.href}
                href={s.href}
                className="group rounded-2xl overflow-hidden border border-[#e2e8f0] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className={`bg-gradient-to-br ${s.color} p-6 text-white`}>
                  <div className="mb-3 opacity-80">{icons[i]}</div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-1">{s.label}</p>
                  <p className="text-lg font-bold leading-snug">{s.title}</p>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <p className="text-sm text-[#64748b] leading-relaxed">{s.desc}</p>
                  <span className="mt-4 text-sm font-semibold text-[#1e3a5f] group-hover:text-[#c9a84c] transition-colors flex items-center gap-1">
                    {d.discover}
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#c9a84c] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{d.ctaTitle}</h2>
          <p className="text-white/80 mb-8">{d.ctaSubtitle}</p>
          <Link href={d.ctaHref} className="inline-block bg-white text-[#1e3a5f] font-bold px-8 py-4 rounded-md hover:bg-[#f1f5f9] transition-colors">
            {d.ctaButton}
          </Link>
        </div>
      </section>
    </>
  );
}
