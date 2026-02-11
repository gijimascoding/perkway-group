import Link from "next/link";
import { company, navigationItems } from "@/data/company";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded bg-white text-navy-900 flex items-center justify-center text-sm font-bold">
                PG
              </div>
              <span className="text-lg font-semibold tracking-wide">
                PERKWAY GROUP
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {company.tagline}
            </p>
            <div className="flex gap-4">
              <a
                href={company.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={company.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Segments Column */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-6">
              Business Segments
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/portfolio#real-estate"
                  className="text-sm text-slate-300 hover:text-white transition-colors"
                >
                  Real Estate Investments
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio#hospitality"
                  className="text-sm text-slate-300 hover:text-white transition-colors"
                >
                  Hospitality & Hybrid Living
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio#proptech"
                  className="text-sm text-slate-300 hover:text-white transition-colors"
                >
                  Technology & Innovation
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio#property-management"
                  className="text-sm text-slate-300 hover:text-white transition-colors"
                >
                  Property Management
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio#development"
                  className="text-sm text-slate-300 hover:text-white transition-colors"
                >
                  Development & Construction
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio#lending"
                  className="text-sm text-slate-300 hover:text-white transition-colors"
                >
                  Real Estate Lending
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {company.address.street}
                  <br />
                  {company.address.city}, {company.address.province}{" "}
                  {company.address.postal}
                  <br />
                  {company.address.country}
                </p>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="text-sm text-slate-300 hover:text-white transition-colors"
                >
                  {company.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${company.phone}`}
                  className="text-sm text-slate-300 hover:text-white transition-colors"
                >
                  {company.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Perkway Capital Group. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              Terms of Use
            </Link>
            <Link
              href="#"
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              Disclosures
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
