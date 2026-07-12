import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Design test",
  robots: { index: false, follow: false },
};

const services = [
  {
    title: "Conseil en Management",
    desc: "Accompagnement dans l'organisation des équipes, la gestion des ressources humaines et la transformation managériale.",
  },
  {
    title: "Data Consulting",
    desc: "Transformation de vos données en actifs stratégiques. Modélisation, analyse avancée et tableaux de bord.",
  },
  {
    title: "Process Mining",
    desc: "Analyse et optimisation de vos processus métier grâce à l'exploitation des logs systèmes.",
  },
];

const navItems = ["Services", "Expertise", "Logiciels", "Blog", "Contact"];

export default function DesignTestPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-10 bg-[#0f172a] text-white text-xs px-6 py-3 flex flex-wrap items-center justify-between gap-2">
        <span>
          Bac à sable CSS — comparaison de 3 directions, aucune n&apos;est appliquée au site en production.
        </span>
        <nav className="flex gap-4 opacity-80">
          <a href="#editorial" className="hover:opacity-100">
            1. Éditorial
          </a>
          <a href="#suisse" className="hover:opacity-100">
            2. Suisse
          </a>
          <a href="#corporate" className="hover:opacity-100">
            3. Corporate
          </a>
        </nav>
      </header>

      <section id="editorial" className={`${playfair.variable} bg-white text-[#111111] border-t-4 border-black`}>
        <div className="max-w-5xl mx-auto px-6 py-20">
          <p className="text-xs tracking-[0.3em] uppercase mb-10">Direction 1 — Éditorial / Presse</p>

          <nav className="flex items-center justify-between border-b border-black pb-4 mb-16">
            <span className="text-lg tracking-tight" style={{ fontFamily: "var(--font-playfair)" }}>
              IO Software
            </span>
            <ul className="hidden sm:flex gap-8 text-xs uppercase tracking-widest">
              {navItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
            <div className="md:col-span-8">
              <span className="text-xs uppercase tracking-[0.25em] text-[#c9a84c]">Cabinet de conseil</span>
              <h1
                className="text-5xl md:text-6xl leading-[1.05] mt-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                L&apos;expérience des grands groupes, au service de votre entreprise.
              </h1>
            </div>
            <div className="md:col-span-4 flex items-end">
              <p className="text-sm leading-relaxed border-l border-black pl-4">
                Stratégie, Organisation, Process, Data et IA — une vision transversale pour bâtir votre succès. Plus
                de 30 ans d&apos;expérience professionnelle.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {services.map((s, i) => (
              <div key={s.title} className={`py-8 px-0 md:px-8 ${i > 0 ? "md:border-l border-black" : ""}`}>
                <span className="text-sm" style={{ fontFamily: "var(--font-playfair)" }}>
                  0{i + 1}
                </span>
                <h3 className="text-xl mt-3 mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                  {s.title}
                </h3>
                <p className="text-sm text-[#444444] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="suisse" className="bg-white text-[#0f172a] border-t-4 border-[#1e3a5f]">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <p className="text-xs tracking-[0.3em] uppercase mb-10">Direction 2 — Suisse / Grid strict</p>

          <nav className="grid grid-cols-12 border-b-2 border-[#0f172a] pb-4 mb-16 items-center">
            <span className="col-span-4 font-bold text-lg uppercase tracking-tight">IO Software</span>
            <ul className="hidden sm:grid col-span-8 grid-cols-5 text-xs font-semibold uppercase">
              {navItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-12 border border-[#0f172a]">
            <div className="md:col-span-8 bg-[#1e3a5f] text-white p-10 md:border-r border-[#0f172a]">
              <span className="text-xs font-bold uppercase tracking-widest text-[#c9a84c]">Cabinet de conseil</span>
              <h1 className="text-4xl md:text-5xl font-bold leading-[1.05] mt-4 uppercase">
                L&apos;expérience des grands groupes.
              </h1>
            </div>
            <div className="md:col-span-4 p-10 flex flex-col justify-between gap-8">
              <p className="text-sm leading-relaxed">
                Stratégie, Organisation, Process, Data et IA — une vision transversale pour bâtir votre succès.
              </p>
              <div>
                <span className="block text-6xl font-bold">30+</span>
                <span className="text-xs uppercase tracking-widest">Ans d&apos;expérience</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border border-t-0 border-[#0f172a]">
            {services.map((s, i) => (
              <div key={s.title} className={`p-6 ${i > 0 ? "md:border-l border-[#0f172a]" : ""}`}>
                <span className="text-xs font-bold text-[#c9a84c]">0{i + 1}</span>
                <h3 className="text-lg font-bold mt-2 mb-2 uppercase">{s.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="corporate" className="bg-[#fafafa] text-[#1a1a1a] border-t-4 border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <p className="text-xs tracking-[0.3em] uppercase mb-10">Direction 3 — Corporate sobre / neutre</p>

          <nav className="flex items-center justify-between mb-16">
            <span className="font-semibold text-base">IO Software</span>
            <ul className="hidden sm:flex gap-8 text-sm text-[#525252]">
              {navItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </nav>

          <div className="max-w-2xl mb-16">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
              L&apos;expérience des grands groupes, au service de votre entreprise.
            </h1>
            <p className="text-base text-[#525252] leading-relaxed">
              Stratégie, Organisation, Process, Data et IA — une vision transversale pour bâtir votre succès. Plus de
              30 ans d&apos;expérience professionnelle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((s) => (
              <div key={s.title} className="border border-[#e5e5e5] p-6 bg-white">
                <h3 className="text-base font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-[#525252] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
