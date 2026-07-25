import Link from "next/link";
import { company, navigationItems, businessSegments } from "@/data/company";
import { GlobeMark } from "@/components/GlobeMark";

export function Footer() {
  return (
    <footer className="bg-ink-900 text-white/70">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <GlobeMark className="w-9 h-9" />
              <span className="text-white text-[15px] font-[800] tracking-[0.16em] uppercase">
                Perkway Group
              </span>
            </div>
            <p className="mt-5 text-[14.5px] leading-relaxed max-w-[34ch]">
              {company.tagline}. A diversified holding company building enduring
              value across real estate, hospitality, technology, and financial
              services.
            </p>
          </div>

          {/* Company */}
          <div>
            <p className="eyebrow">Company</p>
            <ul className="mt-5 space-y-3">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[14.5px] hover:text-white/55 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Segments */}
          <div>
            <p className="eyebrow">Business Segments</p>
            <ul className="mt-5 space-y-3">
              {businessSegments.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <Link href="/portfolio" className="text-[14.5px] hover:text-white/55 transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="eyebrow">Contact</p>
            <address className="mt-5 not-italic text-[14.5px] leading-relaxed">
              {company.address.street}
              <br />
              {company.address.city}, {company.address.province}
              <br />
              {company.address.country}
              <br />
              <a href={`mailto:${company.email}`} className="mt-3 inline-block hover:text-white/55 transition-colors">
                {company.email}
              </a>
              <br />
              <a href={`tel:${company.phone.replace(/[^0-9+]/g, "")}`} className="hover:text-white/55 transition-colors">
                {company.phone}
              </a>
            </address>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-[12.5px]">
          <p>© {new Date().getFullYear()} {company.legalName}. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white/90 transition-colors">Privacy Policy</span>
            <span className="hover:text-white/90 transition-colors">Terms of Use</span>
            <span className="hover:text-white/90 transition-colors">Disclosures</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
