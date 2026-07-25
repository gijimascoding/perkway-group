import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { insights } from "@/data/company";

export const metadata: Metadata = {
  title: "Insights | Perkway Group",
  description:
    "Perspectives and market intelligence from Perkway Group on institutional real estate, adaptive reuse, technology-enabled operations, and market strategy.",
};

export default function InsightsPage() {
  const [feature, ...rest] = insights;
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Perspectives & Market Intelligence"
        subtitle="Analysis and commentary from across the group on institutional real estate, investment strategy, technology, and the trends reshaping the built environment."
        image="/images/architecture.jpg"
      />

      <section className="bg-paper-100">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
          {/* Featured */}
          <Reveal className="group border-t-2 border-ink-900 pt-8 pb-14 mb-14 border-b border-paper-300">
            <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-16">
              <div className="flex items-center gap-4 text-[11px] font-[700] uppercase tracking-[0.12em]">
                <span className="text-ink-500">{feature.category}</span>
                <span className="text-ink-400">{feature.date}</span>
              </div>
              <div>
                <h2 className="text-ink-900 text-[clamp(1.6rem,2.8vw,2.4rem)] font-[800] leading-tight group-hover:text-ink-500 transition-colors">
                  {feature.title}
                </h2>
                <p className="mt-5 text-ink-700 text-[16.5px] leading-relaxed max-w-[62ch]">{feature.excerpt}</p>
              </div>
            </div>
          </Reveal>

          {/* Rest */}
          <div className="grid md:grid-cols-3 gap-10">
            {rest.map((n, i) => (
              <Reveal key={n.id} delay={i * 90} className="group border-t-2 border-ink-900 pt-6">
                <div className="flex items-center justify-between text-[11px] font-[700] uppercase tracking-[0.12em]">
                  <span className="text-ink-500">{n.category}</span>
                  <span className="text-ink-400">{n.date}</span>
                </div>
                <h3 className="mt-4 text-ink-900 text-[20px] font-[800] leading-snug group-hover:text-ink-500 transition-colors">
                  {n.title}
                </h3>
                <p className="mt-3.5 text-ink-600 text-[14.5px] leading-relaxed">{n.excerpt}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
