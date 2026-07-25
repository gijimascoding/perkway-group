"use client";

export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max animate-[marquee_38s_linear_infinite] motion-reduce:animate-none hover:[animation-play-state:paused]">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center shrink-0">
            <span className="px-8 text-white/70 text-[15px] font-[600] tracking-[0.08em] uppercase whitespace-nowrap">
              {item}
            </span>
            <span className="h-1 w-1 rounded-full bg-white/25" aria-hidden />
          </div>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}
