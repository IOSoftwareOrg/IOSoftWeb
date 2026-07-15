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

function UseCaseCards({ heading, subheading, diagram, cases }: { heading: string; subheading: string; diagram?: string; cases: { title: string; flow: string[]; description: string }[] }) {
  return (
    <section className="pb-24 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">{heading}</span>
          <h2 className="text-3xl font-bold text-[#0f172a] mt-3">{subheading}</h2>
        </div>
        {diagram && (
          <div
            className="max-w-[680px] mx-auto mb-12 bg-white rounded-xl border border-[#e2e8f0] p-4 sm:p-6"
            dangerouslySetInnerHTML={{ __html: diagram }}
          />
        )}
        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((uc) => (
            <div key={uc.title} className="bg-white rounded-xl p-6 border border-[#e2e8f0]">
              <h3 className="font-bold text-[#0f172a] mb-3">{uc.title}</h3>
              <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#1e3a5f] font-medium mb-4">
                {uc.flow.map((step, i) => (
                  <span key={step} className="flex items-center gap-1.5">
                    <span className="bg-[#eef2f7] rounded-full px-2.5 py-1">{step}</span>
                    {i < uc.flow.length - 1 && <span className="text-[#c9a84c]">→</span>}
                  </span>
                ))}
              </div>
              <p className="text-sm text-[#64748b] leading-relaxed">{uc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const rdvAgentDiagramFr = `<svg viewBox="0 0 680 570" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="rdv-diag-title-fr rdv-diag-desc-fr" font-family="system-ui, sans-serif">
  <title id="rdv-diag-title-fr">Agent autonome de prise de rendez-vous — email et chatbot comme points d'entrée</title>
  <desc id="rdv-diag-desc-fr">Un email reçu ou une conversation avec le chatbot du site déclenchent tous deux la même analyse IA de la demande. L'agent consulte ensuite l'agenda Google ou Outlook, puis réserve automatiquement les créneaux sans ambiguïté ou propose des alternatives nécessitant une validation humaine — dans les deux cas, le rendez-vous finit dans l'agenda.</desc>
  <rect width="680" height="570" fill="#f8fafc" rx="12"/>
  <defs><marker id="rdv-arrow-fr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#94a3b8"/></marker></defs>
  <rect x="70" y="40" width="230" height="50" rx="10" fill="white" stroke="#e2e8f0" stroke-width="1.5"/>
  <text x="185" y="61" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">Email reçu</text>
  <text x="185" y="78" text-anchor="middle" font-size="10" fill="#64748b">Boîte surveillée</text>
  <rect x="380" y="40" width="230" height="50" rx="10" fill="white" stroke="#e2e8f0" stroke-width="1.5"/>
  <text x="495" y="61" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">Chatbot du site</text>
  <text x="495" y="78" text-anchor="middle" font-size="10" fill="#64748b">Visiteur qualifié</text>
  <line x1="185" y1="90" x2="278" y2="138" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#rdv-arrow-fr)"/>
  <line x1="495" y1="90" x2="402" y2="138" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#rdv-arrow-fr)"/>
  <rect x="235" y="140" width="210" height="50" rx="10" fill="white" stroke="#e2e8f0" stroke-width="1.5"/>
  <text x="340" y="161" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">Analyse de la demande</text>
  <text x="340" y="178" text-anchor="middle" font-size="10" fill="#64748b">Intention et contraintes</text>
  <line x1="340" y1="190" x2="340" y2="218" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#rdv-arrow-fr)"/>
  <rect x="227" y="220" width="226" height="50" rx="10" fill="white" stroke="#e2e8f0" stroke-width="1.5"/>
  <text x="340" y="241" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">Consultation de l'agenda</text>
  <text x="340" y="258" text-anchor="middle" font-size="10" fill="#64748b">Google ou Outlook Calendar</text>
  <line x1="340" y1="270" x2="340" y2="298" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#rdv-arrow-fr)"/>
  <rect x="228" y="300" width="224" height="50" rx="10" fill="white" stroke="#e2e8f0" stroke-width="1.5"/>
  <text x="340" y="321" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">Créneau clair ?</text>
  <text x="340" y="338" text-anchor="middle" font-size="10" fill="#64748b">Analyse des disponibilités</text>
  <line x1="340" y1="350" x2="178" y2="388" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#rdv-arrow-fr)"/>
  <line x1="340" y1="350" x2="502" y2="388" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#rdv-arrow-fr)"/>
  <rect x="57" y="390" width="226" height="50" rx="10" fill="#fdf6e6" stroke="#c9a84c" stroke-width="1.5"/>
  <text x="170" y="411" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">Réservation automatique</text>
  <text x="170" y="428" text-anchor="middle" font-size="10" fill="#8a6d1f">Créneau confirmé</text>
  <rect x="397" y="390" width="226" height="50" rx="10" fill="white" stroke="#e2e8f0" stroke-width="1.5"/>
  <text x="510" y="411" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">Proposition de créneaux</text>
  <text x="510" y="428" text-anchor="middle" font-size="10" fill="#64748b">Validation humaine</text>
  <line x1="170" y1="440" x2="278" y2="478" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#rdv-arrow-fr)"/>
  <line x1="510" y1="440" x2="402" y2="478" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#rdv-arrow-fr)"/>
  <rect x="223" y="480" width="234" height="50" rx="10" fill="#fdf6e6" stroke="#c9a84c" stroke-width="1.5"/>
  <text x="340" y="501" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">Rendez-vous dans l'agenda</text>
  <text x="340" y="518" text-anchor="middle" font-size="10" fill="#8a6d1f">Suivi automatique</text>
</svg>`;

const rdvAgentDiagramEn = `<svg viewBox="0 0 680 570" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="rdv-diag-title-en rdv-diag-desc-en" font-family="system-ui, sans-serif">
  <title id="rdv-diag-title-en">Autonomous appointment-booking agent — email and chatbot as entry points</title>
  <desc id="rdv-diag-desc-en">An email received or a conversation with the site's chatbot both trigger the same AI analysis of the request. The agent then checks the Google or Outlook calendar, and either books unambiguous slots automatically or proposes alternatives that require human validation — either way, the appointment ends up in the calendar.</desc>
  <rect width="680" height="570" fill="#f8fafc" rx="12"/>
  <defs><marker id="rdv-arrow-en" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#94a3b8"/></marker></defs>
  <rect x="70" y="40" width="230" height="50" rx="10" fill="white" stroke="#e2e8f0" stroke-width="1.5"/>
  <text x="185" y="61" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">Email received</text>
  <text x="185" y="78" text-anchor="middle" font-size="10" fill="#64748b">Monitored inbox</text>
  <rect x="380" y="40" width="230" height="50" rx="10" fill="white" stroke="#e2e8f0" stroke-width="1.5"/>
  <text x="495" y="61" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">Site chatbot</text>
  <text x="495" y="78" text-anchor="middle" font-size="10" fill="#64748b">Qualified visitor</text>
  <line x1="185" y1="90" x2="278" y2="138" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#rdv-arrow-en)"/>
  <line x1="495" y1="90" x2="402" y2="138" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#rdv-arrow-en)"/>
  <rect x="235" y="140" width="210" height="50" rx="10" fill="white" stroke="#e2e8f0" stroke-width="1.5"/>
  <text x="340" y="161" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">Request analysis</text>
  <text x="340" y="178" text-anchor="middle" font-size="10" fill="#64748b">Intent and constraints</text>
  <line x1="340" y1="190" x2="340" y2="218" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#rdv-arrow-en)"/>
  <rect x="227" y="220" width="226" height="50" rx="10" fill="white" stroke="#e2e8f0" stroke-width="1.5"/>
  <text x="340" y="241" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">Calendar check</text>
  <text x="340" y="258" text-anchor="middle" font-size="10" fill="#64748b">Google or Outlook Calendar</text>
  <line x1="340" y1="270" x2="340" y2="298" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#rdv-arrow-en)"/>
  <rect x="228" y="300" width="224" height="50" rx="10" fill="white" stroke="#e2e8f0" stroke-width="1.5"/>
  <text x="340" y="321" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">Clear slot?</text>
  <text x="340" y="338" text-anchor="middle" font-size="10" fill="#64748b">Availability check</text>
  <line x1="340" y1="350" x2="178" y2="388" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#rdv-arrow-en)"/>
  <line x1="340" y1="350" x2="502" y2="388" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#rdv-arrow-en)"/>
  <rect x="57" y="390" width="226" height="50" rx="10" fill="#fdf6e6" stroke="#c9a84c" stroke-width="1.5"/>
  <text x="170" y="411" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">Automatic booking</text>
  <text x="170" y="428" text-anchor="middle" font-size="10" fill="#8a6d1f">Slot confirmed</text>
  <rect x="397" y="390" width="226" height="50" rx="10" fill="white" stroke="#e2e8f0" stroke-width="1.5"/>
  <text x="510" y="411" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">Proposed time slots</text>
  <text x="510" y="428" text-anchor="middle" font-size="10" fill="#64748b">Human validation</text>
  <line x1="170" y1="440" x2="278" y2="478" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#rdv-arrow-en)"/>
  <line x1="510" y1="440" x2="402" y2="478" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#rdv-arrow-en)"/>
  <rect x="223" y="480" width="234" height="50" rx="10" fill="#fdf6e6" stroke="#c9a84c" stroke-width="1.5"/>
  <text x="340" y="501" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">Appointment in calendar</text>
  <text x="340" y="518" text-anchor="middle" font-size="10" fill="#8a6d1f">Automatic follow-up</text>
</svg>`;

const content: Record<string, Record<Locale, ServiceContent>> = {
  "web-agents-autonomes": {
    fr: {
      title: "Web & Agents Autonomes",
      description: "Sites web modernes et agents IA autonomes pour automatiser vos processus métier et enrichir votre présence digitale.",
      intro: "L'intelligence artificielle ne se limite plus à générer du contenu : elle peut désormais agir de façon autonome — répondre à un client, qualifier un prospect, mettre à jour une base de données — en s'appuyant sur un site web moderne comme point d'entrée.\n\nIO Software conçoit les deux briques ensemble, pour des solutions digitales qui travaillent pour vous, pas seulement qui vous représentent.",
      body: <>
        <SectionGrid sections={[
          { title: "Agents autonomes", items: ["Conception d'agents IA capables d'exécuter des tâches multi-étapes en autonomie (support client, qualification, veille, reporting)", "Intégration à vos outils existants (CRM, ERP, messagerie, bases de données)", "Supervision humaine et garde-fous : chaque agent reste sous contrôle, avec des limites d'action définies", "Architecture basée sur les meilleures pratiques (function calling, orchestration d'outils)"] },
          { title: "Développement web", items: ["Sites modernes et performants (Next.js, React, Tailwind CSS), rapides et optimisés SEO", "Design et contenu pensés pour convertir, pas seulement pour informer", "Hébergement, sécurité et maintenance pris en charge", "Une base évolutive qui grandit avec vos besoins et vos agents"] },
          { title: "Une approche intégrée", items: ["Un site vitrine qui alimente un agent capable de répondre à vos visiteurs en autonomie", "Automatisation des workflows web : formulaires, prises de rendez-vous, support de premier niveau", "Un seul interlocuteur pour le site et les agents qui l'animent", "Mesure de l'impact : temps gagné, taux de conversion, satisfaction client"] },
        ]} />
        <UseCaseCards
          key="use-cases"
          heading="Exemple concret"
          subheading="Un agent qui remplit votre agenda, quel que soit le canal"
          diagram={rdvAgentDiagramFr}
          cases={[
            { title: "Prise de rendez-vous par email", flow: ["Email reçu", "Analyse de la demande", "Consultation de l'agenda", "Réservation ou proposition"], description: "L'agent lit les demandes de rendez-vous reçues par email, comprend les contraintes (durée, disponibilités), consulte votre agenda Google ou Outlook et réserve directement les créneaux sans ambiguïté — sinon il propose des alternatives par retour d'email." },
            { title: "Prise de rendez-vous via le chatbot", flow: ["Visiteur sur le site", "Qualification du besoin", "Consultation de l'agenda", "Rendez-vous confirmé"], description: "Le chatbot présent sur ce site qualifie déjà les demandes entrantes. La même architecture peut aller plus loin et réserver directement un créneau dans votre agenda pendant la conversation — le visiteur repart avec un rendez-vous confirmé, sans email intermédiaire." },
          ]}
        />
      </>,
      cta: "Parlons de votre projet web et agents autonomes",
    },
    en: {
      title: "Web & Autonomous Agents",
      description: "Modern websites and autonomous AI agents to automate your business processes and enrich your digital presence.",
      intro: "Artificial intelligence is no longer limited to generating content: it can now act autonomously — answering a customer, qualifying a prospect, updating a database — building on a modern website as the entry point.\n\nIO Software designs both building blocks together, for digital solutions that work for you, not just represent you.",
      body: <>
        <SectionGrid sections={[
          { title: "Autonomous agents", items: ["Design of AI agents able to execute multi-step tasks autonomously (customer support, lead qualification, monitoring, reporting)", "Integration with your existing tools (CRM, ERP, messaging, databases)", "Human oversight and guardrails: every agent stays under control, with defined action limits", "Architecture built on best practices (function calling, tool orchestration)"] },
          { title: "Web development", items: ["Modern, high-performance websites (Next.js, React, Tailwind CSS), fast and SEO-optimised", "Design and content built to convert, not just inform", "Hosting, security and maintenance handled for you", "A scalable foundation that grows with your needs and your agents"] },
          { title: "An integrated approach", items: ["A website that feeds an agent able to answer your visitors autonomously", "Automation of web workflows: forms, appointment booking, first-line support", "A single point of contact for the site and the agents that run it", "Measuring impact: time saved, conversion rate, customer satisfaction"] },
        ]} />
        <UseCaseCards
          key="use-cases"
          heading="Concrete example"
          subheading="An agent that fills your calendar, whatever the channel"
          diagram={rdvAgentDiagramEn}
          cases={[
            { title: "Booking appointments by email", flow: ["Email received", "Request analysis", "Calendar check", "Booking or proposal"], description: "The agent reads appointment requests received by email, understands the constraints (duration, availability), checks your Google or Outlook calendar and books unambiguous slots directly — otherwise it proposes alternatives by email." },
            { title: "Booking appointments via the chatbot", flow: ["Visitor on the site", "Needs qualification", "Calendar check", "Appointment confirmed"], description: "The chatbot on this site already qualifies incoming requests. The same architecture can go further and book a slot directly in your calendar during the conversation — the visitor leaves with a confirmed appointment, no email round-trip needed." },
          ]}
        />
      </>,
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
          <Link href={`/${lang}/contact?subject=${encodeURIComponent(c.title)}`} className="inline-block bg-white text-[#1e3a5f] font-bold px-8 py-4 rounded-md hover:bg-[#f1f5f9] transition-colors">{ctaBtn}</Link>
        </div>
      </section>
    </>
  );
}
