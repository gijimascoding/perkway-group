"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/data/company";
import { GlobeMark } from "@/components/GlobeMark";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const pathname = usePathname();

  /* Transparent over the hero, solid ivory past 80% of hero height. */
  useEffect(() => {
    const hero = document.querySelector("main section") as HTMLElement | null;
    const threshold = () => (hero?.offsetHeight ?? window.innerHeight * 0.8) * 0.8;
    let limit = threshold();
    const onScroll = () => setSolid(window.scrollY > limit);
    const onResize = () => {
      limit = threshold();
      onScroll();
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-[240ms] ease-out ${
        solid
          ? "bg-paper-100 border-hairline"
          : "is-overlay bg-transparent border-transparent"
      }`}
    >
      <div className="container-x">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo lockup — monogram + wordmark on a shared baseline */}
          <Link href="/" className="flex items-center gap-3">
            <GlobeMark className="w-9 h-9" />
            {/* Serif wordmark, mixed case. Blackstone's mark is a serif
                logotype; the uppercase tracked-out grotesk here read as a
                tech company's wordmark. */}
            <span
              className={`font-display text-[23px] leading-none tracking-[-0.005em] transition-colors duration-[240ms] ease-out ${
                solid ? "text-ink-900" : "text-white"
              }`}
            >
              Perkway Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`t-small tracking-[0.02em] transition-colors duration-[240ms] ease-out ${
                  solid ? "text-ink-700 hover:text-ink-900" : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`ml-2 t-micro uppercase tracking-[0.08em] px-5 h-[40px] inline-flex items-center border transition-colors duration-[240ms] ease-out ${
                solid
                  ? "border-accent text-ink-900 hover:text-accent hover:border-accent-hover"
                  : "border-white/50 text-white hover:bg-white/10"
              }`}
            >
              Investor Inquiries
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden -m-1 p-3 transition-colors duration-[240ms] ease-out ${
              solid && !mobileOpen ? "text-ink-900" : "text-white"
            }`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {mobileOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M3 7h18M3 12h18M3 17h18" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="on-dark lg:hidden fixed inset-0 top-[72px] bg-ink-900 z-40 pb-[env(safe-area-inset-bottom)]"
        >
          <nav className="flex flex-col p-8 gap-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-white t-body tracking-[0.02em] py-4 border-b border-white/10"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-6 text-center py-4 border border-white/40 text-white t-micro tracking-[0.06em] uppercase"
            >
              Investor Inquiries
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
