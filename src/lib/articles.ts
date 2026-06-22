export type Category =
  | "Finance"
  | "Contrôle de gestion"
  | "Stratégie"
  | "Marketing"
  | "Lean Management"
  | "Droit"
  | "Économie"
  | "Informatique"
  | "Management";

export interface Article {
  slug: string;
  title: string;
  category: Category;
  date: string;
  excerpt: string;
  content: string;
}

export const articles: Article[] = [
  {
    slug: "claude-anthropic-best-practices",
    title: "Claude (Anthropic) : les bonnes pratiques pour en tirer le meilleur",
    category: "Informatique",
    date: "22 juin 2026",
    excerpt:
      "System prompt, choix du modèle, gestion des tokens, prompt caching, thinking adaptatif — le guide des best practices pour exploiter Claude efficacement et maîtriser vos coûts.",
    content: `## Claude, bien plus qu'un chatbot

Depuis l'émergence de Claude chez Anthropic, les entreprises qui l'intègrent dans leurs processus se retrouvent rapidement face au même constat : les résultats varient énormément selon la façon dont on l'utilise. Un prompt mal structuré, un modèle mal choisi, des tokens gaspillés — et la facture grimpe sans que la valeur suive.

Ce guide synthétise les bonnes pratiques essentielles pour tirer le meilleur de l'API Claude, que vous l'utilisiez pour automatiser des tâches internes, alimenter une application ou accélérer votre production de contenu.

## 1. Choisir le bon modèle

Anthropic propose plusieurs modèles avec des profils très différents en termes de performance, vitesse et coût :

| Modèle | Usage recommandé | Contexte |
|---|---|---|
| **Claude Opus 4.8** | Tâches complexes, agents longs, raisonnement avancé | 1M tokens |
| **Claude Sonnet 4.6** | Meilleur équilibre vitesse/intelligence | 1M tokens |
| **Claude Haiku 4.5** | Tâches simples, classification, latence critique | 200K tokens |

**Règle d'or :** ne pas systématiquement utiliser le modèle le plus puissant. Une classification de documents ou une extraction de données ne nécessite pas Opus — Haiku fera le travail en 5 à 10 fois moins cher.

### Tarification indicative (juin 2026)

- Opus 4.8 : 5 $/MTok en entrée, 25 $/MTok en sortie
- Sonnet 4.6 : 3 $/MTok en entrée, 15 $/MTok en sortie
- Haiku 4.5 : 1 $/MTok en entrée, 5 $/MTok en sortie

## 2. Structurer son system prompt

Le system prompt est l'instruction permanente donnée au modèle avant toute conversation. C'est là que se joue l'essentiel de la qualité des résultats.

### Ce qui fonctionne

**Donner un rôle précis :**
> "Tu es un assistant spécialisé en analyse financière pour PME. Tu rédiges toujours en français professionnel et tu fournis des chiffres sourcés."

**Fixer le format de sortie attendu :**
> "Réponds toujours en JSON avec les clés : titre, résumé (max 2 phrases), points_clés (liste de 3 à 5 éléments)."

**Définir les limites :**
> "Tu ne réponds qu'aux questions liées à la comptabilité et à la gestion d'entreprise. Pour toute autre question, indique poliment que ce n'est pas ton domaine."

### Ce qu'il faut éviter

- Les instructions vagues ("Sois utile", "Fais de ton mieux")
- Les system prompts trop longs et répétitifs — le modèle se perd
- Les doubles injonctions contradictoires ("Sois concis mais détaillé")
- Le langage impératif excessif : sur les modèles récents (Opus 4.6+), "IMPORTANT : TU DOIS ABSOLUMENT" provoque du sur-déclenchement. Préférez simplement "Utilise cet outil quand..."

## 3. Maîtriser les tokens

Les tokens sont l'unité de facturation. Un token correspond environ à 3/4 d'un mot en français. Quelques repères :

- 1 000 mots ≈ 1 300 tokens
- Une page A4 de texte ≈ 600 tokens
- Un fichier PDF de 10 pages ≈ 6 000 tokens

### Paramètre `max_tokens`

Ce paramètre limite la longueur de la réponse générée. **Ne le sous-estimez pas** : si le modèle atteint la limite, il s'arrête brutalement en pleine phrase.

Recommandations :
- Requêtes courtes (classification, extraction) : 256 à 1 024 tokens
- Réponses conversationnelles : 4 000 à 8 000 tokens
- Génération de documents : 16 000 à 64 000 tokens (nécessite le streaming au-delà de ~16 000)

### Streaming pour les longues réponses

Au-delà de ~16 000 tokens de sortie, activez le streaming pour éviter les timeouts HTTP. Le modèle commence à répondre immédiatement et vous lisez la réponse au fur et à mesure.

## 4. Le Prompt Caching : réduire les coûts de 90 %

C'est probablement la fonctionnalité la plus sous-utilisée de l'API Claude. Le prompt caching permet de mettre en cache les parties stables de vos prompts et de les réutiliser entre les requêtes à seulement **10 % du prix normal**.

### Comment ça fonctionne

Le cache est un préfixe : tout ce qui précède un marqueur `cache_control` est mis en cache. Les requêtes suivantes identiques à ce préfixe sont servies à tarif réduit.

\`\`\`json
{
  "system": [
    {
      "type": "text",
      "text": "Votre system prompt de 10 000 tokens...",
      "cache_control": { "type": "ephemeral" }
    }
  ]
}
\`\`\`

**Ce qu'il faut garder en tête :**
- Le cache est valide 5 minutes (ou 1 heure avec `"ttl": "1h"`)
- Toute modification du texte avant le marqueur invalide tout le cache
- **Ne jamais mettre une date ou un ID dynamique dans le system prompt** — cela casse le cache à chaque requête
- Maximum 4 marqueurs de cache par requête

### Cas d'usage idéaux

- System prompt long avec documentation métier intégrée
- Applications multi-tours (conversations longues)
- Traitement de documents volumineux partagés entre plusieurs requêtes

## 5. Le Thinking adaptatif

Disponible sur Opus 4.6+, Sonnet 4.6 et Opus 4.8, le thinking adaptatif laisse Claude décider seul s'il doit "réfléchir" avant de répondre — et combien de temps.

\`\`\`json
{
  "thinking": { "type": "adaptive" },
  "output_config": { "effort": "high" }
}
\`\`\`

### Les niveaux d'effort

| Niveau | Usage |
|---|---|
| `low` | Tâches simples, latence critique |
| `medium` | Équilibre coût/qualité |
| `high` | Raisonnement complexe (défaut recommandé) |
| `max` | Problèmes les plus difficiles, coût élevé |

**À retenir :** ne pas confondre thinking adaptatif et température. Depuis Opus 4.7, les paramètres `temperature`, `top_p` et `top_k` ont été supprimés — les envoyer déclenche une erreur 400. La profondeur de raisonnement se contrôle uniquement via `effort`.

## 6. Les outputs structurés

Pour extraire des données fiables, utilisez les outputs structurés plutôt que de parser du texte libre.

\`\`\`json
{
  "output_config": {
    "format": {
      "type": "json_schema",
      "schema": {
        "type": "object",
        "properties": {
          "nom": { "type": "string" },
          "montant": { "type": "number" },
          "categorie": { "type": "string", "enum": ["achat", "vente", "remboursement"] }
        },
        "required": ["nom", "montant", "categorie"],
        "additionalProperties": false
      }
    }
  }
}
\`\`\`

Résultat garanti valide, parsable sans post-traitement. Idéal pour l'extraction automatisée de données depuis des documents, emails ou formulaires.

## 7. Gestion des erreurs et des refus

Claude peut refuser une requête (`stop_reason: "refusal"`) — les classifiers de sécurité peuvent parfois rejeter des contenus légitimes dans des domaines comme la cybersécurité ou les sciences du vivant.

**Toujours vérifier `stop_reason` avant de lire la réponse :**

\`\`\`python
if response.stop_reason == "refusal":
    # Le contenu est vide ou partiel — ne pas utiliser
    gerer_refus()
else:
    traiter_reponse(response.content[0].text)
\`\`\`

Les autres valeurs importantes :
- `end_turn` — réponse normale
- `max_tokens` — limite atteinte, augmentez `max_tokens` ou passez en streaming
- `tool_use` — le modèle veut appeler un outil
- `pause_turn` — le modèle a fait une pause (agents longs), relancez la requête

## 8. Checklist avant mise en production

Avant de déployer une intégration Claude, validez ces points :

- [ ] **Modèle adapté** au niveau de complexité de la tâche
- [ ] **System prompt** testé et validé sur des cas réels
- [ ] **`max_tokens`** correctement dimensionné (ni trop bas, ni gaspillé)
- [ ] **Prompt caching** activé sur les parties statiques du prompt
- [ ] **Outputs structurés** pour les extractions de données
- [ ] **Gestion du `stop_reason`** dans le code
- [ ] **Streaming** activé pour les réponses > 16 000 tokens
- [ ] **Pas de données dynamiques** (dates, IDs) dans le system prompt

## Conclusion

Intégrer Claude efficacement, c'est d'abord comprendre sa logique de facturation et calibrer chaque paramètre en fonction de l'usage réel. Un audit de vos prompts existants révèle souvent des gains de 50 à 80 % sur les coûts — sans perte de qualité.

*IO Software accompagne les entreprises dans l'intégration et l'optimisation de leurs workflows IA. [Contactez-nous](/contact) pour un audit de vos intégrations Claude.*`,
  },
  {
    slug: "ia-management-adapter-organisation",
    title: "IA et management : comment les dirigeants doivent adapter leur organisation",
    category: "Management",
    date: "22 juin 2026",
    excerpt:
      "L'intelligence artificielle redistribue les cartes du management. Ce n'est pas une révolution technologique à confier à la DSI — c'est une transformation organisationnelle que les dirigeants doivent piloter eux-mêmes.",
    content: `## L'IA n'est pas un sujet informatique

C'est l'erreur la plus fréquente dans les organisations : déléguer l'IA à la direction des systèmes d'information comme on délègue l'installation d'un ERP. L'intelligence artificielle n'est pas un outil de plus. Elle reconfigure les processus de décision, redistribue les compétences, modifie les rapports hiérarchiques et transforme la valeur attendue de chaque collaborateur.

Un dirigeant qui laisse son DSI "gérer le sujet IA" prend le risque de voir une transformation pilotée par des contraintes techniques plutôt que par une vision stratégique. **L'IA est d'abord un choix de management.**

## Ce que l'IA change concrètement dans l'organisation

### 1. La prise de décision se déplace vers le bas

Les outils d'IA permettent à des collaborateurs de niveau intermédiaire d'accéder à des analyses qui nécessitaient auparavant l'intervention d'experts. Un responsable commercial peut modéliser des scénarios de pricing. Un chef de projet peut anticiper des risques avec des données en temps réel.

Conséquence directe : **le rôle du manager intermédiaire évolue**. Il ne centralise plus l'information — il devient un architecte de contexte, capable de cadrer les décisions prises plus bas dans l'organisation.

### 2. Certaines tâches à forte valeur apparente disparaissent

La rédaction de rapports, la synthèse de données, la veille concurrentielle, la production de comptes-rendus — autant de tâches qui justifiaient des postes entiers et qui peuvent désormais être partiellement automatisées.

Ce n'est pas une menace pour l'emploi en tant que telle. C'est une **requalification forcée** : les collaborateurs qui s'appuient sur ces tâches pour justifier leur valeur doivent monter en abstraction. Analyser, décider, convaincre, innover — ce sont les compétences que l'IA ne remplace pas (encore).

### 3. La supervision humaine devient une compétence stratégique

L'IA produit des outputs. Elle ne les valide pas. Elle n'assume pas la responsabilité d'une décision. Elle n'a pas de jugement éthique ni de connaissance du contexte politique interne à une organisation.

Le nouveau compétence clé du manager à l'ère de l'IA : **savoir critiquer intelligemment ce que la machine produit**. Identifier le biais, repérer l'hallucination, comprendre pourquoi le modèle se trompe. C'est un métier en soi.

## Les trois erreurs classiques des dirigeants face à l'IA

### Erreur n°1 : attendre que la technologie soit "mûre"

La technologie est déjà là. ChatGPT, Copilot, Claude, Gemini — ces outils sont utilisés par vos collaborateurs, avec ou sans votre accord. La question n'est plus "faut-il adopter l'IA ?" mais "comment l'encadrer pour qu'elle serve votre stratégie plutôt qu'elle ne la court-circuite ?"

### Erreur n°2 : lancer un "projet IA" transversal sans sponsor exécutif

Un groupe de travail sans pouvoir de décision ni budget propre produit généralement des slides. Une transformation IA réussie nécessite un sponsor au niveau CODIR, un périmètre défini et des indicateurs de succès mesurables.

### Erreur n°3 : ne pas former le management intermédiaire en premier

Les directions générales investissent dans des formations pour les équipes techniques et oublient les managers de proximité — ceux qui vont devoir gérer la résistance au changement, réorganiser les process, rassurer les équipes. C'est une erreur fatale.

## Par où commencer : un cadre en trois étapes

**Étape 1 — Cartographier les processus à fort potentiel d'automatisation**
Identifiez dans votre organisation les tâches répétitives à haute fréquence, les processus de reporting chronophages, les flux d'information manuels. Ce sont vos premiers chantiers IA.

**Étape 2 — Définir votre posture de gouvernance**
Qui décide quels outils sont autorisés ? Quelles données peuvent être utilisées ? Comment gérer la confidentialité ? Une charte IA, même simple, est indispensable avant tout déploiement.

**Étape 3 — Piloter un projet pilote avec un périmètre limité**
Choisissez un processus, une équipe volontaire, un horizon de 3 mois. Mesurez le gain de temps, l'impact sur la qualité, la réaction des équipes. Puis capitalisez et étendez.

## Conclusion

L'IA ne va pas remplacer les dirigeants. Elle va révéler ceux qui savent s'en emparer comme levier stratégique et ceux qui la subissent comme une contrainte externe. La transformation organisationnelle qu'elle impose n'est pas optionnelle — mais son succès dépend entièrement de la qualité du pilotage humain qui l'accompagne.

*IO Software accompagne les dirigeants dans la définition de leur stratégie IA et la transformation de leur organisation. [Contactez-nous](/contact) pour en discuter.*`,
  },
  {
    slug: "takt-time-optimise-gerer-backlog-demandes",
    title: "Takt Time optimisé : Gérer un Backlog de Demandes",
    category: "Lean Management",
    date: "17 mars 2025",
    excerpt:
      "Comment aligner le rythme de résolution des demandes sur le volume d'arrivée dans un service support, en utilisant le concept du Takt Time pour éviter l'accumulation d'un backlog.",
    content: `## Introduction

Dans un service support, la gestion du **Takt Time** permet d'aligner le rythme de résolution des demandes sur le volume d'arrivée, évitant ainsi l'accumulation d'un backlog. Contrairement à une chaîne de production physique, où chaque produit suit un cycle précis, le support client doit jongler avec des demandes de complexité variable et des temps de traitement fluctuants.

## 1. Adapter la Définition du Takt Time au Service Support

En production, le calcul se formule comme suit :

**Takt Time = Temps de travail disponible / Volume de demandes**

Dans un service support :
- **Temps de travail disponible** = Nombre d'heures de support par jour × Nombre d'agents
- **Volume de demandes** = Nombre de tickets entrants par jour

**Exemple pratique :** Un service support fonctionne 8 heures par jour (28 800 secondes) avec 5 agents, et reçoit 200 demandes par jour.

Calcul : (28 800 × 5) / 200 = 720 secondes (12 minutes) par demande.

Cela signifie qu'idéalement, chaque demande doit être traitée en 12 minutes pour éviter l'accumulation d'un backlog.

## 2. Problèmes liés à un Mauvais Takt Time en Support

- **Takt Time trop long** : L'équipe ne résout pas assez rapidement les demandes, créant un backlog et des délais d'attente pour les clients.
- **Takt Time trop court** : Les agents sont sous pression, ce qui peut entraîner une baisse de la qualité du service.
- **Variabilité des demandes** : Certaines requêtes sont simples (mot de passe oublié), d'autres complexes (analyse de panne technique).

## 3. Stratégies pour Améliorer le Takt Time en Service Support

### a) Segmentation des Tickets et Priorisation

Plutôt que d'appliquer un Takt Time uniforme, il est pertinent de **segmenter les tickets** en plusieurs catégories :

- **Tickets simples** (mot de passe, accès bloqué, FAQ) → Résolution rapide (< 5 min)
- **Tickets techniques standards** (problème logiciel courant) → Résolution intermédiaire (10-15 min)
- **Tickets complexes** (incident critique, bug technique important) → Plus de temps (> 30 min)

### b) Automatisation et Self-Service

- Mettre en place un **chatbot** ou une **FAQ interactive** pour traiter les requêtes simples en autonomie
- Utiliser un **système de routage intelligent** pour assigner les tickets en fonction de la spécialisation des agents

### c) Gestion Dynamique des Ressources

- **Polyvalence des agents** : Former les agents à plusieurs types de tickets
- **Flexibilité des équipes** : Ajuster les effectifs en fonction des heures de pic et de creux

### d) Amélioration Continue et Monitoring

- Suivi en temps réel du backlog et du Takt Time moyen par catégorie
- Analyse des tendances : Identifier les périodes où le backlog augmente
- Retours d'expérience : Organiser des revues régulières pour identifier les blocages

## 4. Cas Pratique : Optimisation du Takt Time dans un Centre de Support IT

Un service IT reçoit en moyenne 500 tickets par semaine et constate un backlog croissant de 150 tickets.

L'analyse révèle que :
- 40 % des tickets concernent des **problèmes répétitifs** → Mise en place d'une FAQ et d'un chatbot
- Certains agents sont **spécialisés sur un seul type de ticket** → Formation croisée
- Les **demandes complexes bloquent le flux** → Création d'un escalier de priorisation

## Conclusion

L'optimisation du **Takt Time en support** repose sur une gestion intelligente des ressources, une automatisation efficace et une priorisation des tâches. En réduisant les temps d'attente et en fluidifiant le traitement des demandes, on améliore la satisfaction client tout en réduisant la charge des équipes.`,
  },
  {
    slug: "couts-variables-gestion-entreprise",
    title: "Coûts Variables : Un Éclairage Essentiel pour la Gestion d'Entreprise",
    category: "Contrôle de gestion",
    date: "20 novembre 2024",
    excerpt:
      "Les coûts variables fluctuent directement selon le niveau d'activité. Leur maîtrise est essentielle pour calculer le seuil de rentabilité et la marge sur coût variable.",
    content: `## Qu'est-ce qu'un coût variable ?

Un coût variable représente une dépense fluctuant directement selon le niveau d'activité ou de production. Par exemple, dans la fabrication, les matières premières et l'énergie augmentent proportionnellement à la quantité produite. Contrairement aux coûts fixes comme le loyer ou les salaires administratifs, ces dépenses ne surviennent que lors de la production ou des ventes.

## Pourquoi sont-ils importants ?

Les coûts variables permettent une adaptation rapide aux variations économiques. Lorsque la demande diminue, ces coûts baissent automatiquement, protégeant ainsi la trésorerie. Leur gestion efficace est essentielle pour calculer des indicateurs stratégiques comme le seuil de rentabilité et la marge sur coût variable.

## Exemples de coûts variables

1. **Coûts directs de production :** matières premières, emballages
2. **Coûts liés aux ventes :** commissions, frais de livraison
3. **Coûts énergétiques :** électricité et gaz de production

Il est important de distinguer ces éléments des coûts indirects variables, nécessitant une allocation spécifique.

## Utilisation stratégique

Une analyse des coûts variables permet de :

- Évaluer la rentabilité des produits et services
- Optimiser les prix de vente
- Planifier les investissements

Un suivi précis de ces données, associé à un bon contrôle de gestion, facilite l'identification de leviers pour réduire les dépenses superflues et augmenter la compétitivité.

## Conclusion

Maîtriser les coûts variables offre la flexibilité nécessaire pour s'adapter aux fluctuations du marché et maximiser la rentabilité. Une comptabilité analytique bien structurée demeure essentielle pour intégrer ces données dans la stratégie globale.`,
  },
  {
    slug: "controle-de-gestion-pilier-performance",
    title: "Le Contrôle de Gestion : Un Pilier pour la Performance et la Pérennité des Entreprises",
    category: "Contrôle de gestion",
    date: "19 novembre 2024",
    excerpt:
      "Le contrôle de gestion est un outil stratégique indispensable pour piloter les organisations vers leurs objectifs, combinant maîtrise des coûts et optimisation des ressources.",
    content: `## Introduction

Dans un contexte économique instable, le contrôle de gestion représente un outil stratégique indispensable pour piloter les organisations vers leurs objectifs. Cette fonction combine maîtrise des coûts, optimisation des ressources et prévention des défis futurs.

## Définition et Missions Principales

Le contrôle de gestion constitue une fonction centrale chargée d'examiner, organiser et surveiller les résultats organisationnels. Son objectif fondamental demeure d'assurer l'utilisation efficace des ressources pour atteindre les buts stratégiques.

Les responsabilités clés englobent :

- **Planification** : Création de budgets et fixation d'objectifs financiers et opérationnels
- **Surveillance des résultats** : Comparaison entre prévisions et réalisations
- **Aide décisionnelle** : Fourniture d'indicateurs de performance clés orientant les choix stratégiques

## Outils Fondamentaux

Le contrôleur de gestion utilise plusieurs instruments :

1. **Budgets** : Définissent les prévisions et permettent les comparaisons
2. **Tableaux de bord** : Visualisent les indicateurs clés de performance
3. **Analyse des coûts** : Détecte les inefficacités opérationnelles
4. **Prévisions** : Anticipent les tendances futures

## Importance Stratégique

Cette fonction demeure essentielle pour :

- Augmenter l'efficacité des ressources et diminuer les dépenses inutiles
- Renforcer la profitabilité et minimiser les risques
- Prévoir les obstacles futurs grâce à des instruments prévisionnels
- Maintenir la cohérence entre les opérations et la stratégie

## Accompagnement IO Software

IO Software accompagne les structures en mettant en place des outils personnalisés, en réalisant des analyses financières et en modernisant les processus de contrôle de gestion.`,
  },
  {
    slug: "bilan-fin-annee-retraitement",
    title: "Bilan de fin d'année : Retraitement et améliorations",
    category: "Finance",
    date: "10 décembre 2015",
    excerpt:
      "Présenter correctement un bilan de fin d'année est crucial pour en extraire les informations essentielles à son analyse. Tour d'horizon des mécanismes de retraitement.",
    content: `## Le Bilan

Présenter correctement un bilan de fin d'année est crucial pour en extraire les informations essentielles à son analyse. Les analystes financiers accèdent aux données publiées des entreprises en début d'année pour en tirer des conclusions pertinentes.

## Retraitement du Bilan

Le retraitement du bilan n'est jamais publié, mais connaître ses mécanismes signifie que "les bonnes décisions ont été prises en amont."

### Étapes du retraitement

**Suppression des éléments fictifs :**
- Éliminer les actifs fictifs (frais d'établissements, primes de remboursements, écarts de conversion)
- Mise à jour des capitaux propres

**Réévaluations :**
- Immobilisations financières et fonds de commerce

**Crédit-bail :** Transformé en immobilisation avec amortissement et frais financiers

**EENE (Effets Escomptés Non Échus) :** Reclassé en créance client avec contrepartie en dette de trésorerie

### Ajustements complémentaires

- Trésorerie négative → Dettes de trésorerie
- Dividendes → Dettes hors exploitation
- Résultat → Réserves
- Subventions → Dettes financières
- Provisions long terme → Fonds propres
- Provisions court terme → Dettes hors exploitation

## Structure du Bilan Retraité

| **ACTIF (Emplois)** | **PASSIF (Ressources)** |
|---|---|
| Valeurs Immobilisations Nettes (VIN) | Capitaux Propres (Kp) |
| Besoin en Fond de Roulement (BFR) | Dettes financières (DF) |
| Trésorerie | Dettes Hors Exploitation |

## Indicateurs clés

**Fonds de Roulement (FR) :** FR = Kp + DF – VIN
- Indicateur d'équilibre financier général
- Si FR > BFR → trésorerie positive

**BFR :** Stocks + créances clients – dettes fournisseurs – dettes exploitation
- Apprécié en jours de chiffre d'affaires
- Croît avec le CA et sa maîtrise est délicate en croissance forte

## Principes de pilotage

- Maintenir un fonds de roulement positif
- Maîtriser le BFR en période de forte croissance
- Comprendre que la trésorerie excédentaire a un coût
- Assurer que les capitaux propres couvrent la dette`,
  },
  {
    slug: "clause-de-ratchet",
    title: "La clause de Ratchet",
    category: "Finance",
    date: "23 août 2013",
    excerpt:
      "Quand des investisseurs acquièrent des actions dans une jeune entreprise, ils demandent souvent une clause de Ratchet pour se protéger d'une dilution lors des tours de table suivants.",
    content: `## La clause contractuelle de Ratchet

Quand des investisseurs acquièrent des actions dans une jeune entreprise, ils paient généralement un "goodwill" — un prix supérieur aux actions des fondateurs en raison de la croissance réalisée. En contrepartie, ces investisseurs demandent souvent une clause de Ratchet.

### Fonctionnement du mécanisme

Lors d'un tour de table ultérieur, l'entreprise émettra au profit des premiers investisseurs de nouvelles actions supplémentaires à un prix peu élevé pour maintenir leur participation. Cet ajustement dilue immédiatement les parts des fondateurs.

### Exemple concret

**Situation initiale :**
- 1 000 000 actions à 1 € pour les fondateurs (56%)
- 800 000 actions à 10 € pour les investisseurs (44%)

**Après second tour sans Ratchet :**
- Fondateurs : 36%
- Investisseurs : 26%
- Nouveau fonds : 36%

**Avec clause de Ratchet activée :**

Le mécanisme crée une cascade : chaque réajustement provoque d'autres réajustements. Finalement :
- Fondateurs : 6% (dilution drastique)
- Investisseurs : 58%
- Fonds : 36%

### Limitation possible

Une "clause de pay-to-play" peut restreindre l'exercice du Ratchet aux seuls investisseurs participant aux nouvelles levées de fonds.

## Points de vigilance pour les fondateurs

La clause de Ratchet est un mécanisme de protection pour les investisseurs mais peut s'avérer très pénalisante pour les fondateurs en cas de down round. Il est crucial de négocier les conditions d'activation et les plafonds de dilution dès le premier tour de table.`,
  },
  {
    slug: "effet-de-levier-financier",
    title: "Levier financier : Comment s'endetter pour le maximiser ?",
    category: "Finance",
    date: "10 juillet 2013",
    excerpt:
      "L'effet de levier établit la liaison mathématique entre ROE et ROCE. Quand positif, l'endettement amplifie la rentabilité des fonds propres.",
    content: `## Introduction

L'article explore pourquoi les actionnaires cherchent à endetter leur entreprise et explique le concept d'effet de levier. Les sociétés disposent de deux documents clés : le Compte de Résultat et le Bilan Comptable, qui permettent d'évaluer si les investissements des actionnaires sont rentabilisés.

## La Rentabilité des Fonds Propres

Le ROE (Return On Equity) mesure la somme que les actionnaires pensent retirer pour tout euro investi dans une société.

**Formule:** ROE = Résultat Net / Capitaux Propres

Le Résultat Net doit être analysé avec prudence, car des éléments exceptionnels peuvent le biaiser. Les Capitaux Propres représentent la valeur nette des actifs et servent de garantie aux créanciers.

## La Rentabilité Économique

Le ROCE (Return On Capital Employed) mesure la rentabilité économique réelle.

**Formule:** ROCE = EBE / Capital Économique

L'EBE (Excédent Brut d'Exploitation) exclut les amortissements. Le capital économique comprend les immobilisations et le Besoin en Fonds de Roulement (BFR).

## L'Effet de Levier

L'effet de levier établit la liaison mathématique entre ROE et ROCE, répondant à la question : "Comment maximiser le rendement de mes capitaux propres ?"

**Formule:** ROE = ROCE + (ROCE – Rd) × L × (1–%IS)

**Où:**
- **L** = Effet de levier (< 1)
- **Rd** = Coût de la dette
- **IS** = Impôts sur les sociétés

Quand positif, l'endettement amplifie la rentabilité. Quand le ROCE est inférieur au coût de la dette, l'effet joue négativement.

## Conclusion

L'endettement crée du risque sans créer de valeur réelle — mais bien maîtrisé, il amplifie significativement la rentabilité des fonds propres. La clé est de s'assurer que le ROCE reste supérieur au coût de la dette.`,
  },
  {
    slug: "introduction-strategie-entreprise",
    title: "Introduction à la stratégie d'entreprise",
    category: "Stratégie",
    date: "10 juillet 2013",
    excerpt:
      "Peter Drucker définit la stratégie comme l'art de faire face à son destin. Deux paramètres déterminent le succès : les moyens financiers et le facteur temps.",
    content: `## La Stratégie

Peter Drucker définit la stratégie comme "l'art de faire face à son destin." Cette vision représente la manière dont vous envisagez votre entreprise dans les années à venir. Les dirigeants doivent se poser des questions essentielles : souhaitez-vous vous développer à l'international ? Envisagez-vous de créer de nouvelles gammes de produits ?

En tant que chef d'entreprise, il est crucial de développer votre activité avec une perspective à moyen et long terme, en anticipant les évolutions du marché et en planifiant votre trajectoire future.

Il n'existe pas de stratégie intrinsèquement bonne ou mauvaise. Le choix d'une direction dépend entièrement du contexte et des objectifs spécifiques de votre organisation.

## Les critères d'une stratégie réussie

Deux paramètres essentiels déterminent le succès d'une stratégie :

1. **Moyens financiers** : disposez-vous des ressources nécessaires pour concrétiser vos ambitions ?
2. **Facteur temps** : dans un environnement concurrentiel en perpétuelle mutation, avez-vous suffisamment de temps pour implémenter votre vision ?

## La dimension humaine

La stratégie comporte également une dimension responsable. Un échec stratégique peut affecter les salariés, leurs familles et l'équilibre économique de l'entreprise. Il est impératif de considérer les enjeux humains au-delà des simples calculs financiers.

La mise en œuvre d'une stratégie solide doit permettre la croissance durable, l'enrichissement de l'entreprise et la prospérité de ses collaborateurs.`,
  },
  {
    slug: "les-couts-definition-principes",
    title: "Les coûts dans l'entreprise : Définition et principes",
    category: "Contrôle de gestion",
    date: "16 novembre 2015",
    excerpt:
      "Un coût représente la quantité monétaire d'une consommation de ressources utilisée dans un but précis. Tour d'horizon des typologies : variables, fixes, directs, indirects.",
    content: `## Introduction

Un coût représente "la quantité monétaire d'une consommation de ressources utilisée dans un but précis." Le terme seul manque de clarté, nécessitant quatre critères importants :

- **Pourquoi** : l'objectif du calcul
- **Périmètre** : étendue du processus de production et découpage organisationnel
- **Moment** : système de reporting et fréquence de calcul
- **Contenu** : types de coûts inclus

### Charges incorporables vs non-incorporables

Le coût combine différentes charges comptables. Les charges "non-incorporables" sont exclues car sortant du champ normal d'exploitation, comme les provisions pour litige. Chaque entreprise détermine ses propres critères d'incorporabilité.

## Objectif du calcul de coûts

Son calcul, communément appelé comptabilité analytique, sert à éclairer la prise de décision et à mesurer la performance de l'entreprise.

## Périmètre organisationnel

La délimitation des frontières organisationnelles dépend de la structure : par entité économique, unités productives ou holdings selon les besoins des dirigeants.

## Typologies de coûts

**Coûts variables** : varient avec le niveau d'activité de l'entreprise

**Coûts fixes** : demeurent constants indépendamment du volume d'activité, bien qu'ils évoluent par paliers (exemple : un nouveau bâtiment nécessaire pour augmenter la capacité)

**Coûts directs** : affectés directement à un objet de coûts sans calcul intermédiaire (exemple : matière première spécifique)

**Coûts indirects** : nécessitent une répartition préalable (exemple : ressources humaines ou comptabilité)`,
  },
  {
    slug: "le-marketing-definition",
    title: "Le marketing (Tentative de définition)",
    category: "Marketing",
    date: "26 avril 2017",
    excerpt:
      "Le marketing est la fonction de gestion de l'organisation qui traite des relations avec les publics de l'organisation. Il ne crée pas de besoins mais influence les désirs.",
    content: `## Définition du Marketing

> "Le marketing est la fonction de gestion de l'organisation qui traite des relations avec les publics de l'organisation."

## Conclusions des Exemples

1. Le marketing s'applique à toute organisation ayant un public
2. Ce public est diversifié selon le contexte
3. On cherche à influencer les comportements et attitudes en utilisant des techniques basées sur une connaissance approfondie des publics

## Déclinaisons Sectorielles

**Commerce** : ensemble de méthodes visant à vendre des produits de manière rentable

**Humanitaire** : ensemble de méthodes incitant citoyens, organisations et États à se mobiliser politiquement et financièrement

**Arts** : ensemble de méthodes favorisant la diffusion d'œuvres et l'éducation artistique

## Focus Client

Le marketing examine les besoins du client sous différentes formes :
- **Exprimés** (ce qu'il dit)
- **Réels** (ce qu'il veut dire)
- **Latents** (ce à quoi il ne pense pas)
- **Imaginaux** (ce dont il rêverait)
- **Profonds** (ce qui le motive secrètement)

## Point Clé

> "Le marketing ne crée pas de besoins mais influence les désirs !"

Cette distinction fondamentale entre besoin et désir est au cœur de toute stratégie marketing efficace.`,
  },
  {
    slug: "windows-10-mises-a-jour",
    title: "Windows 10 : Éviter les mises à jour intempestives",
    category: "Informatique",
    date: "4 mai 2017",
    excerpt:
      "Guide pratique pour désactiver ou gérer manuellement les mises à jour automatiques de Windows 10 via le Gestionnaire de Services.",
    content: `## Introduction

Il existe plusieurs raisons pouvant justifier de retarder les mises à jour de Windows 10 : par manque de temps, à cause d'une bande passante trop faible ou tout simplement par volonté de ne pas les effectuer. Cependant, effectuer les mises à jour reste le meilleur moyen d'avoir un ordinateur sécurisé et au meilleur de ses caractéristiques.

## Stopper les mises à jour Windows 10

1. Accédez à la zone de recherche Windows et tapez **"services"** pour lancer le Gestionnaire de Services
2. Repérez le service **"Windows Update"**
3. Effectuez un clic-droit et sélectionnez **"Propriétés"**
4. Dans la fenêtre qui s'ouvre, réglez le Type de démarrage sur **"Désactiver"**
5. Redémarrez l'ordinateur

**Résultat :** Windows 10 n'effectuera plus de mises à jour.

## Choisir les mises à jour à effectuer manuellement

1. Accédez aux propriétés de Windows Update
2. Réglez le type de démarrage sur **"Manuel"** et démarrez le service
3. Recherchez "Mises à jour" dans la zone de recherche Windows
4. Sélectionnez **"Consulter les mises à jour"**
5. Recherchez et sélectionnez uniquement les mises à jour souhaitées

## Recommandation

Même si vous souhaitez contrôler les mises à jour, il est conseillé d'installer régulièrement les mises à jour de sécurité. Ces dernières protègent votre système contre les vulnérabilités connues et les cyberattaques.`,
  },
  {
    slug: "open-source",
    title: "Open Source : Déploiement et développement pérenne",
    category: "Informatique",
    date: "31 août 2016",
    excerpt:
      "Les logiciels open-source offrent désormais les mêmes garanties de stabilité et de qualité que les logiciels payants. IO Software se spécialise dans leur implémentation.",
    content: `## Définition de l'Open Source

Les logiciels open-source sont des programmes gratuits redistribuables qui permettent aux développeurs d'accéder au code source pour modifier les fonctionnalités. Parmi les exemples les plus populaires figurent les systèmes d'exploitation Linux, comme Ubuntu, qui sont une excellente alternative à Microsoft Windows.

## IO Software et l'Open Source

IO Software s'est spécialisée depuis plusieurs années dans l'implémentation de solutions open-source. L'entreprise considère que l'open-source offre désormais les mêmes garanties de stabilité et de qualité que les logiciels payants.

### Approche Stratégique aux Coûts

IO Software base sa démarche de conseil sur la réduction des coûts informatiques. L'entreprise souligne que :

- Le prix de vente ne doit pas nécessairement correspondre au coût de revient plus une marge
- Il est important de distinguer les coûts fixes des coûts variables
- Il faut identifier les coûts cachés

### Solutions Proposées

Forte d'une expérience de plus de 20 ans, IO Software propose le déploiement de solutions open-source incluant :

- Systèmes d'exploitation Linux
- Gestion de relation client (CRM)
- Comptabilité
- Gestion des stocks
- Sites vitrines et e-commerce
- Statistiques et veille concurrentielle
- Connecteurs personnalisés

Les principales plateformes utilisées incluent **Odoo**, **Magento**, **WordPress** et **PrestaShop**.`,
  },
  {
    slug: "securiser-son-site-internet",
    title: "Sécuriser son site internet : Pensez à tout !",
    category: "Informatique",
    date: "19 août 2016",
    excerpt:
      "Lors de la création d'un site internet, la sécurisation est essentielle. Sauvegardes, base de données, protection des URLs d'administration — le guide complet.",
    content: `## Introduction

Lors de la création d'un site internet, la sécurisation est essentielle pour prévenir les pertes de données et les accès non autorisés. Bien que l'hébergeur soit responsable de l'infrastructure, c'est aux propriétaires de site de mettre en place des protections supplémentaires.

Une intrusion malveillante peut rendre un site complètement inutilisable, d'où l'importance de pouvoir restaurer rapidement le fonctionnement antérieur.

## Structure des sites CMS

La plupart des sites utilisent un **CMS** (système de gestion de contenu) comme WordPress, Joomla, Prestashop ou Drupal. Une architecture CMS comporte deux éléments clés :

### Les fichiers
Les fichiers stockés chez l'hébergeur sont exécutés ou lus à chaque appel au site via son adresse.

### La base de données
Un logiciel hébergé stockant les données nécessaires au fonctionnement du CMS, notamment les utilisateurs et leurs droits d'accès.

## Stratégies de sécurisation

### Sécuriser les fichiers
Une sauvegarde régulière via FTP vers un ordinateur personnel est impérative. Certains hébergeurs conservent un historique permettant une restauration à J-1 ou J-2.

### Sécuriser la base de données
La sauvegarde utilise des outils fournis par l'hébergeur. La plupart emploient MySQL avec phpMyAdmin.

### Sécuriser les URLs d'administration

Chaque CMS possède une interface d'administration spécifique (exemple : wp-admin pour WordPress). La protection s'effectue via :

1. Création d'un fichier \`.htaccess\` avec règles d'authentification
2. Création d'un fichier \`.htpasswd\` contenant les identifiants encodés en MD5
3. Placement des fichiers dans le répertoire concerné par FTP

Cette double authentification empêche l'accès non autorisé à l'interface administrative.`,
  },
  {
    slug: "securite-achats-sur-internet",
    title: "Sécurité informatique : vos achats sur internet",
    category: "Informatique",
    date: "30 novembre 2013",
    excerpt:
      "Pour faire vos achats en ligne en toute confiance : HTTPS, phishing, stockage des données bancaires — les bonnes pratiques à adopter.",
    content: `## La sécurité informatique

Pour faire vos achats en ligne en toute confiance, privilégiez les sites établis et méfiez-vous des plateformes situées en dehors de l'Union Européenne. Soyez particulièrement vigilant avec les sites de paiement qui stockent vos données bancaires.

## HTTPS, un moyen efficace de protection

Lors du paiement, vérifiez que l'URL commence par **"https"** et qu'un petit cadenas fermé apparaît dans votre navigateur. Ce protocole chiffre vos données de communication et garantit leur confidentialité lors de la transaction.

Le protocole HTTPS peut être considéré comme fiable pour les transactions financières.

## Se méfier du phishing

Des messages frauduleux imitant de vrais sites marchands vous invitent à saisir vos données de paiement. Ces faux sites reproduisent l'apparence des vrais pour mieux vous tromper.

**Points clés :**
- Ignorez les demandes de mise à jour de vos données bancaires par email
- Les sites marchands ne demanderont **JAMAIS** votre code secret
- Ils ne vous demanderont jamais votre numéro de carte par email

## Éviter le stockage de vos données confidentielles

Plusieurs sites stockent vos données (numéro, date d'expiration, cryptogramme) sans consentement explicite. L'UE a adopté la directive 2011/83/UE interdisant les cases précochées.

## La protection française

Le site **internet-signalement.gouv.fr** permet de signaler les comportements illicites en ligne aux autorités.`,
  },
  {
    slug: "fracture-zone-euro",
    title: "La fracture de la zone euro",
    category: "Économie",
    date: "29 octobre 2015",
    excerpt:
      "Le 11 décembre 2013, les institutions européennes ont approuvé une directive concernant le mécanisme de renflouement interne des banques en difficulté.",
    content: `## Euro-Zone : Renflouement interne des banques

Le 11 décembre 2013, les institutions européennes ont approuvé une directive concernant le mécanisme de renflouement interne des banques en difficulté.

Avant 2008, les États pouvaient directement renflouer les banques défaillantes. Sous le gouvernement Sarkozy, cette approche a été utilisée. Cependant, l'endettement élevé des États européens rend désormais cette solution impossible en cas de nouvelle crise majeure.

### Le mécanisme de renflouement interne

La directive établit un ordre précis de contribution au renflouement :

1. Les actionnaires de la banque en difficulté
2. Les détenteurs d'obligations
3. Les créanciers

Les dépôts bancaires inférieurs à 100 000 euros sont garantis pour les particuliers et petites entreprises. Cependant, la directive laisse certaines questions sans réponse, notamment sur le traitement des dépôts multiples d'une même personne dépassant collectivement ce seuil.

Le système devrait entrer en vigueur le 1er janvier 2016.

### Le problème de la dette souveraine

La dette française, structurée en fonction de sa maturité, comprend notamment les OAT (obligations à long terme) libellées en euros. Au second trimestre 2012, environ 55 % de cette dette était détenue par des non-résidents, probablement incluant des institutions bancaires asiatiques.

### Conclusion

Une stratégie de sortie de la zone euro pourrait réduire les risques liés à cette configuration économique fragile. Ce débat, longtemps tabou, mérite une analyse sérieuse au regard des mécanismes de solidarité européenne en place.`,
  },
  {
    slug: "pib",
    title: "Le PIB",
    category: "Économie",
    date: "7 octobre 2013",
    excerpt:
      "Le PIB (Produit Intérieur Brut) évalue la richesse produite par l'ensemble des entreprises sur un territoire donné. Trois approches permettent de le calculer.",
    content: `## Définition

Le **PIB** (Produit Intérieur Brut) constitue un agrégat des comptes nationaux qui évalue la richesse produite par l'ensemble des entreprises, indépendamment de leur nationalité, sur un territoire donné. C'est un indicateur majeur de croissance économique.

## Les trois approches de calcul

### Approche Production
**PIB** = somme des valeurs ajoutées + impôts sur les produits – subventions sur les produits

### Approche Revenu
**PIB** = Rémunération des salariés + impôts sur les produits + autres impôts sur la production – subventions sur les produits – autres subventions + excédent d'exploitation/revenu mixte

### Approche Demande
**PIB** = Consommation finale + Formation brute de capital fixe + Variation des stocks + Acquisitions/cessions d'objets de valeur + Exportations – Importations

## Analyse critique

L'approche demande révèle une vulnérabilité : les gouvernements peuvent artificiellement stimuler le PIB en augmentant la consommation publique, notamment via des emplois subventionnés. Cependant, cette stratégie engendre des coûts significatifs financés par l'endettement public.

## Alternative : le PNB

Le PNB (Produit National Brut) mesure la richesse générée par les entreprises nationales, peu importe leur localisation. Bien que moins usité, il offrirait une meilleure évaluation du potentiel économique réel d'une nation.`,
  },
  {
    slug: "transmission-entreprise-artisanale",
    title: "La transmission de l'entreprise artisanale aux héritiers",
    category: "Droit",
    date: "30 novembre 2013",
    excerpt:
      "Il faut en moyenne 3 à 5 ans pour bien préparer la transmission d'une entreprise artisanale. Tour d'horizon des modes : donation, vente, location-gérance.",
    content: `## Introduction

L'artisan peut anticiper la transmission de son patrimoine en choisissant le mode de transmission approprié, que ce soit à titre gratuit ou onéreux.

## Les modes de transmission

### La donation
C'est l'outil idéal de transmission à un ou plusieurs membres de sa famille. Elle permet un transfert sans contrepartie financière et peut se faire progressivement dans le temps, tout en respectant les parts réservataires.

### La vente
Ce mode de transmission à titre onéreux peut concerner le fonds de commerce ou les murs de l'établissement.

### La location-gérance
Le propriétaire confie l'exploitation à un gérant contre redevance. Il est possible de l'assortir d'une promesse de vente.

## L'importance de la préparation

**Il faut en moyenne 3 à 5 ans pour bien préparer sa transmission.** Une bonne préparation comprend un diagnostic complet, l'anticipation fiscale et l'organisation en fonction du repreneur.

L'intervention de professionnels (notaire, expert-comptable, avocat) s'avère impérative avant de prendre des décisions majeures.

## Absence de transmission anticipée

Malheureusement, plus de la moitié des artisans n'anticipent pas cette transmission, ce qui peut exposer leurs proches à des conséquences juridiques, fiscales et financières importantes.

## Succession en cas de décès

Lorsqu'un artisan décède sans avoir préparé sa transmission, l'entreprise intègre sa succession car l'artisan exerce en son nom propre, ce qui entraîne une confusion de son patrimoine personnel et professionnel.

### Options successorales des héritiers

**1. Acceptation pure et simple**
L'héritier reçoit l'héritage mais doit payer les dettes du défunt, potentiellement en vendant ses biens personnels.

**2. Acceptation à concurrence de l'actif net**
Cette option protège l'héritier si les dettes dépassent l'actif, mais elle s'accompagne de formalités complexes.

**3. Renonciation**
L'héritier refuse l'héritage et n'est pas responsable des dettes, mais le problème se reporte sur d'autres héritiers.`,
  },
  {
    slug: "vices-du-consentement",
    title: "La formation du contrat : Les vices du consentement",
    category: "Droit",
    date: "22 juillet 2013",
    excerpt:
      "L'article 1109 du Code Civil identifie trois vices affectant le consentement : l'erreur, le dol et la violence. Analyse des conditions et sanctions.",
    content: `## Les vices du consentement

L'article 1109 du Code Civil identifie trois catégories de défauts affectant le consentement : l'erreur, le dol et la violence. Le Code du Commerce prévoit des sanctions via l'annulation du contrat ou des indemnités.

### A. L'erreur

Il s'agit d'une "représentation inexacte de la réalité" affectant certains éléments seulement.

**Erreur sur la personne :**
- Généralement indifférente à la validité
- Déterminante pour les contrats "intuitu personae" (donations, cautionnement gratuit, mandats gratuits)

**Erreur sur la substance :**
- Porte sur les qualités essentielles de la chose
- Applicable aux contrats créant une obligation relative à un bien

**Conditions requises :**
- Caractère déterminant
- Caractère excusable (non due à l'imprudence)

### B. Le dol

Défini comme "l'emploi de tromperie en vue d'amener une personne à contracter", le dol exige :
- Une intention frauduleuse
- L'usage de manœuvres ou mensonges caractérisés

**Distinctions importantes :**
- La publicité ordinaire ne constitue pas du dol
- Le silence sur les défauts peut être dolosif si la loi impose un devoir d'information
- Le dol incident entraîne des dommages-intérêts
- Le dol principal justifie l'annulation

### C. La violence

Elle provoque "un sentiment de crainte afin d'amener à conclure un contrat" pour éviter un préjudice menaçant.

**Critères d'évaluation :**
- Critère objectif : impression sur une personne raisonnable
- Critère subjectif : impact réel sur la partie concernée

**Caractéristiques :**
- Doit être injuste pour justifier l'annulation
- La crainte révérencielle seule ne suffit pas
- La menace d'exercer un droit légal n'est pas injuste

## Mesures préventives

- Interdiction de la publicité mensongère (Code de la consommation)
- Obligations informationnelles (ventes immobilières, démarchage, crédit à la consommation)
- Devoirs de renseignement des professionnels préalablement à la signature`,
  },
  {
    slug: "formation-du-consentement",
    title: "La formation du contrat : Le consentement (2ème partie)",
    category: "Droit",
    date: "22 juillet 2013",
    excerpt:
      "Les étapes de la formation du consentement : l'offre, les pourparlers, l'acceptation et les contrats conclus à distance. Analyse des théories et solutions jurisprudentielles.",
    content: `## Les étapes de la formation du consentement

La formation du consentement implique **deux étapes principales** : l'offre et l'acceptation. On distingue les contrats librement débattus ("gré à gré") des contrats d'adhésion.

## A/ Contrats librement débattus

### L'offre ou pollicitation

Une personne prenant l'initiative de contracter émet une offre, soit expressément soit tacitement. Par exemple, mettre des marchandises à l'étalage constitue une offre tacite de vente.

**Règles de caducité de l'offre** :
- L'offre devient caduque si l'offrant décède ou perd sa capacité avant acceptation
- L'offrant doit maintenir son offre pendant le délai qu'il a indiqué

La révocation prématurée engage la responsabilité délictuelle de l'offrant.

### Les pourparlers

Le destinataire peut rejeter l'offre ou proposer une contre-proposition. Les pourparlers doivent être menés d'une façon loyale et ne peuvent être rompus sans motif plausible.

### L'acceptation

L'acceptation constitue la dernière étape formant le consentement. Elle est :
- **Expresse** : résultant d'un acte spécialement fait pour manifester l'adhésion
- **Tacite** : résultant d'un acte permettant de déduire l'adhésion

**Le silence comme acceptation** : En principe, le silence ne vaut pas acceptation, sauf s'il existe des rapports d'affaires antérieurs.

## B/ Contrats d'adhésion

Incluent les contrats de fourniture (gaz, électricité), d'abonnement et les polices d'assurances.

## Contrats conclus à distance

### Systèmes théoriques en controverse

- **Système de l'émission** : contrat formé au moment où le destinataire décide d'accepter
- **Système de l'expédition** : date et lieu d'expédition de la lettre d'acceptation
- **Système de réception** : moment où l'expéditeur perd maîtrise de la lettre
- **Système de l'information** : quand l'offrant a connaissance de l'acceptation

La jurisprudence retient généralement le système de l'émission ou de l'expédition.

## C/ Promesses de contrat

### Promesse synallagmatique

Une partie s'engage à vendre une chose déterminée tandis que l'autre s'engage à en payer le prix convenu. La promesse synallagmatique est d'ores et déjà la vente elle-même.

### Promesse unilatérale

Un propriétaire s'engage pendant une période à vendre sa chose à un tiers à prix déterminé. Moins fragile qu'une offre, la promesse ne devient pas caduque avec le décès du promettant.`,
  },
  {
    slug: "la-volonte-formation-contrat",
    title: "La formation du contrat : Le consentement (1ère partie)",
    category: "Droit",
    date: "22 juillet 2013",
    excerpt:
      "L'article 1108 du Code Civil établit les conditions nécessaires à la formation d'un contrat. Le consentement est le premier élément essentiel.",
    content: `## Introduction

La création d'une société fonctionne comme un contrat de vente : c'est un accord entre parties qui s'engagent mutuellement. L'article 1108 du Code Civil établit les conditions nécessaires à la formation d'un contrat, dont la première est **le consentement**.

## Le Consentement

Le consentement représente l'accord des volontés entre les parties contractantes. Sans accord mutuel, on n'a pas un contrat mais un acte unilatéral.

### 1/ La volonté contractuelle des parties

#### a/ Accord complet requis

Les parties doivent avoir examiné tous les éléments du contrat et s'être mises d'accord sur chacun d'eux.

**Nuances importantes :**
- La loi prévoit des **règles supplétives** (facultatives pour les parties, obligatoires pour le juge en cas de silence)
- Un **désaccord sur un élément essentiel** (prix, durée) empêche la formation du contrat
- Un **désaccord sur un élément secondaire** n'empêche pas la formation

#### b/ Unanimité requise

Chacun n'est lié que s'il a consenti. Les **conventions collectives** constituent une exception : la majorité prime sur l'unanimité.

#### c/ Cas de volonté unilatérale

Les **contrats unilatéraux** n'engendrent d'obligations que pour une seule partie (prêt, gage, dépôt, mandat), contrairement aux **contrats synallagmatiques** créant des obligations réciproques (vente).`,
  },
  {
    slug: "loi-dutreil-insaisissabilite",
    title: "De l'insaisissabilité des biens des entrepreneurs individuels : La Loi Dutreil",
    category: "Droit",
    date: "10 juillet 2013",
    excerpt:
      "La Loi Dutreil 2003-721 établit une protection du domicile principal de l'entrepreneur individuel contre les créanciers professionnels.",
    content: `## Aperçu

La Loi Dutreil 2003-721 du 1er août 2003 établit une protection du domicile principal de l'entrepreneur individuel contre les créanciers professionnels.

## Dispositions principales

### Article L526-1
Une personne physique exerçant une activité professionnelle peut déclarer comme insaisissables "ses droits sur l'immeuble où est fixée sa résidence principale". Cette déclaration doit être publiée au fichier immobilier et n'affecte que les créanciers dont les droits naissent après la publication.

### Article L526-2
La déclaration doit être "reçue par notaire sous peine de nullité" et contenir une description détaillée des biens. Si l'entrepreneur ne figure pas dans un registre professionnel, la déclaration doit être publiée dans un journal d'annonces légales.

### Article L526-3
En cas de vente, le prix demeure insaisissable à condition d'être réinvesti dans une nouvelle résidence principale dans un délai d'un an. L'entrepreneur peut renoncer à la protection à tout moment.

### Article L526-4
Les entrepreneurs mariés sous régime de communauté doivent justifier que leur conjoint a été informé des implications sur les biens communs.

### Article L526-5
Les dispositions s'appliquent également aux prêts garantis par hypothèque rechargeable sur la résidence principale.

## Conclusion

Cette mesure offre une protection patrimoniale sans exonérer l'entrepreneur de ses responsabilités professionnelles et financières. Elle constitue une avancée significative pour sécuriser le patrimoine personnel des entrepreneurs individuels.`,
  },
];

export const categories: Category[] = [
  "Finance",
  "Contrôle de gestion",
  "Stratégie",
  "Marketing",
  "Lean Management",
  "Droit",
  "Économie",
  "Informatique",
  "Management",
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: Category): Article[] {
  return articles.filter((a) => a.category === category);
}
