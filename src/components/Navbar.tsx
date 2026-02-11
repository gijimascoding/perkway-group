"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navigationItems } from "@/data/company";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
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
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div
              className={`w-9 h-9 rounded flex items-center justify-center text-sm font-bold transition-colors duration-300 ${
                scrolled
                  ? "bg-navy-900 text-white"
                  : "bg-white text-navy-900"
              }`}
            >
              PG
            </div>
            <span
              className={`text-lg font-semibold tracking-wide transition-colors duration-300 ${
                scrolled ? "text-navy-900" : "text-white"
              }`}
            >
              PERKWAY GROUP
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:opacity-70 ${
                  scrolled ? "text-navy-800" : "text-white/90"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`text-sm font-medium px-5 py-2.5 border transition-all duration-200 ${
                scrolled
                  ? "border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white"
                  : "border-white/40 text-white hover:bg-white/10"
              }`}
            >
              Investor Inquiries
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 transition-colors ${
              scrolled ? "text-navy-900" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M3 7h18M3 12h18M3 17h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-white z-40">
          <nav className="flex flex-col p-8 gap-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-navy-900 text-lg font-medium py-3 border-b border-slate-100"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-6 text-center py-3 bg-navy-900 text-white text-sm font-medium tracking-wide"
            >
              Investor Inquiries
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
