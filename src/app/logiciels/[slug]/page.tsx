import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { logiciels, getLogicielBySlug } from "@/lib/logiciels";

const BASE_URL = "https://www.io-software.fr";

export async function generateStaticParams() {
  return logiciels.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const logiciel = getLogicielBySlug(slug);
  if (!logiciel) return {};
  const url = `${BASE_URL}/logiciels/${logiciel.slug}`;
  return {
    title: `${logiciel.name} — ${logiciel.tagline}`,
    description: logiciel.description,
    keywords: [logiciel.name, logiciel.category, "process mining", "logiciel métier", "optimisation processus", "IO Software"],
    alternates: { canonical: url },
    openGraph: {
      title: `${logiciel.name} — ${logiciel.tagline}`,
      description: logiciel.description,
      url,
      siteName: "IO Software",
      type: "website",
      locale: "fr_FR",
    },
    twitter: {
      card: "summary_large_image",
      title: `${logiciel.name} — ${logiciel.tagline}`,
      description: logiciel.description,
    },
  };
}

export default async function LogicielPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const logiciel = getLogicielBySlug(slug);
  if (!logiciel) notFound();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16" style={{ backgroundColor: logiciel.accentColor }}>
        <div className="max-w-6xl mx-auto px-6 relative">
          <span className="absolute top-0 right-0 bg-white/20 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-sm">
            {logiciel.category}
          </span>
          <Link
            href="/logiciels"
            className="inline-flex items-center gap-1 text-white/70 hover:text-white text-sm transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Nos logiciels
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{logiciel.name}</h1>
          <p className="text-xl text-white/80 max-w-2xl">{logiciel.tagline}</p>
        </div>
      </section>

      {/* Problème / Solution */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">Le problème</span>
            <h2 className="text-2xl font-bold text-[#0f172a] mt-3 mb-4">Ce que vous vivez aujourd&apos;hui</h2>
            <p className="text-[#64748b] leading-relaxed">{logiciel.probleme}</p>
          </div>
          <div className="bg-[#f8fafc] rounded-sm p-8">
            <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">La solution</span>
            <h2 className="text-2xl font-bold text-[#0f172a] mt-3 mb-4">Ce que {logiciel.name} change</h2>
            <p className="text-[#64748b] leading-relaxed">{logiciel.solution}</p>
            {logiciel.diagram && (
              <div
                className="mt-6 w-full rounded-sm overflow-hidden"
                dangerouslySetInnerHTML={{ __html: logiciel.diagram }}
              />
            )}
          </div>
        </div>
      </section>

      {/* Bénéfices */}
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

      {/* Fonctionnalités */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">Fonctionnalités</span>
            <h2 className="text-3xl font-bold text-[#0f172a] mt-3">Ce que fait {logiciel.name}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {logiciel.fonctionnalites.map((f) => (
              <div key={f.titre} className="bg-white rounded-sm p-6 border border-[#e2e8f0]">
                <h3 className="font-bold text-[#0f172a] mb-2">{f.titre}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profils */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">Pour qui ?</span>
            <h2 className="text-3xl font-bold text-[#0f172a] mt-3 mb-6">{logiciel.name} s&apos;adresse à</h2>
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
          <div className="bg-[#1e3a5f] rounded-sm p-8 text-white">
            <h3 className="text-xl font-bold mb-4">Intéressé par {logiciel.name} ?</h3>
            <p className="text-white/70 mb-6 text-sm">
              Parlons de votre contexte et voyons comment {logiciel.name} peut répondre à vos besoins.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#b8943d] text-white font-semibold px-6 py-3 rounded-md transition-colors text-sm"
            >
              Prendre contact
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
