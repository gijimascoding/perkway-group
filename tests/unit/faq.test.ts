import { describe, expect, it } from "vitest";
import { faqs } from "@/data/faq";
import { businessSegments, company, figures, figuresAsOf } from "@/data/company";

describe("faqs", () => {
  it("answers every question from company.ts, never from a hard-coded figure", () => {
    const portfolio = faqs.find((f) => f.question.startsWith("How large"))!;
    expect(portfolio.answer).toContain(figures.aum);
    expect(portfolio.answer).toContain(figures.units);
    expect(portfolio.answer).toContain(figuresAsOf);
    expect(portfolio.answer).toMatch(/unaudited/i);
  });

  it("lists every business segment by its exact title", () => {
    const segments = faqs.find((f) => f.question.startsWith("What does"))!;
    for (const s of businessSegments) expect(segments.answer).toContain(s.title);
    expect(segments.answer).toContain(`${businessSegments.length} business segments`);
  });

  it("states the FCA position in the negative and names the legal entity", () => {
    const fca = faqs.find((f) => /Financial Conduct Authority/.test(f.question))!;
    expect(fca.answer.startsWith("No.")).toBe(true);
    expect(fca.answer).toContain(company.legalName);
  });

  it("routes investor inquiries to the investor mailbox, not the general one", () => {
    const contact = faqs.find((f) => f.question.startsWith("How do I contact"))!;
    expect(contact.answer).toContain(company.investorEmail);
    expect(contact.answer.indexOf(company.investorEmail)).toBeLessThan(contact.answer.indexOf(company.email));
  });
});
