import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-400">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <p className="text-white text-xl font-bold mb-3">
            <span className="text-[#c9a84c] font-mono">&lt;/&gt;</span> IO Software
          </p>
          <p className="text-sm leading-relaxed">
            Conseil en Stratégie, Organisation, Process, Data et IA — basé à Marseille, présent en France et à l&apos;international.
          </p>
        </div>

        <div>
          <p className="text-white font-semibold mb-3">Navigation</p>
          <ul className="space-y-2 text-sm">
            {[
              ["Services", "/services"],
              ["Expertise", "/expertise"],
              ["Logiciels", "/logiciels"],
              ["Blog", "/blog"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="hover:text-[#c9a84c] transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-white font-semibold mb-4">Nos valeurs</p>
          <ul className="space-y-3 text-sm">
            {[
              { title: "Entrepreneurship", desc: "Structures horizontales, épanouissement collectif" },
              { title: "Efficiency", desc: "Qualité et rigueur sur chaque mission" },
              { title: "Value", desc: "Chaque travail apporte une valeur mesurable" },
            ].map((v) => (
              <li key={v.title}>
                <p className="text-[#c9a84c] font-semibold">{v.title}</p>
                <p className="text-slate-400 text-xs">{v.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-xs gap-2">
          <p>© {new Date().getFullYear()} IO Software. Tous droits réservés.</p>
          <p>
            <Link href="/mentions-legales" className="hover:text-[#c9a84c] transition-colors">Mentions légales</Link>
            {" · "}
            <Link href="/politique-de-confidentialite" className="hover:text-[#c9a84c] transition-colors">Politique de confidentialité</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
