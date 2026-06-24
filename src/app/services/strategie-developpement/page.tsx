import type { Metadata } from "next";
import Link from "next/link";
import RelatedServices from "@/components/RelatedServices";

export const metadata: Metadata = {
  title: "Stratégie & Développement",
  description:
    "Définissez l'avenir de votre entreprise avec une démarche stratégique rigoureuse. Segmentation, analyse concurrentielle, avantage compétitif et développement basé sur la data.",
  alternates: { canonical: "https://www.io-software.fr/services/strategie-developpement" },
  openGraph: {
    title: "Stratégie & Développement — IO Software",
    description:
      "Conseil en stratégie d'entreprise : SWOT, BCG, PESTEL, analyse data-driven et construction de l'avantage compétitif durable.",
    url: "https://www.io-software.fr/services/strategie-developpement",
  },
};

const etapes = [
  { num: "01", title: "Segmentation stratégique", desc: "Identification et délimitation des domaines d'activité stratégiques de votre entreprise." },
  { num: "02", title: "Analyse concurrentielle", desc: "Étude approfondie de chacun de vos domaines d'activité face à la concurrence." },
  { num: "03", title: "Avantage compétitif", desc: "Construction d'un avantage compétitif durable et défendable dans la durée." },
  { num: "04", title: "Nouvelles voies", desc: "Identification de nouvelles opportunités de développement stratégique." },
  { num: "05", title: "Portefeuille d'activités", desc: "Management d'un portefeuille diversifié d'activités pour optimiser la création de valeur." },
];

const outils = [
  {
    title: "Analyse SWOT",
    subtitle: "Forces, Faiblesses, Opportunités, Menaces",
    desc: "Avec l'intégration de la data, l'analyse SWOT devient plus précise : performances financières, satisfaction client, tendances de marché et identification des menaces concurrentielles.",
  },
  {
    title: "Matrice BCG",
    subtitle: "Gestion du portefeuille produits",
    desc: "Catégorisation de vos produits (Stars, Vaches à lait, Dilemmes, Poids morts) à partir des données de ventes, marges et parts de marché. Ajustement des investissements selon les projections IA.",
  },
  {
    title: "Analyse PESTEL",
    subtitle: "Anticiper l'environnement",
    desc: "Surveillance des évolutions politiques, économiques, socioculturelles, technologiques, environnementales et légales via des tableaux de bord alimentés en temps réel.",
  },
  {
    title: "KPI Data-Driven",
    subtitle: "Pilotage par la performance",
    desc: "Identification d'indicateurs clés de performance basés sur des analyses précises, suivis via des outils comme Tableau ou Power BI pour des décisions fondées sur les données.",
  },
];

export default function StrategieDeveloppementPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1e3a5f] pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href="/services" className="text-white hover:text-white/80 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white/80">Stratégie & Développement</span>
          </div>
          <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">
            Nos services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            Stratégie & Développement
          </h1>
          <blockquote className="border-l-2 border-[#c9a84c] pl-6 text-white/70 italic max-w-2xl leading-relaxed">
            « Connaissez l&apos;ennemi et connaissez vous vous-même ; en cent batailles vous ne courrez jamais aucun danger. »
            <footer className="mt-2 text-white/40 not-italic text-sm">— Sun Tzu, L&apos;Art de la guerre</footer>
          </blockquote>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#475569] leading-relaxed max-w-3xl text-lg mb-6">
            Dès le milieu des années 1960, de nombreux modèles d&apos;analyse stratégique sont venus des
            États-Unis (LCAG, SWOT, etc.). Depuis, la réflexion stratégique n&apos;a cessé d&apos;évoluer,
            de s&apos;affiner et de s&apos;enrichir de nouvelles méthodes innovantes.
          </p>
          <p className="text-[#475569] leading-relaxed max-w-3xl">
            Notre activité de consulting en stratégie s&apos;appuie sur une démarche cohérente inspirée
            des dernières méthodes d&apos;analyse stratégique, enrichie par la puissance de la donnée.
            À l&apos;issue de notre analyse, vous aurez une vision claire de l&apos;avenir de votre
            entreprise — croissance interne, croissance externe, relocalisation, évolution de gamme.
          </p>
        </div>
      </section>

      {/* Étapes */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#0f172a] mb-8">Notre démarche en 5 étapes</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {etapes.map((e) => (
              <div key={e.num} className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
                <p className="text-3xl font-bold text-[#c9a84c] mb-3">{e.num}</p>
                <h3 className="font-bold text-[#0f172a] mb-2 text-sm">{e.title}</h3>
                <p className="text-xs text-[#475569] leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data & stratégie */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#0f172a] mb-4">Le rôle central de la data dans la stratégie</h2>
          <p className="text-[#475569] leading-relaxed max-w-3xl mb-12">
            Les données internes (ventes, performances produits, satisfaction client) et externes
            (marché, concurrence, évolutions réglementaires) sont essentielles pour définir une
            stratégie pertinente. L&apos;analyse prédictive permet d&apos;anticiper les comportements
            des consommateurs et d&apos;ajuster dynamiquement les actions.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {outils.map((o) => (
              <div key={o.title} className="bg-[#f8fafc] rounded-2xl p-8 border border-[#e2e8f0]">
                <h3 className="font-bold text-[#0f172a] mb-1">{o.title}</h3>
                <p className="text-xs text-[#c9a84c] font-semibold uppercase tracking-widest mb-4">{o.subtitle}</p>
                <p className="text-sm text-[#475569] leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Citation conclusion */}
      <section className="py-16 bg-[#1e3a5f]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-4">Notre conviction</p>
          <p className="text-2xl font-bold text-white mb-6 leading-relaxed">
            Dans un monde en perpétuelle évolution, il est vital d&apos;avoir une vision claire du futur.
          </p>
          <p className="text-white/60 leading-relaxed max-w-2xl mx-auto">
            Nous intégrons la donnée dans l&apos;ensemble de nos démarches stratégiques — optimisation
            des coûts, développement commercial, amélioration des relations client — pour faire de
            votre stratégie un levier de transformation durable.
          </p>
        </div>
      </section>

      <RelatedServices services={[
        { title: "Finance d'entreprise", desc: "Toute stratégie repose sur une analyse financière solide. Mesurez la rentabilité et la solvabilité de votre structure.", href: "/services/finance-entreprise" },
        { title: "Data Consulting", desc: "Enrichissez votre démarche stratégique avec des insights data pour des décisions fondées sur les faits, pas les intuitions.", href: "/services/data-consulting" },
      ]} />

      {/* CTA */}
      <section className="bg-[#c9a84c] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Définissons ensemble votre stratégie d&apos;entreprise
          </h2>
          <p className="text-white/80 mb-8">
            Chaque entreprise est unique. Décrivez-nous votre contexte et construisons ensemble votre feuille de route.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#1e3a5f] font-bold px-8 py-4 rounded-md hover:bg-[#f1f5f9] transition-colors"
          >
            Prendre contact →
          </Link>
        </div>
      </section>
    </>
  );
}
