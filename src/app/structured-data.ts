import { businessSegments, company, figures, globalPresence, leadership, type LeadershipMember } from "@/data/company";
import { BASE_URL } from "./robots";

/** Organization + WebSite JSON-LD. This is what tells Google which image is the
 *  official company logo — the favicon only feeds the 16px slot in a result row.
 *
 *  Deliberately no `sameAs`: twitter.com/perkwaygroup 404s and the LinkedIn page
 *  is unverified. Naming a profile here asserts the company controls it, so an
 *  unowned handle is worse than an absent one. Add them back once they exist.
 *
 *  Every other field comes from company.ts: founding year, headcount band,
 *  offices, segments. Nothing here is asserted that the site does not show.
 */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: company.name,
  legalName: company.legalName,
  alternateName: company.legalName,
  slogan: company.tagline,
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/icon.png`,
    width: 192,
    height: 192,
  },
  image: `${BASE_URL}/images/og.jpg`,
  description: company.description,
  foundingDate: figures.founded,
  // A single value, not a min/max pair: the site says "200+" with no ceiling,
  // and Google flags a minValue without a maxValue. 200 is the stated floor.
  numberOfEmployees: { "@type": "QuantitativeValue", value: 200 },
  email: company.email,
  telephone: company.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.street,
    addressLocality: company.address.city,
    postalCode: company.address.postal,
    addressCountry: "GB",
  },
  location: globalPresence.map((o) => ({
    "@type": "Place",
    name: `${company.name} ${o.type === "headquarters" ? "headquarters" : "office"}, ${o.city}`,
    address: { "@type": "PostalAddress", addressLocality: o.city, addressCountry: o.country === "UK" ? "GB" : o.country === "United States" ? "US" : "CA" },
  })),
  contactPoint: [
    { "@type": "ContactPoint", contactType: "investor relations", email: company.investorEmail, availableLanguage: "en" },
    { "@type": "ContactPoint", contactType: "customer service", email: company.email, telephone: company.phone, availableLanguage: "en" },
  ],
  knowsAbout: businessSegments.map((s) => s.title),
  employee: leadership.filter((m) => m.role === "executive").map((m) => ({ "@id": personId(m) })),
} as const;

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: company.name,
  url: BASE_URL,
  description: company.description,
  inLanguage: "en",
  publisher: { "@id": `${BASE_URL}/#organization` },
} as const;

export function personId(m: LeadershipMember) {
  return `${BASE_URL}/leadership#${m.name.toLowerCase().replace(/[^a-z]+/g, "-")}`;
}

/** Person nodes for the leadership page. Only site-hosted portraits are named. */
export function personSchema(m: LeadershipMember) {
  const image = m.photo && m.photo.startsWith("/") ? `${BASE_URL}${m.photo}` : undefined;
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId(m),
    name: m.name,
    jobTitle: m.title,
    description: m.bio,
    worksFor: { "@id": `${BASE_URL}/#organization` },
    ...(m.role === "board" ? { memberOf: { "@id": `${BASE_URL}/#organization` } } : {}),
    ...(image ? { image } : {}),
  };
}
