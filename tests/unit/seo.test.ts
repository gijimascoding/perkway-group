import { describe, expect, it } from "vitest";
import { breadcrumbSchema, pageMetadata, webPageSchema } from "@/app/seo";
import { organizationSchema } from "@/app/structured-data";

describe("pageMetadata", () => {
  const m = pageMetadata({ title: "About", description: "d", path: "/about" });

  it("gives the page its own canonical, Open Graph and Twitter titles", () => {
    expect(m.alternates?.canonical).toBe("https://www.perkways.com/about");
    expect((m.openGraph as { title?: string }).title).toBe("About | Perkway Group");
    expect((m.openGraph as { url?: string }).url).toBe("https://www.perkways.com/about");
    expect((m.twitter as { title?: string }).title).toBe("About | Perkway Group");
  });

  it("leaves the bare title for the layout template to suffix", () => {
    expect(m.title).toBe("About");
  });
});

describe("breadcrumbSchema", () => {
  it("always starts at Home with positions counting from 1", () => {
    const b = breadcrumbSchema([{ name: "About", path: "/about" }]);
    expect(b.itemListElement[0]).toMatchObject({ position: 1, name: "Home", item: "https://www.perkways.com/" });
    expect(b.itemListElement[1]).toMatchObject({ position: 2, name: "About", item: "https://www.perkways.com/about" });
  });
});

describe("webPageSchema", () => {
  it("links the page to the site and organization by id", () => {
    const w = webPageSchema({ type: "ContactPage", name: "n", description: "d", path: "/contact" });
    expect(w["@type"]).toBe("ContactPage");
    expect(w.isPartOf).toEqual({ "@id": "https://www.perkways.com/#website" });
    expect(w.about).toEqual({ "@id": "https://www.perkways.com/#organization" });
  });
});

describe("organizationSchema", () => {
  it("states the headcount as one value so Google does not ask for a ceiling", () => {
    expect(organizationSchema.numberOfEmployees).toEqual({ "@type": "QuantitativeValue", value: 200 });
  });

  it("carries no sameAs until a verified profile exists", () => {
    expect("sameAs" in organizationSchema).toBe(false);
  });

  it("names no individual people", () => {
    expect("employee" in organizationSchema).toBe(false);
  });
});
