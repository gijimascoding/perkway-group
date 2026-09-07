import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy | Perkway Group",
  description: "How Perkway Group collects, uses and protects personal information submitted through this website.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      effective="September 1, 2026"
      intro={
        <>
          <p>
            {company.legalName} (&ldquo;Perkway Group&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) respects the privacy of every
            person who visits this website. This policy explains what information we collect, why we collect it, how it
            is handled, and the choices available to you.
          </p>
          <p>
            This website is informational. It does not sell products, host user accounts, or run advertising. The only
            personal information we receive is what you choose to send us through the contact form or by email.
          </p>
        </>
      }
      sections={[
        {
          heading: "Information we collect",
          body: (
            <>
              <p>
                When you submit the contact form we receive the details you enter: your name, email address, telephone
                number and organization if provided, the type of inquiry, and your message. When you email us directly we
                receive whatever you include in that message.
              </p>
              <p>
                Our hosting provider records standard server logs, including the IP address, browser type, requested page
                and time of each request, for security and reliability. These logs are not used to identify individual
                visitors and are retained only for as long as the provider needs them for those purposes.
              </p>
            </>
          ),
        },
        {
          heading: "Cookies and analytics",
          body: (
            <p>
              This website does not set advertising or analytics cookies and does not use tracking pixels. The only
              client-side storage it uses is what your browser needs to render the pages you request.
            </p>
          ),
        },
        {
          heading: "How we use information",
          body: (
            <p>
              We use the details you send us to respond to your inquiry, to evaluate a potential investment, partnership
              or service relationship where you have asked us to, and to keep a record of that correspondence. We do not
              sell personal information and we do not use it for marketing to people who have not asked to hear from us.
            </p>
          ),
        },
        {
          heading: "Sharing and processors",
          body: (
            <p>
              Form submissions are delivered to us through a third-party form-processing service and our email provider,
              each acting on our instructions. We may share information with professional advisers bound by confidentiality,
              or where required by law, regulation or legal process. We do not otherwise share personal information with
              third parties.
            </p>
          ),
        },
        {
          heading: "International transfers",
          body: (
            <p>
              Perkway Group operates from the United Kingdom with offices in Canada and the United States. Information you
              send us may be processed in any of those jurisdictions. Where information is transferred out of the United
              Kingdom or the European Economic Area we rely on appropriate safeguards recognized under applicable data
              protection law.
            </p>
          ),
        },
        {
          heading: "Retention",
          body: (
            <p>
              We keep correspondence for as long as it is relevant to the inquiry that generated it and to any resulting
              relationship, and thereafter for as long as we are required to retain business records. Information that is
              no longer needed is deleted.
            </p>
          ),
        },
        {
          heading: "Your rights",
          body: (
            <p>
              Depending on where you live, you may have the right to access the personal information we hold about you,
              to have it corrected or deleted, to object to or restrict its processing, and to lodge a complaint with a
              supervisory authority such as the UK Information Commissioner&rsquo;s Office. To exercise any of these
              rights, write to us at the address below.
            </p>
          ),
        },
        {
          heading: "Contact",
          body: (
            <p>
              Privacy questions should be sent to{" "}
              <a href={`mailto:${company.email}`} className="link-underline">{company.email}</a> or by post to{" "}
              {company.legalName}, {company.address.street}, {company.address.city} {company.address.postal},{" "}
              {company.address.country}.
            </p>
          ),
        },
        {
          heading: "Changes to this policy",
          body: (
            <p>
              We may update this policy from time to time. The effective date at the top of the page shows when it was
              last changed. Continued use of the website after a change means the updated policy applies.
            </p>
          ),
        },
      ]}
    />
  );
}
