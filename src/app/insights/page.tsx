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
        <div className="container-x section-pad">
          {/* Featured */}
          <Reveal className="group border-t border-ink-900 pt-6 pb-14 mb-14 border-b border-hairline">
            <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-16">
              <div className="flex items-center gap-3 t-micro uppercase tracking-[0.12em] nums">
                <span className="text-ink-600">{feature.category}</span>
                <span className="text-ink-400">{feature.date}</span>
              </div>
              <div>
                <h2 className="h2 text-ink-900 group-hover:text-accent transition-colors">
                  {feature.title}
                </h2>
                <p className="mt-5 lead text-ink-700 measure">{feature.excerpt}</p>
              </div>
            </div>
          </Reveal>

          {/* Rest */}
          <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
            {rest.map((n, i) => (
              <Reveal key={n.id} delay={i * 90} className="group border-t border-ink-900 pt-6">
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
    </>
  );
}
