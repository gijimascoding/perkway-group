import { businessSegments, company, figures, figuresAsOf, globalPresence, insights, navigationItems, operatingMarkets } from "@/data/company";
import { faqs } from "@/data/faq";
import { BASE_URL } from "../robots";

/**
 * /llms.txt — the plain-text summary answer engines read first. Built from
 * company.ts at request time so it can never disagree with the pages. Format
 * follows the llms.txt convention: H1 name, blockquote summary, sections of
 * links and facts.
 */
export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${company.name}`,
    "",
    `> ${company.description}`,
    "",
    `${company.name} (legal name ${company.legalName}) is a privately held holding company founded in ${figures.founded} and headquartered at ${company.address.street}, ${company.address.city} ${company.address.postal}, ${company.address.country}, with offices in ${globalPresence.filter((o) => o.type !== "headquarters").map((o) => o.city).join(" and ")}. It is not authorised or regulated by the Financial Conduct Authority and does not provide regulated investment services. Nothing on the site is an offer or solicitation of any security.`,
    "",
    `## Key figures (as of ${figuresAsOf}, unaudited, rounded)`,
    "",
    `- Assets under management: ${figures.aum}`,
    `- Residential units owned, developed or managed: ${figures.units}`,
    `- Portfolio companies: ${figures.companies}`,
    `- Countries: ${figures.countries}`,
    `- Employees across the group: ${figures.employees}`,
    `- Markets: ${figures.markets} (${operatingMarkets.join(", ")})`,
    `- Founded: ${figures.founded}`,
    "",
    "## Business segments",
    "",
    ...businessSegments.map((s) => `- ${s.title} (${s.subtitle}): ${s.description}`),
    "",
    "## Pages",
    "",
    `- [Home](${BASE_URL}/): overview, figures, businesses, insights`,
    ...navigationItems.map((n) => `- [${n.label}](${BASE_URL}${n.href})`),
    `- [Disclosures](${BASE_URL}/disclosures): basis of every figure, no-offer statement, risk`,
    `- [Privacy Policy](${BASE_URL}/privacy)`,
    `- [Terms of Use](${BASE_URL}/terms)`,
    "",
    "## Insights",
    "",
    ...insights.map((n) => `- ${n.title} (${n.category}, ${n.date}): ${n.excerpt}`),
    "",
    "## Frequently asked questions",
    "",
    ...faqs.flatMap((f) => [`### ${f.question}`, "", f.answer, ""]),
    "## Contact",
    "",
    `- General: ${company.email}`,
    `- Investor relations: ${company.investorEmail}`,
    `- Telephone: ${company.phone}`,
    `- Address: ${company.address.street}, ${company.address.city} ${company.address.postal}, ${company.address.country}`,
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
