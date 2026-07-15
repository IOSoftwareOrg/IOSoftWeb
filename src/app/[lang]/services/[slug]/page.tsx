import { notFound } from "next/navigation";
import { hasLocale, locales, type Locale } from "@/lib/i18n";
import type { Metadata } from "next";
import Link from "next/link";
import RelatedServices from "@/components/RelatedServices";

const BASE_URL = "https://www.io-software.fr";

type ServiceContent = {
  title: string;
  description: string;
  intro: string;
  body: React.ReactNode;
  cta: string;
};

// ─── Content registry ────────────────────────────────────────────────────────

const checkIcon = (
  <svg className="w-4 h-4 text-[#c9a84c] shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

function SectionGrid({ sections }: { sections: { title: string; items: string[] }[] }) {
  return (
    <section className="pb-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`grid md:grid-cols-${Math.min(sections.length, 3)} gap-8`}>
          {sections.map((s) => (
            <div key={s.title} className="bg-[#f8fafc] rounded-sm p-8 border border-[#e2e8f0]">
              <h2 className="text-lg font-bold text-[#0f172a] mb-6 pb-4 border-b border-[#e2e8f0]">{s.title}</h2>
              <ul className="space-y-3">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    {checkIcon}
                    <span className="text-sm text-[#475569] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const content: Record<string, Record<Locale, ServiceContent>> = {
  "web-agents-autonomes": {
    fr: {
      title: "Web & Agents Autonomes",
      description: "Sites web modernes et agents IA autonomes pour automatiser vos processus métier et enrichir votre présence digitale.",
      intro: "L'intelligence artificielle ne se limite plus à générer du contenu : elle peut désormais agir de façon autonome — répondre à un client, qualifier un lead, mettre à jour une base de données — en s'appuyant sur un site web moderne comme point d'entrée.\n\nIO Software conçoit les deux briques ensemble, pour des solutions digitales qui travaillent pour vous, pas seulement qui vous représentent.",
      body: <SectionGrid sections={[
        { title: "Agents autonomes", items: ["Conception d'agents IA capables d'exécuter des tâches multi-étapes en autonomie (support client, qualification, veille, reporting)", "Intégration à vos outils existants (CRM, ERP, messagerie, bases de données)", "Supervision humaine et garde-fous : chaque agent reste sous contrôle, avec des limites d'action définies", "Architecture basée sur les meilleures pratiques (function calling, orchestration d'outils)"] },
        { title: "Développement web", items: ["Sites modernes et performants (Next.js, React, Tailwind CSS), rapides et optimisés SEO", "Design et contenu pensés pour convertir, pas seulement pour informer", "Hébergement, sécurité et maintenance pris en charge", "Une base évolutive qui grandit avec vos besoins et vos agents"] },
        { title: "Une approche intégrée", items: ["Un site vitrine qui alimente un agent capable de répondre à vos visiteurs en autonomie", "Automatisation des workflows web : formulaires, prises de rendez-vous, support de premier niveau", "Un seul interlocuteur pour le site et les agents qui l'animent", "Mesure de l'impact : temps gagné, taux de conversion, satisfaction client"] },
      ]} />,
      cta: "Parlons de votre projet web et agents autonomes",
    },
    en: {
      title: "Web & Autonomous Agents",
      description: "Modern websites and autonomous AI agents to automate your business processes and enrich your digital presence.",
      intro: "Artificial intelligence is no longer limited to generating content: it can now act autonomously — answering a customer, qualifying a lead, updating a database — building on a modern website as the entry point.\n\nIO Software designs both building blocks together, for digital solutions that work for you, not just represent you.",
      body: <SectionGrid sections={[
        { title: "Autonomous agents", items: ["Design of AI agents able to execute multi-step tasks autonomously (customer support, lead qualification, monitoring, reporting)", "Integration with your existing tools (CRM, ERP, messaging, databases)", "Human oversight and guardrails: every agent stays under control, with defined action limits", "Architecture built on best practices (function calling, tool orchestration)"] },
        { title: "Web development", items: ["Modern, high-performance websites (Next.js, React, Tailwind CSS), fast and SEO-optimised", "Design and content built to convert, not just inform", "Hosting, security and maintenance handled for you", "A scalable foundation that grows with your needs and your agents"] },
        { title: "An integrated approach", items: ["A website that feeds an agent able to answer your visitors autonomously", "Automation of web workflows: forms, appointment booking, first-line support", "A single point of contact for the site and the agents that run it", "Measuring impact: time saved, conversion rate, customer satisfaction"] },
      ]} />,
      cta: "Let's talk about your web and autonomous agents project",
    },
  },
};

const relatedMap: Record<string, Record<Locale, { title: string; desc: string; href: string }[]>> = {
  "web-agents-autonomes": {
    fr: [{ title: "Développement logiciel", desc: "Le développement d'agents s'appuie sur les mêmes fondations techniques que nos applications sur mesure.", href: "/fr/services/developpement-logiciel" }, { title: "Process Mining", desc: "Identifiez d'abord les processus à automatiser avant de déployer vos agents autonomes.", href: "/fr/services/process-mining" }],
    en: [{ title: "Software Development", desc: "Agent development relies on the same technical foundations as our custom applications.", href: "/en/services/developpement-logiciel" }, { title: "Process Mining", desc: "Identify which processes to automate first before deploying your autonomous agents.", href: "/en/services/process-mining" }],
  },
};

export async function generateStaticParams() {
  return locales.flatMap((lang) =>
    Object.keys(content).map((slug) => ({ lang, slug }))
  );
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!hasLocale(lang) || !content[slug]) return {};
  const c = content[slug][lang as Locale];
  return {
    title: c.title,
    description: c.description,
    alternates: { canonical: `${BASE_URL}/${lang}/services/${slug}`, languages: { fr: `${BASE_URL}/fr/services/${slug}`, en: `${BASE_URL}/en/services/${slug}` } },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  if (!hasLocale(lang) || !content[slug]) notFound();

  const locale = lang as Locale;
  const c = content[slug][locale];
  const related = relatedMap[slug]?.[locale] ?? [];
  const backLabel = locale === "fr" ? "Services" : "Services";
  const sectionLabel = locale === "fr" ? "Nos services" : "Our services";
  const ctaDesc = locale === "fr" ? "Décrivez-nous votre contexte et nous vous proposerons une approche adaptée." : "Describe your context and we will propose an adapted approach.";
  const ctaBtn = locale === "fr" ? "Prendre contact →" : "Get in touch →";

  return (
    <>
      <section className="bg-[#1e3a5f] pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href={`/${lang}/services`} className="text-white hover:text-white/80 transition-colors">{backLabel}</Link>
            <span>/</span>
            <span className="text-white/80">{c.title}</span>
          </div>
          <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">{sectionLabel}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">{c.title}</h1>
          <p className="text-white/70 max-w-2xl leading-relaxed">{c.description}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {c.intro.includes("\n\n") ? (
            <>
              <blockquote className="border-l-2 border-[#c9a84c] pl-6 text-[#475569] italic mb-8 max-w-3xl">
                {c.intro.split("\n\n")[0]}
              </blockquote>
              <p className="text-[#475569] leading-relaxed max-w-3xl text-lg">{c.intro.split("\n\n")[1]}</p>
            </>
          ) : (
            <p className="text-[#475569] leading-relaxed max-w-3xl text-lg">{c.intro}</p>
          )}
        </div>
      </section>

      {c.body}

      {related.length > 0 && <RelatedServices services={related} lang={locale} />}

      <section className="bg-[#c9a84c] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{c.cta}</h2>
          <p className="text-white/80 mb-8">{ctaDesc}</p>
          <Link href={`/${lang}/contact`} className="inline-block bg-white text-[#1e3a5f] font-bold px-8 py-4 rounded-md hover:bg-[#f1f5f9] transition-colors">{ctaBtn}</Link>
        </div>
      </section>
    </>
  );
}
