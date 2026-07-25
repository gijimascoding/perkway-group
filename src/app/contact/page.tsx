import type { Metadata } from "next";
import { company } from "@/data/company";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact | Perkway Group",
  description:
    "Contact Perkway Group for investor inquiries, partnership opportunities, and general information.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in Touch"
        subtitle="We welcome inquiries from investors, partners, and stakeholders. Reach out to our team and we will respond within one business day."
        image="/images/modern-home.jpg"
      />

      <section className="bg-paper-100">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">
            {/* Form */}
            <div className="lg:col-span-3">
              <p className="eyebrow">Send a Message</p>
              <h2 className="display mt-4 text-ink-900 text-[clamp(1.7rem,3vw,2.4rem)]">
                Contact Our Team
              </h2>
              <p className="mt-4 text-ink-600 text-[16px] leading-relaxed max-w-[52ch]">
                Fill out the form below and a member of our team will be in touch shortly.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="sticky top-28 space-y-6">
                <div className="border border-paper-300 bg-paper-50 p-8">
                  <p className="eyebrow">Headquarters</p>
                  <p className="mt-4 text-[15px] text-ink-700 leading-relaxed">
                    {company.address.street}
                    <br />
                    {company.address.city}, {company.address.province}
                    <br />
                    {company.address.country}
                  </p>
                </div>

                <div className="border border-paper-300 bg-paper-50 p-8">
                  <p className="eyebrow">Contact Information</p>
                  <div className="mt-4 space-y-5">
                    {[
                      { l: "General Inquiries", v: company.email, href: `mailto:${company.email}` },
                      { l: "Investor Relations", v: company.investorEmail, href: `mailto:${company.investorEmail}` },
                      { l: "Phone", v: company.phone, href: `tel:${company.phone.replace(/[^0-9+]/g, "")}` },
                    ].map((c) => (
                      <div key={c.l}>
                        <p className="text-[11px] text-ink-600 uppercase tracking-[0.1em] font-[700] mb-1">{c.l}</p>
                        <a href={c.href} className="text-[15px] text-ink-900 font-[700] hover:text-ink-600 transition-colors">
                          {c.v}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-ink-900 p-8 text-white">
                  <p className="text-[11px] font-[700] uppercase tracking-[0.14em] text-white/55">How Can We Help</p>
                  <ul className="mt-4 space-y-3">
                    {[
                      "Investment & Co-Investment Opportunities",
                      "Institutional Partnership Inquiries",
                      "Property Management Services",
                      "Advisory & Consulting Engagements",
                      "Media & Press Inquiries",
                      "Careers & Employment",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[14px] text-white/75">
                        <span className="mt-[9px] w-1 h-1 rounded-full bg-white/40 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
