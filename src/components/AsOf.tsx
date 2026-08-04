import { figuresAsOf } from "@/data/company";

/**
 * Provenance line for a stat block. Blackstone prints "All figures as of
 * June 30, 2026" under its AUM; an undated figure reads as marketing, a dated
 * one reads as reporting. Single date source so it can never drift per block.
 */
export function AsOf({ className = "" }: { className?: string }) {
  return (
    <p className={`t-micro nums text-ink-500 ${className}`}>
      All figures as of {figuresAsOf}.
    </p>
  );
}
