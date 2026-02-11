import type { Metadata } from "next";
import Link from "next/link";
import { metrics } from "@/data/company";
import { AnimatedMetrics } from "@/components/AnimatedMetrics";

export const metadata: Metadata = {
  title: "About | Perkway Group",
  description:
    "Perkway Group is a diversified holding company with principal investments in real estate, hospitality, technology, and financial services.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-gold-500" />
              <span className="text-gold-500 text-xs font-semibold tracking-[0.2em] uppercase">
                About the Group
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-[1.1] mb-6">
              Who We <span className="font-semibold">Are</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              A vertically integrated holding company building enduring value
              through disciplined investment, operational excellence, and
              innovation across real assets and related industries.
            </p>
          </div>
        </div>
      </section>

      <AnimatedMetrics metrics={metrics} />

      {/* Our Story */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3">
              <h2 className="text-3xl lg:text-4xl font-light text-navy-900 leading-tight mb-8">
                A Platform Built for{" "}
                <span className="font-semibold">Long-Term Value Creation</span>
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  Perkway Group was founded with a singular thesis: that the
                  convergence of real estate, technology, and hospitality
                  represents one of the most compelling opportunities in
                  modern capital markets. Since our founding, we have grown
                  from a focused real estate operator into a diversified
                  holding company with principal investments spanning multiple
                  asset classes and geographies.
                </p>
                <p>
                  Our vertically integrated structure allows us to control
                  every stage of the value chain — from deal sourcing and
                  underwriting to construction, property management, and asset
                  optimization. This integration creates operational
                  efficiencies, information advantages, and risk mitigation
                  that standalone operators cannot replicate.
                </p>
                <p>
                  Today, Perkway Group oversees a portfolio of over 5,000
                  residential units across owned and managed assets, operates
                  36 portfolio companies, and serves communities in 14 markets
                  worldwide. Our team of 200+ professionals is united by a
                  shared commitment to excellence, innovation, and responsible
                  stewardship.
                </p>
                <p>
                  We view real estate not merely as an asset class, but as
                  infrastructure that shapes how people live, work, and connect.
                  Whether through repositioning distressed properties,
                  deploying proprietary technology to enhance operations, or
                  developing purpose-built communities for the modern resident,
                  Perkway consistently creates value where others see
                  complexity.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="sticky top-28 space-y-8">
                <div className="bg-navy-950 p-8 text-white">
                  <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-500 mb-4">
                    Our Mission
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-300">
                    To build a platform of enduring businesses that create
                    lasting value for investors, communities, and the people we
                    serve — by combining institutional discipline with
                    entrepreneurial agility across real estate and related
                    industries.
                  </p>
                </div>

                <div className="border border-slate-200 p-8">
                  <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600 mb-4">
                    Our Values
                  </h3>
                  <ul className="space-y-3">
                    {[
                      {
                        title: "Disciplined Capital Allocation",
                        desc: "Every investment decision is grounded in rigorous analysis and long-term thinking.",
                      },
                      {
                        title: "Operational Excellence",
                        desc: "We build systems and teams that deliver consistent, measurable results.",
                      },
                      {
                        title: "Innovation & Adaptability",
                        desc: "We embrace technology and new models to stay ahead of market shifts.",
                      },
                      {
                        title: "Integrity & Transparency",
                        desc: "We operate with the highest standards of corporate governance and accountability.",
                      },
                      {
                        title: "Community Impact",
                        desc: "We invest in people and places, creating positive outcomes beyond financial returns.",
                      },
                    ].map((value) => (
                      <li key={value.title} className="border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                        <h4 className="text-sm font-semibold text-navy-900">
                          {value.title}
                        </h4>
                        <p className="text-xs text-slate-500 mt-0.5">
                          {value.desc}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline / Milestones */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-gold-500" />
              <span className="text-gold-600 text-xs font-semibold tracking-[0.2em] uppercase">
                Milestones
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-navy-900 leading-tight">
              Key Moments in{" "}
              <span className="font-semibold">Our Growth</span>
            </h2>
          </div>

          <div className="space-y-0">
            {[
              {
                year: "2018",
                title: "Foundation",
                desc: "Perkway Group is established in London with an initial focus on co-living and residential real estate across key markets.",
              },
              {
                year: "2019",
                title: "First Portfolio Acquisitions",
                desc: "Acquired first portfolio of residential properties in Toronto and Montréal, establishing the foundation for scaled North American operations.",
              },
              {
                year: "2020",
                title: "Operational Platform Launch",
                desc: "Launched proprietary property management platform and expanded to 1,000+ managed residential units across Canada.",
              },
              {
                year: "2021",
                title: "U.S. Market Entry",
                desc: "Expanded operations into key U.S. metropolitan markets including New York, Boston, and Washington, D.C.",
              },
              {
                year: "2022",
                title: "Technology & Hospitality Platforms",
                desc: "Launched PropTech subsidiary and hybrid hospitality brand, diversifying the group beyond traditional real estate operations.",
              },
              {
                year: "2023",
                title: "Institutional Capital Partnerships",
                desc: "Established co-investment partnerships with institutional investors and family offices, scaling the portfolio significantly.",
              },
              {
                year: "2024",
                title: "5,000 Unit Milestone",
                desc: "Surpassed 5,000 residential units under ownership and management. Expanded portfolio companies to 36 operating entities.",
              },
              {
                year: "2025",
                title: "Continued Growth",
                desc: "Expanded presence across 14 markets with $1.2B+ in assets under management. Deepened operations across all business segments.",
              },
            ].map((milestone, i) => (
              <div
                key={milestone.year}
                className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-6 lg:gap-12"
              >
                <div className="text-right pt-6">
                  <span className="text-2xl font-bold text-navy-900">
                    {milestone.year}
                  </span>
                </div>
                <div className="border-l border-slate-300 pl-6 lg:pl-12 pb-10 relative">
                  <div className="absolute left-[-5px] top-8 w-2.5 h-2.5 rounded-full bg-gold-500" />
                  <div className="pt-6">
                    <h3 className="text-lg font-semibold text-navy-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {milestone.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-light text-white mb-4">
            Learn More About Our <span className="font-semibold">Business Segments</span>
          </h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            Discover how our diversified platform creates value across real
            estate, hospitality, technology, and financial services.
          </p>
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy-900 text-sm font-semibold tracking-wide hover:bg-slate-100 transition-colors"
          >
            Explore Our Portfolio
          </Link>
        </div>
      </section>
    </>
  );
}
