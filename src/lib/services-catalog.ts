import type { Locale } from "@/lib/i18n";

export type ServiceEntry = {
  slug: string;
  title: string;
  desc: string;
  tags: string[];
};

// Source unique de vérité pour les services proposés — utilisée à la fois par
// la page /services (affichage) et par le prompt système du chatbot (src/app/api/chat/route.ts),
// pour que l'agent connaisse automatiquement tout service ajouté/retiré ici.
export const servicesCatalog: Record<Locale, ServiceEntry[]> = {
  fr: [
    { slug: "strategie-developpement", title: "Stratégie & Développement", desc: "Définition des orientations stratégiques, plans de développement commercial et accompagnement à la croissance durable.", tags: ["Stratégie", "Commercial", "Croissance"] },
    { slug: "conseil-en-management", title: "Conseil en Management", desc: "Accompagnement dans l'organisation des équipes, la gestion des ressources humaines et la transformation managériale.", tags: ["Organisation", "RH", "Leadership"] },
    { slug: "finance-entreprise", title: "Finance d'entreprise", desc: "Analyse financière, contrôle de gestion, corporate finance et accompagnement aux décisions d'investissement.", tags: ["Corporate Finance", "Analyse", "Contrôle de gestion"] },
    { slug: "process-mining", title: "Process Mining", desc: "Analyse et optimisation de vos processus métier grâce à l'exploitation des logs systèmes.", tags: ["BPM", "Lean", "Automatisation"] },
    { slug: "data-consulting", title: "Data Consulting", desc: "Transformation de vos données en actifs stratégiques. Modélisation, analyse avancée et tableaux de bord.", tags: ["Data", "BI", "Analytics"] },
    { slug: "web-agents-autonomes", title: "Web & Agents Autonomes", desc: "Sites web modernes couplés à des agents IA autonomes pour automatiser vos processus et votre relation client.", tags: ["Agents IA", "Web", "Automatisation"] },
    { slug: "developpement-logiciel", title: "Développement logiciel", desc: "Conception et développement d'applications sur mesure, éditeur de logiciels métier.", tags: ["Développement", "Sur mesure", "Éditeur"] },
    { slug: "redaction-technique", title: "Rédaction technique", desc: "Production de documentations logicielles, manuels utilisateurs, spécifications fonctionnelles.", tags: ["Documentation", "Spécifications", "Manuels"] },
    { slug: "systemes-information", title: "Systèmes d'information", desc: "Conseil en architecture SI, choix des solutions logicielles, conduite du changement et audit.", tags: ["SI", "Architecture", "Audit"] },
  ],
  en: [
    { slug: "strategie-developpement", title: "Strategy & Development", desc: "Strategic direction setting, business development plans and sustainable growth support.", tags: ["Strategy", "Business", "Growth"] },
    { slug: "conseil-en-management", title: "Management Consulting", desc: "Support for team organisation, human resources management and managerial transformation.", tags: ["Organisation", "HR", "Leadership"] },
    { slug: "finance-entreprise", title: "Corporate Finance", desc: "Financial analysis, management control, corporate finance and investment decision support.", tags: ["Corporate Finance", "Analysis", "Control"] },
    { slug: "process-mining", title: "Process Mining", desc: "Analyse and optimise your business processes by exploiting system logs.", tags: ["BPM", "Lean", "Automation"] },
    { slug: "data-consulting", title: "Data Consulting", desc: "Transform your data into strategic assets. Modelling, advanced analysis and dashboards.", tags: ["Data", "BI", "Analytics"] },
    { slug: "web-agents-autonomes", title: "Web & Autonomous Agents", desc: "Modern websites paired with autonomous AI agents to automate your processes and customer relationship.", tags: ["AI Agents", "Web", "Automation"] },
    { slug: "developpement-logiciel", title: "Software Development", desc: "Custom application design and development, business software publisher.", tags: ["Development", "Custom", "Publisher"] },
    { slug: "redaction-technique", title: "Technical Writing", desc: "Software documentation, user manuals, functional specifications in FR/EN.", tags: ["Documentation", "Specifications", "Manuals"] },
    { slug: "systemes-information", title: "Information Systems", desc: "IS architecture consulting, software selection, change management and IT audit.", tags: ["IS", "Architecture", "Audit"] },
  ],
};
