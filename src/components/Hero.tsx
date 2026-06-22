"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1e3a5f] pb-16 md:pb-0">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f] via-[#1e3a5f]/90 to-[#0f172a]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-white/80 text-sm mb-8">
          <span className="w-2 h-2 bg-[#c9a84c] rounded-full animate-pulse" />
          Plus de 30 ans d&apos;expérience professionnelle
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Des compétences fortes,
          <br />
          <span className="text-[#c9a84c]">des conseils pertinents</span>
        </h1>

        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          Partenaire stratégique des TPE/PME et grandes entreprises. Management, Finance, Data,
          Process Mining et Systèmes d&apos;information — une vision transversale pour bâtir des fondations solides.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="bg-[#c9a84c] hover:bg-[#b8943d] text-white font-semibold px-8 py-4 rounded-md transition-colors text-sm"
          >
            Découvrir nos services
          </a>
          <a
            href="#contact"
            className="border border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-md transition-colors text-sm"
          >
            Prendre contact
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10 pb-8 md:pb-0">
          {[
            { value: "30+", label: "Ans d'expérience" },
            { value: "8", label: "Domaines d'expertise" },
            { value: "TPE/PME", label: "& Grands groupes" },
            { value: "France", label: "& International" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-[#c9a84c]">{stat.value}</p>
              <p className="text-white/60 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.getElementById("next-section")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
        aria-label="Défiler vers le bas"
      >
        <svg className="w-6 h-6 text-white/40 hover:text-white/70 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </section>
  );
}
