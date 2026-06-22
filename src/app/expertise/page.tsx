import type { Metadata } from "next";
import Expertise from "@/components/Expertise";

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "30 ans d'expérience en conseil multidisciplinaire. Banque, Luxe, Télécoms, Aéronautique — une vision transversale au service de votre croissance.",
  alternates: { canonical: "https://www.io-software.fr/expertise" },
  openGraph: {
    title: "Expertise — IO Software",
    description:
      "30 ans d'expérience. Banque, Luxe, Télécoms, Aéronautique — partenaire stratégique des TPE/PME et grandes entreprises.",
    url: "https://www.io-software.fr/expertise",
  },
};

export default function ExpertisePage() {
  return (
    <>
      <section className="bg-[#1e3a5f] pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">
            Notre ADN
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3">
            30 ans d&apos;expertise
          </h1>
          <p className="text-white/70 mt-4 max-w-xl">
            IO Software accompagne entreprises françaises et internationales avec une vision
            transversale et des compétences éprouvées dans des secteurs exigeants.
          </p>
        </div>
      </section>
      <Expertise hideHeader />
    </>
  );
}
