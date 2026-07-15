import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Design test — Corporate sobre",
  robots: { index: false, follow: false },
};

const navItems = ["Services", "Expertise", "Logiciels", "Blog", "Contact"];

const stats = [
  { value: "30+", label: "Ans d'expérience" },
  { value: "8", label: "Domaines d'expertise" },
  { value: "TPE/PME", label: "& Grands groupes" },
  { value: "France", label: "& International" },
];

const services = [
  { title: "Conseil en Management", desc: "Accompagnement dans l'organisation des équipes, la gestion des ressources humaines et la transformation managériale." },
  { title: "Stratégie & Développement", desc: "Définition des orientations stratégiques, plans de développement commercial et accompagnement à la croissance durable." },
  { title: "Finance d'entreprise", desc: "Analyse financière, contrôle de gestion, corporate finance et accompagnement aux décisions d'investissement." },
  { title: "Data Consulting", desc: "Transformation de vos données en actifs stratégiques. Modélisation, analyse avancée et tableaux de bord." },
  { title: "Process Mining", desc: "Analyse et optimisation de vos processus métier grâce à l'exploitation des logs systèmes." },
  { title: "Systèmes d'information", desc: "Conseil en architecture SI, choix des solutions logicielles, conduite du changement et audit." },
];

const articles = [
  { category: "IA", date: "22 juin 2026", title: "Claude (Anthropic) : les bonnes pratiques pour en tirer le meilleur", excerpt: "System prompt, choix du modèle, gestion des tokens, prompt caching — le guide des best practices pour exploiter Claude efficacement." },
  { category: "Management", date: "22 juin 2026", title: "IA et management : comment les dirigeants doivent adapter leur organisation", excerpt: "L'intelligence artificielle redistribue les cartes du management. Une transformation organisationnelle que les dirigeants doivent piloter eux-mêmes." },
  { category: "Lean Management", date: "17 mars 2025", title: "Takt Time optimisé : Gérer un Backlog de Demandes", excerpt: "Comment aligner le rythme de résolution des demandes sur le volume d'arrivée dans un service support." },
];

const footerValues = [
  { title: "Impact", desc: "Nous mesurons notre succès au vôtre." },
  { title: "Objectivité", desc: "Notre indépendance est notre force." },
  { title: "Expertise", desc: "Nous intervenons là où nous excellons." },
];

export default function CorporateDesignTestPage() {
  return (
    <div className="min-h-screen bg-white text-[#171717]">
      <div className="sticky top-0 z-10 bg-[#171717] text-white text-xs px-6 py-3 flex flex-wrap items-center justify-between gap-2">
        <span>Bac à sable — direction Corporate sobre, exploration approfondie. Rien n&apos;est appliqué au site en production.</span>
        <Link href="/design-test" className="underline underline-offset-2 opacity-80 hover:opacity-100">
          ← Retour à la comparaison des 3 directions
        </Link>
      </div>

      {/* Nav */}
      <header className="border-b border-[#e5e5e3]">
        <nav className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <span className="font-semibold text-base tracking-tight">IO Software</span>
          <ul className="hidden sm:flex gap-8 text-sm text-[#55575c]">
            {navItems.map((item) => (
              <li key={item} className="hover:text-[#171717] transition-colors">
                {item}
              </li>
            ))}
          </ul>
          <button className="hidden sm:inline-block bg-[#1e3a5f] text-white text-sm font-medium px-5 py-2.5 rounded-sm hover:bg-[#16304f] transition-colors">
            Prendre contact
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#1e3a5f]">Cabinet de conseil</span>
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight mt-5 mb-6 max-w-2xl">
          L&apos;expérience des grands groupes, au service de votre entreprise.
        </h1>
        <p className="text-base text-[#55575c] leading-relaxed max-w-xl mb-10">
          Stratégie, Organisation, Process, Data et IA — une vision transversale pour bâtir votre succès. Plus de 30
          ans d&apos;expérience professionnelle.
        </p>
        <div className="flex flex-wrap gap-4 mb-16">
          <button className="bg-[#1e3a5f] text-white text-sm font-medium px-6 py-3 rounded-sm hover:bg-[#16304f] transition-colors">
            Découvrir nos services
          </button>
          <button className="border border-[#1e3a5f] text-[#1e3a5f] text-sm font-medium px-6 py-3 rounded-sm hover:bg-[#1e3a5f] hover:text-white transition-colors">
            Prendre contact
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-[#e5e5e3]">
          {stats.map((s, i) => (
            <div key={s.label} className={`py-6 pr-6 ${i > 0 ? "md:border-l border-[#e5e5e3] md:pl-6" : ""}`}>
              <span className="block text-2xl font-semibold">{s.value}</span>
              <span className="text-sm text-[#55575c]">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#fafafa] border-y border-[#e5e5e3]">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-2xl font-semibold mb-2">Nos domaines d&apos;expertise</h2>
          <p className="text-sm text-[#55575c] mb-10 max-w-lg">
            Une approche transversale couvrant l&apos;ensemble des dimensions de votre entreprise.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => (
              <div key={s.title} className="border border-[#e5e5e3] bg-white p-6 rounded-sm">
                <h3 className="text-base font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-[#55575c] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="max-w-3xl mx-auto px-6 py-24">
        <p className="text-2xl md:text-3xl font-medium leading-snug border-l-2 border-[#1e3a5f] pl-6">
          Notre indépendance est notre force : nous n&apos;intervenons que là où nous pouvons apporter un impact
          mesurable.
        </p>
      </section>

      {/* Blog teaser */}
      <section className="border-t border-[#e5e5e3]">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-2xl font-semibold mb-10">Ressources &amp; actualités</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((a) => (
              <article key={a.title}>
                <div className="flex items-center gap-3 text-xs text-[#55575c] mb-3">
                  <span className="font-medium uppercase tracking-wide text-[#1e3a5f]">{a.category}</span>
                  <span>·</span>
                  <span>{a.date}</span>
                </div>
                <h3 className="text-base font-semibold leading-snug mb-2">{a.title}</h3>
                <p className="text-sm text-[#55575c] leading-relaxed line-clamp-3">{a.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-[#171717] text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <h2 className="text-2xl font-semibold max-w-md">Vous avez un projet&nbsp;? Parlons-en.</h2>
          <button className="bg-white text-[#171717] text-sm font-medium px-6 py-3 rounded-sm hover:bg-[#e5e5e3] transition-colors shrink-0">
            Prendre contact
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e5e5e3]">
        <div className="max-w-5xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p className="font-semibold mb-3">IO Software</p>
            <p className="text-sm text-[#55575c] leading-relaxed">
              Conseil en Stratégie, Organisation, Process, Data et IA — basé à Marseille, présent en France et à
              l&apos;international.
            </p>
          </div>
          <div>
            <p className="font-semibold mb-3">Navigation</p>
            <ul className="space-y-2 text-sm text-[#55575c]">
              {navItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-3">Nos valeurs</p>
            <ul className="space-y-3 text-sm">
              {footerValues.map((v) => (
                <li key={v.title}>
                  <p className="text-[#1e3a5f] font-medium">{v.title}</p>
                  <p className="text-[#55575c] text-xs">{v.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-[#e5e5e3]">
          <div className="max-w-5xl mx-auto px-6 py-4 text-xs text-[#55575c]">
            © 2026 IO Software. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}
