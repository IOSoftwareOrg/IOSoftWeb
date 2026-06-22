export interface Logiciel {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  color: string;
  accentColor: string;
  icon: string;
  probleme: string;
  solution: string;
  fonctionnalites: { titre: string; description: string }[];
  profils: string[];
  benefices: { valeur: string; label: string }[];
}

export const logiciels: Logiciel[] = [
  {
    slug: "finanalyzer",
    name: "FinAnalyzer",
    category: "Finance",
    tagline: "L'analyse financière au service des décideurs",
    description:
      "Outil d'analyse financière et de contrôle de gestion. Tableaux de bord, ratios, consolidation et reporting pour PME.",
    color: "from-blue-500 to-blue-700",
    accentColor: "#3b82f6",
    icon: "📊",
    probleme:
      "Les PME passent des heures à consolider des données Excel disparates, à recalculer des ratios à la main et à produire des reportings qui sont déjà obsolètes au moment où ils sont présentés.",
    solution:
      "FinAnalyzer centralise vos données financières, calcule automatiquement vos indicateurs clés et génère vos reportings en temps réel. Vos décisions reposent enfin sur des chiffres fiables et actualisés.",
    fonctionnalites: [
      {
        titre: "Tableaux de bord temps réel",
        description:
          "Visualisez votre trésorerie, votre CA, vos marges et vos ratios d'un coup d'œil. Les indicateurs se mettent à jour automatiquement à chaque nouvelle donnée.",
      },
      {
        titre: "Analyse des ratios",
        description:
          "Calcul automatique de plus de 40 ratios financiers : liquidité, solvabilité, rentabilité, levier. Benchmarking sectoriel intégré.",
      },
      {
        titre: "Consolidation multi-entités",
        description:
          "Agrégez les données de vos filiales ou établissements en quelques clics. Élimination automatique des flux intra-groupe.",
      },
      {
        titre: "Reporting personnalisable",
        description:
          "Générez vos reportings mensuels, trimestriels et annuels aux formats PDF et Excel. Templates conformes aux normes comptables françaises.",
      },
      {
        titre: "Alertes et seuils",
        description:
          "Définissez vos seuils critiques (DSO, BFR, ratio de liquidité) et recevez des alertes automatiques avant que la situation ne se dégrade.",
      },
      {
        titre: "Prévisions et simulations",
        description:
          "Modélisez des scénarios (croissance, investissement, recrutement) et mesurez leur impact sur votre rentabilité et votre trésorerie.",
      },
    ],
    profils: [
      "Directeurs financiers de PME",
      "Contrôleurs de gestion",
      "Experts-comptables",
      "Dirigeants de TPE souhaitant piloter leur activité",
    ],
    benefices: [
      { valeur: "80%", label: "de temps gagné sur la production de reportings" },
      { valeur: "40+", label: "ratios financiers calculés automatiquement" },
      { valeur: "J+1", label: "disponibilité des données consolidées" },
    ],
  },
  {
    slug: "processmap",
    name: "ProcessMap",
    category: "Process Mining",
    tagline: "Révélez ce que vos processus cachent vraiment",
    description:
      "Visualisation et analyse de vos processus métier à partir des logs systèmes. Identifiez les dérives et optimisez vos flux.",
    color: "from-emerald-500 to-emerald-700",
    accentColor: "#10b981",
    icon: "🔍",
    probleme:
      "Vos processus théoriques ne ressemblent jamais à ce qui se passe réellement. Les goulots d'étranglement, les contournements et les inefficacités restent invisibles jusqu'à ce qu'ils coûtent trop cher.",
    solution:
      "ProcessMap extrait les traces numériques de vos systèmes (ERP, CRM, outils métiers) et les transforme en cartographies visuelles de vos processus réels. Vous voyez enfin l'écart entre ce que vous pensez faire et ce que vous faites.",
    fonctionnalites: [
      {
        titre: "Cartographie automatique",
        description:
          "Importez vos logs système et obtenez instantanément une carte visuelle de votre processus réel, avec toutes ses variantes et déviations.",
      },
      {
        titre: "Détection des goulots",
        description:
          "Identifiez automatiquement les étapes qui ralentissent vos flux, les temps d'attente anormaux et les ressources sous-utilisées.",
      },
      {
        titre: "Analyse de conformité",
        description:
          "Comparez votre processus réel à votre référentiel théorique. Mesurez le taux de conformité et identifiez les sources de dérive.",
      },
      {
        titre: "Analyse des cas",
        description:
          "Plongez dans chaque cas individuel pour comprendre pourquoi certaines instances suivent des chemins inhabituels.",
      },
      {
        titre: "Indicateurs de performance",
        description:
          "Mesurez automatiquement les temps de cycle, les taux de retraitement, les fréquences de passage et les coûts associés à chaque variante.",
      },
      {
        titre: "Simulation d'améliorations",
        description:
          "Testez l'impact de vos actions correctives avant de les déployer. Simulez différents scénarios et choisissez le plus efficace.",
      },
    ],
    profils: [
      "Responsables qualité et amélioration continue",
      "Directeurs des opérations",
      "Consultants en organisation",
      "DSI souhaitant optimiser leurs processus IT",
    ],
    benefices: [
      { valeur: "-30%", label: "de temps de cycle moyen après optimisation" },
      { valeur: "100%", label: "de visibilité sur vos processus réels" },
      { valeur: "2h", label: "pour générer une première cartographie complète" },
    ],
  },
  {
    slug: "databridge",
    name: "DataBridge",
    category: "Data",
    tagline: "Vos données, enfin prêtes à être exploitées",
    description:
      "Connecteur et transformateur de données multi-sources. Agrégation, nettoyage et mise à disposition pour vos équipes BI.",
    color: "from-violet-500 to-violet-700",
    accentColor: "#8b5cf6",
    icon: "🔗",
    probleme:
      "Vos données sont éparpillées entre votre ERP, votre CRM, vos fichiers Excel et vos applications métiers. Chaque analyse nécessite des heures d'extraction et de réconciliation manuelle, avec des risques d'erreurs à chaque étape.",
    solution:
      "DataBridge connecte toutes vos sources de données, les nettoie, les transforme et les met à disposition de vos équipes dans un format exploitable. Vos analystes passent moins de temps à préparer les données et plus de temps à les analyser.",
    fonctionnalites: [
      {
        titre: "Connecteurs natifs",
        description:
          "Connexion native avec les principaux ERP (SAP, Sage, Cegid), CRM (Salesforce, HubSpot), bases de données (MySQL, PostgreSQL, SQL Server) et fichiers plats.",
      },
      {
        titre: "Pipeline de transformation",
        description:
          "Définissez vos règles de transformation, de normalisation et d'enrichissement des données via une interface visuelle intuitive. Sans code.",
      },
      {
        titre: "Détection et correction d'anomalies",
        description:
          "Identification automatique des doublons, valeurs aberrantes, données manquantes et incohérences. Règles de correction configurables.",
      },
      {
        titre: "Orchestration et planification",
        description:
          "Planifiez vos pipelines de données (temps réel, batch horaire, quotidien). Alertes en cas d'échec ou d'anomalie détectée.",
      },
      {
        titre: "Data catalog intégré",
        description:
          "Documentez automatiquement vos sources, transformations et datasets. Vos équipes savent toujours d'où viennent les données et comment les interpréter.",
      },
      {
        titre: "API et export BI",
        description:
          "Exposez vos données via API REST ou connectez directement Power BI, Tableau, Metabase et tout outil BI du marché.",
      },
    ],
    profils: [
      "Data analysts et Data engineers",
      "Responsables BI et reporting",
      "DSI souhaitant moderniser leur architecture data",
      "Dirigeants voulant une vue consolidée de leur activité",
    ],
    benefices: [
      { valeur: "-70%", label: "de temps passé à préparer les données" },
      { valeur: "50+", label: "connecteurs sources disponibles" },
      { valeur: "99,9%", label: "de fiabilité sur les pipelines automatisés" },
    ],
  },
];

export function getLogicielBySlug(slug: string): Logiciel | undefined {
  return logiciels.find((l) => l.slug === slug);
}
