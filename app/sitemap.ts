import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://flows44.com";
  const locales = ["en", "he"];
  const pages = ["", "/privacy", "/terms"];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of pages) {
      entries.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority: page === "" ? 1.0 : 0.5,
        alternates: {
          languages: {
            en: `${baseUrl}/en${page}`,
            he: `${baseUrl}/he${page}`,
          },
        },
      });
    }
  }

  return entries;
}
