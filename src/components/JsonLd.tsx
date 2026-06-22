export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.io-software.fr/#organization",
        name: "IO Software",
        url: "https://www.io-software.fr",
        logo: "https://www.io-software.fr/favicon.ico",
        description:
          "Cabinet de conseil multidisciplinaire basé à Marseille. Management, Stratégie, Finance, Data, Process Mining et Systèmes d'information. Plus de 30 ans d'expérience.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Rue Denis Magdelon",
          addressLocality: "Marseille",
          postalCode: "13009",
          addressCountry: "FR",
        },
        contactPoint: {
          "@type": "ContactPoint",
          email: "contact@io-software.fr",
          contactType: "customer service",
          availableLanguage: "French",
        },
        areaServed: ["FR", "Worldwide"],
        knowsAbout: [
          "Conseil en management",
          "Stratégie d'entreprise",
          "Finance d'entreprise",
          "Process Mining",
          "Data Consulting",
          "Systèmes d'information",
          "Développement logiciel",
          "Rédaction technique",
        ],
        sameAs: [],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.io-software.fr/#website",
        url: "https://www.io-software.fr",
        name: "IO Software",
        publisher: { "@id": "https://www.io-software.fr/#organization" },
        inLanguage: "fr-FR",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
