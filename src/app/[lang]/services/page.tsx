import type { Metadata } from "next";
import Link from "next/link";
import { hasLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

const BASE_URL = "https://www.io-software.fr";

const meta = {
  fr: { title: "Services", description: "Conseil en Management, Stratégie, Finance d'entreprise, Data, Process Mining, Systèmes d'information, Rédaction technique et Développement logiciel." },
  en: { title: "Services", description: "Management Consulting, Strategy, Corporate Finance, Data, Process Mining, Information Systems, Technical Writing and Software Development." },
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
    services: [
      { slug: "conseil-en-management", title: "Conseil en Management", desc: "Accompagnement dans l'organisation des équipes, la gestion des ressources humaines et la transformation managériale.", tags: ["Organisation", "RH", "Leadership"] },
      { slug: "strategie-developpement", title: "Stratégie & Développement", desc: "Définition des orientations stratégiques, plans de développement commercial et accompagnement à la croissance durable.", tags: ["Stratégie", "Commercial", "Croissance"] },
      { slug: "finance-entreprise", title: "Finance d'entreprise", desc: "Analyse financière, contrôle de gestion, corporate finance et accompagnement aux décisions d'investissement.", tags: ["Corporate Finance", "Analyse", "Contrôle de gestion"] },
      { slug: "data-consulting", title: "Data Consulting", desc: "Transformation de vos données en actifs stratégiques. Modélisation, analyse avancée et tableaux de bord.", tags: ["Data", "BI", "Analytics"] },
      { slug: "process-mining", title: "Process Mining", desc: "Analyse et optimisation de vos processus métier grâce à l'exploitation des logs systèmes.", tags: ["BPM", "Lean", "Automatisation"] },
      { slug: "systemes-information", title: "Systèmes d'information", desc: "Conseil en architecture SI, choix des solutions logicielles, conduite du changement et audit.", tags: ["SI", "Architecture", "Audit"] },
      { slug: "redaction-technique", title: "Rédaction technique", desc: "Production de documentations logicielles, manuels utilisateurs, spécifications fonctionnelles.", tags: ["Documentation", "Spécifications", "Manuels"] },
      { slug: "developpement-logiciel", title: "Développement logiciel", desc: "Conception et développement d'applications sur mesure, éditeur de logiciels métier.", tags: ["Développement", "Sur mesure", "Éditeur"] },
    ],
  },
  en: {
    label: "What we do",
    title: "Our areas of expertise",
    subtitle: "A transversal approach covering all dimensions of your business, from strategy to operations.",
    discover: "Discover",
    services: [
      { slug: "conseil-en-management", title: "Management Consulting", desc: "Support for team organisation, human resources management and managerial transformation.", tags: ["Organisation", "HR", "Leadership"] },
      { slug: "strategie-developpement", title: "Strategy & Development", desc: "Strategic direction setting, business development plans and sustainable growth support.", tags: ["Strategy", "Business", "Growth"] },
      { slug: "finance-entreprise", title: "Corporate Finance", desc: "Financial analysis, management control, corporate finance and investment decision support.", tags: ["Corporate Finance", "Analysis", "Control"] },
      { slug: "data-consulting", title: "Data Consulting", desc: "Transform your data into strategic assets. Modelling, advanced analysis and dashboards.", tags: ["Data", "BI", "Analytics"] },
      { slug: "process-mining", title: "Process Mining", desc: "Analyse and optimise your business processes by exploiting system logs.", tags: ["BPM", "Lean", "Automation"] },
      { slug: "systemes-information", title: "Information Systems", desc: "IS architecture consulting, software selection, change management and IT audit.", tags: ["IS", "Architecture", "Audit"] },
      { slug: "redaction-technique", title: "Technical Writing", desc: "Software documentation, user manuals, functional specifications in FR/EN.", tags: ["Documentation", "Specifications", "Manuals"] },
      { slug: "developpement-logiciel", title: "Software Development", desc: "Custom application design and development, business software publisher.", tags: ["Development", "Custom", "Publisher"] },
    ],
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
