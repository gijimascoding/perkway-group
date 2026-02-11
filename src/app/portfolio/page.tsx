import type { Metadata } from "next";
import Link from "next/link";
import { businessSegments } from "@/data/company";

export const metadata: Metadata = {
  title: "Portfolio | Perkway Group",
  description:
    "Explore Perkway Group's diversified portfolio of businesses spanning real estate, hospitality, technology, property management, lending, and advisory services.",
};

function SegmentIcon({ icon }: { icon: string }) {
  const icons: Record<string, React.ReactNode> = {
    building: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="1" />
        <path d="M9 22V18h6v4M9 6h.01M15 6h.01M9 10h.01M15 10h.01M9 14h.01M15 14h.01" />
      </svg>
    ),
    hotel: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2z" />
        <path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01M8 14h.01M16 14h.01M12 14h.01" />
      </svg>
    ),
    chip: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="6" width="12" height="12" rx="1" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
      </svg>
    ),
    management: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    crane: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20M5 20V8l7-5v17M19 20V10l-7-3" />
        <path d="M9 12h2M9 16h2" />
      </svg>
    ),
    chart: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M7 16l4-6 4 3 5-7" />
      </svg>
    ),
    dollar: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v12M9 9.5a2.5 2 0 015 0c0 2-5 2-5 4a2.5 2 0 005 0" />
      </svg>
    ),
    handshake: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.42 4.58a5.4 5.4 0 00-7.65 0l-.77.78-.77-.78a5.4 5.4 0 00-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
      </svg>
    ),
  };
  return <>{icons[icon] || icons.building}</>;
}

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-gold-500" />
              <span className="text-gold-500 text-xs font-semibold tracking-[0.2em] uppercase">
                Our Portfolio
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-[1.1] mb-6">
              Business <span className="font-semibold">Segments</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Our portfolio companies operate across eight core business
              segments, spanning the full lifecycle of real estate and related
              services — from investment and development to technology-enabled
              operations and financial solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Bar */}
      <section className="bg-white border-b border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-2xl font-bold text-navy-900">8</div>
              <div className="text-xs text-slate-500 uppercase tracking-wide mt-1">
                Business Segments
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-navy-900">36</div>
              <div className="text-xs text-slate-500 uppercase tracking-wide mt-1">
                Portfolio Companies
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-navy-900">$1.2B+</div>
              <div className="text-xs text-slate-500 uppercase tracking-wide mt-1">
                Assets Under Management
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-navy-900">200+</div>
              <div className="text-xs text-slate-500 uppercase tracking-wide mt-1">
                Professionals
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Segments */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-0">
            {businessSegments.map((segment, index) => (
              <div
                key={segment.id}
                id={segment.id}
                className="grid lg:grid-cols-2 gap-12 lg:gap-20 py-16 border-b border-slate-200 last:border-0 scroll-mt-24"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 border border-slate-200 flex items-center justify-center text-navy-400">
                      <SegmentIcon icon={segment.icon} />
                    </div>
                    <div>
                      <span className="text-xs font-semibold tracking-wide text-gold-600 uppercase">
                        {segment.subtitle}
                      </span>
                      <h2 className="text-2xl font-semibold text-navy-900">
                        {segment.title}
                      </h2>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-8">
                    {segment.description}
                  </p>
                </div>
                <div
                  className={`${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="bg-slate-50 p-8 h-full">
                    <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 mb-6">
                      Key Highlights
                    </h3>
                    <ul className="space-y-4">
                      {segment.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-3 text-sm text-slate-700"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Approach */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-gold-500" />
              <span className="text-gold-600 text-xs font-semibold tracking-[0.2em] uppercase">
                Investment Philosophy
              </span>
              <div className="w-8 h-[1px] bg-gold-500" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-navy-900 leading-tight mb-6">
              How We <span className="font-semibold">Create Value</span>
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Our investment approach is guided by disciplined underwriting, a
              long-term orientation, and a commitment to operational
              value-creation across every asset and business we manage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-slate-200">
            {[
              {
                num: "01",
                title: "Identify & Acquire",
                desc: "Rigorous deal sourcing and underwriting with a focus on value-add opportunities in high-growth markets. Leveraging our network and proprietary data for informational advantages.",
              },
              {
                num: "02",
                title: "Optimize & Operate",
                desc: "Deploying institutional-grade management systems, technology platforms, and operational best practices to maximize performance and drive NOI growth across the portfolio.",
              },
              {
                num: "03",
                title: "Grow & Compound",
                desc: "Building platform value through organic growth, strategic adjacency expansion, and disciplined capital recycling. Long-term hold orientation with selective monetization.",
              },
            ].map((step) => (
              <div key={step.num} className="bg-white p-10">
                <span className="text-3xl font-light text-gold-400 mb-4 block">
                  {step.num}
                </span>
                <h3 className="text-lg font-semibold text-navy-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-light text-white mb-4">
            Interested in{" "}
            <span className="font-semibold">Partnership Opportunities</span>?
          </h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            We welcome conversations with institutional investors, family
            offices, and strategic partners seeking exposure to our diversified
            platform.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy-900 text-sm font-semibold tracking-wide hover:bg-slate-100 transition-colors"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </>
  );
}
