import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-400">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <p className="text-white text-xl font-bold mb-3">
            IO <span className="text-[#c9a84c]">Software</span>
          </p>
          <p className="text-sm leading-relaxed">
            Cabinet de conseil multidisciplinaire basé à Marseille. Partenaire stratégique des TPE/PME et grandes entreprises depuis plus de 30 ans.
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
          <p className="text-white font-semibold mb-3">Contact</p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 mt-0.5 shrink-0 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Rue Denis Magdelon<br />13009 Marseille</span>
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 shrink-0 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:contact@io-software.fr" className="hover:text-[#c9a84c] transition-colors">
                contact@io-software.fr
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-xs gap-2">
          <p>© {new Date().getFullYear()} IO Software. Tous droits réservés.</p>
          <p>
            <a href="#" className="hover:text-[#c9a84c] transition-colors">Mentions légales</a>
            {" · "}
            <a href="#" className="hover:text-[#c9a84c] transition-colors">Politique de confidentialité</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
