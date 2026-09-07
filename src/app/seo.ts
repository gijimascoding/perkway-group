import type { Metadata } from "next";
import { company } from "@/data/company";
import { BASE_URL } from "./robots";

/**
 * Per-page metadata in one call. Next does not copy a page's `title` into its
 * Open Graph or Twitter card, so without this every subpage shared with the
 * home title. The canonical is absolute and per-route.
 */
export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const url = `${BASE_URL}${path}`;
  const fullTitle = `${title} | ${company.name}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: company.name,
      title: fullTitle,
      description,
      url,
      images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: company.name }],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: ["/images/og.jpg"] },
  };
}

/** BreadcrumbList for a subpage: Home, then the page. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.path}`,
    })),
  };
}

/** A typed WebPage node linked to the site and organization graph. */
export function webPageSchema({
  type = "WebPage",
  name,
  description,
  path,
}: {
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage" | "ProfilePage";
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${BASE_URL}${path}#webpage`,
    url: `${BASE_URL}${path}`,
    name,
    description,
    inLanguage: "en",
    isPartOf: { "@id": `${BASE_URL}/#website` },
    about: { "@id": `${BASE_URL}/#organization` },
  };
}
