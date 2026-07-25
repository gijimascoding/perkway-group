import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { TeamGrid } from "@/components/TeamGrid";
import { leadership } from "@/data/company";

export const metadata: Metadata = {
  title: "Leadership | Perkway Group",
  description:
    "Meet the leadership team and board guiding Perkway Group across real estate investment, corporate strategy, hospitality operations, and technology innovation.",
};

const executives = leadership.filter((m) => m.role === "executive");
const board = leadership.filter((m) => m.role === "board");

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Guided by Experienced Principals"
        subtitle="Our leadership team brings decades of combined experience in real estate investment, corporate strategy, hospitality operations, and technology innovation."
        image="/images/london.jpg"
        variant="dark"
      />

      <section className="bg-paper-100">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <Reveal>
            <p className="eyebrow">Executive Team</p>
            <h2 className="display mt-4 text-ink-900 text-[clamp(1.8rem,3.4vw,2.8rem)]">Executive Leadership</h2>
          </Reveal>
          <Reveal className="mt-12">
            <TeamGrid members={executives} columns={4} />
          </Reveal>

          <Reveal className="mt-24">
            <p className="eyebrow">Board of Directors</p>
            <h2 className="display mt-4 text-ink-900 text-[clamp(1.8rem,3.4vw,2.8rem)]">Board &amp; Advisors</h2>
          </Reveal>
          <Reveal className="mt-12">
            <TeamGrid members={board} columns={3} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
