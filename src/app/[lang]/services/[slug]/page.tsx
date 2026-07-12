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
            <div key={s.title} className="bg-[#f8fafc] rounded-2xl p-8 border border-[#e2e8f0]">
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
  "conseil-en-management": {
    fr: {
      title: "Conseil en Management",
      description: "Management des organisations, leadership et management interculturel.",
      intro: "Il s'agit d'identifier les traits de caractère des populations, de repérer les leaders sur lesquels vous pourrez vous appuyer, de contourner les jeux de pouvoir individuels et d'identifier les détenteurs d'influence — et parfois de définir une nouvelle culture d'entreprise.",
      body: <SectionGrid sections={[
        { title: "Management des organisations et des comportements", items: ["Définition de la culture d'entreprise", "Adaptation de l'organisation au sein de la structure", "Identification des jeux individuels : jeux d'alliance et de pouvoir", "Gestion du changement avec identification des leaders"] },
        { title: "Développer votre leadership", items: ["Participation à la manière de vivre des collaborateurs", "Compréhension mutuelle", "Éviter l'excès de stress", "Comment agir face à un « évitant » ?", "Comment agir face à un « histrionique » ?"] },
        { title: "Management interculturel", items: ["Identification des groupes culturels", "Définition des traits de caractères types des populations visées", "Gestion de l'expatriation (US, Europe, Asie)"] },
      ]} />,
      cta: "Parlons de votre projet de management",
    },
    en: {
      title: "Management Consulting",
      description: "Organisational management, leadership and intercultural management.",
      intro: "The goal is to identify the character traits of your teams, spot the leaders you can rely on, navigate individual power games and identify key influencers — and sometimes define a new corporate culture that your employees genuinely embrace.",
      body: <SectionGrid sections={[
        { title: "Organisational & behavioural management", items: ["Defining corporate culture", "Adapting the organisation within the structure", "Identifying individual games: alliances and power plays", "Change management with leader identification"] },
        { title: "Developing your leadership", items: ["Understanding how your teams live and work", "Mutual understanding", "Avoiding excessive stress", "How to manage an 'avoidant' personality?", "How to manage a 'histrionic' personality?"] },
        { title: "Intercultural management", items: ["Identifying cultural groups", "Defining typical character traits of target populations", "Managing expatriation (US, Europe, Asia)"] },
      ]} />,
      cta: "Let's talk about your management project",
    },
  },

  "strategie-developpement": {
    fr: {
      title: "Stratégie & Développement",
      description: "Analyse stratégique, SWOT, BCG, PESTEL et développement basé sur la data.",
      intro: "« Connaissez l'ennemi et connaissez vous vous-même ; en cent batailles vous ne courrez jamais aucun danger. » — Sun Tzu, L'Art de la guerre\n\nNotre activité de consulting en stratégie s'appuie sur une démarche cohérente inspirée des dernières méthodes d'analyse stratégique, enrichie par la puissance de la donnée. À l'issue de notre analyse, vous aurez une vision claire de l'avenir de votre entreprise.",
      body: <SectionGrid sections={[
        { title: "Notre démarche en 5 étapes", items: ["Segmentation stratégique de votre entreprise", "Analyse concurrentielle de chacun de vos domaines d'activités", "Construction de l'avantage compétitif durable", "Identification de nouvelles voies de développement stratégique", "Management d'un portefeuille diversifié d'activités"] },
        { title: "Outils stratégiques", items: ["Analyse SWOT enrichie par la data", "Matrice BCG et gestion du portefeuille produits", "Analyse PESTEL et anticipation de l'environnement", "KPI data-driven via Tableau ou Power BI"] },
        { title: "Le rôle central de la data", items: ["Analyse des données internes et externes", "Segmentation et positionnement basés sur la data", "Création de valeur grâce à la transformation des données en actions concrètes", "Culture d'entreprise orientée données"] },
      ]} />,
      cta: "Définissons ensemble votre stratégie",
    },
    en: {
      title: "Strategy & Development",
      description: "Strategic analysis, SWOT, BCG, PESTEL and data-driven development.",
      intro: "\"Know the enemy and know yourself; in a hundred battles you will never be in peril.\" — Sun Tzu, The Art of War\n\nOur strategy consulting approach is built on a coherent methodology inspired by the latest strategic analysis methods, enriched by the power of data. By the end of our analysis, you will have a clear vision of your company's future.",
      body: <SectionGrid sections={[
        { title: "Our 5-step approach", items: ["Strategic segmentation of your company", "Competitive analysis of each business area", "Building a sustainable competitive advantage", "Identifying new strategic development paths", "Managing a diversified portfolio of activities"] },
        { title: "Strategic tools", items: ["Data-enriched SWOT analysis", "BCG matrix and product portfolio management", "PESTEL analysis and environmental anticipation", "Data-driven KPIs via Tableau or Power BI"] },
        { title: "The central role of data", items: ["Analysis of internal and external data", "Data-based segmentation and positioning", "Value creation through transforming data into concrete actions", "Data-driven corporate culture"] },
      ]} />,
      cta: "Let's define your strategy together",
    },
  },

  "finance-entreprise": {
    fr: {
      title: "Finance d'entreprise",
      description: "Analyse financière, rentabilité, solvabilité et perspectives de développement.",
      intro: "La responsabilité du chef d'entreprise est d'assurer une gestion saine des finances de sa société et d'anticiper les investissements futurs pour mener à bien ses projets stratégiques. L'analyse financière permet d'établir la santé financière de l'entreprise autour de trois éléments : la rentabilité, la solvabilité et les perspectives de développement.",
      body: <SectionGrid sections={[
        { title: "Diagnostic économique", items: ["Analyse de l'environnement sectoriel et du marché", "Positionnement face à la concurrence", "Organisation interne et stratégie d'évolution", "Analyse des relations fournisseurs et partenaires"] },
        { title: "Diagnostic financier", items: ["Étude sur plusieurs exercices comptables", "Évolution du CA et des marges commerciales", "Seuil de rentabilité, BFR, CAF", "Politique de financement et structure de la dette", "Rentabilité (EBE) vs taux exigés"] },
        { title: "Conclusions & recommandations", items: ["Vision claire de la solvabilité de votre entreprise", "Analyse de la rentabilité et des marges", "Perspectives d'évolution et leviers de croissance", "Ratios sélectionnés selon votre secteur d'activité"] },
      ]} />,
      cta: "Analysons la santé financière de votre entreprise",
    },
    en: {
      title: "Corporate Finance",
      description: "Financial analysis, profitability, solvency and development perspectives.",
      intro: "A business leader's responsibility is to ensure sound financial management and anticipate future investments to achieve strategic goals. Financial analysis establishes your company's financial health across three dimensions: profitability, solvency and development prospects.",
      body: <SectionGrid sections={[
        { title: "Economic diagnosis", items: ["Analysis of the sector and market environment", "Competitive positioning", "Internal organisation and growth strategy", "Supplier and partner relationship analysis"] },
        { title: "Financial diagnosis", items: ["Study across multiple financial years", "Revenue and margin evolution", "Break-even point, working capital, self-financing capacity", "Financing policy and debt structure", "Profitability (EBITDA) vs required rates"] },
        { title: "Conclusions & recommendations", items: ["Clear view of your company's solvency", "Profitability and margin analysis", "Growth perspectives and key levers", "Ratios selected according to your sector"] },
      ]} />,
      cta: "Let's analyse your company's financial health",
    },
  },

  "data-consulting": {
    fr: {
      title: "Data Consulting",
      description: "Transformez vos données en actifs stratégiques.",
      intro: "Dans un monde où la donnée est devenue un moteur de transformation digitale, nous aidons les entreprises à collecter, traiter, analyser et valoriser leurs informations pour booster leur compétitivité et leur capacité d'innovation.",
      body: <SectionGrid sections={[
        { title: "Nos domaines d'intervention", items: ["Audit des données (ERP, CRM, IoT…)", "Architecture de données scalable (cloud, data lakes)", "Stratégie analytique et définition des KPIs", "Analyse prédictive et Intelligence Artificielle"] },
        { title: "L'impact concret", items: ["−20% de délais de production (analyse IoT)", "+15% de ventes (recommandations ML)", "−30% de fraudes (algorithmes machine learning)", "Décisions data-driven réduisant l'incertitude"] },
        { title: "Les étapes clés", items: ["Diagnostic initial de vos données disponibles", "Feuille de route alignée sur vos priorités métiers", "Déploiement Power BI, Tableau, AWS, Azure, Google Cloud", "Formation et accompagnement des équipes"] },
      ]} />,
      cta: "Transformez vos données en levier de croissance",
    },
    en: {
      title: "Data Consulting",
      description: "Transform your data into strategic assets.",
      intro: "In a world where data has become a driver of digital transformation, we help companies collect, process, analyse and leverage their information to boost competitiveness and innovation capacity.",
      body: <SectionGrid sections={[
        { title: "Our areas of intervention", items: ["Data audit (ERP, CRM, IoT…)", "Scalable data architecture (cloud, data lakes)", "Analytics strategy and KPI definition", "Predictive analysis and Artificial Intelligence"] },
        { title: "Concrete impact", items: ["−20% production delays (IoT analysis)", "+15% sales increase (ML recommendations)", "−30% fraud reduction (machine learning algorithms)", "Data-driven decisions reducing uncertainty"] },
        { title: "Key steps", items: ["Initial diagnosis of your available data", "Roadmap aligned with your business priorities", "Power BI, Tableau, AWS, Azure, Google Cloud deployment", "Team training and support"] },
      ]} />,
      cta: "Transform your data into a growth lever",
    },
  },

  "process-mining": {
    fr: {
      title: "Process Mining",
      description: "Cartographiez et optimisez vos processus métiers.",
      intro: "Le Process Mining est une approche innovante qui permet d'extraire des informations à partir des données d'événements de votre organisation pour analyser et optimiser ses processus métiers. Nous travaillons avec deux leaders du marché : UIPath et Celonis.",
      body: <SectionGrid sections={[
        { title: "Les étapes du Process Mining", items: ["Collecte des données : extraction des logs (ERP, CRM…)", "Modélisation : création de modèles de processus visuels", "Analyse : identification des inefficacités et divergences", "Optimisation : mise en œuvre des recommandations"] },
        { title: "UIPath — Automatisation & Process Mining", items: ["Cartographie des processus et zones d'automatisation", "Recommandations IA pour réduire les temps d'exécution", "Visualisation en continu des améliorations en temps réel"] },
        { title: "Celonis — Leader en Process Mining", items: ["Discovery des processus à partir des données SI", "Optimisation et prédiction avec algorithmes avancés", "Intégration native ERP (SAP, etc.)"] },
      ]} />,
      cta: "Optimisez vos processus avec le Process Mining",
    },
    en: {
      title: "Process Mining",
      description: "Map and optimise your business processes.",
      intro: "Process Mining is an innovative approach that extracts information from your organisation's event data to analyse and optimise business processes. We work with two market leaders: UIPath and Celonis.",
      body: <SectionGrid sections={[
        { title: "The Process Mining steps", items: ["Data collection: log extraction (ERP, CRM…)", "Modelling: creating visual process models", "Analysis: identifying inefficiencies and deviations", "Optimisation: implementing recommendations"] },
        { title: "UIPath — Automation & Process Mining", items: ["Process mapping and automation opportunity identification", "AI recommendations to reduce execution times", "Real-time continuous improvement visualisation"] },
        { title: "Celonis — Process Mining Leader", items: ["Process discovery from IS data", "Optimisation and prediction with advanced algorithms", "Native ERP integration (SAP, etc.)"] },
      ]} />,
      cta: "Optimise your processes with Process Mining",
    },
  },

  "systemes-information": {
    fr: {
      title: "Systèmes d'information",
      description: "Maintenance informatique et alignement SI. MOA et MOE.",
      intro: "Nous intervenons en MOA aussi bien qu'en MOE et prenons en charge tous vos projets, de leurs lignes budgétaires à leur réalisation.",
      body: <SectionGrid sections={[
        { title: "Maintenance informatique", items: ["Ordinateurs de bureau et portables", "Imprimantes et périphériques", "Réseaux locaux (LAN et WAN)", "Mises à niveau logicielles et antivirus", "Sécurité avancée et surf anonyme"] },
        { title: "Alignement du système d'information", items: ["Mise en place de sauvegardes, Datamarts, Big Data", "Data Gouvernance et Data Quality", "ERP (Enterprise Resource Planning)", "BPM (Business Process Management)", "Modélisation de processus et Process Mining"] },
        { title: "Accompagnement global", items: ["Conseil en choix de matériel", "Formation à la prise en main des nouveaux outils", "Sécurisation du système informatique", "MOA : définition des besoins et pilotage", "MOE : réalisation technique et mise en production"] },
      ]} />,
      cta: "Parlons de votre système d'information",
    },
    en: {
      title: "Information Systems",
      description: "IT maintenance and IS alignment. Business and technical project management.",
      intro: "We act as both business owner (MOA) and technical implementer (MOE), taking full responsibility for your projects from budget lines to delivery.",
      body: <SectionGrid sections={[
        { title: "IT maintenance", items: ["Desktop computers and laptops", "Printers and peripherals", "Local networks (LAN and WAN)", "Software updates and antivirus", "Advanced security and anonymous browsing"] },
        { title: "Information system alignment", items: ["Backup systems, Datamarts, Big Data", "Data Governance and Data Quality", "ERP (Enterprise Resource Planning)", "BPM (Business Process Management)", "Process modelling and Process Mining"] },
        { title: "Full support", items: ["Hardware selection consulting", "Training on new tools", "IT system security", "MOA: requirements definition and project steering", "MOE: technical implementation and go-live"] },
      ]} />,
      cta: "Let's talk about your information system",
    },
  },

  "redaction-technique": {
    fr: {
      title: "Rédaction technique",
      description: "Documentation bilingue FR/EN. Normes ISO/IEC 82079, S1000D, DITA XML.",
      intro: "Professionnels de la communication technique et de la documentation logicielle depuis plus de 20 ans pour de grands éditeurs, nous concevons et mettons à jour votre documentation utilisateurs en anglais et en français.",
      body: <SectionGrid sections={[
        { title: "Rédaction multilingue", items: ["Maîtrise native du français", "Anglais professionnel après immersion en environnement anglo-saxon", "Traductions FR ↔ EN avec double compétence linguistique", "Lisibilité et adaptation au lecteur cible"] },
        { title: "Rédaction normée", items: ["ISO/IEC 82079", "S1000D", "ATA 2300", "Format DITA XML", "Best practices selon les exigences clients"] },
        { title: "Types de documents", items: ["Documentations administrateur de logiciels", "Manuels utilisateurs et modes d'emploi", "Spécifications fonctionnelles et techniques", "Contenus SEO et web grand public"] },
      ]} />,
      cta: "Parlons de votre projet de documentation",
    },
    en: {
      title: "Technical Writing",
      description: "Bilingual FR/EN documentation. ISO/IEC 82079, S1000D, DITA XML standards.",
      intro: "Technical communication and software documentation professionals for over 20 years, working for major publishers. We design and update your user documentation in both English and French.",
      body: <SectionGrid sections={[
        { title: "Multilingual writing", items: ["Native French proficiency", "Professional English after immersion in Anglo-Saxon environments", "FR ↔ EN translation with dual linguistic expertise", "Readability and adaptation to the target reader"] },
        { title: "Standards-compliant writing", items: ["ISO/IEC 82079", "S1000D", "ATA 2300", "DITA XML format", "Client best practices and style guides"] },
        { title: "Document types", items: ["Software administrator documentation", "User manuals and operating instructions", "Functional and technical specifications", "SEO content and general public materials"] },
      ]} />,
      cta: "Let's talk about your documentation project",
    },
  },

  "developpement-logiciel": {
    fr: {
      title: "Développement logiciel",
      description: "Applications sur mesure, sites internet par l'IA et logiciels métier.",
      intro: "IO Software développe une expertise dans le développement logiciel grâce à son centre de compétences. De l'application métier sur mesure à la création de sites internet assistée par l'IA, nous couvrons l'ensemble du cycle de développement.",
      body: <SectionGrid sections={[
        { title: "Notre centre de compétences", items: ["Applications métier sur mesure", "Intégrations et APIs", "Maintenance et évolutions", "De la spécification au déploiement"] },
        { title: "Création de sites internet par l'IA", items: ["Sites modernes et optimisés SEO générés par IA", "Design et contenu assistés par IA, validés par nos experts", "Développement Next.js, React, Tailwind CSS", "Optimisation continue via analyse IA des performances"] },
        { title: "Logiciels métier", items: ["FinAnalyzer — analyse financière", "ProcessMap — cartographie de processus", "WebForge — sites web et agents autonomes", "Solutions conçues pour les besoins réels des entreprises"] },
      ]} />,
      cta: "Parlons de votre projet de développement",
    },
    en: {
      title: "Software Development",
      description: "Custom applications, AI-powered websites and business software.",
      intro: "IO Software develops software expertise through its centre of competence. From custom business applications to AI-assisted website creation, we cover the entire development lifecycle.",
      body: <SectionGrid sections={[
        { title: "Our centre of competence", items: ["Custom business applications", "Integrations and APIs", "Maintenance and feature evolution", "From specification to deployment"] },
        { title: "AI-powered website creation", items: ["Modern SEO-optimised websites generated by AI", "AI-assisted design and content, validated by our experts", "Next.js, React, Tailwind CSS development", "Continuous optimisation via AI performance analysis"] },
        { title: "Business software", items: ["FinAnalyzer — financial analysis", "ProcessMap — process mapping", "WebForge — websites and autonomous agents", "Solutions designed for real enterprise needs"] },
      ]} />,
      cta: "Let's talk about your development project",
    },
  },

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
  "conseil-en-management": {
    fr: [{ title: "Stratégie & Développement", desc: "Définissez vos orientations stratégiques après avoir consolidé votre organisation.", href: "/fr/services/strategie-developpement" }, { title: "Finance d'entreprise", desc: "Pilotez la performance financière de votre structure.", href: "/fr/services/finance-entreprise" }],
    en: [{ title: "Strategy & Development", desc: "Set your strategic direction after consolidating your organisation.", href: "/en/services/strategie-developpement" }, { title: "Corporate Finance", desc: "Drive the financial performance of your structure.", href: "/en/services/finance-entreprise" }],
  },
  "strategie-developpement": {
    fr: [{ title: "Finance d'entreprise", desc: "Toute stratégie repose sur une analyse financière solide.", href: "/fr/services/finance-entreprise" }, { title: "Data Consulting", desc: "Enrichissez votre démarche stratégique avec des insights data.", href: "/fr/services/data-consulting" }],
    en: [{ title: "Corporate Finance", desc: "Every strategy rests on solid financial analysis.", href: "/en/services/finance-entreprise" }, { title: "Data Consulting", desc: "Enrich your strategic approach with data insights.", href: "/en/services/data-consulting" }],
  },
  "finance-entreprise": {
    fr: [{ title: "Stratégie & Développement", desc: "L'analyse financière est le socle de toute décision stratégique.", href: "/fr/services/strategie-developpement" }, { title: "Data Consulting", desc: "Transformez vos données financières en tableaux de bord.", href: "/fr/services/data-consulting" }],
    en: [{ title: "Strategy & Development", desc: "Financial analysis is the foundation of every strategic decision.", href: "/en/services/strategie-developpement" }, { title: "Data Consulting", desc: "Transform your financial data into actionable dashboards.", href: "/en/services/data-consulting" }],
  },
  "data-consulting": {
    fr: [{ title: "Process Mining", desc: "Exploitez les logs de vos systèmes pour visualiser vos processus.", href: "/fr/services/process-mining" }, { title: "Systèmes d'information", desc: "Une architecture SI solide est la condition pour exploiter vos données.", href: "/fr/services/systemes-information" }],
    en: [{ title: "Process Mining", desc: "Exploit system logs to visualise your processes.", href: "/en/services/process-mining" }, { title: "Information Systems", desc: "A solid IS architecture is the prerequisite for exploiting your data.", href: "/en/services/systemes-information" }],
  },
  "process-mining": {
    fr: [{ title: "Data Consulting", desc: "Le Process Mining génère des données précieuses à exploiter stratégiquement.", href: "/fr/services/data-consulting" }, { title: "Systèmes d'information", desc: "Alignez vos outils SI pour des analyses fiables.", href: "/fr/services/systemes-information" }],
    en: [{ title: "Data Consulting", desc: "Process Mining generates valuable data to exploit strategically.", href: "/en/services/data-consulting" }, { title: "Information Systems", desc: "Align your IS tools for reliable analysis.", href: "/en/services/systemes-information" }],
  },
  "systemes-information": {
    fr: [{ title: "Process Mining", desc: "Exploitez les logs de votre SI pour cartographier vos processus.", href: "/fr/services/process-mining" }, { title: "Développement logiciel", desc: "Complétez votre SI avec des applications sur mesure.", href: "/fr/services/developpement-logiciel" }],
    en: [{ title: "Process Mining", desc: "Exploit IS logs to map your business processes.", href: "/en/services/process-mining" }, { title: "Software Development", desc: "Complement your IS with custom applications.", href: "/en/services/developpement-logiciel" }],
  },
  "redaction-technique": {
    fr: [{ title: "Systèmes d'information", desc: "Une documentation rigoureuse s'appuie sur une architecture SI maîtrisée.", href: "/fr/services/systemes-information" }, { title: "Développement logiciel", desc: "Nous documentons les logiciels que nous développons.", href: "/fr/services/developpement-logiciel" }],
    en: [{ title: "Information Systems", desc: "Rigorous documentation relies on a mastered IS architecture.", href: "/en/services/systemes-information" }, { title: "Software Development", desc: "We document the software we develop.", href: "/en/services/developpement-logiciel" }],
  },
  "developpement-logiciel": {
    fr: [{ title: "Systèmes d'information", desc: "Assurez l'alignement entre vos outils et vos nouveaux logiciels.", href: "/fr/services/systemes-information" }, { title: "Process Mining", desc: "Analysez vos processus actuels pour concevoir des solutions adaptées.", href: "/fr/services/process-mining" }],
    en: [{ title: "Information Systems", desc: "Ensure alignment between your tools and new software.", href: "/en/services/systemes-information" }, { title: "Process Mining", desc: "Analyse your current processes to design the right solutions.", href: "/en/services/process-mining" }],
  },
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
