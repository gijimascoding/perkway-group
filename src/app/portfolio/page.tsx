import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { businessSegments } from "@/data/company";

export const metadata: Metadata = {
  title: "Portfolio | Perkway Group",
  description:
    "Perkway Group operates across eight core business segments spanning real estate investment, hospitality, technology, property management, development, lending, and advisory.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Businesses"
        title="Diversified Across Eight Core Business Segments"
        subtitle="Our portfolio companies operate across the full spectrum of real estate and related services, from investment and development to technology and financial solutions."
        image="/images/city-street.jpg"
      />

      <section className="bg-paper-100">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <div className="space-y-px bg-paper-300">
            {businessSegments.map((s, i) => (
              <Reveal
                key={s.id}
                id={s.id}
                className="bg-paper-50 scroll-mt-24"
              >
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-16 p-8 lg:p-14">
                  <div>
                    <div className="flex items-baseline gap-4">
                      <span className="text-gold-500 font-[800] text-[22px] tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="h-px flex-1 bg-paper-300" />
                    </div>
                    <p className="mt-5 text-[11px] font-[700] uppercase tracking-[0.14em] text-gold-600">{s.subtitle}</p>
                    <h2 className="mt-2 text-ink-900 text-[clamp(1.6rem,2.6vw,2.2rem)] font-[800] leading-tight max-w-[16ch]">
                      {s.title}
                    </h2>
                  </div>
                  <div>
                    <p className="text-ink-700 text-[16.5px] leading-relaxed max-w-[62ch]">{s.description}</p>
                    <ul className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-3">
                      {s.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-3 text-ink-700 text-[14.5px] leading-snug">
                          <span className="mt-[9px] h-[5px] w-[5px] rounded-full bg-gold-500 shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-900">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10 py-20 lg:py-24 text-center">
          <Reveal>
            <h2 className="display text-white text-[clamp(1.8rem,3.4vw,2.8rem)] max-w-[26ch] mx-auto">
              Partner With a Vertically Integrated Platform
            </h2>
            <Link href="/contact" className="mt-8 inline-block px-8 py-3.5 bg-gold-500 text-white text-[13px] font-[700] tracking-[0.14em] uppercase hover:bg-gold-600 transition-colors">
              Investor Inquiries
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
