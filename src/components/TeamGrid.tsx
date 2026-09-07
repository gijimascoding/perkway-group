"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import type { LeadershipMember } from "@/data/company";

function usablePhoto(m: LeadershipMember) {
  return m.photo && m.photo.startsWith("/") ? m.photo : null;
}

// Portrait sources are already black and white and lossless, so the only thing
// standing between the file and the screen is the delivery render: 320px at q82
// was landing a 640w webp on a 592px-wide retina card and softening every face.
const CARD_SIZES = "(max-width:768px) 50vw, 400px";
const MODAL_SIZES = "(max-width:640px) 92vw, 520px";

function Portrait({ m, sizes = CARD_SIZES, className = "" }: { m: LeadershipMember; sizes?: string; className?: string }) {
  const photo = usablePhoto(m);
  return photo ? (
    <Image src={photo} alt="" fill quality={95} sizes={sizes} className={`object-cover object-top grayscale contrast-[1.02] ${className}`} />
  ) : (
    <div className="on-dark absolute inset-0 flex items-center justify-center bg-ink-800">
      <span className="text-white/90 h2 tracking-tight">{m.initials}</span>
    </div>
  );
}

/**
 * Leadership cards and the bio dialog.
 *
 * Members with a portrait get the 4:5 card. Members without one (the board)
 * get a ruled row instead of a dark block with initials: a monogram where a
 * photograph is expected reads as a placeholder, and a board list is how
 * institutional sites present directors without portraits anyway.
 *
 * The dialog is rendered through a portal onto <body>. The grid sits inside a
 * scroll-reveal wrapper that carries a transform while it animates, and a
 * transformed ancestor turns position:fixed into a local box, so the dialog
 * used to be clipped to the grid. On <body> it is the viewport again.
 */
export function TeamGrid({ members, columns = 4 }: { members: LeadershipMember[]; columns?: 3 | 4 }) {
  const [active, setActive] = useState<LeadershipMember | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [shown, setShown] = useState(false);
  useEffect(() => setMounted(true), []);

  const open = (m: LeadershipMember) => {
    triggerRef.current = typeof document !== "undefined" ? (document.activeElement as HTMLElement) : null;
    setActive(m);
  };
  const close = () => {
    setActive(null);
    triggerRef.current?.focus?.();
  };

  useEffect(() => {
    if (!active) return;
    document.body.style.overflow = "hidden";
    // Two frames in: the panel starts at its hidden state, then transitions.
    const raf = requestAnimationFrame(() => requestAnimationFrame(() => setShown(true)));
    // Everything behind the dialog is inert to pointer and assistive tech.
    const behind = Array.from(document.querySelectorAll<HTMLElement>("body > header, body > main, body > footer"));
    behind.forEach((el) => el.setAttribute("inert", ""));
    // Focus lands on the close control; Tab and Shift+Tab cycle inside the dialog.
    const dialog = dialogRef.current;
    const focusables = () =>
      Array.from(dialog?.querySelectorAll<HTMLElement>('button, [href], input, [tabindex]:not([tabindex="-1"])') ?? []);
    focusables()[0]?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { close(); return; }
      if (e.key !== "Tab") return;
      const f = focusables();
      if (f.length === 0) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      cancelAnimationFrame(raf);
      setShown(false);
      behind.forEach((el) => el.removeAttribute("inert"));
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  const withPhoto = members.filter((m) => usablePhoto(m));
  const withoutPhoto = members.filter((m) => !usablePhoto(m));
  const grid = columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-2 lg:grid-cols-4";

  return (
    <>
      {withPhoto.length > 0 && (
        <ul className={`grid ${grid} gap-x-8 gap-y-12`}>
          {withPhoto.map((m) => (
            <li key={m.name} className="group">
              <button
                type="button"
                onClick={() => open(m)}
                aria-label={`Read the biography of ${m.name}`}
                className="block w-full text-left"
              >
                {/* Uniform 4:5 grayscale portrait, hairline frame, no radius */}
                <span className="relative block aspect-[4/5] overflow-hidden bg-paper-200 border border-hairline">
                  <Portrait m={m} />
                </span>
              </button>
              <h3 className="mt-5 text-ink-900 h3">{m.name}</h3>
              <p className="mt-1 text-ink-500 t-small">{m.title}</p>
              <button type="button" onClick={() => open(m)} className="mt-3 inline-block link-underline group-hover:text-accent-hover">
                Read Bio +
              </button>
            </li>
          ))}
        </ul>
      )}

      {withoutPhoto.length > 0 && (
        <ul className={`${withPhoto.length > 0 ? "mt-16" : ""} border-t border-ink-900`}>
          {withoutPhoto.map((m) => (
            <li key={m.name} className="grid gap-x-8 gap-y-2 py-6 border-b border-hairline sm:grid-cols-[1.2fr_1fr_auto] sm:items-baseline">
              <h3 className="text-ink-900 h3">{m.name}</h3>
              <p className="text-ink-500 t-small">{m.title}</p>
              <button type="button" onClick={() => open(m)} className="link-underline justify-self-start sm:justify-self-end">
                Read Bio +
              </button>
            </li>
          ))}
        </ul>
      )}

      {mounted && active && createPortal(
        <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 ${shown ? "dialog-open" : ""}`}>
          {/* The scrim is a real control: clicking outside closes, and it stays
              out of the tab order because the Close button is the keyboard path. */}
          <button type="button" tabIndex={-1} aria-label="Close biography" onClick={close} className="dialog-scrim absolute inset-0 cursor-default" />
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="team-modal-title"
            aria-describedby="team-modal-bio"
            className={`dialog-panel relative bg-paper-50 border border-hairline max-w-3xl w-full max-h-[88vh] overflow-y-auto grid ${usablePhoto(active) ? "sm:grid-cols-[minmax(0,0.9fr)_1.1fr]" : ""}`}
          >
            {usablePhoto(active) && (
              <div className="relative aspect-[3/4] sm:aspect-auto sm:min-h-[440px] bg-paper-200">
                <Portrait m={active} sizes={MODAL_SIZES} />
              </div>
            )}
            <div className="p-8 lg:p-10">
              <button
                type="button"
                onClick={close}
                aria-label="Close biography"
                className="absolute top-3 right-3 w-11 h-11 flex items-center justify-center text-ink-600 hover:text-ink-900 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                  <path d="M6 6l12 12M6 18L18 6" />
                </svg>
              </button>
              <h3 id="team-modal-title" className="text-ink-900 h3 pr-8">{active.name}</h3>
              <p className="mt-1.5 text-ink-600 t-micro font-[700] uppercase tracking-[0.12em]">{active.title}</p>
              <div className="mt-5 h-px w-12 bg-ink-900" />
              <p id="team-modal-bio" className="mt-5 text-ink-700 t-small">{active.bio}</p>
              <button type="button" onClick={close} className="mt-8 link-underline">
                Close
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
