import { businessSegments, company, figures, figuresAsOf, globalPresence } from "@/data/company";

/**
 * Questions an allocator, a counterparty or an answer engine asks first. Every
 * answer is drawn from company.ts and the Disclosures page; nothing here is a
 * claim that does not already appear elsewhere on the site. Rendered visibly on
 * /about and emitted as FAQPage JSON-LD from the same array, so the two never
 * drift.
 */
export interface Faq {
  question: string;
  answer: string;
}

const offices = globalPresence.filter((o) => o.type !== "headquarters").map((o) => o.city);
const segmentNames = businessSegments.map((s) => s.title);

export const faqs: Faq[] = [
  {
    question: "What is Perkway Group?",
    answer: company.description,
  },
  {
    question: "Where is Perkway Group headquartered?",
    answer: `Perkway Group is headquartered at ${company.address.street}, ${company.address.city} ${company.address.postal}, ${company.address.country}, with regional offices in ${offices.join(" and ")}.`,
  },
  {
    question: "What does Perkway Group invest in and operate?",
    answer: `The group operates across ${businessSegments.length} business segments: ${segmentNames.slice(0, -1).join(", ")} and ${segmentNames[segmentNames.length - 1]}.`,
  },
  {
    question: "How large is Perkway Group's portfolio?",
    answer: `As of ${figuresAsOf}, the group reports ${figures.aum} in assets under management, ${figures.units} residential units, ${figures.companies} portfolio companies, ${figures.employees} employees and activity in ${figures.markets} markets across ${figures.countries} countries. Figures are unaudited and rounded; see the Disclosures page for the basis of each.`,
  },
  {
    question: "When was Perkway Group founded?",
    answer: `Perkway Group was founded in ${figures.founded}.`,
  },
  {
    question: "Is Perkway Group authorised by the Financial Conduct Authority?",
    answer: `No. ${company.legalName} is not authorised or regulated by the Financial Conduct Authority and does not provide regulated investment services. Nothing on this website is an offer to sell or a solicitation of an offer to buy any security.`,
  },
  {
    question: "How do I contact Perkway Group about investment or partnership opportunities?",
    answer: `Investor and co-investment inquiries go to ${company.investorEmail}. General inquiries go to ${company.email} or through the contact form on this website. The team responds within one business day.`,
  },
];
