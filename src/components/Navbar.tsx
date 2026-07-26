"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navigationItems } from "@/data/company";
import { GlobeMark } from "@/components/GlobeMark";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

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
    <header className="relative z-50 bg-paper-100 border-b border-hairline">
      <div className="container-x">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo lockup — monogram + wordmark on a shared baseline */}
          <Link href="/" className="flex items-center gap-3">
            <GlobeMark className="w-9 h-9" />
            <span className="text-ink-900 text-[16px] font-[700] tracking-[0.06em] uppercase">
              Perkway Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-ink-700 text-[14px] tracking-[0.02em] transition-colors duration-200 hover:text-ink-900"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 text-[13px] tracking-[0.04em] px-5 h-[40px] inline-flex items-center rounded-[2px] border border-accent text-ink-900 transition-colors duration-200 hover:text-accent hover:border-accent-hover"
            >
              Investor Inquiries
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden -m-1 p-3 text-ink-900"
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
                className="text-white text-[16px] tracking-[0.02em] py-4 border-b border-white/10"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-6 text-center py-4 rounded-[2px] border border-white/40 text-white text-[13px] tracking-[0.06em] uppercase"
            >
              Investor Inquiries
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
