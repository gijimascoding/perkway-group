import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { leadership } from "@/data/company";

export const metadata: Metadata = {
  title: "Leadership | Perkway Group",
  description:
    "Meet the experienced executives and board members guiding Perkway Group's strategic vision and operational excellence.",
};

export default function LeadershipPage() {
  const executives = leadership.filter((l) => l.role === "executive");
  const board = leadership.filter((l) => l.role === "board");

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-gold-500" />
              <span className="text-gold-500 text-xs font-semibold tracking-[0.2em] uppercase">
                Leadership
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-[1.1] mb-6">
              Our <span className="font-semibold">Team</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Perkway Group is led by a team of experienced professionals with
              deep expertise across real estate investment, corporate strategy,
              hospitality operations, and technology innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Executive Team */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-gold-500" />
              <span className="text-gold-600 text-xs font-semibold tracking-[0.2em] uppercase">
                Executive Team
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-navy-900 leading-tight">
              Senior <span className="font-semibold">Management</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {executives.map((person) => (
              <div
                key={person.name}
                className="grid sm:grid-cols-[200px_1fr] gap-8"
              >
                <div className="aspect-[4/5] bg-navy-100 relative overflow-hidden flex items-center justify-center">
                  {person.photo ? (
                    <Image
                      src={person.photo}
                      alt={person.name}
                      fill
                      className="object-cover"
                      sizes="200px"
                    />
                  ) : (
                    <span className="text-4xl font-light text-navy-300">
                      {person.initials}
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-1">
                    {person.name}
                  </h3>
                  <p className="text-sm text-gold-600 font-medium mb-4">
                    {person.title}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {person.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-gold-500" />
              <span className="text-gold-600 text-xs font-semibold tracking-[0.2em] uppercase">
                Board of Directors
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-navy-900 leading-tight">
              Independent <span className="font-semibold">Governance</span>
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl leading-relaxed">
              Our Board of Directors provides independent oversight, strategic
              counsel, and governance expertise. Each member brings a
              distinctive perspective shaped by decades of leadership in their
              respective fields.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {board.map((person) => (
              <div
                key={person.name}
                className="bg-white border border-slate-200 p-8"
              >
                <div className="w-20 h-20 bg-navy-100 relative overflow-hidden rounded-full mb-6 flex items-center justify-center">
                  {person.photo ? (
                    <Image
                      src={person.photo}
                      alt={person.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  ) : (
                    <span className="text-lg font-light text-navy-400">
                      {person.initials}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-1">
                  {person.name}
                </h3>
                <p className="text-sm text-gold-600 font-medium mb-4">
                  {person.title}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[1px] bg-gold-500" />
                <span className="text-gold-600 text-xs font-semibold tracking-[0.2em] uppercase">
                  Corporate Governance
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-light text-navy-900 leading-tight mb-6">
                Institutional{" "}
                <span className="font-semibold">Standards</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Perkway Group adheres to the highest standards of corporate
                governance and institutional accountability. Our governance
                framework ensures alignment between management, board, and
                investor interests across all portfolio activities.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We maintain rigorous internal controls, independent audit
                processes, and transparent reporting standards that meet the
                expectations of our institutional partners and regulatory
                bodies across all jurisdictions of operation.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Audit & Risk Committee",
                  desc: "Independent oversight of financial reporting, internal controls, and enterprise risk management.",
                },
                {
                  title: "Investment Committee",
                  desc: "Rigorous review and approval process for all material capital deployment and acquisition activities.",
                },
                {
                  title: "Compensation & Governance Committee",
                  desc: "Ensures alignment of executive compensation with long-term performance and stakeholder interests.",
                },
                {
                  title: "ESG & Sustainability Committee",
                  desc: "Oversight of environmental, social, and governance initiatives across the portfolio.",
                },
              ].map((committee) => (
                <div
                  key={committee.title}
                  className="border-l-2 border-gold-500 pl-6"
                >
                  <h3 className="text-lg font-semibold text-navy-900 mb-1">
                    {committee.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {committee.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-light text-white mb-4">
            Join Our <span className="font-semibold">Team</span>
          </h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            We are always looking for exceptional talent to join our growing
            platform. Explore opportunities across our portfolio companies.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy-900 text-sm font-semibold tracking-wide hover:bg-slate-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
