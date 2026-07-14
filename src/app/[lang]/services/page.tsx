import type { Metadata } from "next";
import Link from "next/link";
import { hasLocale, type Locale } from "@/lib/i18n";
import { servicesCatalog } from "@/lib/services-catalog";
import { notFound } from "next/navigation";

const BASE_URL = "https://www.io-software.fr";

const meta = {
  fr: { title: "Services", description: "Conseil en Management, Stratégie, Finance d'entreprise, Data, Process Mining, Systèmes d'information, Rédaction technique, Développement logiciel et Web & Agents Autonomes." },
  en: { title: "Services", description: "Management Consulting, Strategy, Corporate Finance, Data, Process Mining, Information Systems, Technical Writing, Software Development and Web & Autonomous Agents." },
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const m = meta[lang];
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: `${BASE_URL}/${lang}/services`, languages: { fr: `${BASE_URL}/fr/services`, en: `${BASE_URL}/en/services` } },
  };
}

const t = {
  fr: {
    label: "Ce que nous faisons",
    title: "Nos domaines d'expertise",
    subtitle: "Une approche transversale couvrant l'ensemble des dimensions de votre entreprise, de la stratégie à l'opérationnel.",
    discover: "Découvrir",
    services: servicesCatalog.fr,
  },
  en: {
    label: "What we do",
    title: "Our areas of expertise",
    subtitle: "A transversal approach covering all dimensions of your business, from strategy to operations.",
    discover: "Discover",
    services: servicesCatalog.en,
  },
};

export default async function ServicesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const d = t[lang as Locale];

  return (
    <>
      <section className="bg-[#1e3a5f] pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">{d.label}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3">{d.title}</h1>
          <p className="text-white/70 mt-4 max-w-xl">{d.subtitle}</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {d.services.map((service) => (
              <Link
                key={service.slug}
                href={`/${lang}/services/${service.slug}`}
                className="group p-6 rounded-sm border border-[#e2e8f0] hover:border-[#1e3a5f] transition-colors duration-300 flex flex-col"
              >
                <h3 className="font-semibold text-[#0f172a] mb-2 group-hover:text-[#1e3a5f]">{service.title}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed mb-4">{service.desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {service.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-[#f1f5f9] text-[#64748b] px-2 py-0.5 rounded-sm">{tag}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
