import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité du site IO Software.",
  alternates: { canonical: "https://www.io-software.fr/politique-de-confidentialite" },
  robots: { index: false, follow: false },
};

export default function PolitiqueConfidentialite() {
  return (
    <>
      <section className="bg-[#1e3a5f] pt-32 pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Politique de confidentialité</h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 prose prose-slate max-w-none">

          <h2>Responsable du traitement</h2>
          <p>
            <strong>IO Software SAS</strong><br />
            Rue Denis Magdelon, 13009 Marseille<br />
            Site : <a href="https://www.io-software.fr">https://www.io-software.fr</a>
          </p>

          <h2>Données collectées</h2>

          <h3>Formulaires de contact</h3>
          <p>
            Les informations renseignées dans les formulaires de contact (nom, adresse e-mail, société, message) sont collectées et traitées par IO Software dans le seul but de répondre à votre demande. Elles ne sont ni cédées ni vendues à des tiers.
          </p>

          <h3>Navigation et adresse IP</h3>
          <p>
            Lors de votre visite, nous pouvons enregistrer votre adresse IP et les données de navigation (pages consultées, durée de visite) à des fins statistiques et de sécurité.
          </p>

          <h3>Cookies</h3>
          <p>
            Ce site utilise des cookies de mesure d&apos;audience (Google Analytics) pour analyser le trafic de façon anonyme. Ces cookies ne permettent pas de vous identifier personnellement. Vous pouvez les désactiver via les paramètres de votre navigateur ou l&apos;outil de gestion des cookies intégré au site.
          </p>

          <h2>Durée de conservation</h2>
          <p>
            Les données issues des formulaires de contact sont conservées pendant la durée nécessaire au traitement de votre demande, puis archivées pendant 3 ans à des fins de gestion commerciale, sauf opposition de votre part.
          </p>

          <h2>Vos droits</h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants sur vos données personnelles :
          </p>
          <ul>
            <li><strong>Droit d&apos;accès</strong> : obtenir une copie des données vous concernant</li>
            <li><strong>Droit de rectification</strong> : corriger des données inexactes ou incomplètes</li>
            <li><strong>Droit à l&apos;effacement</strong> : demander la suppression de vos données</li>
            <li><strong>Droit d&apos;opposition</strong> : vous opposer au traitement de vos données</li>
            <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
          </ul>
          <p>
            Pour exercer ces droits, utilisez le formulaire de contact disponible sur ce site.
          </p>
          <p>
            Vous pouvez également introduire une réclamation auprès de la <strong>CNIL</strong> (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>).
          </p>

          <h2>Contenus intégrés</h2>
          <p>
            Ce site peut contenir des contenus intégrés provenant de services tiers (vidéos, cartes, etc.). Ces services peuvent collecter des données indépendamment. Consultez leurs politiques de confidentialité respectives.
          </p>

          <h2>Mise à jour</h2>
          <p>
            Cette politique de confidentialité peut être mise à jour à tout moment. La date de dernière modification est indiquée en bas de page.
          </p>
          <p className="text-sm text-slate-400">Dernière mise à jour : juin 2026</p>
        </div>
      </section>
    </>
  );
}
