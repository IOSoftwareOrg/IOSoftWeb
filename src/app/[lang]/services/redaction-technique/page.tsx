import type { Metadata } from "next";
import Link from "next/link";
import RelatedServices from "@/components/RelatedServices";
import { hasLocale, locales, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

const BASE_URL = "https://www.io-software.fr";
export async function generateStaticParams() { return locales.map((lang) => ({ lang })); }

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  return {
    title: isFr ? "Rédaction technique" : "Technical Writing",
    description: isFr ? "Rédacteurs techniques bilingues FR/EN depuis plus de 20 ans. ISO/IEC 82079, S1000D, DITA XML." : "Bilingual FR/EN technical writers for over 20 years. ISO/IEC 82079, S1000D, DITA XML.",
    alternates: { canonical: `${BASE_URL}/${lang}/services/redaction-technique`, languages: { fr: `${BASE_URL}/fr/services/redaction-technique`, en: `${BASE_URL}/en/services/redaction-technique` } },
  };
}

const normes = ["ISO/IEC 82079", "S1000D", "ATA 2300", "DITA XML"];
const checkIconSm = <svg className="w-4 h-4 text-[#c9a84c] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>;
const docIcon = <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;

const data = {
  fr: {
    label: "Nos services", title: "Rédaction technique",
    hero: "Professionnels de la communication technique et de la documentation logicielle depuis plus de 20 ans pour de grands éditeurs, nous concevons et mettons à jour votre documentation utilisateurs en anglais et en français.",
    interlocTitle: "Votre interlocuteur idéal",
    interlocP1: "Si vous recherchez des rédacteurs techniques rigoureux et autonomes, maîtrisant les langages informatiques et les outils techniques, capables de synthétiser et de structurer tout type d'information pour l'adapter à un utilisateur cible — vous avez trouvé votre interlocuteur.",
    interlocP2: "Nos expériences multiples dans des secteurs variés — banque, commerce, pharmacie — nous ont amenés à développer une capacité d'adaptation fondamentale pour la rédaction technique de tout produit destiné à un marché particulier.",
    secteursLabel: "Nos secteurs d'expérience",
    secteurs: ["Banque & Finance", "Commerce & Retail", "Pharmacie & Santé", "Informatique & Logiciels", "Industrie"],
    multiTitle: "Rédaction multilingue",
    multiText: "Nous maîtrisons parfaitement le français, notre langue maternelle, et sommes capables de traduire tout document en anglais. Après plusieurs années d'expérience dans le monde anglo-saxon, nos traductions bénéficient d'une double compétence linguistique qui améliore sensiblement la lisibilité des documents produits.",
    langs: [
      { flag: "🇫🇷", lang: "Français", desc: "Langue maternelle. Rédaction native, terminologie précise, adaptation sectorielle." },
      { flag: "🇬🇧", lang: "Anglais", desc: "Maîtrise professionnelle. Traduction et rédaction directe après immersion en environnement anglo-saxon." },
    ],
    norméeTitle: "Rédaction technique normée",
    norméeP1: "La rédaction technique doit suivre un protocole propre aux exigences de nos clients. Nous mettons tout en œuvre pour respecter les normes en vigueur et le format DITA XML.",
    norméeP2: "Nous suivons les « best practices » de nos clients en étant force de proposition. Notre service ne s'arrête pas à la rédaction pure — le document technique sera largement diffusé et doit permettre au lecteur de trouver rapidement l'information recherchée.",
    normesLabel: "Normes maîtrisées",
    qualTitle: "Rédaction technique de qualité",
    qualText: "Les types de documents varient en fonction des destinataires. Nous faisons la différence entre les approches de chaque lecteur — du spécialiste au grand public — pour produire une documentation réellement adaptée à son usage.",
    docs: [
      { title: "Documentation administrateur", desc: "Guides techniques destinés aux administrateurs de logiciels et progiciels." },
      { title: "Documentation utilisateur", desc: "Manuels d'utilisation, modes d'emploi et notices adaptés au grand public ou aux utilisateurs métiers." },
      { title: "Documentation spécialiste", desc: "Contenus techniques approfondis pour des experts du domaine." },
      { title: "Contenus SEO & web", desc: "Rédaction technique accessible, structurée pour une diffusion large et optimisée pour les moteurs de recherche." },
    ],
    related: [
      { title: "Systèmes d'information", desc: "Une documentation rigoureuse s'appuie sur une architecture SI maîtrisée. Alignez vos outils et vos référentiels.", href: "/fr/services/systemes-information" },
      { title: "Développement logiciel", desc: "Nous documentons les logiciels que nous développons — une cohérence naturelle entre code et documentation.", href: "/fr/services/developpement-logiciel" },
    ],
    ctaTitle: "Parlons de votre projet de documentation",
    ctaDesc: "Rigoureux, autonomes et bilingues — nous adaptons chaque document à son lecteur cible.",
    ctaBtn: "Prendre contact →",
  },
  en: {
    label: "Our services", title: "Technical Writing",
    hero: "Technical communication and software documentation professionals for over 20 years, working for major publishers. We design and update your user documentation in both English and French.",
    interlocTitle: "Your ideal partner",
    interlocP1: "If you are looking for rigorous and autonomous technical writers, mastering computer languages and technical tools, capable of synthesising and structuring any type of information to adapt it to a target user — you have found your partner.",
    interlocP2: "Our multiple experiences across varied sectors — banking, commerce, pharmacy — have led us to develop a fundamental adaptability for the technical writing of any product intended for a particular market.",
    secteursLabel: "Our sectors of experience",
    secteurs: ["Banking & Finance", "Commerce & Retail", "Pharmacy & Healthcare", "IT & Software", "Industry"],
    multiTitle: "Multilingual writing",
    multiText: "We have perfect command of French, our mother tongue, and are able to translate any document into English. After several years of experience in the Anglo-Saxon world, our translations benefit from dual linguistic expertise that significantly improves the readability of produced documents.",
    langs: [
      { flag: "🇫🇷", lang: "French", desc: "Native language. Native writing, precise terminology, sector-specific adaptation." },
      { flag: "🇬🇧", lang: "English", desc: "Professional proficiency. Translation and direct writing after immersion in an Anglo-Saxon environment." },
    ],
    norméeTitle: "Standards-compliant technical writing",
    norméeP1: "Technical writing must follow a protocol specific to our clients' requirements. We do everything possible to comply with applicable standards and the DITA XML format.",
    norméeP2: "We follow our clients' best practices while proactively making suggestions. Our service does not stop at pure writing — the technical document will be widely distributed and must allow the reader to quickly find the information they need.",
    normesLabel: "Mastered standards",
    qualTitle: "Quality technical writing",
    qualText: "Document types vary according to their recipients. We differentiate between the approaches of each reader — from specialist to general public — to produce documentation genuinely adapted to its use.",
    docs: [
      { title: "Administrator documentation", desc: "Technical guides for software and application administrators." },
      { title: "User documentation", desc: "User manuals, operating instructions and notices adapted for the general public or business users." },
      { title: "Specialist documentation", desc: "In-depth technical content for domain experts." },
      { title: "SEO & web content", desc: "Accessible technical writing, structured for wide distribution and optimised for search engines." },
    ],
    related: [
      { title: "Information Systems", desc: "Rigorous documentation relies on a mastered IS architecture. Align your tools and references.", href: "/en/services/systemes-information" },
      { title: "Software Development", desc: "We document the software we develop — a natural coherence between code and documentation.", href: "/en/services/developpement-logiciel" },
    ],
    ctaTitle: "Let's talk about your documentation project",
    ctaDesc: "Rigorous, autonomous and bilingual — we adapt each document to its target reader.",
    ctaBtn: "Get in touch →",
  },
};

export default async function RedactionPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const d = data[lang as Locale];

  return (
    <>
      <section className="bg-[#1e3a5f] pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href={`/${lang}/services`} className="text-white hover:text-white/80 transition-colors">Services</Link>
            <span>/</span><span className="text-white/80">{d.title}</span>
          </div>
          <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">{d.label}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">{d.title}</h1>
          <p className="text-white/70 max-w-2xl leading-relaxed">{d.hero}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">{d.interlocTitle}</h2>
              <p className="text-[#475569] leading-relaxed mb-4">{d.interlocP1}</p>
              <p className="text-[#475569] leading-relaxed">{d.interlocP2}</p>
            </div>
            <div className="bg-[#1e3a5f] rounded-sm p-8 text-white">
              <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-6">{d.secteursLabel}</p>
              <ul className="space-y-3">
                {d.secteurs.map((s) => <li key={s} className="flex items-center gap-3">{checkIconSm}<span className="text-white/80 text-sm">{s}</span></li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">{d.multiTitle}</h2>
              <p className="text-[#475569] leading-relaxed">{d.multiText}</p>
            </div>
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
              {d.langs.map((l) => (
                <div key={l.lang} className="bg-white rounded-sm p-6 border border-[#e2e8f0]">
                  <p className="text-3xl mb-3">{l.flag}</p>
                  <h3 className="font-bold text-[#0f172a] mb-2">{l.lang}</h3>
                  <p className="text-sm text-[#475569] leading-relaxed">{l.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">{d.norméeTitle}</h2>
              <p className="text-[#475569] leading-relaxed mb-4">{d.norméeP1}</p>
              <p className="text-[#475569] leading-relaxed">{d.norméeP2}</p>
            </div>
            <div className="bg-[#f8fafc] rounded-sm p-8 border border-[#e2e8f0]">
              <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-6">{d.normesLabel}</p>
              <div className="flex flex-wrap gap-3">
                {normes.map((n) => <span key={n} className="bg-[#1e3a5f] text-white text-sm font-semibold px-4 py-2 rounded-lg">{n}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#0f172a] mb-4">{d.qualTitle}</h2>
          <p className="text-[#475569] leading-relaxed max-w-3xl mb-8">{d.qualText}</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {d.docs.map((t) => (
              <div key={t.title} className="bg-white rounded-sm p-6 border border-[#e2e8f0] flex items-start gap-4">
                <div className="w-8 h-8 bg-[#1e3a5f] rounded-lg flex items-center justify-center shrink-0 mt-0.5">{docIcon}</div>
                <div><h3 className="font-bold text-[#0f172a] mb-1">{t.title}</h3><p className="text-sm text-[#475569] leading-relaxed">{t.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices services={d.related} lang={lang as Locale} />

      <section className="bg-[#c9a84c] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{d.ctaTitle}</h2>
          <p className="text-white/80 mb-8">{d.ctaDesc}</p>
          <Link href={`/${lang}/contact?subject=${encodeURIComponent(d.title)}`} className="inline-block bg-white text-[#1e3a5f] font-bold px-8 py-4 rounded-md hover:bg-[#f1f5f9] transition-colors">{d.ctaBtn}</Link>
        </div>
      </section>
    </>
  );
}
