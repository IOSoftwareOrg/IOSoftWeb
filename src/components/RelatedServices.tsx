import Link from "next/link";
import type { Locale } from "@/lib/i18n";

type RelatedService = {
  title: string;
  desc: string;
  href: string;
};

const t = {
  fr: { title: "Services complémentaires", desc: "Ces services s'associent naturellement à cette prestation.", discover: "Découvrir" },
  en: { title: "Related services", desc: "These services naturally complement this offering.", discover: "Discover" },
};

export default function RelatedServices({ services, lang = "fr" }: { services: RelatedService[]; lang?: Locale }) {
  const d = t[lang];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-[#0f172a] mb-2">{d.title}</h2>
        <p className="text-[#64748b] mb-8">{d.desc}</p>
        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group flex flex-col justify-between p-8 rounded-sm border border-[#e2e8f0] hover:border-[#1e3a5f] transition-colors duration-300"
            >
              <div>
                <h3 className="font-bold text-[#0f172a] mb-2 group-hover:text-[#1e3a5f] transition-colors">{s.title}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed">{s.desc}</p>
              </div>
              <span className="mt-6 text-sm font-semibold text-[#1e3a5f] group-hover:text-[#c9a84c] transition-colors flex items-center gap-1">
                {d.discover}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
