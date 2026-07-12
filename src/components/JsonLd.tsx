export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.io-software.fr/#website-search",
        url: "https://www.io-software.fr",
        name: "IO Software",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.io-software.fr/fr/blog?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.io-software.fr/#organization",
        name: "IO Software",
        url: "https://www.io-software.fr",
        logo: "https://www.io-software.fr/favicon.ico",
        description:
          "Cabinet de conseil basé à Marseille. Stratégie, Organisation, Process, Data et IA. Plus de 30 ans d'expérience.",
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
          "Conseil en stratégie",
          "Organisation",
          "Process Mining",
          "Data Consulting",
          "Intelligence artificielle",
          "Systèmes d'information",
          "Développement logiciel",
          "Agents IA autonomes",
          "Développement web",
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
