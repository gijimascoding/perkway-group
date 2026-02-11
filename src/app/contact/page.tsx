import type { Metadata } from "next";
import { company } from "@/data/company";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Perkway Group",
  description:
    "Contact Perkway Group for investor inquiries, partnership opportunities, and general information.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-gold-500" />
              <span className="text-gold-500 text-xs font-semibold tracking-[0.2em] uppercase">
                Contact
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-[1.1] mb-6">
              Get in <span className="font-semibold">Touch</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              We welcome inquiries from investors, partners, and stakeholders.
              Reach out to our team and we will respond within one business
              day.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-semibold text-navy-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-slate-600 mb-8">
                Fill out the form below and a member of our team will be in
                touch shortly.
              </p>
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="sticky top-28 space-y-8">
                {/* Office */}
                <div className="border border-slate-200 p-8">
                  <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600 mb-4">
                    Headquarters
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {company.address.street}
                    <br />
                    {company.address.city}, {company.address.province}{" "}
                    {company.address.postal}
                    <br />
                    {company.address.country}
                  </p>
                </div>

                {/* Contact Details */}
                <div className="border border-slate-200 p-8">
                  <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600 mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                        General Inquiries
                      </p>
                      <a
                        href={`mailto:${company.email}`}
                        className="text-sm text-navy-900 font-medium hover:text-gold-600 transition-colors"
                      >
                        {company.email}
                      </a>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                        Investor Relations
                      </p>
                      <a
                        href={`mailto:${company.investorEmail}`}
                        className="text-sm text-navy-900 font-medium hover:text-gold-600 transition-colors"
                      >
                        {company.investorEmail}
                      </a>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                        Phone
                      </p>
                      <a
                        href={`tel:${company.phone}`}
                        className="text-sm text-navy-900 font-medium hover:text-gold-600 transition-colors"
                      >
                        {company.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Inquiry Types */}
                <div className="bg-navy-950 p-8 text-white">
                  <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-500 mb-4">
                    How Can We Help
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Investment & Co-Investment Opportunities",
                      "Institutional Partnership Inquiries",
                      "Property Management Services",
                      "Advisory & Consulting Engagements",
                      "Media & Press Inquiries",
                      "Careers & Employment",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-slate-300"
                      >
                        <div className="w-1 h-1 rounded-full bg-gold-500 shrink-0" />
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
