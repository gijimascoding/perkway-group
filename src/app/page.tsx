import Link from "next/link";
import Image from "next/image";
import {
  company,
  metrics,
  businessSegments,
  leadership,
  insights,
  globalPresence,
} from "@/data/company";
import { AnimatedMetrics } from "@/components/AnimatedMetrics";

function SegmentIcon({ icon }: { icon: string }) {
  const icons: Record<string, React.ReactNode> = {
    building: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="1" />
        <path d="M9 22V18h6v4M9 6h.01M15 6h.01M9 10h.01M15 10h.01M9 14h.01M15 14h.01" />
      </svg>
    ),
    hotel: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2z" />
        <path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01M8 14h.01M16 14h.01M12 14h.01" />
      </svg>
    ),
    chip: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="6" width="12" height="12" rx="1" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
      </svg>
    ),
    management: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    crane: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20M5 20V8l7-5v17M19 20V10l-7-3" />
        <path d="M9 12h2M9 16h2" />
      </svg>
    ),
    chart: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M7 16l4-6 4 3 5-7" />
      </svg>
    ),
    dollar: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v12M9 9.5a2.5 2 0 015 0c0 2-5 2-5 4a2.5 2 0 005 0" />
      </svg>
    ),
    handshake: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.42 4.58a5.4 5.4 0 00-7.65 0l-.77.78-.77-.78a5.4 5.4 0 00-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
      </svg>
    ),
  };
  return <>{icons[icon] || icons.building}</>;
}

export default function HomePage() {
  const executives = leadership.filter((l) => l.role === "executive").slice(0, 3);
  const featuredSegments = businessSegments.slice(0, 4);
  const featuredInsights = insights.slice(0, 3);

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center bg-navy-950">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-[1px] bg-gold-500" />
              <span className="text-gold-500 text-xs font-semibold tracking-[0.2em] uppercase">
                Perkway Capital Group
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-[1.1] mb-8 tracking-tight">
              Building Enduring
              <br />
              <span className="font-semibold">Value Across Industries</span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-400 max-w-2xl leading-relaxed mb-12">
              A diversified holding company with principal investments in real
              estate, hospitality, technology, and financial services. We
              acquire, develop, and operate businesses that shape the built
              environment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy-900 text-sm font-semibold tracking-wide hover:bg-slate-100 transition-colors"
              >
                Our Portfolio
                <svg
                  className="ml-2 w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white text-sm font-semibold tracking-wide hover:bg-white/5 transition-colors"
              >
                About the Group
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-white/30" />
        </div>
      </section>

      {/* ─── KEY METRICS BAR ─── */}
      <AnimatedMetrics metrics={metrics} />

      {/* ─── ABOUT EXCERPT ─── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[1px] bg-gold-500" />
                <span className="text-gold-600 text-xs font-semibold tracking-[0.2em] uppercase">
                  About the Group
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-light text-navy-900 leading-tight mb-6">
                A Vertically Integrated Platform for{" "}
                <span className="font-semibold">Real Assets</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Perkway Group is a next-generation holding company operating at
                the intersection of real estate, hospitality, and technology.
                With a portfolio spanning over 5,000 residential units and 36
                portfolio companies, we deliver institutional-grade performance
                through vertically integrated operations.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Our approach combines disciplined capital allocation with
                operational excellence, creating long-term value for our
                stakeholders across market cycles. From acquisition through
                asset management, every function within the group is designed
                to compound value over time.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-sm font-semibold text-navy-900 tracking-wide hover:text-gold-600 transition-colors group"
              >
                Learn More About Perkway
                <svg
                  className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-navy-50 p-8 flex flex-col justify-center">
                <span className="text-3xl font-bold text-navy-900">2018</span>
                <span className="text-sm text-slate-600 mt-2">Year Founded</span>
              </div>
              <div className="bg-navy-900 p-8 flex flex-col justify-center text-white">
                <span className="text-3xl font-bold">$1.2B+</span>
                <span className="text-sm text-slate-300 mt-2">
                  Assets Under Management
                </span>
              </div>
              <div className="bg-gold-50 p-8 flex flex-col justify-center">
                <span className="text-3xl font-bold text-navy-900">36</span>
                <span className="text-sm text-slate-600 mt-2">
                  Portfolio Companies
                </span>
              </div>
              <div className="bg-slate-100 p-8 flex flex-col justify-center">
                <span className="text-3xl font-bold text-navy-900">4</span>
                <span className="text-sm text-slate-600 mt-2">
                  Countries of Operation
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BUSINESS SEGMENTS ─── */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-gold-500" />
              <span className="text-gold-600 text-xs font-semibold tracking-[0.2em] uppercase">
                Our Businesses
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-navy-900 leading-tight mb-6">
              Diversified Across{" "}
              <span className="font-semibold">
                Eight Core Business Segments
              </span>
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Our portfolio companies operate across the full spectrum of real
              estate and related services, from investment and development to
              technology and financial solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200">
            {featuredSegments.map((segment) => (
              <div
                key={segment.id}
                className="bg-white p-8 lg:p-10 group hover:bg-navy-900 transition-colors duration-300"
              >
                <div className="text-navy-400 group-hover:text-gold-400 transition-colors mb-6">
                  <SegmentIcon icon={segment.icon} />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 group-hover:text-white transition-colors mb-2">
                  {segment.title}
                </h3>
                <p className="text-xs font-medium tracking-wide text-gold-600 group-hover:text-gold-400 transition-colors uppercase mb-4">
                  {segment.subtitle}
                </p>
                <p className="text-sm text-slate-600 group-hover:text-slate-300 transition-colors leading-relaxed">
                  {segment.description.slice(0, 150)}...
                </p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border-t border-slate-200">
            {businessSegments.slice(4).map((segment) => (
              <div
                key={segment.id}
                className="bg-white p-8 lg:p-10 group hover:bg-navy-900 transition-colors duration-300"
              >
                <div className="text-navy-400 group-hover:text-gold-400 transition-colors mb-6">
                  <SegmentIcon icon={segment.icon} />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 group-hover:text-white transition-colors mb-2">
                  {segment.title}
                </h3>
                <p className="text-xs font-medium tracking-wide text-gold-600 group-hover:text-gold-400 transition-colors uppercase mb-4">
                  {segment.subtitle}
                </p>
                <p className="text-sm text-slate-600 group-hover:text-slate-300 transition-colors leading-relaxed">
                  {segment.description.slice(0, 150)}...
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center text-sm font-semibold text-navy-900 tracking-wide hover:text-gold-600 transition-colors group"
            >
              Explore All Business Segments
              <svg
                className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── LEADERSHIP PREVIEW ─── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-gold-500" />
              <span className="text-gold-600 text-xs font-semibold tracking-[0.2em] uppercase">
                Leadership
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-navy-900 leading-tight mb-6">
              Guided by{" "}
              <span className="font-semibold">Experienced Principals</span>
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Our leadership team brings decades of combined experience in real
              estate investment, corporate strategy, hospitality operations, and
              technology innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {executives.map((person) => (
              <div key={person.name} className="group">
                <div className="aspect-[4/5] bg-navy-100 mb-6 relative overflow-hidden flex items-center justify-center">
                  {person.photo ? (
                    <Image
                      src={person.photo}
                      alt={person.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <span className="text-5xl font-light text-navy-300">
                      {person.initials}
                    </span>
                  )}
                  <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/80 transition-all duration-300 flex items-end p-6 opacity-0 group-hover:opacity-100">
                    <p className="text-white text-sm leading-relaxed">
                      {person.bio.slice(0, 180)}...
                    </p>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-navy-900">
                  {person.name}
                </h3>
                <p className="text-sm text-slate-500 mt-1">{person.title}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/leadership"
              className="inline-flex items-center text-sm font-semibold text-navy-900 tracking-wide hover:text-gold-600 transition-colors group"
            >
              View Full Leadership Team & Board
              <svg
                className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── GLOBAL PRESENCE ─── */}
      <section className="py-24 lg:py-32 bg-navy-950 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[1px] bg-gold-500" />
                <span className="text-gold-500 text-xs font-semibold tracking-[0.2em] uppercase">
                  Global Presence
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-light leading-tight mb-6">
                Operating Across{" "}
                <span className="font-semibold">14 Markets Worldwide</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-10">
                From our headquarters in London, we have built an international
                presence with regional offices and operations spanning Europe,
                North America, the Middle East, and Asia-Pacific. Our global
                network enables us to source opportunities, deploy capital, and
                manage assets across diverse markets and regulatory environments.
              </p>

              {/* Offices */}
              <div className="space-y-4 mb-10">
                <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400">
                  Principal Offices
                </h3>
                {globalPresence.map((office) => (
                  <div
                    key={office.city}
                    className="flex items-center justify-between border-b border-white/10 pb-3"
                  >
                    <div>
                      <span className="text-white font-medium">
                        {office.city}
                      </span>
                      <span className="text-slate-500 ml-2 text-sm">
                        {office.country}
                      </span>
                    </div>
                    <span className="text-xs text-gold-500 uppercase tracking-wide">
                      {office.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Markets Grid */}
            <div>
              <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 mb-6">
                Active Markets
              </h3>
              <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                {[
                  "Montréal",
                  "Toronto",
                  "Ottawa",
                  "Vancouver",
                  "Calgary",
                  "Halifax",
                  "New York",
                  "Boston",
                  "Washington, D.C.",
                  "Chicago",
                  "Seattle",
                  "London",
                  "Miami",
                  "Austin",
                ].map((market) => (
                  <div
                    key={market}
                    className="flex items-center gap-2 text-sm text-slate-300 py-1.5 border-b border-white/5"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
                    {market}
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─── INSIGHTS ─── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[1px] bg-gold-500" />
                <span className="text-gold-600 text-xs font-semibold tracking-[0.2em] uppercase">
                  Insights
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-light text-navy-900 leading-tight">
                Perspectives &{" "}
                <span className="font-semibold">Market Intelligence</span>
              </h2>
            </div>
            <Link
              href="/insights"
              className="inline-flex items-center text-sm font-semibold text-navy-900 tracking-wide hover:text-gold-600 transition-colors group shrink-0"
            >
              View All
              <svg
                className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredInsights.map((item) => (
              <article
                key={item.id}
                className="group border border-slate-200 hover:border-navy-200 transition-colors"
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold tracking-wide text-gold-600 uppercase">
                      {item.category}
                    </span>
                    <span className="text-xs text-slate-400">{item.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900 leading-snug mb-4 group-hover:text-navy-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ESG / RESPONSIBILITY ─── */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[1px] bg-gold-500" />
                <span className="text-gold-600 text-xs font-semibold tracking-[0.2em] uppercase">
                  Responsibility
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-light text-navy-900 leading-tight mb-6">
                Committed to{" "}
                <span className="font-semibold">Sustainable Growth</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                We believe that responsible investment and operational
                practices are fundamental to long-term value creation. Across
                our portfolio, we integrate environmental, social, and
                governance considerations into every investment decision and
                operational process.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                From energy-efficient building upgrades and adaptive reuse of
                aging infrastructure to affordable housing programs and
                community revitalization, our commitment to sustainability is
                embedded in how we do business.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="border border-slate-200 bg-white p-6">
                <div className="text-2xl font-bold text-navy-900 mb-2">
                  LEED
                </div>
                <p className="text-sm text-slate-600">
                  Aligned design standards across new development and major
                  renovation projects
                </p>
              </div>
              <div className="border border-slate-200 bg-white p-6">
                <div className="text-2xl font-bold text-navy-900 mb-2">
                  ESG
                </div>
                <p className="text-sm text-slate-600">
                  Integrated ESG framework governing investment and operational
                  decision-making
                </p>
              </div>
              <div className="border border-slate-200 bg-white p-6">
                <div className="text-2xl font-bold text-navy-900 mb-2">
                  1,200+
                </div>
                <p className="text-sm text-slate-600">
                  Affordable and workforce housing units within the portfolio
                </p>
              </div>
              <div className="border border-slate-200 bg-white p-6">
                <div className="text-2xl font-bold text-navy-900 mb-2">
                  80+
                </div>
                <p className="text-sm text-slate-600">
                  Nationalities served across our residential communities
                  globally
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA / CONTACT ─── */}
      <section className="py-24 lg:py-32 bg-navy-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-light text-white leading-tight mb-6">
            Explore Partnership &{" "}
            <span className="font-semibold">Investment Opportunities</span>
          </h2>
          <p className="text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto">
            We welcome inquiries from institutional investors, family offices,
            strategic partners, and qualified co-investors. Contact our
            investor relations team to learn about current opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy-900 text-sm font-semibold tracking-wide hover:bg-slate-100 transition-colors"
            >
              Investor Inquiries
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white text-sm font-semibold tracking-wide hover:bg-white/5 transition-colors"
            >
              General Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
