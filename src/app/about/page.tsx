import type { Metadata } from "next";
import { pageMetadata, breadcrumbSchema, webPageSchema } from "@/app/seo";
import { JsonLd } from "@/components/JsonLd";
import { faqs } from "@/data/faq";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { metrics, figuresAsOf, globalPresence, operatingMarkets } from "@/data/company";

const BLUR = "data:image/gif;base64,R0lGODlhAQABAPAAACIkKAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";

const btnPrimary =
  "inline-flex items-center justify-center h-[52px] px-8 bg-ink-900 text-paper-100 t-micro uppercase tracking-[0.06em] hover:bg-ink-800 transition-colors";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Perkway Group is a diversified holding company founded in 2018 and headquartered in London, with principal investments in real estate, hospitality, technology and financial services across four countries.",
  path: "/about",
});

const aboutSchema = [
  webPageSchema({ type: "AboutPage", name: "About Perkway Group", description: String(metadata.description), path: "/about" }),
  breadcrumbSchema([{ name: "About", path: "/about" }]),
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutSchema} />
      <PageHero
        eyebrow="About the Group"
        title="A Vertically Integrated Platform for Real Assets"
        subtitle="A diversified holding company building enduring value through disciplined investment, operational excellence, and innovation across real estate and related industries."
        image="/images/towers.jpg"
      />

      {/* Metrics */}
      <section className="bg-paper-50 border-b border-hairline">
        <div className="container-x band-pad">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-5 gap-y-10 sm:gap-y-12">
            {metrics.map((m, i) => (
              <Reveal
                key={m.label}
                delay={i * 60}
                className="pl-5 border-l border-hairline [&:nth-child(2n+1)]:border-l-0 [&:nth-child(2n+1)]:pl-0 md:[&:nth-child(2n+1)]:border-l md:[&:nth-child(2n+1)]:pl-5 md:[&:nth-child(3n+1)]:border-l-0 md:[&:nth-child(3n+1)]:pl-0 lg:[&:nth-child(3n+1)]:border-l lg:[&:nth-child(3n+1)]:pl-5 lg:[&:nth-child(6n+1)]:border-l-0 lg:[&:nth-child(6n+1)]:pl-0"
              >
                <p className="stat-num">{m.value}</p>
                <p className="stat-label">{m.label}</p>
              </Reveal>
            ))}
          </div>
          <p className="footnote mt-10 nums">Figures as of {figuresAsOf}. Unaudited; see <Link href="/disclosures" className="link-underline">Disclosures</Link>.</p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-paper-100">
        <div className="container-x section-pad">
          <div className="grid lg:grid-cols-12 gap-y-12 lg:gap-x-16 items-center">
            <Reveal className="lg:col-span-7">
              <p className="eyebrow">Our Approach</p>
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
              <div className="relative aspect-[4/5] overflow-hidden bg-paper-200 border border-hairline">
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

      {/* Questions: the same seven answers an allocator asks on a first call,
          visible here and emitted as FAQPage data from the same array. */}
      <section id="questions" className="bg-paper-50 border-t border-hairline">
        <div className="container-x section-pad">
          <div className="grid lg:grid-cols-12 gap-y-12 lg:gap-x-16">
            <Reveal className="lg:col-span-4">
              <p className="eyebrow">Questions</p>
              <h2 className="h2 mt-8 text-ink-900 max-w-[14ch]">What people ask first</h2>
              <p className="mt-6 text-ink-600 t-small measure">
                Short answers, each backed by a page on this site. Figures carry the same as-of date as every stat block.
              </p>
            </Reveal>
            <div className="lg:col-span-7 lg:col-start-6 border-t border-ink-900">
              {faqs.map((f, i) => (
                <Reveal key={f.question} delay={i * 60} as="article" className="py-8 border-b border-hairline">
                  <h3 className="h3 text-ink-900">{f.question}</h3>
                  <p className="mt-4 text-ink-700 measure">{f.answer}</p>
                </Reveal>
              ))}
            </div>
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
            <p className="eyebrow eyebrow-light">Global Presence</p>
            <h2 className="h2 mt-8 text-white">Operating Across 14 Markets Worldwide</h2>
            <p className="mt-6 text-white/80 lead">
              From our headquarters in London, we have built an international presence with
              regional offices and operations spanning Europe and North America.
            </p>
          </Reveal>
          <div className="mt-12 border-t border-hairline-dark max-w-3xl">
            {globalPresence.map((o) => (
              <Reveal key={o.city} className="flex flex-wrap items-baseline gap-x-3 gap-y-1.5 py-5 border-b border-hairline-dark sm:grid sm:grid-cols-[1.2fr_1fr_1fr] sm:gap-4 sm:items-center">
                <span className="text-white h3 nums basis-full sm:basis-auto">{o.city}</span>
                <span className="text-white/60 t-small">{o.country}</span>
                <span className="text-white/40 t-micro uppercase tracking-[0.12em]">{o.type}</span>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14">
            <p className="eyebrow eyebrow-light">Active Markets</p>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {operatingMarkets.map((mk) => (
                <span key={mk} className="px-4 py-2 border border-hairline-dark text-white/85 t-small font-[600]">{mk}</span>
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
      <div className="container-x section-pad">
        <Reveal>
          <h2 className="h2 text-ink-900 max-w-[24ch]">
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
