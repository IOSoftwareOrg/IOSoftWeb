import type { Locale } from "@/lib/i18n";
import { articles, getArticleTitle, getArticleExcerpt, getCategoryLabel } from "@/lib/articles";
import { logiciels } from "@/lib/logiciels";
import { logicielsSegment } from "@/lib/routes";

export interface SearchDoc {
  title: string;
  excerpt: string;
  category: string;
  url: string;
}

const staticPages: Record<Locale, SearchDoc[]> = {
  fr: [
    {
      title: "Accueil",
      excerpt: "Cabinet de conseil basé à Marseille. Stratégie, Organisation, Process, Data et IA.",
      category: "Page",
      url: "/fr",
    },
    {
      title: "Services",
      excerpt:
        "Conseil en Management, Stratégie, Finance d'entreprise, Data, Process Mining, Systèmes d'information, Rédaction technique et Développement logiciel.",
      category: "Page",
      url: "/fr/services",
    },
    {
      title: "Expertise",
      excerpt: "30 ans d'expérience en conseil. Banque, Luxe, Télécoms, Aéronautique.",
      category: "Page",
      url: "/fr/expertise",
    },
    {
      title: "Logiciels",
      excerpt: "IO Software éditeur de logiciels métier : FinAnalyzer, ProcessMap, DataBridge.",
      category: "Page",
      url: "/fr/logiciels",
    },
    {
      title: "Blog",
      excerpt: "Articles et ressources sur la finance, la stratégie, le management, le lean, le droit, l'économie et l'informatique.",
      category: "Page",
      url: "/fr/blog",
    },
    {
      title: "Contact",
      excerpt: "Contactez IO Software pour vos projets de stratégie, organisation, process, data ou IA.",
      category: "Page",
      url: "/fr/contact",
    },
  ],
  en: [
    {
      title: "Home",
      excerpt: "Consulting firm based in Marseille. Strategy, Organisation, Process, Data & AI.",
      category: "Page",
      url: "/en",
    },
    {
      title: "Services",
      excerpt:
        "Management Consulting, Strategy, Corporate Finance, Data, Process Mining, Information Systems, Technical Writing and Software Development.",
      category: "Page",
      url: "/en/services",
    },
    {
      title: "Expertise",
      excerpt: "30 years of consulting experience. Banking, Luxury, Telecoms, Aeronautics.",
      category: "Page",
      url: "/en/expertise",
    },
    {
      title: "Software",
      excerpt: "IO Software business software publisher: FinAnalyzer, ProcessMap, DataBridge.",
      category: "Page",
      url: "/en/software",
    },
    {
      title: "Blog",
      excerpt: "Articles and resources on finance, strategy, management, lean, law, economics and IT.",
      category: "Page",
      url: "/en/blog",
    },
    {
      title: "Contact",
      excerpt: "Contact IO Software for your strategy, organisation, process, data or AI projects.",
      category: "Page",
      url: "/en/contact",
    },
  ],
};

const services: Record<Locale, { slug: string; title: string; desc: string }[]> = {
  fr: [
    { slug: "conseil-en-management", title: "Conseil en Management", desc: "Accompagnement dans l'organisation des équipes, la gestion des ressources humaines et la transformation managériale." },
    { slug: "strategie-developpement", title: "Stratégie & Développement", desc: "Définition des orientations stratégiques, plans de développement commercial et accompagnement à la croissance durable." },
    { slug: "finance-entreprise", title: "Finance d'entreprise", desc: "Analyse financière, contrôle de gestion, corporate finance et accompagnement aux décisions d'investissement." },
    { slug: "data-consulting", title: "Data Consulting", desc: "Transformation de vos données en actifs stratégiques. Modélisation, analyse avancée et tableaux de bord." },
    { slug: "process-mining", title: "Process Mining", desc: "Analyse et optimisation de vos processus métier grâce à l'exploitation des logs systèmes." },
    { slug: "systemes-information", title: "Systèmes d'information", desc: "Conseil en architecture SI, choix des solutions logicielles, conduite du changement et audit." },
    { slug: "redaction-technique", title: "Rédaction technique", desc: "Production de documentations logicielles, manuels utilisateurs, spécifications fonctionnelles." },
    { slug: "developpement-logiciel", title: "Développement logiciel", desc: "Conception et développement d'applications sur mesure, éditeur de logiciels métier." },
    { slug: "web-agents-autonomes", title: "Web & Agents Autonomes", desc: "Sites web modernes couplés à des agents IA autonomes pour automatiser vos processus et votre relation client." },
  ],
  en: [
    { slug: "conseil-en-management", title: "Management Consulting", desc: "Support for team organisation, human resources management and managerial transformation." },
    { slug: "strategie-developpement", title: "Strategy & Development", desc: "Strategic direction setting, business development plans and sustainable growth support." },
    { slug: "finance-entreprise", title: "Corporate Finance", desc: "Financial analysis, management control, corporate finance and investment decision support." },
    { slug: "data-consulting", title: "Data Consulting", desc: "Transform your data into strategic assets. Modelling, advanced analysis and dashboards." },
    { slug: "process-mining", title: "Process Mining", desc: "Analyse and optimise your business processes by exploiting system logs." },
    { slug: "systemes-information", title: "Information Systems", desc: "IS architecture consulting, software selection, change management and IT audit." },
    { slug: "redaction-technique", title: "Technical Writing", desc: "Software documentation, user manuals, functional specifications in FR/EN." },
    { slug: "developpement-logiciel", title: "Software Development", desc: "Custom application design and development, business software publisher." },
    { slug: "web-agents-autonomes", title: "Web & Autonomous Agents", desc: "Modern websites paired with autonomous AI agents to automate your processes and customer relationship." },
  ],
};

const categoryLabel = {
  service: { fr: "Service", en: "Service" },
  software: { fr: "Logiciel", en: "Software" },
};

export function getSearchIndex(lang: Locale): SearchDoc[] {
  const docs: SearchDoc[] = [...staticPages[lang]];

  for (const s of services[lang]) {
    docs.push({
      title: s.title,
      excerpt: s.desc,
      category: categoryLabel.service[lang],
      url: `/${lang}/services/${s.slug}`,
    });
  }

  for (const l of logiciels) {
    docs.push({
      title: l.name,
      excerpt: l.tagline,
      category: categoryLabel.software[lang],
      url: `/${lang}/${logicielsSegment(lang)}/${l.slug}`,
    });
  }

  for (const a of articles) {
    docs.push({
      title: getArticleTitle(a, lang),
      excerpt: getArticleExcerpt(a, lang),
      category: getCategoryLabel(a.category, lang),
      url: `/${lang}/blog/${a.slug}`,
    });
  }

  return docs;
}
