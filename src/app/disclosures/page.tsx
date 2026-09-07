import type { Metadata } from "next";
import { pageMetadata } from "@/app/seo";
import { LegalPage } from "@/components/LegalPage";
import { company, figuresAsOf } from "@/data/company";

export const metadata: Metadata = pageMetadata({
  title: "Disclosures",
  description:
    "Important disclosures about the figures, statements and offerings referred to on the Perkway Group website.",
  path: "/disclosures",
});

export default function DisclosuresPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Disclosures"
      effective="September 1, 2026"
      intro={
        <p>
          The following disclosures apply to every page of this website and should be read together with the{" "}
          <a href="/terms" className="link-underline">Terms of Use</a>.
        </p>
      }
      sections={[
        {
          heading: "Basis of figures",
          body: (
            <>
              <p>
                Portfolio figures shown on this website, including assets under management, residential units, portfolio
                companies, countries and markets, are stated as of {figuresAsOf} unless a different date is shown beside
                them. They are drawn from internal records, are unaudited, and are rounded. Assets under management
                reflects the gross value of real estate and operating businesses owned or managed by group entities and
                is not a measure of investor capital or net asset value.
              </p>
              <p>
                Residential unit counts include units owned, developed or managed by group companies on behalf of third
                parties. Portfolio company counts include operating subsidiaries and minority holdings.
              </p>
            </>
          ),
        },
        {
          heading: "No offer",
          body: (
            <p>
              Nothing on this website constitutes an offer to sell or a solicitation of an offer to buy any security or
              investment interest, or a recommendation of any investment. Any offering of interests in a fund, vehicle or
              transaction would be made only by means of definitive offering documents and only to persons eligible to
              receive them under applicable law. {company.legalName} is not authorized or regulated by the Financial
              Conduct Authority and does not provide regulated investment services.
            </p>
          ),
        },
        {
          heading: "Risk",
          body: (
            <p>
              Investing involves risk, including the possible loss of capital. Real estate and operating business
              investments are illiquid, may be leveraged, and are exposed to market, credit, interest-rate, construction,
              regulatory and operational risks. Past performance is not a guide to future results.
            </p>
          ),
        },
        {
          heading: "Third-party information and images",
          body: (
            <p>
              Market commentary may draw on third-party sources believed to be reliable but not independently verified.
              Photography of cities and buildings is illustrative of the markets in which the group operates and does not
              necessarily depict assets owned by the group.
            </p>
          ),
        },
        {
          heading: "Corporate information",
          body: (
            <p>
              {company.legalName} is headquartered at {company.address.street}, {company.address.city}{" "}
              {company.address.postal}, {company.address.country}. Inquiries may be directed to{" "}
              <a href={`mailto:${company.email}`} className="link-underline">{company.email}</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
