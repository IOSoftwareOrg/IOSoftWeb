import type { Metadata } from "next";
import Logiciels from "@/components/Logiciels";

export const metadata: Metadata = {
  title: "Logiciels",
  description:
    "IO Software éditeur de logiciels métier : FinAnalyzer, ProcessMap, DataBridge. Solutions sur mesure pour vos besoins spécifiques.",
  alternates: { canonical: "https://www.io-software.fr/logiciels" },
  openGraph: {
    title: "Logiciels — IO Software",
    description:
      "Éditeur de logiciels métier : FinAnalyzer (finance), ProcessMap (process mining), DataBridge (data). Solutions sur mesure.",
    url: "https://www.io-software.fr/logiciels",
  },
};

export default function LogicielsPage() {
  return (
    <>
      <section className="bg-[#1e3a5f] pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">
            Éditeur logiciel
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Nos solutions logicielles
          </h1>
          <p className="text-white/70 mt-4 max-w-xl">
            Des logiciels métier conçus pour répondre aux besoins spécifiques des entreprises,
            de la finance à l&apos;analyse de processus.
          </p>
        </div>
      </section>
      <Logiciels hideHeader />
    </>
  );
}
