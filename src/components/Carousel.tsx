"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Blackstone's promo carousel, rebuilt: a track that slides one item at a
 * time, outlined circle prev/next arrows, and dot indicators. Their build uses
 * tiny-slider; this is the same interaction with no dependency.
 *
 * Timings match the values measured on blackstone.com — 600ms ease for the
 * heavy movements, 300ms for the light ones.
 */
export function Carousel({
  items,
  perView = 3,
  autoplayMs = 6000,
  label,
}: {
  items: ReactNode[];
  perView?: number;
  autoplayMs?: number;
  label: string;
}) {
  const [index, setIndex] = useState(0);
  const [view, setView] = useState(perView);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // One item on phones, two on tablets, `perView` above that.
  useEffect(() => {
    const set = () => {
      const w = window.innerWidth;
      setView(w < 640 ? 1 : w < 1024 ? 2 : perView);
    };
    set();
    window.addEventListener("resize", set);
    return () => window.removeEventListener("resize", set);
  }, [perView]);

  const pages = Math.max(1, items.length - view + 1);
  const clamped = Math.min(index, pages - 1);

  const go = useCallback((next: number) => setIndex(((next % pages) + pages) % pages), [pages]);

  // Autoplay pauses on hover, on focus within, and for reduced-motion users.
  // `clamped` is in the deps so any manual arrow or dot press restarts the
  // timer — otherwise a click made moments before a tick gets overridden a
  // fraction of a second later, which feels like the carousel fighting you.
  useEffect(() => {
    if (paused || pages < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => setIndex((i) => (i + 1) % pages), autoplayMs);
    return () => clearTimeout(t);
  }, [paused, pages, autoplayMs, clamped]);

  const arrow = (dir: "prev" | "next") => (
    <button
      type="button"
      aria-label={dir === "prev" ? "Previous" : "Next"}
      onClick={() => go(clamped + (dir === "prev" ? -1 : 1))}
      className="carousel-arrow"
    >
      <svg width="16" height="16" viewBox="0 0 15 15" fill="none" aria-hidden
        style={{ transform: dir === "prev" ? "rotate(180deg)" : undefined }}>
        <path d="M1 7.5h12M8.5 3l4.5 4.5L8.5 12" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    </button>
  );

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="overflow-hidden -mx-4">
        <div
          ref={trackRef}
          className="flex carousel-track"
          style={{ transform: `translate3d(-${(clamped * 100) / view}%, 0, 0)` }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="shrink-0 px-4"
              style={{ width: `${100 / view}%` }}
              aria-hidden={i < clamped || i >= clamped + view}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {pages > 1 && (
        <div className="mt-14 flex items-center gap-8">
          <div className="flex items-center gap-3">
            {arrow("prev")}
            {arrow("next")}
          </div>
          <div className="flex items-center gap-2.5">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === clamped}
                onClick={() => go(i)}
                className={`carousel-dot ${i === clamped ? "is-active" : ""}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
