import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact — IO Software",
  description:
    "Contactez IO Software pour vos projets de conseil, développement logiciel ou audit. Réponse sous 24h.",
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
            Décrivez votre besoin et nous vous répondrons dans les 24 heures ouvrées.
          </p>
        </div>
      </section>
      <Contact hideHeader />
    </>
  );
}
