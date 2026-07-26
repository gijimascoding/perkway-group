import Link from "next/link";
import { company, navigationItems, businessSegments } from "@/data/company";
import { GlobeMark } from "@/components/GlobeMark";

const colHead = "text-[12px] uppercase tracking-[0.14em] text-white/45";
const colLink = "text-[15px] text-white/65 hover:text-white transition-colors";

export function Footer() {
  return (
    <footer className="on-dark bg-ink-900 text-white/65 border-t border-white/12">
      <div className="container-x py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <GlobeMark className="w-9 h-9" />
              <span className="text-white text-[16px] font-[700] tracking-[0.06em] uppercase">
                Perkway Group
              </span>
            </div>
            <p className="mt-6 text-[15px] leading-[1.7] max-w-[36ch]">
              {company.tagline}. A diversified holding company building enduring
              value across real estate, hospitality, technology, and financial
              services.
            </p>
          </div>

          {/* Company */}
          <div>
            <p className={colHead}>Company</p>
            <ul className="mt-6 space-y-3.5">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={colLink}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Segments */}
          <div>
            <p className={colHead}>Business Segments</p>
            <ul className="mt-6 space-y-3.5">
              {businessSegments.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <Link href="/portfolio" className={colLink}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className={colHead}>Contact</p>
            <address className="mt-6 not-italic text-[15px] leading-[1.7]">
              {company.address.street}
              <br />
              {company.address.city}, {company.address.province}
              <br />
              {company.address.country}
              <br />
              <a href={`mailto:${company.email}`} className="mt-3 inline-block hover:text-white transition-colors">
                {company.email}
              </a>
              <br />
              <a href={`tel:${company.phone.replace(/[^0-9+]/g, "")}`} className="hover:text-white transition-colors">
                {company.phone}
              </a>
            </address>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-[13px] text-white/45">
          <p>© {new Date().getFullYear()} {company.legalName}. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
            <span>Disclosures</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
