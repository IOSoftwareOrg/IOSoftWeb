import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://*.google-analytics.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "font-src 'self'",
      "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com",
      "frame-ancestors 'none'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      // Sécurité + cache pages HTML — toutes les routes
      {
        source: "/(.*)",
        headers: [
          ...securityHeaders,
          { key: "Cache-Control", value: "public, max-age=0, s-maxage=60, stale-while-revalidate=300" },
        ],
      },
      // Fichiers publics (favicon, robots, sitemap, og-images…) — 1 semaine
      {
        source: "/(favicon.*|robots.txt|sitemap.xml|.*\\.png|.*\\.jpg|.*\\.svg|.*\\.webp|.*\\.woff2?)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      // /en/software est l'URL publique EN de la page /en/logiciels (route interne)
      { source: "/en/software", destination: "/en/logiciels" },
      { source: "/en/software/:slug", destination: "/en/logiciels/:slug" },
    ];
  },
  async redirects() {
    return [
      // /en/logiciels → /en/software (nouvelle URL canonique EN)
      { source: "/en/logiciels", destination: "/en/software", permanent: true },
      { source: "/en/logiciels/:slug", destination: "/en/software/:slug", permanent: true },

      // Pages principales
      { source: "/services/", destination: "/services", permanent: true },
      { source: "/expertise/", destination: "/expertise", permanent: true },
      { source: "/logiciels/", destination: "/logiciels", permanent: true },
      { source: "/blog/", destination: "/blog", permanent: true },
      { source: "/contact/", destination: "/contact", permanent: true },

      // Anciennes pages services WordPress → nouvelles pages
      { source: "/conseil-en-management", destination: "/services/conseil-en-management", permanent: true },
      { source: "/conseil-en-management/", destination: "/services/conseil-en-management", permanent: true },
      { source: "/redaction-technique-2", destination: "/services/redaction-technique", permanent: true },
      { source: "/redaction-technique-2/", destination: "/services/redaction-technique", permanent: true },
      { source: "/redaction-technique", destination: "/services/redaction-technique", permanent: true },
      { source: "/redaction-technique/", destination: "/services/redaction-technique", permanent: true },
      { source: "/process-mining", destination: "/services/process-mining", permanent: true },
      { source: "/process-mining/", destination: "/services/process-mining", permanent: true },
      { source: "/data-consulting", destination: "/services/data-consulting", permanent: true },
      { source: "/data-consulting/", destination: "/services/data-consulting", permanent: true },
      { source: "/finance-entreprise", destination: "/services/finance-entreprise", permanent: true },
      { source: "/finance-entreprise/", destination: "/services/finance-entreprise", permanent: true },
      { source: "/systemes-information", destination: "/services/systemes-information", permanent: true },
      { source: "/systemes-information/", destination: "/services/systemes-information", permanent: true },
      { source: "/developpement-logiciel", destination: "/services/developpement-logiciel", permanent: true },
      { source: "/developpement-logiciel/", destination: "/services/developpement-logiciel", permanent: true },

      // Catégories WordPress → page blog
      { source: "/category/:cat", destination: "/blog", permanent: true },
      { source: "/category/:cat/", destination: "/blog", permanent: true },

      // Anciens articles WordPress → nouveaux slugs
      {
        source: "/optimisation-du-takt-time",
        destination: "/blog/takt-time-optimise-gerer-backlog-demandes",
        permanent: true,
      },
      {
        source: "/takt-time-optimise-gerer-un-backlog-de-demandes",
        destination: "/blog/takt-time-optimise-gerer-backlog-demandes",
        permanent: true,
      },
      {
        source: "/soigner-son-bilan",
        destination: "/blog/bilan-fin-annee-retraitement",
        permanent: true,
      },
      {
        source: "/la-clause-de-ratchet",
        destination: "/blog/clause-de-ratchet",
        permanent: true,
      },
      {
        source: "/effet-de-levier",
        destination: "/blog/effet-de-levier-financier",
        permanent: true,
      },
      {
        source: "/introduction-a-la-strategie-dentreprise",
        destination: "/blog/introduction-strategie-entreprise",
        permanent: true,
      },
      {
        source: "/couts-variables",
        destination: "/blog/couts-variables-gestion-entreprise",
        permanent: true,
      },
      {
        source: "/le-controle-de-gestion-un-pilier-pour-la-performance-et-la-perennite-des-entreprises",
        destination: "/blog/controle-de-gestion-pilier-performance",
        permanent: true,
      },
      {
        source: "/les-couts",
        destination: "/blog/les-couts-definition-principes",
        permanent: true,
      },
      {
        source: "/windows-10-mises-a-jour",
        destination: "/blog/windows-10-mises-a-jour",
        permanent: true,
      },
      {
        source: "/open-source",
        destination: "/blog/open-source",
        permanent: true,
      },
      {
        source: "/securiser-son-site-internet",
        destination: "/blog/securiser-son-site-internet",
        permanent: true,
      },
      {
        source: "/securite-vos-achats-sur-internet",
        destination: "/blog/securite-achats-sur-internet",
        permanent: true,
      },
      {
        source: "/le-marketing-definition",
        destination: "/blog/le-marketing-definition",
        permanent: true,
      },
      {
        source: "/fracture-zone-euro",
        destination: "/blog/fracture-zone-euro",
        permanent: true,
      },
      {
        source: "/pib",
        destination: "/blog/pib",
        permanent: true,
      },
      {
        source: "/transmission-entreprise-artisanale",
        destination: "/blog/transmission-entreprise-artisanale",
        permanent: true,
      },
      {
        source: "/les-vices-du-consentement",
        destination: "/blog/vices-du-consentement",
        permanent: true,
      },
      {
        source: "/formation-du-consentement",
        destination: "/blog/formation-du-consentement",
        permanent: true,
      },
      {
        source: "/la-volonte",
        destination: "/blog/la-volonte-formation-contrat",
        permanent: true,
      },
      {
        source: "/la-loi-dutreil",
        destination: "/blog/loi-dutreil-insaisissabilite",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
