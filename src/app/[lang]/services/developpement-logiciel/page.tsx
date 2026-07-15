import type { Metadata } from "next";
import Link from "next/link";
import RelatedServices from "@/components/RelatedServices";
import { SoftwareDevIllustration } from "@/components/illustrations";
import { hasLocale, locales, type Locale } from "@/lib/i18n";
import { logicielsSegment } from "@/lib/routes";
import { notFound } from "next/navigation";

const BASE_URL = "https://www.io-software.fr";
export async function generateStaticParams() { return locales.map((lang) => ({ lang })); }

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  return {
    title: isFr ? "Développement logiciel" : "Software Development",
    description: isFr ? "Développement logiciel sur mesure, création de sites internet par l'IA et édition de logiciels métier." : "Custom software development, AI-powered website creation and business software publishing.",
    alternates: { canonical: `${BASE_URL}/${lang}/services/developpement-logiciel`, languages: { fr: `${BASE_URL}/fr/services/developpement-logiciel`, en: `${BASE_URL}/en/services/developpement-logiciel` } },
  };
}

const boltIcon = <svg className="w-4 h-4 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;

const data = {
  fr: {
    label: "Nos services", title: "Développement logiciel",
    hero: "IO Software développe une expertise dans le développement logiciel grâce à son centre de compétences. De l'application métier sur mesure à la création de sites internet assistée par l'IA, nous couvrons l'ensemble du cycle de développement.",
    illustrationAlt: "Illustration abstraite de chevrons de code assemblés en blocs applicatifs",
    competTitle: "Notre centre de compétences",
    compet: [
      { title: "Applications sur mesure", desc: "Conception et développement d'applications métier adaptées à vos processus spécifiques, de la spécification au déploiement." },
      { title: "Édition de logiciels", desc: null },
      { title: "Intégrations et APIs", desc: "Connexion de vos systèmes existants, intégration d'APIs tierces et mise en place d'architectures orientées services." },
      { title: "Maintenance et évolutions", desc: "Accompagnement sur la durée : maintenance corrective, évolutions fonctionnelles et montées de version." },
    ],
    iaTitle: "Création de sites internet par l'IA",
    iaIntro: "L'intelligence artificielle révolutionne la création de sites web. En combinant les capacités génératives de l'IA avec notre expertise technique, nous livrons des sites modernes, performants et personnalisés — plus rapidement et à moindre coût.",
    ia: [
      { title: "Génération de sites internet par l'IA", desc: "L'intelligence artificielle transforme la création web. Nous exploitons ces technologies pour produire des sites internet modernes, optimisés SEO et adaptés à votre identité, avec des délais et des coûts réduits." },
      { title: "Design et contenu assistés par IA", desc: "Maquettes, textes, images et structure générés et affinés par IA, puis validés et personnalisés par nos experts pour garantir la cohérence avec votre positionnement." },
      { title: "Sites Next.js & React performants", desc: "Nous développons sur les technologies modernes (Next.js, React, Tailwind CSS) pour des sites rapides, sécurisés et faciles à maintenir — comme celui que vous consultez en ce moment." },
      { title: "Optimisation continue", desc: "L'IA permet également d'analyser les performances de votre site et de proposer des améliorations continues sur le contenu, le référencement et l'expérience utilisateur." },
    ],
    logLabel: "Éditeur de logiciels",
    logTitle: "Découvrez nos logiciels métier",
    logText: "IO Software est également éditeur de solutions logicielles métier. FinAnalyzer, ProcessMap, WebForge — des outils conçus pour répondre aux besoins réels des entreprises, issus de nos missions de conseil.",
    logBtn: "Voir nos logiciels →",
    finDesc: "IO Software est également éditeur de logiciels métier. Découvrez nos solutions",
    related: [
      { title: "Systèmes d'information", desc: "Tout développement s'intègre dans un écosystème SI existant. Assurez l'alignement entre vos outils et vos nouveaux logiciels.", href: "/fr/services/systemes-information" },
      { title: "Process Mining", desc: "Avant de développer, analysez vos processus actuels pour concevoir des solutions qui répondent aux vrais besoins.", href: "/fr/services/process-mining" },
    ],
    ctaTitle: "Parlons de votre projet de développement",
    ctaDesc: "Application sur mesure, site internet ou logiciel métier — décrivez-nous votre besoin.",
    ctaBtn: "Prendre contact →",
  },
  en: {
    label: "Our services", title: "Software Development",
    hero: "IO Software develops software expertise through its centre of competence. From custom business applications to AI-assisted website creation, we cover the entire development lifecycle.",
    illustrationAlt: "Abstract illustration of code brackets assembled into application blocks",
    competTitle: "Our centre of competence",
    compet: [
      { title: "Custom applications", desc: "Design and development of business applications adapted to your specific processes, from specification to deployment." },
      { title: "Software publishing", desc: null },
      { title: "Integrations and APIs", desc: "Connection of your existing systems, third-party API integration and service-oriented architecture setup." },
      { title: "Maintenance and evolution", desc: "Long-term support: corrective maintenance, functional evolution and version upgrades." },
    ],
    iaTitle: "AI-powered website creation",
    iaIntro: "Artificial intelligence is revolutionising web creation. By combining AI's generative capabilities with our technical expertise, we deliver modern, high-performance and personalised websites — faster and at lower cost.",
    ia: [
      { title: "AI-powered website generation", desc: "Artificial intelligence transforms web creation. We leverage these technologies to produce modern, SEO-optimised websites adapted to your identity, with reduced timeframes and costs." },
      { title: "AI-assisted design and content", desc: "Layouts, texts, images and structure generated and refined by AI, then validated and personalised by our experts to ensure coherence with your positioning." },
      { title: "High-performance Next.js & React sites", desc: "We develop on modern technologies (Next.js, React, Tailwind CSS) for fast, secure and easy-to-maintain websites — like the one you are viewing right now." },
      { title: "Continuous optimisation", desc: "AI also allows us to analyse your website's performance and propose continuous improvements on content, SEO and user experience." },
    ],
    logLabel: "Software publisher",
    logTitle: "Discover our business software",
    logText: "IO Software is also a publisher of business software solutions. FinAnalyzer, ProcessMap, WebForge — tools designed to meet real enterprise needs, born from our consulting missions.",
    logBtn: "View our software →",
    finDesc: "IO Software is also a business software publisher. Discover our solutions",
    related: [
      { title: "Information Systems", desc: "Every development integrates into an existing IS ecosystem. Ensure alignment between your tools and new software.", href: "/en/services/systemes-information" },
      { title: "Process Mining", desc: "Before developing, analyse your current processes to design solutions that meet real needs.", href: "/en/services/process-mining" },
    ],
    ctaTitle: "Let's talk about your development project",
    ctaDesc: "Custom application, website or business software — describe your need.",
    ctaBtn: "Get in touch →",
  },
};

export default async function DevLogicielPage({ params }: { params: Promise<{ lang: string }> }) {
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
          <SoftwareDevIllustration className="hidden md:block w-full h-auto" label={d.illustrationAlt} />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#0f172a] mb-8">{d.competTitle}</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {d.compet.map((c) => (
              <div key={c.title} className="bg-[#f8fafc] rounded-sm p-8 border border-[#e2e8f0]">
                <h3 className="font-bold text-[#0f172a] mb-3">{c.title}</h3>
                {c.desc ? (
                  <p className="text-sm text-[#475569] leading-relaxed">{c.desc}</p>
                ) : (
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {d.finDesc}{" "}
                    <Link href={`/${lang}/${logicielsSegment(lang as Locale)}/finanalyzer`} className="text-[#1e3a5f] font-semibold hover:text-[#c9a84c] transition-colors">FinAnalyzer</Link>,{" "}
                    <Link href={`/${lang}/${logicielsSegment(lang as Locale)}/processmap`} className="text-[#1e3a5f] font-semibold hover:text-[#c9a84c] transition-colors">ProcessMap</Link>{" "}
                    {lang === "fr" ? "et" : "and"}{" "}
                    <Link href={`/${lang}/${logicielsSegment(lang as Locale)}/webforge`} className="text-[#1e3a5f] font-semibold hover:text-[#c9a84c] transition-colors">WebForge</Link>.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-[#0f172a] mb-3">{d.iaTitle}</h2>
            <p className="text-[#475569] leading-relaxed max-w-3xl">{d.iaIntro}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {d.ia.map((item) => (
              <div key={item.title} className="bg-white rounded-sm p-8 border border-[#e2e8f0]">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#1e3a5f] rounded-lg flex items-center justify-center shrink-0 mt-0.5">{boltIcon}</div>
                  <div><h3 className="font-bold text-[#0f172a] mb-2">{item.title}</h3><p className="text-sm text-[#475569] leading-relaxed">{item.desc}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1e3a5f]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-3">{d.logLabel}</p>
              <h2 className="text-2xl font-bold text-white mb-4">{d.logTitle}</h2>
              <p className="text-white/70 leading-relaxed mb-8">{d.logText}</p>
              <Link href={`/${lang}/${logicielsSegment(lang as Locale)}`} className="inline-block bg-[#c9a84c] hover:bg-[#b8943d] text-white font-bold px-8 py-4 rounded-md transition-colors">{d.logBtn}</Link>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {["FinAnalyzer", "ProcessMap", "WebForge"].map((name) => (
                <div key={name} className="bg-white/10 rounded-sm p-5 text-center"><p className="text-white font-semibold text-sm">{name}</p></div>
              ))}
            </div>
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
