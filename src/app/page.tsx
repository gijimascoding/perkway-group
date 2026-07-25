import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import {
  company,
  metrics,
  businessSegments,
  leadership,
  globalPresence,
  operatingMarkets,
  insights,
} from "@/data/company";

const execs = leadership.filter((m) => m.role === "executive").slice(0, 3);

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative h-[100svh] min-h-[620px] w-full overflow-hidden bg-ink-900">
        <Image
          src="/images/hero.jpg"
          alt="Global metropolitan skyline at dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/55 via-ink-900/25 to-ink-900/70" />

        <div className="relative h-full max-w-[1360px] mx-auto px-6 lg:px-10 flex flex-col justify-center">
          <p className="eyebrow text-gold-400">{company.legalName}</p>
          <h1 className="display mt-5 text-white text-[clamp(2.9rem,8vw,6.5rem)] max-w-[16ch]">
            Building Enduring Value Across Industries
          </h1>
          <p className="mt-7 max-w-[54ch] text-white/85 text-[17px] lg:text-[19px] leading-relaxed font-[300]">
            {company.description}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/portfolio"
              className="px-8 py-3.5 bg-white text-ink-900 text-[13px] font-[700] tracking-[0.14em] uppercase hover:bg-gold-400 hover:text-white transition-colors"
            >
              Our Portfolio
            </Link>
            <Link
              href="/about"
              className="px-8 py-3.5 border border-white/40 text-white text-[13px] font-[700] tracking-[0.14em] uppercase hover:border-white hover:bg-white/10 transition-colors"
            >
              About the Group
            </Link>
          </div>
        </div>
      </section>

      {/* ============ METRICS ============ */}
      <section className="bg-paper-50 border-b border-paper-300">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10 py-14 lg:py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-4">
            {metrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 60} className={i > 0 ? "lg:border-l lg:border-paper-300 lg:pl-4" : ""}>
                <p className="text-ink-900 font-[800] text-[clamp(1.8rem,3vw,2.6rem)] leading-none tabular-nums">
                  {m.value}
                </p>
                <p className="mt-2.5 text-ink-500 text-[11.5px] font-[700] uppercase tracking-[0.13em]">
                  {m.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ABOUT THE GROUP ============ */}
      <section id="about" className="bg-paper-100">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <Reveal className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/towers.jpg"
                alt="Modern glass office towers"
                fill
                sizes="(min-width:1024px) 45vw, 100vw"
                className="object-cover"
              />
            </Reveal>
            <Reveal delay={120}>
              <p className="eyebrow">About the Group</p>
              <h2 className="display mt-4 text-ink-900 text-[clamp(2rem,4vw,3.4rem)] max-w-[18ch]">
                A Vertically Integrated Platform for Real Assets
              </h2>
              <div className="mt-7 space-y-5 text-ink-700 text-[17px] leading-relaxed">
                <p>
                  Perkway Group is a next-generation holding company operating at the
                  intersection of real estate, hospitality, and technology. With a
                  portfolio spanning over 5,000 residential units and 36 portfolio
                  companies, we deliver institutional-grade performance through
                  vertically integrated operations.
                </p>
                <p>
                  Our approach combines disciplined capital allocation with operational
                  excellence, creating long-term value for our stakeholders across market
                  cycles. From acquisition through asset management, every function within
                  the group is designed to compound value over time.
                </p>
              </div>
              <div className="mt-9 grid grid-cols-2 sm:grid-cols-4 gap-6">
                {[
                  { v: "2018", l: "Year Founded" },
                  { v: "$1.2B+", l: "Assets Under Management" },
                  { v: "36", l: "Portfolio Companies" },
                  { v: "4", l: "Countries of Operation" },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="text-ink-900 font-[800] text-[24px] leading-none">{s.v}</p>
                    <p className="mt-2 text-ink-500 text-[11px] font-[700] uppercase tracking-[0.12em]">{s.l}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/about"
                className="mt-10 inline-block text-[13px] font-[700] tracking-[0.14em] uppercase text-ink-900 border-b-2 border-gold-500 pb-1 hover:text-gold-500 transition-colors"
              >
                Learn More About Perkway
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ BUSINESSES ============ */}
      <section id="businesses" className="bg-ink-900">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <Reveal className="max-w-[52ch]">
            <p className="eyebrow">Our Businesses</p>
            <h2 className="display mt-4 text-white text-[clamp(2rem,4vw,3.4rem)]">
              Diversified Across Eight Core Business Segments
            </h2>
            <p className="mt-6 text-white/70 text-[17px] leading-relaxed">
              Our portfolio companies operate across the full spectrum of real estate and
              related services, from investment and development to technology and financial
              solutions.
            </p>
          </Reveal>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {businessSegments.map((s, i) => (
              <Reveal key={s.id} delay={(i % 4) * 70} className="bg-ink-900 p-8 lg:p-9 group hover:bg-ink-800 transition-colors">
                <p className="text-[11px] font-[700] uppercase tracking-[0.14em] text-gold-400">
                  {s.subtitle}
                </p>
                <h3 className="mt-3 text-white text-[20px] font-[800] leading-tight">{s.title}</h3>
                <p className="mt-3.5 text-white/60 text-[14.5px] leading-relaxed">
                  {s.description.length > 150 ? s.description.slice(0, 150).trimEnd() + "…" : s.description}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14">
            <Link
              href="/portfolio"
              className="inline-block text-[13px] font-[700] tracking-[0.14em] uppercase text-white border-b-2 border-gold-500 pb-1 hover:text-gold-400 transition-colors"
            >
              Explore All Business Segments
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ LEADERSHIP ============ */}
      <section id="leadership" className="bg-paper-100">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <Reveal className="max-w-[52ch]">
            <p className="eyebrow">Leadership</p>
            <h2 className="display mt-4 text-ink-900 text-[clamp(2rem,4vw,3.4rem)]">
              Guided by Experienced Principals
            </h2>
            <p className="mt-6 text-ink-700 text-[17px] leading-relaxed">
              Our leadership team brings decades of combined experience in real estate
              investment, corporate strategy, hospitality operations, and technology
              innovation.
            </p>
          </Reveal>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {execs.map((m, i) => (
              <Reveal key={m.name} delay={i * 90} className="bg-white border border-paper-300">
                <div className="relative aspect-[4/3] overflow-hidden bg-paper-300">
                  {m.photo && (
                    <Image
                      src={m.photo}
                      alt={m.name}
                      fill
                      sizes="(min-width:1024px) 30vw, 100vw"
                      className="object-cover object-top grayscale"
                    />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-ink-900 text-[19px] font-[800] leading-tight">{m.name}</h3>
                  <p className="mt-1 text-gold-600 text-[13px] font-[700] uppercase tracking-[0.08em]">{m.title}</p>
                  <p className="mt-4 text-ink-600 text-[14px] leading-relaxed">
                    {m.bio.length > 168 ? m.bio.slice(0, 168).trimEnd() + "…" : m.bio}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14">
            <Link
              href="/leadership"
              className="inline-block text-[13px] font-[700] tracking-[0.14em] uppercase text-ink-900 border-b-2 border-gold-500 pb-1 hover:text-gold-500 transition-colors"
            >
              View Full Leadership Team &amp; Board
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ GLOBAL PRESENCE ============ */}
      <section id="global" className="relative overflow-hidden bg-ink-900">
        <Image src="/images/skyline.jpg" alt="City skyline" fill sizes="100vw" className="object-cover opacity-25" />
        <div className="absolute inset-0 bg-ink-900/70" />
        <div className="relative max-w-[1360px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">
            <Reveal>
              <p className="eyebrow">Global Presence</p>
              <h2 className="display mt-4 text-white text-[clamp(2rem,4vw,3.4rem)] max-w-[16ch]">
                Operating Across 14 Markets Worldwide
              </h2>
              <p className="mt-6 text-white/75 text-[17px] leading-relaxed max-w-[46ch]">
                From our headquarters in London, we have built an international presence with
                regional offices and operations spanning Europe and North America. Our global
                network enables us to source opportunities, deploy capital, and manage assets
                across diverse markets and regulatory environments.
              </p>

              <div className="mt-10">
                <p className="text-[11px] font-[700] uppercase tracking-[0.14em] text-gold-400">Principal Offices</p>
                <div className="mt-5 grid sm:grid-cols-3 gap-5">
                  {globalPresence.map((o) => (
                    <div key={o.city} className="border-l-2 border-gold-500 pl-4">
                      <p className="text-white text-[17px] font-[800]">{o.city}</p>
                      <p className="text-white/55 text-[13px]">{o.country}</p>
                      <p className="mt-1 text-[10.5px] uppercase tracking-[0.12em] text-white/40">{o.type}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} className="lg:pt-2">
              <p className="text-[11px] font-[700] uppercase tracking-[0.14em] text-gold-400">Active Markets</p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {operatingMarkets.map((mk) => (
                  <span
                    key={mk}
                    className="px-4 py-2 border border-white/20 text-white/85 text-[13.5px] font-[600]"
                  >
                    {mk}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ INSIGHTS ============ */}
      <section id="insights" className="bg-paper-50">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-[46ch]">
              <p className="eyebrow">Insights</p>
              <h2 className="display mt-4 text-ink-900 text-[clamp(2rem,4vw,3.4rem)]">
                Perspectives &amp; Market Intelligence
              </h2>
            </div>
            <Link
              href="/insights"
              className="text-[13px] font-[700] tracking-[0.14em] uppercase text-ink-900 border-b-2 border-gold-500 pb-1 hover:text-gold-500 transition-colors"
            >
              View All
            </Link>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {insights.slice(0, 3).map((n, i) => (
              <Reveal key={n.id} delay={i * 90} className="group border-t-2 border-ink-900 pt-6">
                <div className="flex items-center justify-between text-[11px] font-[700] uppercase tracking-[0.12em]">
                  <span className="text-gold-600">{n.category}</span>
                  <span className="text-ink-400">{n.date}</span>
                </div>
                <h3 className="mt-4 text-ink-900 text-[20px] font-[800] leading-snug group-hover:text-gold-600 transition-colors">
                  {n.title}
                </h3>
                <p className="mt-3.5 text-ink-600 text-[14.5px] leading-relaxed">{n.excerpt}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ RESPONSIBILITY ============ */}
      <section id="responsibility" className="bg-paper-100">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <Reveal>
              <p className="eyebrow">Responsibility</p>
              <h2 className="display mt-4 text-ink-900 text-[clamp(2rem,4vw,3.4rem)] max-w-[16ch]">
                Committed to Sustainable Growth
              </h2>
              <div className="mt-7 space-y-5 text-ink-700 text-[17px] leading-relaxed">
                <p>
                  We believe that responsible investment and operational practices are
                  fundamental to long-term value creation. Across our portfolio, we integrate
                  environmental, social, and governance considerations into every investment
                  decision and operational process.
                </p>
                <p>
                  From energy-efficient building upgrades and adaptive reuse of aging
                  infrastructure to affordable housing programs and community revitalization,
                  our commitment to sustainability is embedded in how we do business.
                </p>
              </div>
              <div className="mt-9 grid grid-cols-2 gap-x-8 gap-y-7">
                {[
                  { v: "LEED", l: "Aligned design standards across new development and major renovation projects" },
                  { v: "ESG", l: "Integrated framework governing investment and operational decision-making" },
                  { v: "1,200+", l: "Affordable and workforce housing units within the portfolio" },
                  { v: "80+", l: "Nationalities served across our residential communities globally" },
                ].map((s) => (
                  <div key={s.v} className="border-l-2 border-gold-500 pl-4">
                    <p className="text-ink-900 font-[800] text-[22px] leading-none">{s.v}</p>
                    <p className="mt-2 text-ink-600 text-[13.5px] leading-snug">{s.l}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={120} className="relative aspect-[4/5] overflow-hidden order-first lg:order-last">
              <Image
                src="/images/sustainability.jpg"
                alt="Sustainable modern residence"
                fill
                sizes="(min-width:1024px) 45vw, 100vw"
                className="object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="relative overflow-hidden bg-ink-900">
        <Image src="/images/city-street.jpg" alt="" aria-hidden fill sizes="100vw" className="object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/90 to-ink-900/60" />
        <div className="relative max-w-[1360px] mx-auto px-6 lg:px-10 py-24 lg:py-28">
          <Reveal className="max-w-[44ch]">
            <p className="eyebrow">Get in Touch</p>
            <h2 className="display mt-4 text-white text-[clamp(2rem,4vw,3.4rem)]">
              Explore Partnership &amp; Investment Opportunities
            </h2>
            <p className="mt-6 text-white/75 text-[17px] leading-relaxed">
              We welcome inquiries from institutional investors, family offices, strategic
              partners, and qualified co-investors. Contact our investor relations team to
              learn about current opportunities.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="px-8 py-3.5 bg-gold-500 text-white text-[13px] font-[700] tracking-[0.14em] uppercase hover:bg-gold-600 transition-colors"
              >
                Investor Inquiries
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3.5 border border-white/40 text-white text-[13px] font-[700] tracking-[0.14em] uppercase hover:bg-white/10 transition-colors"
              >
                General Contact
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
