import type { Metadata } from "next";
import Link from "next/link";
import { navigationItems } from "@/data/company";

export const metadata: Metadata = {
  title: "Page Not Found | Perkway Group",
  robots: { index: false },
};

/* The default framework 404 is a bare line of text in the corner of a white
   page. A holding company's site is read by people checking it for care, so
   the missing-page state gets the same type, rule and rhythm as everything
   else, and offers the routes that do exist. */
export default function NotFound() {
  return (
    <section className="bg-paper-100 min-h-[70vh] flex items-end">
      <div className="container-x pt-[160px] pb-[96px] lg:pt-[220px] lg:pb-[140px]">
        <p className="eyebrow">Error 404</p>
        <h1 className="h1 mt-8 text-ink-900 max-w-[18ch] text-balance">This page could not be found.</h1>
        <p className="mt-6 lead text-ink-700 measure">
          The address may have changed or the page may have been removed. The sections of the site are listed below.
        </p>
        <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
          {[{ label: "Home", href: "/" }, ...navigationItems].map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="link-underline">{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
