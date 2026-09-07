import type { MetadataRoute } from "next";
import { navigationItems } from "@/data/company";
import { BASE_URL } from "./robots";

/** Every route is static: the nav plus the three legal documents. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: `${BASE_URL}/`, lastModified, changeFrequency: "monthly" as const, priority: 1 },
    ...navigationItems.map((item) => ({
      url: `${BASE_URL}${item.href}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: item.href === "/contact" ? 0.5 : 0.8,
    })),
    ...["/privacy", "/terms", "/disclosures"].map((href) => ({
      url: `${BASE_URL}${href}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.2,
    })),
  ];
}
