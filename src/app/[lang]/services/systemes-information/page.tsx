import type { Metadata } from "next";
import Link from "next/link";
import RelatedServices from "@/components/RelatedServices";
import { InfoSystemsIllustration } from "@/components/illustrations";
import { hasLocale, locales, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

const BASE_URL = "https://www.io-software.fr";
export async function generateStaticParams() { return locales.map((lang) => ({ lang })); }

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  return {
    title: isFr ? "Systèmes d'information" : "Information Systems",
    description: isFr ? "Maintenance informatique et alignement SI. ERP, BPM, Data Gouvernance, sécurisation. MOA et MOE." : "IT maintenance and IS alignment. ERP, BPM, Data Governance, security. Business and technical project management.",
    alternates: { canonical: `${BASE_URL}/${lang}/services/systemes-information`, languages: { fr: `${BASE_URL}/fr/services/systemes-information`, en: `${BASE_URL}/en/services/systemes-information` } },
  };
}

const checkIcon = <svg className="w-4 h-4 text-[#c9a84c] shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>;

const data = {
  fr: {
    label: "Nos services", title: "Systèmes d'information",
    hero: "Nous intervenons en MOA aussi bien qu'en MOE et prenons en charge tous vos projets, de leurs lignes budgétaires à leur réalisation.",
    illustrationAlt: "Illustration abstraite de nœuds serveurs et systèmes interconnectés",
    s1Label: "Service 01", s1Title: "Maintenance informatique",
    s1Text: "Notre prestation de maintenance informatique vous permet de vous affranchir de la gestion de votre parc informatique. Que vous possédiez des ordinateurs de bureau, des ordinateurs portables, une ou plusieurs imprimantes, un réseau local (LAN et/ou WAN), nous vous garantissons le bon état de fonctionnement de votre matériel.",
    s1CovLabel: "Notre couverture",
    s1Cov: ["Ordinateurs de bureau et portables", "Imprimantes et périphériques", "Réseaux locaux (LAN et WAN)", "Mises à niveau des logiciels", "Antivirus et sécurité avancée", "Surf anonyme sur internet"],
    s2Label: "Service 02", s2Title: "Alignement du système d'information",
    s2Text1: "Nous constatons que très souvent, par manque de temps, les outils techniques mis en place ne permettent pas de centraliser les informations pour une utilisation optimale des données par les différents services.",
    s2Text2: "Afin d'éviter que les informations ne soient dupliquées — avec le risque d'erreur que cela implique — l'efficacité commande de n'utiliser qu'un seul système de stockage de données et de les centraliser.",
    s2Text3: "Nous intervenons également sur toutes vos problématiques de mise en place d'ERP, de BPM ou autres logiciels d'alignement SI — y compris la modélisation de processus via des logiciels de process mining.",
    s2IntervLabel: "Nos interventions",
    s2Interv: ["Mise en place de sauvegardes", "Datamarts et Big Data", "Data Gouvernance et Data Quality", "ERP (Enterprise Resource Planning)", "BPM (Business Process Management)", "Modélisation de processus et Process Mining", "Conseil en choix de matériel", "Formation à la prise en main des nouveaux outils", "Sécurisation du système informatique"],
    moa: { title: "MOA", sub: "Maîtrise d'ouvrage", desc: "Définition de vos besoins, rédaction des cahiers des charges et pilotage de vos projets SI." },
    moe: { title: "MOE", sub: "Maîtrise d'œuvre", desc: "Réalisation technique de vos projets, de l'architecture à la mise en production." },
    related: [
      { title: "Process Mining", desc: "Exploitez les logs de votre SI pour cartographier et optimiser vos processus métiers en continu.", href: "/fr/services/process-mining" },
      { title: "Développement logiciel", desc: "Complétez votre SI avec des applications sur mesure conçues pour vos besoins spécifiques.", href: "/fr/services/developpement-logiciel" },
    ],
    ctaTitle: "Parlons de votre système d'information",
    ctaDesc: "De la maintenance à l'alignement stratégique, nous prenons en charge vos projets de bout en bout.",
    ctaBtn: "Prendre contact →",
  },
  en: {
    label: "Our services", title: "Information Systems",
    hero: "We act as both business owner (MOA) and technical implementer (MOE), taking full responsibility for your projects from budget lines to delivery.",
    illustrationAlt: "Abstract illustration of interconnected server nodes and systems",
    s1Label: "Service 01", s1Title: "IT maintenance",
    s1Text: "Our IT maintenance service allows you to delegate the management of your IT infrastructure. Whether you have desktop computers, laptops, printers, or a local network (LAN and/or WAN), we guarantee the proper functioning of your equipment.",
    s1CovLabel: "Our coverage",
    s1Cov: ["Desktop and laptop computers", "Printers and peripherals", "Local networks (LAN and WAN)", "Software updates", "Antivirus and advanced security", "Anonymous internet browsing"],
    s2Label: "Service 02", s2Title: "Information system alignment",
    s2Text1: "We frequently observe that, due to time constraints, technical tools fail to centralise information for optimal use by different departments.",
    s2Text2: "To avoid information duplication — and the risk of error this implies — efficiency demands a single data storage system with centralised data management.",
    s2Text3: "We also intervene on all your ERP, BPM or other IS alignment software implementation challenges — including process modelling via process mining software.",
    s2IntervLabel: "Our interventions",
    s2Interv: ["Backup system setup", "Datamarts and Big Data", "Data Governance and Data Quality", "ERP (Enterprise Resource Planning)", "BPM (Business Process Management)", "Process modelling and Process Mining", "Hardware selection consulting", "Training on new tools", "IT system security"],
    moa: { title: "MOA", sub: "Business project management", desc: "Requirements definition, specifications writing and steering your IS projects." },
    moe: { title: "MOE", sub: "Technical implementation", desc: "Technical realisation of your projects, from architecture to production deployment." },
    related: [
      { title: "Process Mining", desc: "Exploit your IS logs to map and continuously optimise your business processes.", href: "/en/services/process-mining" },
      { title: "Software Development", desc: "Complement your IS with custom applications designed for your specific needs.", href: "/en/services/developpement-logiciel" },
    ],
    ctaTitle: "Let's talk about your information system",
    ctaDesc: "From maintenance to strategic alignment, we take full responsibility for your projects end-to-end.",
    ctaBtn: "Get in touch →",
  },
};

export default async function SIPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const d = data[lang as Locale];

  return (
    <>
      <section className="bg-[#1e3a5f] pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.3fr_1fr] md:items-center gap-10">
          <div>
            <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
              <Link href={`/${lang}/services`} className="text-white hover:text-white/80 transition-colors">Services</Link>
              <span>/</span><span className="text-white/80">{d.title}</span>
            </div>
            <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">{d.label}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">{d.title}</h1>
            <p className="text-white/70 max-w-2xl leading-relaxed">{d.hero}</p>
          </div>
          <InfoSystemsIllustration className="hidden md:block w-full h-auto" label={d.illustrationAlt} />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest">{d.s1Label}</span>
              <h2 className="text-2xl font-bold text-[#0f172a] mt-2 mb-4">{d.s1Title}</h2>
              <p className="text-[#475569] leading-relaxed">{d.s1Text}</p>
            </div>
            <div className="bg-[#f8fafc] rounded-sm p-8 border border-[#e2e8f0]">
              <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-4">{d.s1CovLabel}</p>
              <ul className="space-y-3">
                {d.s1Cov.map((item) => <li key={item} className="flex items-start gap-3">{checkIcon}<span className="text-sm text-[#475569]">{item}</span></li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-white rounded-sm p-8 border border-[#e2e8f0]">
              <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-4">{d.s2IntervLabel}</p>
              <ul className="space-y-3">
                {d.s2Interv.map((item) => <li key={item} className="flex items-start gap-3">{checkIcon}<span className="text-sm text-[#475569]">{item}</span></li>)}
              </ul>
            </div>
            <div>
              <span className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest">{d.s2Label}</span>
              <h2 className="text-2xl font-bold text-[#0f172a] mt-2 mb-4">{d.s2Title}</h2>
              <p className="text-[#475569] leading-relaxed mb-4">{d.s2Text1}</p>
              <p className="text-[#475569] leading-relaxed mb-4">{d.s2Text2}</p>
              <p className="text-[#475569] leading-relaxed">{d.s2Text3}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1e3a5f]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {[d.moa, d.moe].map((item) => (
              <div key={item.title} className="bg-white/10 rounded-sm p-8">
                <p className="text-3xl font-bold text-[#c9a84c] mb-1">{item.title}</p>
                <p className="text-white/50 text-sm uppercase tracking-widest mb-4">{item.sub}</p>
                <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices services={d.related} lang={lang as Locale} />

      <section className="bg-[#c9a84c] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{d.ctaTitle}</h2>
          <p className="text-white/80 mb-8">{d.ctaDesc}</p>
          <Link href={`/${lang}/contact?subject=${encodeURIComponent(d.title)}`} className="inline-block bg-white text-[#1e3a5f] font-bold px-8 py-4 rounded-md hover:bg-[#f1f5f9] transition-colors">{d.ctaBtn}</Link>
        </div>
      </section>
    </>
  );
}
