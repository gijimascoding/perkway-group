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
    <section className="on-dark relative overflow-hidden bg-ink-900 h-[58vh] min-h-[420px] flex items-end">
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
      {/* Flat scrim, no gradient mesh */}
      <div className="absolute inset-0 bg-ink-900/50" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink-900/70 to-transparent" />

      <div className="relative w-full container-x pb-16 lg:pb-24">
        <p className="eyebrow eyebrow-light max-w-[260px]">{eyebrow}</p>
        <h1 className="h1 mt-8 text-white max-w-[20ch] text-balance">{title}</h1>
        {subtitle && (
          <p className="mt-6 measure lead text-white/85">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
