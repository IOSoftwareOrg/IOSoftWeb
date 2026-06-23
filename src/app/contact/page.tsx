import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez IO Software pour vos projets de conseil, développement logiciel ou audit. Réponse garantie sous 24h. Marseille, France & International.",
  alternates: { canonical: "https://www.io-software.fr/contact" },
  openGraph: {
    title: "Contact — IO Software",
    description:
      "Décrivez votre besoin — conseil, audit, développement logiciel. Réponse sous 24h.",
    url: "https://www.io-software.fr/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#0f172a] pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">
            Parlons de votre projet
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Prenons contact
          </h1>
          <p className="text-white/70 mt-4 max-w-xl">
            Décrivez votre besoin et nous vous répondrons rapidement.
          </p>
        </div>
      </section>
      <Contact hideHeader />
    </>
  );
}
