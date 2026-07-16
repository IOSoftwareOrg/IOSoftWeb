import type { Metadata } from "next";
import { hasLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: lang === "en" ? "Legal notice" : "Mentions légales",
    description: lang === "en" ? "Legal notice of the IO Software website." : "Mentions légales du site IO Software.",
    robots: { index: false, follow: false },
  };
}

export default async function MentionsLegalesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <>
      <section className="bg-[#1e3a5f] pt-32 pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white">{lang === "en" ? "Legal notice" : "Mentions légales"}</h1>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 prose prose-slate max-w-none">
          <h2>Éditeur du site</h2>
          <p><strong>IO Software SAS</strong><br />Rue Denis Magdelon<br />13009 Marseille<br />Activité : Développement stratégique et commercial des entreprises et éditeur de logiciels</p>
          <h2>Responsabilité</h2>
          <p>IO Software met en œuvre tous les efforts raisonnables pour fournir des informations vérifiées et à jour sur ce site. Cependant, la société ne peut garantir l&apos;exactitude, l&apos;exhaustivité ou l&apos;actualité des informations publiées.</p>
          <h2>Propriété intellectuelle</h2>
          <p>La structure du site, les logiciels, textes, images, logos et tout autre contenu sont la propriété exclusive d&apos;<strong>IO Software SAS</strong> et sont protégés par le droit de la propriété intellectuelle. Les illustrations présentes sur le site sont des créations originales réalisées spécifiquement pour IO Software SAS et ne reproduisent aucune œuvre ou visuel tiers protégé.</p>
          <h2>Données personnelles</h2>
          <p>Ce site est déclaré auprès de la CNIL sous le numéro <strong>1811247</strong>. Les informations communiquées via les formulaires de contact sont utilisées exclusivement à des fins de gestion administrative et commerciale.</p>
          <h2>Cookies</h2>
          <p>Ce site utilise des cookies pour enregistrer des informations relatives à la navigation. Vous pouvez paramétrer votre navigateur pour refuser les cookies.</p>
          <h2>Juridiction</h2>
          <p>Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux compétents sont ceux de <strong>Marseille</strong>.</p>
        </div>
      </section>
    </>
  );
}
