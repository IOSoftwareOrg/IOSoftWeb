import type { Metadata } from "next";
import Link from "next/link";
import RelatedServices from "@/components/RelatedServices";

export const metadata: Metadata = {
  title: "Développement logiciel",
  description:
    "Développement logiciel sur mesure, création de sites internet par l'IA et édition de logiciels métier. IO Software développe son expertise via son centre de compétences.",
  alternates: { canonical: "https://www.io-software.fr/services/developpement-logiciel" },
  openGraph: {
    title: "Développement logiciel — IO Software",
    description:
      "Développement sur mesure, sites internet IA, logiciels métier. Centre de compétences IO Software.",
    url: "https://www.io-software.fr/services/developpement-logiciel",
  },
};

const competences = [
  { title: "Applications sur mesure", desc: "Conception et développement d'applications métier adaptées à vos processus spécifiques, de la spécification au déploiement." },
  { title: "Édition de logiciels", desc: null },
  { title: "Intégrations et APIs", desc: "Connexion de vos systèmes existants, intégration d'APIs tierces et mise en place d'architectures orientées services." },
  { title: "Maintenance et évolutions", desc: "Accompagnement sur la durée : maintenance corrective, évolutions fonctionnelles et montées de version." },
];

const iaWeb = [
  {
    title: "Génération de sites internet par l'IA",
    desc: "L'intelligence artificielle transforme la création web. Nous exploitons ces technologies pour produire des sites internet modernes, optimisés SEO et adaptés à votre identité, avec des délais et des coûts réduits.",
  },
  {
    title: "Design et contenu assistés par IA",
    desc: "Maquettes, textes, images et structure générés et affinés par IA, puis validés et personnalisés par nos experts pour garantir la cohérence avec votre positionnement.",
  },
  {
    title: "Sites Next.js & React performants",
    desc: "Nous développons sur les technologies modernes (Next.js, React, Tailwind CSS) pour des sites rapides, sécurisés et faciles à maintenir — comme celui que vous consultez en ce moment.",
  },
  {
    title: "Optimisation continue",
    desc: "L'IA permet également d'analyser les performances de votre site et de proposer des améliorations continues sur le contenu, le référencement et l'expérience utilisateur.",
  },
];

export default function DeveloppementLogicielPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1e3a5f] pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href="/services" className="text-white hover:text-white/80 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white/80">Développement logiciel</span>
          </div>
          <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">
            Nos services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            Développement logiciel
          </h1>
          <p className="text-white/70 max-w-2xl leading-relaxed">
            IO Software développe une expertise dans le développement logiciel grâce à son centre
            de compétences. De l&apos;application métier sur mesure à la création de sites internet
            assistée par l&apos;IA, nous couvrons l&apos;ensemble du cycle de développement.
          </p>
        </div>
      </section>

      {/* Compétences */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#0f172a] mb-8">Notre centre de compétences</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {competences.map((c) => (
              <div key={c.title} className="bg-[#f8fafc] rounded-2xl p-8 border border-[#e2e8f0]">
                <h3 className="font-bold text-[#0f172a] mb-3">{c.title}</h3>
                {c.desc ? (
                  <p className="text-sm text-[#475569] leading-relaxed">{c.desc}</p>
                ) : (
                  <p className="text-sm text-[#475569] leading-relaxed">
                    IO Software est également éditeur de logiciels métier. Découvrez nos solutions{" "}
                    <Link href="/logiciels/finanalyzer" className="text-[#1e3a5f] font-semibold hover:text-[#c9a84c] transition-colors">FinAnalyzer</Link>,{" "}
                    <Link href="/logiciels/processmap" className="text-[#1e3a5f] font-semibold hover:text-[#c9a84c] transition-colors">ProcessMap</Link>{" "}
                    et{" "}
                    <Link href="/logiciels/databridge" className="text-[#1e3a5f] font-semibold hover:text-[#c9a84c] transition-colors">DataBridge</Link>.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IA & Web */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-[#0f172a] mb-3">Création de sites internet par l&apos;IA</h2>
            <p className="text-[#475569] leading-relaxed max-w-3xl">
              L&apos;intelligence artificielle révolutionne la création de sites web. En combinant
              les capacités génératives de l&apos;IA avec notre expertise technique, nous livrons
              des sites modernes, performants et personnalisés — plus rapidement et à moindre coût.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {iaWeb.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 border border-[#e2e8f0]">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#1e3a5f] rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0f172a] mb-2">{item.title}</h3>
                    <p className="text-sm text-[#475569] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Renvoi vers logiciels */}
      <section className="py-16 bg-[#1e3a5f]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-3">Éditeur de logiciels</p>
              <h2 className="text-2xl font-bold text-white mb-4">Découvrez nos logiciels métier</h2>
              <p className="text-white/70 leading-relaxed mb-8">
                IO Software est également éditeur de solutions logicielles métier. FinAnalyzer,
                ProcessMap, DataBridge — des outils conçus pour répondre aux besoins réels des
                entreprises, issus de nos missions de conseil.
              </p>
              <Link
                href="/logiciels"
                className="inline-block bg-[#c9a84c] hover:bg-[#b8943d] text-white font-bold px-8 py-4 rounded-md transition-colors"
              >
                Voir nos logiciels →
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {["FinAnalyzer", "ProcessMap", "DataBridge"].map((name) => (
                <div key={name} className="bg-white/10 rounded-xl p-5 text-center">
                  <p className="text-white font-semibold text-sm">{name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RelatedServices services={[
        { title: "Systèmes d'information", desc: "Tout développement s'intègre dans un écosystème SI existant. Assurez l'alignement entre vos outils et vos nouveaux logiciels.", href: "/services/systemes-information" },
        { title: "Process Mining", desc: "Avant de développer, analysez vos processus actuels pour concevoir des solutions qui répondent aux vrais besoins.", href: "/services/process-mining" },
      ]} />

      {/* CTA */}
      <section className="bg-[#c9a84c] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Parlons de votre projet de développement
          </h2>
          <p className="text-white/80 mb-8">
            Application sur mesure, site internet ou logiciel métier — décrivez-nous votre besoin.
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
