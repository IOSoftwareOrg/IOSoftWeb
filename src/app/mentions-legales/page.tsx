import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site IO Software.",
  alternates: { canonical: "https://www.io-software.fr/mentions-legales" },
  robots: { index: false, follow: false },
};

export default function MentionsLegales() {
  return (
    <>
      <section className="bg-[#1e3a5f] pt-32 pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Mentions légales</h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 prose prose-slate max-w-none">

          <h2>Éditeur du site</h2>
          <p>
            <strong>IO Software SAS</strong><br />
            119, Rue Denis Magdelon<br />
            13009 Marseille<br />
            Activité : Développement stratégique et commercial des entreprises et éditeur de logiciels
          </p>

          <h2>Responsabilité</h2>
          <p>
            IO Software met en œuvre tous les efforts raisonnables pour fournir des informations vérifiées et à jour sur ce site. Cependant, la société ne peut garantir l&apos;exactitude, l&apos;exhaustivité ou l&apos;actualité des informations publiées. L&apos;utilisation du site se fait aux risques et périls de l&apos;utilisateur.
          </p>
          <p>
            IO Software ne saurait être tenue responsable des dommages directs ou indirects résultant de l&apos;utilisation de ce site, de l&apos;indisponibilité de certaines fonctionnalités ou de la présence éventuelle de virus.
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            La structure du site, les logiciels, textes, images, logos et tout autre contenu sont la propriété exclusive d&apos;<strong>IO Software SAS</strong> et sont protégés par le droit de la propriété intellectuelle.
          </p>
          <p>
            Toute reproduction, représentation, modification ou exploitation, totale ou partielle, du site ou de son contenu, par quelque procédé que ce soit, sans autorisation préalable et écrite d&apos;IO Software, est strictement interdite et constitue une contrefaçon sanctionnée par les articles L. 335-2 et suivants du Code de la propriété intellectuelle.
          </p>

          <h2>Données personnelles et informatique &amp; libertés</h2>
          <p>
            Ce site est déclaré auprès de la Commission Nationale de l&apos;Informatique et des Libertés (CNIL) sous le numéro <strong>1811247</strong>, conformément à la loi n°78-17 du 6 janvier 1978 modifiée relative à l&apos;informatique, aux fichiers et aux libertés.
          </p>
          <p>
            Les informations communiquées via les formulaires de contact sont utilisées exclusivement à des fins de gestion administrative et commerciale. Vous disposez d&apos;un droit d&apos;accès, de rectification et d&apos;opposition au traitement de vos données personnelles. Pour exercer ces droits, adressez un courrier signé accompagné d&apos;une copie de votre pièce d&apos;identité à :
          </p>
          <p>
            IO Software SAS — 119, Rue Denis Magdelon, 13009 Marseille
          </p>

          <h2>Cookies</h2>
          <p>
            Ce site utilise des cookies pour enregistrer des informations relatives à la navigation. Ces cookies ne permettent pas d&apos;identifier personnellement les utilisateurs. Vous pouvez paramétrer votre navigateur pour refuser les cookies.
          </p>

          <h2>Juridiction</h2>
          <p>
            Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux compétents sont ceux de <strong>Marseille</strong>.
          </p>
        </div>
      </section>
    </>
  );
}
