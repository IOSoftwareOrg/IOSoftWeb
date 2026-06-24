import type { Metadata } from "next";
import { hasLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: lang === "en" ? "Privacy policy" : "Politique de confidentialité",
    description: lang === "en" ? "Privacy policy of the IO Software website." : "Politique de confidentialité du site IO Software.",
    robots: { index: false, follow: false },
  };
}

export default async function PolitiqueConfidentialitePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <>
      <section className="bg-[#1e3a5f] pt-32 pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white">{lang === "en" ? "Privacy policy" : "Politique de confidentialité"}</h1>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 prose prose-slate max-w-none">
          <h2>Collecte des données</h2>
          <p>IO Software collecte uniquement les données personnelles que vous nous communiquez via le formulaire de contact (nom, prénom, email, téléphone, message). Ces données sont utilisées exclusivement pour répondre à vos demandes et ne sont jamais cédées à des tiers.</p>
          <h2>Durée de conservation</h2>
          <p>Vos données sont conservées pendant la durée nécessaire au traitement de votre demande, dans le respect de la réglementation applicable.</p>
          <h2>Vos droits</h2>
          <p>Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement et d&apos;opposition au traitement de vos données. Pour exercer ces droits : <strong>contact@io-software.fr</strong></p>
          <h2>Cookies</h2>
          <p>Ce site utilise Google Analytics pour mesurer l&apos;audience. Vous pouvez refuser ces cookies en paramétrant votre navigateur.</p>
        </div>
      </section>
    </>
  );
}
