/** Perkway "PG" monogram mark — reads on both the ivory nav and the dark footer
 *  via a white ground + hairline ring. Institutional square (2px radius). */
export function GlobeMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-[2px] bg-white text-ink-900 ring-1 ring-hairline font-[700] tracking-tight ${className}`}
    >
      <span className="text-[0.42em] leading-none">PG</span>
    </span>
  );
}
