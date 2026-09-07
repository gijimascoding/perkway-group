import { describe, expect, it } from "vitest";
import { breadcrumbSchema, pageMetadata, webPageSchema } from "@/app/seo";
import { organizationSchema, personSchema } from "@/app/structured-data";
import { leadership } from "@/data/company";

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
    const b = breadcrumbSchema([{ name: "Leadership", path: "/leadership" }]);
    expect(b.itemListElement[0]).toMatchObject({ position: 1, name: "Home", item: "https://www.perkways.com/" });
    expect(b.itemListElement[1]).toMatchObject({ position: 2, name: "Leadership", item: "https://www.perkways.com/leadership" });
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

  it("lists only executives as employees", () => {
    const execs = leadership.filter((m) => m.role === "executive").length;
    expect(organizationSchema.employee).toHaveLength(execs);
  });
});

describe("personSchema", () => {
  it("names a site-hosted portrait and omits an external one", () => {
    const hosted = leadership.find((m) => m.photo?.startsWith("/"))!;
    const external = leadership.find((m) => m.photo?.startsWith("http"))!;
    expect(personSchema(hosted).image).toBe(`https://www.perkways.com${hosted.photo}`);
    expect(personSchema(external).image).toBeUndefined();
  });
});
