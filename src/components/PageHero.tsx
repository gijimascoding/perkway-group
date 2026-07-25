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
}) {
  return (
    <section className="relative overflow-hidden bg-ink-900 pt-[68px]">
      <Image src={image} alt="" aria-hidden fill sizes="100vw" className="object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900/70 via-ink-900/60 to-ink-900/90" />
      <div className="relative max-w-[1360px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <p className="eyebrow text-gold-400">{eyebrow}</p>
        <h1 className="display mt-5 text-white text-[clamp(2.6rem,6vw,5rem)] max-w-[18ch]">{title}</h1>
        {subtitle && (
          <p className="mt-6 max-w-[60ch] text-white/80 text-[17px] lg:text-[19px] leading-relaxed font-[300]">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
