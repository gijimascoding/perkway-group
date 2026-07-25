"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navigationItems } from "@/data/company";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink-900/95 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.06)]"
          : "bg-gradient-to-b from-black/45 to-transparent"
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-sm bg-white flex items-center justify-center text-[13px] font-[900] tracking-tight text-ink-900">
              PG
            </span>
            <span className="text-white text-[15px] font-[800] tracking-[0.16em] uppercase">
              Perkway Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-9">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/85 text-[13px] font-[700] tracking-[0.14em] uppercase transition-colors duration-200 hover:text-gold-400"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-[12.5px] font-[700] tracking-[0.14em] uppercase px-5 py-2.5 border border-white/35 text-white transition-all duration-200 hover:border-gold-400 hover:text-gold-400"
            >
              Investor Inquiries
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {mobileOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M3 7h18M3 12h18M3 17h18" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[68px] bg-ink-900 z-40">
          <nav className="flex flex-col p-8 gap-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-white text-[15px] font-[700] tracking-[0.12em] uppercase py-4 border-b border-white/10"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-6 text-center py-3.5 bg-gold-500 text-white text-[13px] font-[700] tracking-[0.14em] uppercase"
            >
              Investor Inquiries
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
