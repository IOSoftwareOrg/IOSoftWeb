import type { Metadata } from "next";
import Link from "next/link";
import RelatedServices from "@/components/RelatedServices";

export const metadata: Metadata = {
  title: "Systèmes d'information",
  description:
    "Maintenance informatique et alignement du système d'information. ERP, BPM, Data Gouvernance, sécurisation et gestion de parc — nous prenons en charge vos projets SI de bout en bout.",
  alternates: { canonical: "https://www.io-software.fr/services/systemes-information" },
  openGraph: {
    title: "Systèmes d'information — IO Software",
    description:
      "Maintenance informatique et alignement SI : ERP, BPM, Data Gouvernance, sauvegardes et sécurisation. MOA et MOE.",
    url: "https://www.io-software.fr/services/systemes-information",
  },
};

export default function SystemesInformationPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1e3a5f] pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href="/services" className="text-white hover:text-white/80 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white/80">Systèmes d&apos;information</span>
          </div>
          <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">
            Nos services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            Systèmes d&apos;information
          </h1>
          <p className="text-white/70 max-w-2xl leading-relaxed">
            Nous intervenons en MOA aussi bien qu&apos;en MOE et prenons en charge tous vos projets,
            de leurs lignes budgétaires à leur réalisation.
          </p>
        </div>
      </section>

      {/* Service 1 — Maintenance */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest">Service 01</span>
              <h2 className="text-2xl font-bold text-[#0f172a] mt-2 mb-4">Maintenance informatique</h2>
              <p className="text-[#475569] leading-relaxed">
                Notre prestation de maintenance informatique vous permet de vous affranchir de la
                gestion de votre parc informatique. Que vous possédiez des ordinateurs de bureau,
                des ordinateurs portables, une ou plusieurs imprimantes, un réseau local (LAN et/ou
                WAN), nous vous garantissons le bon état de fonctionnement de votre matériel.
              </p>
            </div>
            <div className="bg-[#f8fafc] rounded-2xl p-8 border border-[#e2e8f0]">
              <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-4">Notre couverture</p>
              <ul className="space-y-3">
                {[
                  "Ordinateurs de bureau et portables",
                  "Imprimantes et périphériques",
                  "Réseaux locaux (LAN et WAN)",
                  "Mises à niveau des logiciels",
                  "Antivirus et sécurité avancée",
                  "Surf anonyme sur internet",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-[#c9a84c] shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-[#475569]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2 — Alignement SI */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-white rounded-2xl p-8 border border-[#e2e8f0]">
              <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-4">Nos interventions</p>
              <ul className="space-y-3">
                {[
                  "Mise en place de sauvegardes",
                  "Datamarts et Big Data",
                  "Data Gouvernance et Data Quality",
                  "ERP (Enterprise Resource Planning)",
                  "BPM (Business Process Management)",
                  "Modélisation de processus et Process Mining",
                  "Conseil en choix de matériel",
                  "Formation à la prise en main des nouveaux outils",
                  "Sécurisation du système informatique",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-[#c9a84c] shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-[#475569]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest">Service 02</span>
              <h2 className="text-2xl font-bold text-[#0f172a] mt-2 mb-4">Alignement du système d&apos;information</h2>
              <p className="text-[#475569] leading-relaxed mb-4">
                Nous constatons que très souvent, par manque de temps, les outils techniques mis en
                place ne permettent pas de centraliser les informations pour une utilisation optimale
                des données par les différents services.
              </p>
              <p className="text-[#475569] leading-relaxed mb-4">
                Afin d&apos;éviter que les informations ne soient dupliquées — avec le risque d&apos;erreur
                que cela implique — l&apos;efficacité commande de n&apos;utiliser qu&apos;un seul système de
                stockage de données et de les centraliser.
              </p>
              <p className="text-[#475569] leading-relaxed">
                Nous intervenons également sur toutes vos problématiques de mise en place d&apos;ERP,
                de BPM ou autres logiciels d&apos;alignement SI — y compris la modélisation de processus
                via des logiciels de process mining.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MOA / MOE */}
      <section className="py-16 bg-[#1e3a5f]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "MOA", subtitle: "Maîtrise d'ouvrage", desc: "Définition de vos besoins, rédaction des cahiers des charges et pilotage de vos projets SI." },
              { title: "MOE", subtitle: "Maîtrise d'œuvre", desc: "Réalisation technique de vos projets, de l'architecture à la mise en production." },
            ].map((item) => (
              <div key={item.title} className="bg-white/10 rounded-2xl p-8">
                <p className="text-3xl font-bold text-[#c9a84c] mb-1">{item.title}</p>
                <p className="text-white/50 text-sm uppercase tracking-widest mb-4">{item.subtitle}</p>
                <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices services={[
        { title: "Process Mining", desc: "Exploitez les logs de votre SI pour cartographier et optimiser vos processus métiers en continu.", href: "/services/process-mining" },
        { title: "Développement logiciel", desc: "Complétez votre SI avec des applications sur mesure conçues pour vos besoins spécifiques.", href: "/services/developpement-logiciel" },
      ]} />

      {/* CTA */}
      <section className="bg-[#c9a84c] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Parlons de votre système d&apos;information
          </h2>
          <p className="text-white/80 mb-8">
            De la maintenance à l&apos;alignement stratégique, nous prenons en charge vos projets de bout en bout.
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
