import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { TeamGrid } from "@/components/TeamGrid";
import { CountUp } from "@/components/CountUp";
import {
  company,
  metrics,
  businessSegments,
  leadership,
  globalPresence,
  operatingMarkets,
  insights,
} from "@/data/company";

const execs = leadership.filter((m) => m.role === "executive");

const BLUR = "data:image/gif;base64,R0lGODlhAQABAPAAACIkKAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";

const btnPrimaryDark =
  "inline-flex items-center justify-center h-[52px] px-6 sm:px-8 bg-white text-ink-900 t-micro uppercase tracking-[0.06em] hover:bg-paper-200 transition-colors";
const btnOutlineDark =
  "inline-flex items-center justify-center h-[52px] px-6 sm:px-8 border border-white/50 text-white t-micro uppercase tracking-[0.06em] hover:bg-white/10 transition-colors";

const aboutStats = [
  { v: "2018", l: "Year Founded" },
  { v: "$1.2B+", l: "Assets Under Management" },
  { v: "36", l: "Portfolio Companies" },
  { v: "4", l: "Countries of Operation" },
];

const responsibilityStats = [
  { v: "LEED", l: "Aligned design standards across new development and major renovation projects" },
  { v: "ESG", l: "Integrated framework governing investment and operational decision-making" },
  { v: "1,200+", l: "Affordable and workforce housing units within the portfolio" },
  { v: "80+", l: "Nationalities served across our residential communities globally" },
];

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="hero on-dark relative w-full overflow-hidden bg-ink-900 flex items-end">
        {/* Wrapper carries the scroll-linked drift so the img keeps its load animation. */}
        <div className="hero-media absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Global metropolitan skyline at dusk"
            fill
            priority
            quality={82}
            sizes="100vw"
            placeholder="blur"
            blurDataURL={BLUR}
            className="hero-img object-cover object-[center_42%]"
          />
        </div>
        {/* Flat scrim lightened from 0.46: the bottom gradient now carries the
            type contrast, which leaves the upper two-thirds of the frame open. */}
        <div className="absolute inset-0 bg-ink-900/[0.30]" />
        <div className="hero-foot absolute inset-0" />

        <div className="hero-copy relative w-full container-x pt-[120px] pb-[32px] lg:pt-[200px] lg:pb-[56px]">
          <p className="eyebrow eyebrow-light">{company.legalName}</p>
          <h1 className="hero-h1 mt-6 text-white text-balance">
            Building Enduring Value Across Industries
          </h1>
          <p className="hero-sub mt-5 text-white/[0.82]">{company.description}</p>
          <div className="mt-8 flex flex-wrap gap-2 sm:gap-3">
            <Link href="/portfolio" className={btnPrimaryDark}>Our Portfolio</Link>
            <Link href="/about" className={btnOutlineDark}>About the Group</Link>
          </div>
        </div>

        <span className="hero-scroll" aria-hidden />
      </section>

      {/* ============ HERO STAT BAND (6 stats) ============ */}
      <section className="bg-paper-100 border-b border-hairline">
        <div className="container-x band-pad">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12">
            {metrics.map((m, i) => (
              <Reveal
                key={m.label}
                delay={i * 50}
                className="pl-5 border-l border-hairline [&:nth-child(2n+1)]:border-l-0 [&:nth-child(2n+1)]:pl-0 md:[&:nth-child(2n+1)]:border-l md:[&:nth-child(2n+1)]:pl-5 md:[&:nth-child(3n+1)]:border-l-0 md:[&:nth-child(3n+1)]:pl-0 lg:[&:nth-child(3n+1)]:border-l lg:[&:nth-child(3n+1)]:pl-5 lg:[&:nth-child(6n+1)]:border-l-0 lg:[&:nth-child(6n+1)]:pl-0"
              >
                <CountUp value={m.value} className="stat-num block" />
                <span className="stat-label">{m.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ABOUT THE GROUP — 7/5 split ============ */}
      <section id="about" className="bg-paper-100">
        <div className="container-x section-pad">
          <div className="grid lg:grid-cols-12 gap-y-12 lg:gap-x-16 items-start">
            <Reveal className="lg:col-span-7">
              <p className="eyebrow">About the Group</p>
              <h2 className="h2 mt-8 text-ink-900 max-w-[18ch]">
                A Vertically Integrated Platform for Real Assets
              </h2>
              <div className="mt-8 space-y-6 measure text-ink-700">
                <p>
                  Perkway Group is a next-generation holding company operating at the
                  intersection of real estate, hospitality, and technology, with a
                  portfolio spanning over 5,000 residential units and 36 portfolio
                  companies.
                </p>
                <p>
                  Our approach combines disciplined capital allocation with operational
                  excellence, creating long-term value for our stakeholders across every
                  market cycle.
                </p>
              </div>

              {/* Sub-stats: hairline-separated row, not boxes */}
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-y-8 border-t border-hairline pt-8">
                {aboutStats.map((s) => (
                  <div key={s.l} className="pl-6 border-l border-hairline [&:nth-child(2n+1)]:border-l-0 [&:nth-child(2n+1)]:pl-0 sm:[&:nth-child(2n+1)]:border-l sm:[&:nth-child(2n+1)]:pl-6 sm:[&:nth-child(4n+1)]:border-l-0 sm:[&:nth-child(4n+1)]:pl-0">
                    <CountUp value={s.v} className="stat-num-sm" />
                    <span className="stat-label">{s.l}</span>
                  </div>
                ))}
              </div>

              <Link href="/about" className="link-underline mt-12">
                Learn More About Perkway
              </Link>
            </Reveal>

            <Reveal delay={100} className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden bg-paper-200 border border-hairline">
                <Image
                  src="/images/towers.jpg"
                  alt="Modern glass office towers"
                  fill
                  quality={82}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  placeholder="blur"
                  blurDataURL={BLUR}
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ BUSINESSES — editorial hairline grid ============ */}
      <section id="businesses" className="bg-paper-50 border-t border-hairline">
        <div className="container-x section-pad">
          <Reveal className="measure">
            <p className="eyebrow">Our Businesses</p>
            <h2 className="h2 mt-8 text-ink-900">
              Diversified Across Eight Core Business Segments
            </h2>
            <p className="mt-6 text-ink-700 lead">
              Our portfolio companies operate across the full spectrum of real estate and
              related services, from investment and development to technology and financial
              solutions.
            </p>
          </Reveal>

          <div className="mt-16 grid sm:grid-cols-2 border-t border-l border-hairline">
            {businessSegments.map((s, i) => (
              <Reveal key={s.id} className="group border-b border-r border-hairline p-8 lg:p-10 hover:bg-paper-100 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="font-display text-ink-400 t-micro nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-6 bg-hairline" />
                  <span className="text-ink-500 t-micro tracking-[0.14em] uppercase">
                    {s.subtitle}
                  </span>
                </div>
                <h3 className="h3 mt-4 text-ink-900 group-hover:text-accent transition-colors">{s.title}</h3>
                <p className="mt-3 text-ink-600 t-small line-clamp-3">
                  {s.description}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14">
            <Link href="/portfolio" className="link-underline">
              Explore All Business Segments
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ PULL QUOTE — dark band ============ */}
      <section className="on-dark bg-ink-900">
        <div className="container-x section-pad">
          <Reveal className="max-w-[720px]">
            <div className="h-px w-12 bg-white/30" />
            <blockquote className="mt-10 h2 text-white max-w-[22ch]">
              We build businesses designed to compound value across generations, not quarters.
            </blockquote>
            <p className="mt-10 text-white/50 t-micro uppercase tracking-[0.16em]">
              Perkway Group &middot; Investment Philosophy
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ LEADERSHIP ============ */}
      <section id="leadership" className="bg-paper-100">
        <div className="container-x section-pad">
          <Reveal className="measure">
            <p className="eyebrow">Leadership</p>
            <h2 className="h2 mt-8 text-ink-900">
              Guided by Experienced Principals
            </h2>
            <p className="mt-6 text-ink-700 lead">
              Our leadership team brings decades of combined experience in real estate
              investment, corporate strategy, hospitality operations, and technology
              innovation.
            </p>
          </Reveal>

          <div className="mt-16">
            <TeamGrid members={execs} columns={4} />
          </div>

          <Reveal className="mt-16">
            <Link href="/leadership" className="link-underline">
              View Full Leadership Team &amp; Board
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ GLOBAL PRESENCE ============ */}
      {/* skyline 21:9 band above */}
      <div className="relative w-full overflow-hidden bg-ink-900 aspect-[21/9] max-h-[520px]">
        <Image
          src="/images/skyline.jpg"
          alt="Aerial view of a city skyline across the water at dusk"
          fill
          quality={82}
          sizes="100vw"
          placeholder="blur"
          blurDataURL={BLUR}
          className="object-cover object-center"
        />
      </div>
      <section id="global" className="bg-paper-50 border-t border-hairline">
        <div className="container-x section-pad">
          <Reveal className="measure">
            <p className="eyebrow">Global Presence</p>
            <h2 className="h2 mt-8 text-ink-900 max-w-[16ch]">
              Operating Across 14 Markets Worldwide
            </h2>
            <p className="mt-6 text-ink-700 lead">
              From our headquarters in London, we have built an international presence with
              regional offices and operations spanning Europe and North America. Our global
              network enables us to source opportunities, deploy capital, and manage assets
              across diverse markets and regulatory environments.
            </p>
          </Reveal>

          {/* Principal Offices — 3-col hairline table */}
          <Reveal className="mt-16">
            <p className="eyebrow">Principal Offices</p>
            <div className="mt-8 border-t border-hairline">
              {globalPresence.map((o) => (
                <div key={o.city} className="grid grid-cols-[1.2fr_1fr_1fr] gap-4 py-5 border-b border-hairline">
                  <span className="text-ink-900 h3 nums">{o.city}</span>
                  <span className="text-ink-600 t-small self-center">{o.country}</span>
                  <span className="text-ink-500 t-micro uppercase tracking-[0.12em] self-center">{o.type}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Active Markets — static list, no marquee */}
          <Reveal className="mt-14">
            <p className="eyebrow">Active Markets</p>
            <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-8">
              {operatingMarkets.map((mk) => (
                <li key={mk} className="text-ink-700 t-small nums py-1.5 border-b border-hairline">{mk}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ============ INSIGHTS ============ */}
      <section id="insights" className="bg-paper-100 border-t border-hairline">
        <div className="container-x section-pad">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div className="measure">
              <p className="eyebrow">Insights</p>
              <h2 className="h2 mt-8 text-ink-900">
                Perspectives &amp; Market Intelligence
              </h2>
            </div>
            <Link href="/insights" className="link-underline">View All</Link>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-3 gap-x-8 gap-y-12">
            {insights.slice(0, 3).map((n) => (
              <Reveal key={n.id} className="group border-t border-ink-900 pt-6">
                <div className="flex items-center gap-3 t-micro uppercase tracking-[0.12em] nums">
                  <span className="text-ink-600">{n.category}</span>
                  <span className="text-ink-400">{n.date}</span>
                </div>
                <h3 className="h3 mt-4 text-ink-900 group-hover:text-accent transition-colors">
                  {n.title}
                </h3>
                <p className="mt-4 text-ink-600 t-small line-clamp-3">{n.excerpt}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ RESPONSIBILITY — 7/5 split ============ */}
      <section id="responsibility" className="bg-paper-50 border-t border-hairline">
        <div className="container-x section-pad">
          <div className="grid lg:grid-cols-12 gap-y-12 lg:gap-x-16 items-start">
            <Reveal className="lg:col-span-7">
              <p className="eyebrow">Responsibility</p>
              <h2 className="h2 mt-8 text-ink-900 max-w-[16ch]">
                Committed to Sustainable Growth
              </h2>
              <div className="mt-8 space-y-6 measure text-ink-700">
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

              {/* metrics as hairline-separated 4-col row */}
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-y-8 border-t border-hairline pt-8">
                {responsibilityStats.map((s) => (
                  <div key={s.v} className="pl-6 border-l border-hairline [&:nth-child(2n+1)]:border-l-0 [&:nth-child(2n+1)]:pl-0 sm:[&:nth-child(2n+1)]:border-l sm:[&:nth-child(2n+1)]:pl-6 sm:[&:nth-child(4n+1)]:border-l-0 sm:[&:nth-child(4n+1)]:pl-0">
                    <span className="stat-num-sm">{s.v}</span>
                    <span className="mt-2.5 block text-ink-600 t-micro leading-snug">{s.l}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={100} className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden bg-paper-200 border border-hairline">
                <Image
                  src="/images/sustainability.jpg"
                  alt="Toronto skyline at dusk"
                  fill
                  quality={82}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  placeholder="blur"
                  blurDataURL={BLUR}
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ CONTACT CTA — 21:9 band ============ */}
      <section className="on-dark relative w-full overflow-hidden bg-ink-900">
        <Image
          src="/images/city-street.jpg"
          alt="City street lined with buildings"
          fill
          quality={82}
          sizes="100vw"
          placeholder="blur"
          blurDataURL={BLUR}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink-900/55" />
        <div className="relative container-x section-pad">
          <Reveal className="max-w-[52ch]">
            <p className="eyebrow eyebrow-light">Get in Touch</p>
            <h2 className="h2 mt-8 text-white">
              Explore Partnership &amp; Investment Opportunities
            </h2>
            <p className="mt-6 text-white/80 lead">
              We welcome inquiries from institutional investors, family offices, strategic
              partners, and qualified co-investors. Contact our investor relations team to
              learn about current opportunities.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/contact" className={btnPrimaryDark}>Investor Inquiries</Link>
              <Link href="/contact" className={btnOutlineDark}>General Contact</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}