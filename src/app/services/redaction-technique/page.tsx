import type { Metadata } from "next";
import Link from "next/link";
import RelatedServices from "@/components/RelatedServices";

export const metadata: Metadata = {
  title: "Rédaction technique",
  description:
    "Rédacteurs techniques bilingues FR/EN depuis plus de 20 ans. Documentation logicielle, manuels utilisateurs, normes ISO/IEC 82079, S1000D, DITA XML pour grands éditeurs.",
  alternates: { canonical: "https://www.io-software.fr/services/redaction-technique" },
  openGraph: {
    title: "Rédaction technique — IO Software",
    description:
      "Documentation utilisateurs en français et anglais. Normes ISO/IEC 82079, S1000D, ATA 2300, DITA XML. Banque, commerce, pharmacie et IT.",
    url: "https://www.io-software.fr/services/redaction-technique",
  },
};

const normes = ["ISO/IEC 82079", "S1000D", "ATA 2300", "DITA XML"];

const typesDocuments = [
  { title: "Documentation administrateur", desc: "Guides techniques destinés aux administrateurs de logiciels et progiciels." },
  { title: "Documentation utilisateur", desc: "Manuels d'utilisation, modes d'emploi et notices adaptés au grand public ou aux utilisateurs métiers." },
  { title: "Documentation spécialiste", desc: "Contenus techniques approfondis pour des experts du domaine." },
  { title: "Contenus SEO & web", desc: "Rédaction technique accessible, structurée pour une diffusion large et optimisée pour les moteurs de recherche." },
];

export default function RedactionTechniquePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1e3a5f] pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href="/services" className="text-white hover:text-white/80 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white/80">Rédaction technique</span>
          </div>
          <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">
            Nos services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            Rédaction technique
          </h1>
          <p className="text-white/70 max-w-2xl leading-relaxed">
            Professionnels de la communication technique et de la documentation logicielle depuis
            plus de 20 ans pour de grands éditeurs, nous concevons et mettons à jour votre
            documentation utilisateurs en anglais et en français.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">Votre interlocuteur idéal</h2>
              <p className="text-[#475569] leading-relaxed mb-4">
                Si vous recherchez des rédacteurs techniques rigoureux et autonomes, maîtrisant les
                langages informatiques et les outils techniques, capables de synthétiser et de
                structurer tout type d&apos;information pour l&apos;adapter à un utilisateur cible —
                vous avez trouvé votre interlocuteur.
              </p>
              <p className="text-[#475569] leading-relaxed">
                Nos expériences multiples dans des secteurs variés — banque, commerce, pharmacie —
                nous ont amenés à développer une capacité d&apos;adaptation fondamentale pour la
                rédaction technique de tout produit destiné à un marché particulier.
              </p>
            </div>
            <div className="bg-[#1e3a5f] rounded-2xl p-8 text-white">
              <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-6">Nos secteurs d&apos;expérience</p>
              <ul className="space-y-3">
                {["Banque & Finance", "Commerce & Retail", "Pharmacie & Santé", "Informatique & Logiciels", "Industrie"].map((s) => (
                  <li key={s} className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-[#c9a84c] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80 text-sm">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Multilingue */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">Rédaction multilingue</h2>
              <p className="text-[#475569] leading-relaxed">
                Nous maîtrisons parfaitement le français, notre langue maternelle, et sommes capables
                de traduire tout document en anglais. Après plusieurs années d&apos;expérience dans le
                monde anglo-saxon, nos traductions bénéficient d&apos;une double compétence linguistique
                qui améliore sensiblement la lisibilité des documents produits.
              </p>
            </div>
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
              {[
                { flag: "🇫🇷", lang: "Français", desc: "Langue maternelle. Rédaction native, terminologie précise, adaptation sectorielle." },
                { flag: "🇬🇧", lang: "Anglais", desc: "Maîtrise professionnelle. Traduction et rédaction directe après immersion en environnement anglo-saxon." },
              ].map((l) => (
                <div key={l.lang} className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
                  <p className="text-3xl mb-3">{l.flag}</p>
                  <h3 className="font-bold text-[#0f172a] mb-2">{l.lang}</h3>
                  <p className="text-sm text-[#475569] leading-relaxed">{l.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rédaction normée */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">Rédaction technique normée</h2>
              <p className="text-[#475569] leading-relaxed mb-4">
                La rédaction technique doit suivre un protocole propre aux exigences de nos clients.
                Nous mettons tout en œuvre pour respecter les normes en vigueur et le format DITA XML.
              </p>
              <p className="text-[#475569] leading-relaxed">
                Nous suivons les « best practices » de nos clients en étant force de proposition.
                Notre service ne s&apos;arrête pas à la rédaction pure — le document technique sera
                largement diffusé et doit permettre au lecteur de trouver rapidement l&apos;information
                recherchée.
              </p>
            </div>
            <div className="bg-[#f8fafc] rounded-2xl p-8 border border-[#e2e8f0]">
              <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-6">Normes maîtrisées</p>
              <div className="flex flex-wrap gap-3">
                {normes.map((n) => (
                  <span key={n} className="bg-[#1e3a5f] text-white text-sm font-semibold px-4 py-2 rounded-lg">
                    {n}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types de documents */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#0f172a] mb-4">Rédaction technique de qualité</h2>
          <p className="text-[#475569] leading-relaxed max-w-3xl mb-8">
            Les types de documents varient en fonction des destinataires. Nous faisons la différence
            entre les approches de chaque lecteur — du spécialiste au grand public — pour produire
            une documentation réellement adaptée à son usage.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {typesDocuments.map((t) => (
              <div key={t.title} className="bg-white rounded-2xl p-6 border border-[#e2e8f0] flex items-start gap-4">
                <div className="w-8 h-8 bg-[#1e3a5f] rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#0f172a] mb-1">{t.title}</h3>
                  <p className="text-sm text-[#475569] leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices services={[
        { title: "Systèmes d'information", desc: "Une documentation rigoureuse s'appuie sur une architecture SI maîtrisée. Alignez vos outils et vos référentiels.", href: "/services/systemes-information" },
        { title: "Développement logiciel", desc: "Nous documentons les logiciels que nous développons — une cohérence naturelle entre code et documentation.", href: "/services/developpement-logiciel" },
      ]} />

      {/* CTA */}
      <section className="bg-[#c9a84c] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Parlons de votre projet de documentation
          </h2>
          <p className="text-white/80 mb-8">
            Rigoureux, autonomes et bilingues — nous adaptons chaque document à son lecteur cible.
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
