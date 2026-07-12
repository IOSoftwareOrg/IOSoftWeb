export interface Logiciel {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  accentColor: string;
  icon: string;
  probleme: string;
  solution: string;
  fonctionnalites: { titre: string; description: string }[];
  profils: string[];
  benefices: { valeur: string; label: string }[];
  diagram?: string;
}

export const logiciels: Logiciel[] = [
  {
    slug: "finanalyzer",
    name: "FinAnalyzer",
    category: "Finance",
    tagline: "L'analyse financière au service des décideurs",
    description:
      "Outil d'analyse financière et de contrôle de gestion. Tableaux de bord, ratios, consolidation et reporting pour PME.",
    accentColor: "#3d5a80",
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
    accentColor: "#3f6857",
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
    diagram: `<svg viewBox="0 0 700 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="pm-diag-title pm-diag-desc" font-family="system-ui, sans-serif">
  <title id="pm-diag-title">Architecture Process Mining — SI vers Cloud Storage vers UiPath et Celonis</title>
  <desc id="pm-diag-desc">Le système SI pousse des événements horodatés (date début, date fin, nom activité) vers un Cloud Storage (AWS S3, GCS, Azure Blob, BigQuery). UiPath Process Mining et Celonis lisent ensuite cette source pour produire des cartes de processus, détecter les déviations et calculer les KPI.</desc>
  <rect width="700" height="360" fill="#f8fafc" rx="12"/>
  <text x="350" y="30" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Process Mining — SI › Cloud Storage › Analyse</text>
  <rect x="40" y="135" width="140" height="120" rx="10" fill="white" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="110" y="163" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">Système SI</text>
  <line x1="60" y1="173" x2="160" y2="173" stroke="#e2e8f0" stroke-width="1"/>
  <text x="110" y="193" text-anchor="middle" font-size="10" fill="#64748b">date_début</text>
  <text x="110" y="210" text-anchor="middle" font-size="10" fill="#64748b">date_fin</text>
  <text x="110" y="227" text-anchor="middle" font-size="10" fill="#64748b">nom_activité</text>
  <line x1="180" y1="195" x2="268" y2="195" stroke="#f97316" stroke-width="2" marker-end="url(#pm-a1)"/>
  <text x="224" y="185" text-anchor="middle" font-size="9" fill="#f97316">push data</text>
  <rect x="270" y="110" width="160" height="170" rx="10" fill="white" stroke="#fdba74" stroke-width="1.5"/>
  <text x="350" y="134" text-anchor="middle" font-size="12" font-weight="700" fill="#9a3412">Cloud Storage</text>
  <line x1="290" y1="144" x2="410" y2="144" stroke="#fde68a" stroke-width="1"/>
  <text x="290" y="163" font-size="9" font-weight="600" fill="#64748b">Exemples :</text>
  <text x="290" y="180" font-size="9" fill="#94a3b8">☁️  AWS S3</text>
  <text x="290" y="197" font-size="9" fill="#94a3b8">☁️  Google Cloud Storage</text>
  <text x="290" y="214" font-size="9" fill="#94a3b8">☁️  Azure Blob Storage</text>
  <text x="290" y="231" font-size="9" fill="#94a3b8">☁️  BigQuery / Redshift</text>
  <line x1="290" y1="243" x2="410" y2="243" stroke="#fde68a" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="290" y="258" font-size="9" fill="#64748b">→ vue exposée (CSV / SQL)</text>
  <line x1="430" y1="160" x2="518" y2="115" stroke="#6366f1" stroke-width="2" marker-end="url(#pm-a2)"/>
  <text x="484" y="127" text-anchor="middle" font-size="9" fill="#6366f1">lecture</text>
  <line x1="430" y1="230" x2="518" y2="275" stroke="#0ea5e9" stroke-width="2" marker-end="url(#pm-a3)"/>
  <text x="484" y="270" text-anchor="middle" font-size="9" fill="#0ea5e9">lecture</text>
  <rect x="520" y="60" width="140" height="120" rx="10" fill="white" stroke="#a5b4fc" stroke-width="1.5"/>
  <text x="590" y="88" text-anchor="middle" font-size="12" font-weight="700" fill="#3730a3">UiPath PM</text>
  <line x1="540" y1="98" x2="640" y2="98" stroke="#e0e7ff" stroke-width="1"/>
  <text x="590" y="118" text-anchor="middle" font-size="10" fill="#64748b">Carte de processus</text>
  <text x="590" y="135" text-anchor="middle" font-size="10" fill="#64748b">Déviations</text>
  <text x="590" y="152" text-anchor="middle" font-size="10" fill="#64748b">KPI / Bottlenecks</text>
  <rect x="520" y="210" width="140" height="120" rx="10" fill="white" stroke="#7dd3fc" stroke-width="1.5"/>
  <text x="590" y="238" text-anchor="middle" font-size="12" font-weight="700" fill="#075985">Celonis</text>
  <line x1="540" y1="248" x2="640" y2="248" stroke="#bae6fd" stroke-width="1"/>
  <text x="590" y="268" text-anchor="middle" font-size="10" fill="#64748b">Carte de processus</text>
  <text x="590" y="285" text-anchor="middle" font-size="10" fill="#64748b">Déviations</text>
  <text x="590" y="302" text-anchor="middle" font-size="10" fill="#64748b">KPI / Bottlenecks</text>
  <text x="110" y="278" text-anchor="middle" font-size="9" fill="#94a3b8">Producteur</text>
  <text x="350" y="302" text-anchor="middle" font-size="9" fill="#94a3b8">Stockage &amp; exposition</text>
  <text x="590" y="348" text-anchor="middle" font-size="9" fill="#94a3b8">Analyse &amp; visualisation</text>
  <defs>
    <marker id="pm-a1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#f97316"/></marker>
    <marker id="pm-a2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#6366f1"/></marker>
    <marker id="pm-a3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#0ea5e9"/></marker>
  </defs>
</svg>`,
  },
  {
    slug: "databridge",
    name: "DataBridge",
    category: "Data",
    tagline: "Vos données, enfin prêtes à être exploitées",
    description:
      "Connecteur et transformateur de données multi-sources. Agrégation, nettoyage et mise à disposition pour vos équipes BI.",
    accentColor: "#5b5a80",
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
