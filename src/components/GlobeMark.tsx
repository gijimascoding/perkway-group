/** Perkway "PG" monogram mark — white rounded square with dark initials,
 *  consistent with the corporate monochrome palette. Sits on dark backgrounds. */
export function GlobeMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-sm bg-white text-ink-900 font-[900] tracking-tight ${className}`}
    >
      <span className="text-[0.42em] leading-none">PG</span>
    </span>
  );
}
