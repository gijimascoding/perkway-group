import type { Metadata } from "next";
import { pageMetadata, breadcrumbSchema, webPageSchema } from "@/app/seo";
import { JsonLd } from "@/components/JsonLd";
import { personSchema } from "@/app/structured-data";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { TeamGrid } from "@/components/TeamGrid";
import { leadership } from "@/data/company";

export const metadata: Metadata = pageMetadata({
  title: "Leadership",
  description:
    "The board of Perkway Group: directors Nancy Wisner, Ariel Rosenberg and Terry Leppla.",
  path: "/leadership",
});

const board = leadership.filter((m) => m.role === "board");

const leadershipSchema = [
  webPageSchema({ type: "ProfilePage", name: "Perkway Group leadership", description: String(metadata.description), path: "/leadership" }),
  breadcrumbSchema([{ name: "Leadership", path: "/leadership" }]),
  ...board.map(personSchema),
];

export default function LeadershipPage() {
  return (
    <>
      <JsonLd data={leadershipSchema} />
      <PageHero
        eyebrow="Leadership"
        title="Guided by Experienced Principals"
        subtitle="Our leadership team brings decades of combined experience in real estate investment, corporate strategy, hospitality operations, and technology innovation."
        image="/images/london.jpg"
        variant="dark"
      />

      <section className="bg-paper-100">
        <div className="container-x section-pad">
          <Reveal>
            <p className="eyebrow">Board of Directors</p>
            <h2 className="h2 mt-8 text-ink-900">Board &amp; Advisors</h2>
          </Reveal>
          <Reveal className="mt-16">
            <TeamGrid members={board} columns={3} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
