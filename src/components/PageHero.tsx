import Image from "next/image";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
  /** kept for call-site compatibility; no longer changes rendering */
  variant?: "photo" | "dark";
}) {
  return (
    <section className="page-hero on-dark relative overflow-hidden bg-ink-900 flex items-end">
      <Image
        src={image}
        alt=""
        aria-hidden
        fill
        priority
        quality={82}
        sizes="100vw"
        placeholder="blur"
        blurDataURL="data:image/gif;base64,R0lGODlhAQABAPAAACIkKAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
        className="object-cover object-[center_45%]"
      />
      {/* Same scrim system as the home hero: one flat value, one gradient */}
      <div className="absolute inset-0 bg-ink-900/[0.46]" />
      <div className="hero-foot absolute inset-0" />

      <div className="relative w-full container-x pt-[128px] pb-[88px] lg:pt-[160px] lg:pb-[120px]">
        <p className="eyebrow eyebrow-light">{eyebrow}</p>
        <h1 className="h1 mt-8 text-white max-w-[20ch] text-balance">{title}</h1>
        {subtitle && (
          <p className="mt-6 measure lead text-white/85">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
