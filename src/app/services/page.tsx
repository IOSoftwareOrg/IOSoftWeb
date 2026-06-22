import type { Metadata } from "next";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Conseil en Management, Stratégie, Finance d'entreprise, Data, Process Mining, Systèmes d'information, Rédaction technique et Développement logiciel.",
  alternates: { canonical: "https://www.io-software.fr/services" },
  openGraph: {
    title: "Services — IO Software",
    description:
      "8 domaines d'expertise : Management, Stratégie, Finance, Data, Process Mining, SI, Rédaction technique, Développement logiciel.",
    url: "https://www.io-software.fr/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[#1e3a5f] pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">
            Ce que nous faisons
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Nos domaines d&apos;expertise
          </h1>
          <p className="text-white/70 mt-4 max-w-xl">
            Une approche transversale couvrant l&apos;ensemble des dimensions de votre entreprise,
            de la stratégie à l&apos;opérationnel.
          </p>
        </div>
      </section>
      <Services hideHeader />
    </>
  );
}
