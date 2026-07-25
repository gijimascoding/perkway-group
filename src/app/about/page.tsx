import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { metrics, globalPresence, operatingMarkets } from "@/data/company";

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
      <section className="bg-paper-50 border-b border-paper-300">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10 py-14 lg:py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-4">
            {metrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 60} className={i > 0 ? "lg:border-l lg:border-paper-300 lg:pl-4" : ""}>
                <p className="text-ink-900 font-[800] text-[clamp(1.8rem,3vw,2.6rem)] leading-none tabular-nums">{m.value}</p>
                <p className="mt-2.5 text-ink-500 text-[11.5px] font-[700] uppercase tracking-[0.13em]">{m.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-paper-100">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <Reveal>
              <p className="eyebrow">Our Approach</p>
              <h2 className="display mt-4 text-ink-900 text-[clamp(1.9rem,3.6vw,3rem)] max-w-[18ch]">
                Disciplined Capital, Operational Excellence
              </h2>
              <div className="mt-7 space-y-5 text-ink-700 text-[17px] leading-relaxed">
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
            <Reveal delay={120} className="relative aspect-[4/5] overflow-hidden order-first lg:order-last">
              <Image src="/images/interior.jpg" alt="Interior of a modern residence" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Global presence */}
      <section className="relative overflow-hidden bg-ink-900">
        <Image src="/images/skyline.jpg" alt="" aria-hidden fill sizes="100vw" className="object-cover opacity-25" />
        <div className="absolute inset-0 bg-ink-900/75" />
        <div className="relative max-w-[1360px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <Reveal className="max-w-[52ch]">
            <p className="eyebrow">Global Presence</p>
            <h2 className="display mt-4 text-white text-[clamp(1.9rem,3.6vw,3rem)]">Operating Across 14 Markets Worldwide</h2>
            <p className="mt-6 text-white/75 text-[17px] leading-relaxed">
              From our headquarters in London, we have built an international presence with
              regional offices and operations spanning Europe and North America.
            </p>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-3 gap-5 max-w-3xl">
            {globalPresence.map((o) => (
              <Reveal key={o.city} className="border-l-2 border-white/40 pl-4">
                <p className="text-white text-[18px] font-[800]">{o.city}</p>
                <p className="text-white/55 text-[13px]">{o.country}</p>
                <p className="mt-1 text-[10.5px] uppercase tracking-[0.12em] text-white/40">{o.type}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14">
            <p className="text-[11px] font-[700] uppercase tracking-[0.14em] text-white/55">Active Markets</p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {operatingMarkets.map((mk) => (
                <span key={mk} className="px-4 py-2 border border-white/20 text-white/85 text-[13.5px] font-[600]">{mk}</span>
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
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10 py-20 lg:py-24 text-center">
        <Reveal>
          <h2 className="display text-ink-900 text-[clamp(1.8rem,3.4vw,2.8rem)] max-w-[24ch] mx-auto">
            Explore Partnership &amp; Investment Opportunities
          </h2>
          <Link href="/contact" className="mt-8 inline-block px-8 py-3.5 bg-ink-900 text-white text-[13px] font-[700] tracking-[0.14em] uppercase hover:bg-ink-800 transition-colors">
            Get in Touch
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
