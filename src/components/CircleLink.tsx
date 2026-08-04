import Link from "next/link";

/**
 * Text + outlined circle-arrow. Blackstone's standard call-to-action; it
 * replaces the small uppercase underlined link, which read as a blog "read
 * more" rather than a firm inviting you further in.
 */
export function CircleLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`link-circle group ${className}`}>
      <span>{children}</span>
      <span className="dot" aria-hidden>
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden>
          <path d="M1 7.5h12M8.5 3l4.5 4.5L8.5 12" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      </span>
    </Link>
  );
}
