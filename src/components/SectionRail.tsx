"use client";

import { useEffect, useState } from "react";

type Section = { id: string; label: string };

/**
 * Desktop "on this page" rail for the home page. Appears once the hero has
 * left the screen, tracks the section nearest the middle of the viewport, and
 * hides itself while the hero is in view so the first screen stays clean.
 * Below 1280px the CSS never shows it; the phone menu is the navigation there.
 */
export function SectionRail({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);
    if (els.length === 0) return;

    // Active = the section whose box crosses a band around the viewport middle.
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    els.forEach((el) => io.observe(el));

    // Visible from the first section reaching mid-screen until the last one
    // has scrolled past it; the hero above and the footer below stay clean.
    const first = els[0];
    const last = els[els.length - 1];
    const onScroll = () => {
      const mid = window.innerHeight * 0.5;
      setVisible(first.getBoundingClientRect().top < mid && last.getBoundingClientRect().bottom > mid);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [sections]);

  return (
    <nav className={`rail ${visible ? "is-visible" : ""}`} aria-label="On this page">
      <ol>
        {sections.map((s) => (
          <li key={s.id}>
            <a href={`#${s.id}`} aria-current={active === s.id ? "true" : undefined}>
              <span className="label">{s.label}</span>
              <span className="tick" aria-hidden />
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
