import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Terms of Use | Perkway Group",
  description: "The terms on which Perkway Group makes this website available.",
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Use"
      effective="September 1, 2026"
      intro={
        <p>
          This website is published by {company.legalName} (&ldquo;Perkway Group&rdquo;). By using it you accept these
          terms. If you do not accept them, please do not use the website.
        </p>
      }
      sections={[
        {
          heading: "Informational purpose",
          body: (
            <p>
              The content of this website is provided for general information about Perkway Group and its businesses. It
              is not investment, legal, tax or accounting advice, and it is not an offer to sell or a solicitation of an
              offer to buy any security, fund interest or other financial product in any jurisdiction. Any such offer would
              be made only through definitive documentation to persons eligible to receive it.
            </p>
          ),
        },
        {
          heading: "No reliance",
          body: (
            <p>
              Figures, portfolio descriptions and market commentary are current as of the date shown alongside them and
              may change without notice. Perkway Group makes reasonable efforts to keep the website accurate but gives no
              warranty, express or implied, as to its completeness, accuracy or fitness for any purpose, and accepts no
              liability for any loss arising from reliance on it.
            </p>
          ),
        },
        {
          heading: "Forward-looking statements",
          body: (
            <p>
              Statements about strategy, plans, expected growth, target markets and similar matters are forward-looking.
              They reflect current expectations and are subject to risks and uncertainties, including market conditions,
              regulatory change and the performance of individual assets and businesses. Actual outcomes may differ
              materially. Perkway Group undertakes no obligation to update them.
            </p>
          ),
        },
        {
          heading: "Intellectual property",
          body: (
            <p>
              The Perkway Group name, the PG monogram, and the text, photography and design of this website are owned by
              or licensed to Perkway Group. You may view and print pages for your own reference. Any other reproduction,
              distribution or commercial use requires our prior written consent.
            </p>
          ),
        },
        {
          heading: "Links to other sites",
          body: (
            <p>
              Where the website links to third-party sites, those sites are outside our control and their content is not
              endorsed by us. Your use of them is governed by their own terms and privacy practices.
            </p>
          ),
        },
        {
          heading: "Acceptable use",
          body: (
            <p>
              You agree not to use the website in any way that is unlawful, that could damage or impair it, or that
              attempts to gain unauthorized access to any part of it or to the systems that serve it.
            </p>
          ),
        },
        {
          heading: "Governing law",
          body: (
            <p>
              These terms are governed by the laws of England and Wales, and the courts of England and Wales have
              exclusive jurisdiction over any dispute arising from them or from use of the website.
            </p>
          ),
        },
        {
          heading: "Contact",
          body: (
            <p>
              Questions about these terms may be sent to{" "}
              <a href={`mailto:${company.email}`} className="link-underline">{company.email}</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
