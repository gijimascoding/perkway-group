"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animated number ticker. Parses a formatted metric string like "$1.2B+",
 * "5,000+", "36" or "14" into an animatable number while preserving any
 * prefix ($) and suffix (B+, +, etc.), then counts up on scroll into view.
 */
function parse(value: string) {
  const match = value.match(/^([^\d-]*)([\d,.]+)(.*)$/);
  if (!match) return { prefix: "", num: null as number | null, suffix: value, decimals: 0, hasComma: false };
  const [, prefix, rawNum, suffix] = match;
  const hasComma = rawNum.includes(",");
  const clean = rawNum.replace(/,/g, "");
  const decimals = clean.includes(".") ? clean.split(".")[1].length : 0;
  return { prefix, num: parseFloat(clean), suffix, decimals, hasComma };
}

function format(n: number, decimals: number, hasComma: boolean) {
  const fixed = n.toFixed(decimals);
  if (!hasComma) return fixed;
  const [int, dec] = fixed.split(".");
  const withCommas = int.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return dec ? `${withCommas}.${dec}` : withCommas;
}

export function CountUp({ value, className = "" }: { value: string; className?: string }) {
  const { prefix, num, suffix, decimals, hasComma } = parse(value);
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(num === null ? value : `${prefix}${format(0, decimals, hasComma)}${suffix}`);

  useEffect(() => {
    if (num === null) return;
    const el = ref.current;
    if (!el) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setDisplay(value);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const duration = 1400;
        let start: number | null = null;
        const step = (t: number) => {
          if (start === null) start = t;
          const p = Math.min((t - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(`${prefix}${format(num * eased, decimals, hasComma)}${suffix}`);
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [num, prefix, suffix, decimals, hasComma, value]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {display}
    </span>
  );
}
