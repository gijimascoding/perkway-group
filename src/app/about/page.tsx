import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { metrics, globalPresence, operatingMarkets } from "@/data/company";

const BLUR = "data:image/gif;base64,R0lGODlhAQABAPAAACIkKAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";

const btnPrimary =
  "inline-flex items-center justify-center h-[52px] px-8 bg-ink-900 text-white text-[14px] uppercase tracking-[0.06em] rounded-[2px] hover:bg-ink-800 transition-colors";

export const metadata: Metadata = {
  title: "About | Perkway Group",
  description:
    "Perkway Group is a diversified holding company with principal investments in real estate, hospitality, technology, and financial services.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the Group"
        title="A Vertically Integrated Platform for Real Assets"
        subtitle="A diversified holding company building enduring value through disciplined investment, operational excellence, and innovation across real estate and related industries."
        image="/images/towers.jpg"
      />

      {/* Metrics */}
      <section className="bg-paper-50 border-b border-hairline">
        <div className="container-x py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12">
            {metrics.map((m, i) => (
              <Reveal
                key={m.label}
                delay={i * 60}
                className="pl-5 border-l border-hairline [&:nth-child(2n+1)]:border-l-0 [&:nth-child(2n+1)]:pl-0 md:[&:nth-child(2n+1)]:border-l md:[&:nth-child(2n+1)]:pl-5 md:[&:nth-child(3n+1)]:border-l-0 md:[&:nth-child(3n+1)]:pl-0 lg:[&:nth-child(3n+1)]:border-l lg:[&:nth-child(3n+1)]:pl-5 lg:[&:nth-child(6n+1)]:border-l-0 lg:[&:nth-child(6n+1)]:pl-0"
              >
                <p className="stat-num tabular-nums">{m.value}</p>
                <p className="stat-label">{m.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-paper-100">
        <div className="container-x section-pad">
          <div className="grid lg:grid-cols-12 gap-y-12 lg:gap-x-16 items-center">
            <Reveal className="lg:col-span-7">
              <p className="eyebrow max-w-[260px]">Our Approach</p>
              <h2 className="h2 mt-8 text-ink-900 max-w-[18ch]">
                Disciplined Capital, Operational Excellence
              </h2>
              <div className="mt-8 space-y-6 measure text-ink-700">
                <p>
                  Perkway Group is a next-generation holding company operating at the
                  intersection of real estate, hospitality, and technology. With a portfolio
                  spanning over 5,000 residential units and 36 portfolio companies, we deliver
                  institutional-grade performance through vertically integrated operations.
                </p>
                <p>
                  Our approach combines disciplined capital allocation with operational
                  excellence, creating long-term value for our stakeholders across market
                  cycles. From acquisition through asset management, every function within the
                  group is designed to compound value over time.
                </p>
                <p>
                  We acquire, develop, and operate businesses that shape the built environment
                  and the communities within it, integrating environmental, social, and
                  governance considerations into every investment decision.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-5 order-first lg:order-last">
              <div className="relative aspect-[4/5] overflow-hidden bg-paper-200 ring-1 ring-hairline">
                <Image
                  src="/images/interior.jpg"
                  alt="Interior of a modern residence"
                  fill
                  quality={82}
                  sizes="(max-width:1024px) 100vw, 40vw"
                  placeholder="blur"
                  blurDataURL={BLUR}
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Global presence */}
      <section className="on-dark relative overflow-hidden bg-ink-900">
        <Image
          src="/images/skyline.jpg"
          alt=""
          aria-hidden
          fill
          quality={82}
          sizes="100vw"
          placeholder="blur"
          blurDataURL={BLUR}
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-ink-900/75" />
        <div className="relative container-x section-pad">
          <Reveal className="measure max-w-[52ch]">
            <p className="eyebrow eyebrow-light max-w-[260px]">Global Presence</p>
            <h2 className="h2 mt-8 text-white">Operating Across 14 Markets Worldwide</h2>
            <p className="mt-6 text-white/80 lead">
              From our headquarters in London, we have built an international presence with
              regional offices and operations spanning Europe and North America.
            </p>
          </Reveal>
          <div className="mt-12 border-t border-hairline-dark max-w-3xl">
            {globalPresence.map((o) => (
              <Reveal key={o.city} className="grid grid-cols-[1.2fr_1fr_1fr] gap-4 py-5 border-b border-hairline-dark">
                <span className="text-white text-[17px] font-[600] font-display">{o.city}</span>
                <span className="text-white/60 text-[15px] self-center">{o.country}</span>
                <span className="text-white/40 text-[12px] uppercase tracking-[0.12em] self-center">{o.type}</span>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14">
            <p className="eyebrow eyebrow-light max-w-[260px]">Active Markets</p>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {operatingMarkets.map((mk) => (
                <span key={mk} className="px-4 py-2 border border-hairline-dark text-white/85 text-[13.5px] font-[600]">{mk}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function CTASection() {
  return (
    <section className="bg-paper-100">
      <div className="container-x section-pad text-center">
        <Reveal>
          <h2 className="h2 text-ink-900 max-w-[24ch] mx-auto">
            Explore Partnership &amp; Investment Opportunities
          </h2>
          <Link href="/contact" className={`${btnPrimary} mt-8`}>
            Get in Touch
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
