const articles = [
  {
    category: "Finance",
    title: "Les indicateurs clés de performance financière pour les PME",
    excerpt:
      "Maîtriser les KPIs financiers essentiels permet aux dirigeants de PME de piloter leur activité avec clarté et d'anticiper les difficultés avant qu'elles ne surgissent.",
    date: "15 juin 2026",
    readTime: "5 min",
  },
  {
    category: "Stratégie",
    title: "Process Mining : révéler les inefficacités cachées de vos processus",
    excerpt:
      "Le Process Mining transforme les traces numériques de vos systèmes en cartes visuelles de vos processus réels, révélant les écarts entre processus théorique et pratique.",
    date: "8 juin 2026",
    readTime: "7 min",
  },
  {
    category: "Management",
    title: "Management horizontal : mythe ou réalité opérationnelle ?",
    excerpt:
      "Les organisations horizontales promettent agilité et engagement. Mais quelles conditions réelles permettent leur succès ? Retour d'expérience sur plusieurs déploiements.",
    date: "1 juin 2026",
    readTime: "6 min",
  },
];

const categories = [
  "Finance",
  "Contrôle de gestion",
  "Stratégie",
  "Marketing",
  "Lean Management",
  "Droit",
  "Économie",
  "Informatique",
];

export default function Blog({ hideHeader }: { hideHeader?: boolean } = {}) {
  return (
    <section id="blog" className="py-24 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-6">
        {!hideHeader && (
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">
              Ressources
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mt-3">
              Blog & Actualités
            </h2>
          </div>
          <a
            href="/blog"
            className="text-sm font-semibold text-[#1e3a5f] hover:text-[#c9a84c] transition-colors flex items-center gap-1 self-start md:self-auto"
          >
            Tous les articles
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        )}

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              className="text-xs px-3 py-1.5 rounded-full border border-[#e2e8f0] bg-white text-[#64748b] hover:border-[#1e3a5f] hover:text-[#1e3a5f] transition-colors"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles */}
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article
              key={article.title}
              className="bg-white rounded-xl overflow-hidden border border-[#e2e8f0] hover:shadow-md transition-shadow group"
            >
              <div className="h-2 bg-[#1e3a5f] group-hover:bg-[#c9a84c] transition-colors" />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-[#c9a84c] uppercase tracking-widest">
                    {article.category}
                  </span>
                  <span className="text-[#e2e8f0]">·</span>
                  <span className="text-xs text-[#64748b]">{article.readTime} de lecture</span>
                </div>
                <h3 className="font-bold text-[#0f172a] mb-3 leading-snug group-hover:text-[#1e3a5f] transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-[#64748b] leading-relaxed mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#94a3b8]">{article.date}</span>
                  <a href="#" className="text-xs font-semibold text-[#1e3a5f] hover:text-[#c9a84c] transition-colors">
                    Lire →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
