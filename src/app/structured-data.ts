import { company } from "@/data/company";
import { BASE_URL } from "./robots";

/** Organization + WebSite JSON-LD. This is what tells Google which image is the
 *  official company logo — the favicon only feeds the 16px slot in a result row.
 *
 *  Deliberately no `sameAs`: twitter.com/perkwaygroup 404s and the LinkedIn page
 *  is unverified. Naming a profile here asserts the company controls it, so an
 *  unowned handle is worse than an absent one. Add them back once they exist.
 */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: company.name,
  legalName: company.legalName,
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/icon.png`,
    width: 192,
    height: 192,
  },
  image: `${BASE_URL}/images/og.jpg`,
  description: company.description,
  email: company.email,
  telephone: company.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.street,
    addressLocality: company.address.city,
    postalCode: company.address.postal,
    addressCountry: "GB",
  },
} as const;

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: company.name,
  url: BASE_URL,
  description: company.description,
  publisher: { "@id": `${BASE_URL}/#organization` },
} as const;
