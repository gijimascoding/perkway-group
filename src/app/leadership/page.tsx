import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { leadership, type LeadershipMember } from "@/data/company";

export const metadata: Metadata = {
  title: "Leadership | Perkway Group",
  description:
    "Meet the leadership team and board guiding Perkway Group across real estate investment, corporate strategy, hospitality operations, and technology innovation.",
};

const executives = leadership.filter((m) => m.role === "executive");
const board = leadership.filter((m) => m.role === "board");

function Card({ m }: { m: LeadershipMember }) {
  // Only local assets are usable; remote perkways.com photos are hotlink-protected.
  const usablePhoto = m.photo && m.photo.startsWith("/");
  return (
    <div className="bg-paper-50 border border-paper-300">
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-ink-800 to-ink-900">
        {usablePhoto ? (
          <Image src={m.photo!} alt={m.name} fill sizes="(min-width:1024px) 30vw, 100vw" className="object-cover object-top grayscale" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white/90 text-[42px] font-[800] tracking-tight">{m.initials}</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-ink-900 text-[19px] font-[800] leading-tight">{m.name}</h3>
        <p className="mt-1 text-gold-600 text-[12.5px] font-[700] uppercase tracking-[0.08em]">{m.title}</p>
        <p className="mt-4 text-ink-600 text-[14px] leading-relaxed">{m.bio}</p>
      </div>
    </div>
  );
}

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Guided by Experienced Principals"
        subtitle="Our leadership team brings decades of combined experience in real estate investment, corporate strategy, hospitality operations, and technology innovation."
        image="/images/skyline.jpg"
      />

      <section className="bg-paper-100">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <Reveal>
            <p className="eyebrow">Executive Team</p>
            <h2 className="display mt-4 text-ink-900 text-[clamp(1.8rem,3.4vw,2.8rem)]">Executive Leadership</h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {executives.map((m, i) => (
              <Reveal key={m.name} delay={i * 80}><Card m={m} /></Reveal>
            ))}
          </div>

          <Reveal className="mt-24">
            <p className="eyebrow">Board of Directors</p>
            <h2 className="display mt-4 text-ink-900 text-[clamp(1.8rem,3.4vw,2.8rem)]">Board &amp; Advisors</h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {board.map((m, i) => (
              <Reveal key={m.name} delay={i * 80}><Card m={m} /></Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
