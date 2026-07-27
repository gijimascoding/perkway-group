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

      <section className="bg-paper-50 border-t border-hairline">
        <div className="container-x section-pad">
          <div className="border-t border-hairline">
            {businessSegments.map((s, i) => (
              <Reveal
                key={s.id}
                id={s.id}
                className="scroll-mt-24 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-16 py-12 lg:py-16 border-b border-hairline"
              >
                <div>
                  <span className="font-display text-ink-400 font-[700] h3 nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="eyebrow mt-5">{s.subtitle}</p>
                  <h3 className="h3 mt-4 text-ink-900">
                    {s.title}
                  </h3>
                </div>
                <div>
                  <p className="text-ink-700 t-body measure">{s.description}</p>
                  <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-3">
                    {s.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-ink-700 t-small">
                        <span className="mt-[10px] h-[5px] w-[5px] bg-ink-900 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="on-dark bg-ink-900">
        <div className="container-x section-pad">
          <Reveal>
            <h2 className="h2 text-white max-w-[26ch]">
              Partner With a Vertically Integrated Platform
            </h2>
            <Link href="/contact" className="mt-10 inline-flex items-center justify-center h-[52px] px-8 bg-white text-ink-900 t-micro uppercase tracking-[0.06em] hover:bg-paper-200 transition-colors">
              Investor Inquiries
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
