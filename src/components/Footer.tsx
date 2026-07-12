import Link from "next/link";
import type { Locale } from "@/lib/i18n";

const t = {
  fr: {
    tagline: "Conseil en Stratégie, Organisation, Process, Data et IA — basé à Marseille, présent en France et à l'international.",
    navigation: "Navigation",
    values: "Nos valeurs",
    legal: "Mentions légales",
    privacy: "Politique de confidentialité",
    rights: "Tous droits réservés",
    links: [
      { label: "Services", href: "/fr/services" },
      { label: "Expertise", href: "/fr/expertise" },
      { label: "Logiciels", href: "/fr/logiciels" },
      { label: "Blog", href: "/fr/blog" },
      { label: "Contact", href: "/fr/contact" },
    ],
    valuesList: [
      { title: "Impact", desc: "Nous mesurons notre succès au vôtre." },
      { title: "Objectivité", desc: "Notre indépendance est notre force." },
      { title: "Expertise", desc: "Nous intervenons là où nous excellons." },
    ],
    legalHref: "/fr/mentions-legales",
    privacyHref: "/fr/politique-de-confidentialite",
  },
  en: {
    tagline: "Strategy, Organisation, Process, Data & AI consulting — based in Marseille, operating in France and internationally.",
    navigation: "Navigation",
    values: "Our values",
    legal: "Legal notice",
    privacy: "Privacy policy",
    rights: "All rights reserved",
    links: [
      { label: "Services", href: "/en/services" },
      { label: "Expertise", href: "/en/expertise" },
      { label: "Software", href: "/en/software" },
      { label: "Blog", href: "/en/blog" },
      { label: "Contact", href: "/en/contact" },
    ],
    valuesList: [
      { title: "Impact", desc: "We measure our success by yours." },
      { title: "Objectivity", desc: "Our independence is our strength." },
      { title: "Expertise", desc: "We operate where we excel." },
    ],
    legalHref: "/en/mentions-legales",
    privacyHref: "/en/politique-de-confidentialite",
  },
};

export default function Footer({ lang = "fr" }: { lang?: Locale }) {
  const d = t[lang];

  return (
    <footer className="bg-[#0f172a] text-slate-400">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <p className="text-white text-xl font-bold mb-3">
            <span className="text-[#c9a84c] font-mono">&lt;/&gt;</span> IO Software
          </p>
          <p className="text-sm leading-relaxed">{d.tagline}</p>
        </div>

        <div>
          <p className="text-white font-semibold mb-3">{d.navigation}</p>
          <ul className="space-y-2 text-sm">
            {d.links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-[#c9a84c] transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-white font-semibold mb-4">{d.values}</p>
          <ul className="space-y-3 text-sm">
            {d.valuesList.map((v) => (
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
          <p>© {new Date().getFullYear()} IO Software. {d.rights}.</p>
          <p>
            <Link href={d.legalHref} className="hover:text-[#c9a84c] transition-colors">{d.legal}</Link>
            {" · "}
            <Link href={d.privacyHref} className="hover:text-[#c9a84c] transition-colors">{d.privacy}</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
