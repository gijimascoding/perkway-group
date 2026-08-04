import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { TeamGrid } from "@/components/TeamGrid";
import { AsOf } from "@/components/AsOf";
import { CircleLink } from "@/components/CircleLink";
import { Carousel } from "@/components/Carousel";
import {
  company,
  figures,
  figuresAsOf,
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


/** Sub-row beneath the headline AUM figure — deliberately excludes AUM, which
    the oversized figure above already states. */
const secondaryMetrics = [
  { value: figures.units, label: "Residential Units" },
  { value: figures.companies, label: "Portfolio Companies" },
  { value: figures.countries, label: "Countries of Operation" },
  { value: figures.markets, label: "Markets Worldwide" },
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
          {/* Display name, not legalName: the eyebrow read "Perkway Capital
              Group" two inches under a logo reading "Perkway Group". The legal
              entity belongs in the footer copyright line, not the hero. */}
          <p className="eyebrow eyebrow-light">{company.name}</p>
          <h1 className="hero-h1 mt-6 text-white text-balance">
            Building Enduring Value Across Industries
          </h1>
          <p className="hero-sub mt-5 text-white/[0.82]">{company.description}</p>
          {/* The two labels total 357px at 390 and the container is 342, so a
              wrap row left two stacked buttons at different widths, which reads
              as a mistake. Below sm they stack deliberately, at equal width. */}
          <div className="mt-8 grid grid-cols-1 gap-3 sm:flex sm:flex-wrap sm:gap-3">
            <Link href="/portfolio" className={btnPrimaryDark}>Our Portfolio</Link>
            <Link href="/about" className={btnOutlineDark}>About the Group</Link>
          </div>
        </div>

        <span className="hero-scroll" aria-hidden />
      </section>

      {/* ============ HERO STAT BAND (6 stats) ============ */}
      <section className="bg-paper-100 border-b border-hairline">
        <div className="container-x band-pad">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-5 gap-y-10 sm:gap-y-12">
            {metrics.map((m, i) => (
              <Reveal
                key={m.label}
                delay={i * 50}
                className="pl-5 border-l border-hairline [&:nth-child(2n+1)]:border-l-0 [&:nth-child(2n+1)]:pl-0 md:[&:nth-child(2n+1)]:border-l md:[&:nth-child(2n+1)]:pl-5 md:[&:nth-child(3n+1)]:border-l-0 md:[&:nth-child(3n+1)]:pl-0 lg:[&:nth-child(3n+1)]:border-l lg:[&:nth-child(3n+1)]:pl-5 lg:[&:nth-child(6n+1)]:border-l-0 lg:[&:nth-child(6n+1)]:pl-0"
              >
                <span className="stat-num nums block">{m.value}</span>
                <span className="stat-label">{m.label}</span>
              </Reveal>
            ))}
          </div>
          <AsOf className="mt-12" />
        </div>
      </section>

      {/* ============ ABOUT THE GROUP ============
           Blackstone's "Delivering for Investors" block: centered head, then a
           two-column split with prose on the left and one oversized figure on
           the right carrying its own footnote. */}
      <section id="about" className="bg-paper-50">
        <div className="container-x section-pad">
          <Reveal className="section-head">
            <span className="kicker">About the Group</span>
            <h2 className="display-xl mt-10 mx-auto max-w-[24ch] text-ink-900">
              A Vertically Integrated Platform for Real Assets
            </h2>
          </Reveal>

          <div className="mt-24 lg:mt-32 grid lg:grid-cols-12 gap-y-16 lg:gap-x-24 items-start">
            <Reveal className="lg:col-span-6">
              <h3 className="text-[22px] font-[600] text-ink-900 font-sans">
                Vertically integrated scale
              </h3>
              <div className="mt-7 space-y-6 text-ink-700">
                <p>
                  Perkway Group is a holding company operating at the intersection of
                  real estate, hospitality, and technology, with a portfolio spanning
                  over {figures.units} residential units and {figures.companies} portfolio
                  companies across {figures.countries} countries.
                </p>
                <p>
                  Our approach combines disciplined capital allocation with operational
                  excellence, creating long-term value for our stakeholders across every
                  market cycle.
                </p>
              </div>
              <CircleLink href="/about" className="mt-12">Learn More</CircleLink>
            </Reveal>

            <Reveal delay={100} className="lg:col-span-5 lg:col-start-8">
              <span className="stat-hero nums">{figures.aum}</span>
              <span className="stat-hero-label">Assets Under Management</span>
              <p className="footnote mt-8 max-w-[34ch]">
                All figures as of {figuresAsOf}, unless otherwise indicated.
              </p>
              <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-hairline pt-10">
                {secondaryMetrics.map((s) => (
                  <div key={s.label}>
                    <span className="stat-num-sm nums">{s.value}</span>
                    <span className="stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ BUSINESSES — editorial hairline grid ============ */}
      <section id="businesses" className="bg-paper-50 border-t border-hairline">
        <div className="container-x section-pad">
          <Reveal className="section-head">
            <span className="kicker">Our Businesses</span>
            <h2 className="display-xl mt-10 mx-auto max-w-[20ch] text-ink-900">
              Diversified Across Eight Core Business Segments
            </h2>
            <p className="mt-10 mx-auto max-w-[62ch] text-ink-700 lead">
              Our portfolio companies operate across the full spectrum of real estate and
              related services, from investment and development to technology and financial
              solutions.
            </p>
          </Reveal>

          <div className="mt-16 grid sm:grid-cols-2 border-t border-l border-hairline">
            {businessSegments.map((s, i) => (
              <Reveal key={s.id} delay={(i % 2) * 90} className="group border-b border-r border-hairline p-8 lg:p-10 transition-colors duration-300 hover:bg-paper-200/60">
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
                {/* First sentence, not a 3-line clamp. The clamp cut mid-word
                    ("value-add…", "institutional co-…"), which reads as an
                    unfinished page. Full copy still lives on /portfolio. */}
                <p className="mt-3 text-ink-600 t-small">
                  {s.description.split(". ")[0]}.
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14">
            <CircleLink href="/portfolio">Explore All Business Segments</CircleLink>
          </Reveal>
        </div>
      </section>

      {/* ============ PULL QUOTE — dark band ============ */}
      <section className="on-dark bg-ink-900">
        <div className="container-x section-pad">
          <Reveal className="section-head">
            <span className="kicker">Investment Philosophy</span>
            <blockquote className="display-xl mt-10 mx-auto max-w-[19ch] text-white">
              We build businesses designed to compound value across generations, not quarters.
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ============ LEADERSHIP ============ */}
      <section id="leadership" className="bg-paper-100">
        <div className="container-x section-pad">
          <Reveal className="section-head">
            <span className="kicker">Leadership</span>
            <h2 className="display-xl mt-10 mx-auto max-w-[18ch] text-ink-900">
              Guided by Experienced Principals
            </h2>
            <p className="mt-10 mx-auto max-w-[62ch] text-ink-700 lead">
              Our leadership team brings decades of combined experience in real estate
              investment, corporate strategy, hospitality operations, and technology
              innovation.
            </p>
          </Reveal>

          <div className="mt-16">
            <TeamGrid members={execs} columns={4} />
          </div>

          <Reveal className="mt-16">
            <CircleLink href="/leadership">View Full Leadership Team &amp; Board</CircleLink>
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
          <Reveal className="section-head">
            <span className="kicker">Global Presence</span>
            <h2 className="display-xl mt-10 mx-auto max-w-[16ch] text-ink-900">
              Operating Across {figures.markets} Markets Worldwide
            </h2>
            <p className="mt-10 mx-auto max-w-[64ch] text-ink-700 lead">
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
                <div key={o.city} className="flex flex-wrap items-baseline gap-x-3 gap-y-1.5 py-5 border-b border-hairline sm:grid sm:grid-cols-[1.2fr_1fr_1fr] sm:gap-4 sm:items-center">
                  {/* basis-full drops city onto its own line on a phone, where
                      three columns squeeze the type tag against the edge. */}
                  <span className="text-ink-900 h3 nums basis-full sm:basis-auto">{o.city}</span>
                  <span className="text-ink-600 t-small">{o.country}</span>
                  <span className="text-ink-500 t-micro uppercase tracking-[0.12em]">{o.type}</span>
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
          <Reveal className="section-head">
            <span className="kicker">Insights</span>
            <h2 className="display-xl mt-10 text-ink-900">
              Perspectives &amp; Market Intelligence
            </h2>
          </Reveal>

          {/* Image + title + category + date, no excerpt. The clamped excerpt
              trailed off mid-sentence on every card; Blackstone runs the same
              three fields and lets the image carry the row. Presented in their
              promo-carousel pattern: sliding track, circle arrows, dots. */}
          <Reveal className="mt-20">
            <Carousel
              label="Perspectives and market intelligence"
              perView={3}
              items={insights.map((n) => (
                <article key={n.id} className="group">
                  <Link href="/insights" className="block">
                    <div className="relative aspect-[4/3] overflow-hidden bg-paper-200">
                      <Image
                        src={n.image}
                        alt=""
                        fill
                        quality={82}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                        placeholder="blur"
                        blurDataURL={BLUR}
                        className="object-cover card-media"
                      />
                    </div>
                    <h3 className="h3 mt-6 text-ink-900 transition-colors duration-300 group-hover:text-ink-600">
                      {n.title}
                    </h3>
                    <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 t-micro uppercase tracking-[0.12em] nums">
                      <span className="text-ink-600">{n.category}</span>
                      <span className="text-ink-400">{n.date}</span>
                    </div>
                  </Link>
                </article>
              ))}
            />
          </Reveal>

          <Reveal className="mt-20 flex justify-center">
            <CircleLink href="/insights">View All Insights</CircleLink>
          </Reveal>
        </div>
      </section>

      {/* ============ RESPONSIBILITY — 7/5 split ============ */}
      <section id="responsibility" className="bg-paper-50 border-t border-hairline">
        <div className="container-x section-pad">
          <div className="grid lg:grid-cols-12 gap-y-12 lg:gap-x-16 items-start">
            <Reveal className="lg:col-span-7">
              <p className="eyebrow">Responsibility</p>
              <h2 className="h2 mt-8 text-ink-900 max-w-[16ch] font-display">
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
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-8 border-t border-hairline pt-8">
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
            {/* Same wrap-into-ragged-widths problem as the hero CTA pair. */}
            <div className="mt-10 grid grid-cols-1 gap-3 sm:flex sm:flex-wrap sm:gap-3">
              <Link href="/contact" className={btnPrimaryDark}>Investor Inquiries</Link>
              <Link href="/contact" className={btnOutlineDark}>General Contact</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}