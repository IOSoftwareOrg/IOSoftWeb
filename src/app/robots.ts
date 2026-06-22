import { MetadataRoute } from "next";

const BASE_URL = "https://www.io-software.fr";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
