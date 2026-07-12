import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { logiciels, getLogicielBySlug } from "@/lib/logiciels";
import { hasLocale, locales, type Locale } from "@/lib/i18n";
import { logicielsSegment } from "@/lib/routes";

const BASE_URL = "https://www.io-software.fr";

export async function generateStaticParams() {
  return locales.flatMap((lang) => logiciels.map((l) => ({ lang, slug: l.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params;
  const logiciel = getLogicielBySlug(slug);
  if (!logiciel) return {};
  return {
    title: `${logiciel.name} — ${logiciel.tagline}`,
    description: logiciel.description,
    alternates: {
      canonical: `${BASE_URL}/${lang}/${logicielsSegment(lang as Locale)}/${slug}`,
      languages: { fr: `${BASE_URL}/fr/logiciels/${slug}`, en: `${BASE_URL}/en/software/${slug}` },
    },
  };
}

const t = {
  fr: {
    back: "Logiciels",
    discover: "Découvrir nos services →",
    discoverHref: "/fr/services",
    problemLabel: "Le problème",
    problemTitle: "Ce que vous vivez aujourd'hui",
    solutionLabel: "La solution",
    solutionTitle: (name: string) => `Ce que ${name} change`,
    featuresLabel: "Fonctionnalités",
    featuresTitle: (name: string) => `Ce que fait ${name}`,
    forWhomLabel: "Pour qui ?",
    forWhomTitle: (name: string) => `${name} s'adresse à`,
    interested: (name: string) => `Intéressé par ${name} ?`,
    interestedDesc: (name: string) => `Parlons de votre contexte et voyons comment ${name} peut répondre à vos besoins.`,
    contact: "Prendre contact",
  },
  en: {
    back: "Software",
    discover: "Discover our services →",
    discoverHref: "/en/services",
    problemLabel: "The problem",
    problemTitle: "What you're dealing with today",
    solutionLabel: "The solution",
    solutionTitle: (name: string) => `What ${name} changes`,
    featuresLabel: "Features",
    featuresTitle: (name: string) => `What ${name} does`,
    forWhomLabel: "Who is it for?",
    forWhomTitle: (name: string) => `${name} is designed for`,
    interested: (name: string) => `Interested in ${name}?`,
    interestedDesc: (name: string) => `Let's talk about your context and see how ${name} can meet your needs.`,
    contact: "Get in touch",
  },
};

export default async function LogicielPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  const logiciel = getLogicielBySlug(slug);
  if (!logiciel) notFound();
  const locale = lang as Locale;
  const d = t[locale];

  return (
    <>
      <section className={`bg-gradient-to-br ${logiciel.color} pt-32 pb-16`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href={`/${lang}/${logicielsSegment(locale)}`} className="text-white hover:text-white/80 transition-colors">{d.back}</Link>
            <span>/</span>
            <span className="text-white/80">{logiciel.name}</span>
          </div>
          <span className="text-white/60 text-xs font-semibold uppercase tracking-widest">{logiciel.category}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2">{logiciel.name}</h1>
          <p className="text-white/70 mt-4 max-w-xl text-lg">{logiciel.tagline}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#475569] leading-relaxed max-w-3xl text-lg">{logiciel.description}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">{d.problemLabel}</span>
            <h2 className="text-2xl font-bold text-[#0f172a] mt-3 mb-4">{d.problemTitle}</h2>
            <p className="text-[#64748b] leading-relaxed">{logiciel.probleme}</p>
          </div>
          <div className="bg-[#f8fafc] rounded-2xl p-8">
            <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">{d.solutionLabel}</span>
            <h2 className="text-2xl font-bold text-[#0f172a] mt-3 mb-4">{d.solutionTitle(logiciel.name)}</h2>
            <p className="text-[#64748b] leading-relaxed">{logiciel.solution}</p>
            {logiciel.diagram && (
              <div
                className="mt-6 w-full rounded-xl overflow-hidden"
                dangerouslySetInnerHTML={{ __html: logiciel.diagram }}
              />
            )}
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#1e3a5f]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-3 gap-8">
          {logiciel.benefices.map((b) => (
            <div key={b.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#c9a84c]">{b.valeur}</p>
              <p className="text-white/70 text-sm mt-2">{b.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">{d.featuresLabel}</span>
            <h2 className="text-3xl font-bold text-[#0f172a] mt-3">{d.featuresTitle(logiciel.name)}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {logiciel.fonctionnalites.map((f) => (
              <div key={f.titre} className="bg-white rounded-xl p-6 border border-[#e2e8f0]">
                <h3 className="font-bold text-[#0f172a] mb-2">{f.titre}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">{d.forWhomLabel}</span>
            <h2 className="text-3xl font-bold text-[#0f172a] mt-3 mb-6">{d.forWhomTitle(logiciel.name)}</h2>
            <ul className="space-y-3">
              {logiciel.profils.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#c9a84c] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#64748b]">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#1e3a5f] rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold mb-4">{d.interested(logiciel.name)}</h3>
            <p className="text-white/70 mb-6 text-sm">{d.interestedDesc(logiciel.name)}</p>
            <Link
              href={`/${lang}/contact`}
              className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#b8943d] text-white font-semibold px-6 py-3 rounded-md transition-colors text-sm"
            >
              {d.contact}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#f8fafc] border-t border-[#e2e8f0]">
        <div className="max-w-6xl mx-auto px-6">
          <Link href={d.discoverHref} className="text-sm font-semibold text-[#1e3a5f] hover:text-[#c9a84c] transition-colors">
            {d.discover}
          </Link>
        </div>
      </section>
    </>
  );
}
