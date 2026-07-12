import { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { logiciels } from "@/lib/logiciels";
import { locales } from "@/lib/i18n";
import { logicielsSegment } from "@/lib/routes";

const BASE_URL = "https://www.io-software.fr";

const serviceSlugsList = [
  "conseil-en-management", "strategie-developpement", "finance-entreprise",
  "data-consulting", "process-mining", "systemes-information",
  "redaction-technique", "developpement-logiciel",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = locales.flatMap((lang) => [
    { url: `${BASE_URL}/${lang}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
    { url: `${BASE_URL}/${lang}/services`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE_URL}/${lang}/expertise`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/${lang}/${logicielsSegment(lang)}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/${lang}/blog`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${BASE_URL}/${lang}/contact`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.6 },
    ...serviceSlugsList.map((slug) => ({
      url: `${BASE_URL}/${lang}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ]);

  const logicielRoutes = locales.flatMap((lang) =>
    logiciels.map((l) => ({ url: `${BASE_URL}/${lang}/${logicielsSegment(lang)}/${l.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 }))
  );

  const articleRoutes = locales.flatMap((lang) =>
    articles.map((a) => ({ url: `${BASE_URL}/${lang}/blog/${a.slug}`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.6 }))
  );

  return [...staticRoutes, ...logicielRoutes, ...articleRoutes];
}
