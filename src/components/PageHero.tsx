import Image from "next/image";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  variant = "photo",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
  /** "photo" for a daytime image; "dark" for an already-dark night image */
  variant?: "photo" | "dark";
}) {
  const isDark = variant === "dark";
  return (
    <section className="relative overflow-hidden bg-ink-900 min-h-[86vh] flex items-end pt-[68px]">
      <Image
        src={image}
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className={`object-cover ${isDark ? "opacity-90" : "opacity-65"}`}
      />
      {/* Refined, bottom-weighted gradient: keeps the image visible through the
          middle while anchoring legible text at the base. */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900/95 via-ink-900/35 to-ink-900/55" />
      {isDark && <div className="absolute inset-0 bg-gradient-to-r from-ink-900/70 via-transparent to-transparent" />}

      <div className="relative w-full max-w-[1360px] mx-auto px-6 lg:px-10 pb-20 lg:pb-28">
        <p className="eyebrow eyebrow-light">{eyebrow}</p>
        <h1 className="display mt-6 text-white text-[clamp(2rem,6vw,5.25rem)] max-w-[18ch] break-words">{title}</h1>
        {subtitle && (
          <p className="mt-7 max-w-[58ch] text-white/85 text-[18px] lg:text-[21px] leading-relaxed font-[300]">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
