"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import type { LeadershipMember } from "@/data/company";

function usablePhoto(m: LeadershipMember) {
  return m.photo && m.photo.startsWith("/") ? m.photo : null;
}

function Portrait({ m, className = "" }: { m: LeadershipMember; className?: string }) {
  const photo = usablePhoto(m);
  return photo ? (
    <Image src={photo} alt={m.name} fill quality={82} sizes="(max-width:768px) 50vw, 320px" className={`object-cover object-top grayscale contrast-[1.02] ${className}`} />
  ) : (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-ink-700 to-ink-900">
      <span className="text-white/90 text-[44px] font-[800] tracking-tight">{m.initials}</span>
    </div>
  );
}

export function TeamGrid({ members, columns = 4 }: { members: LeadershipMember[]; columns?: 3 | 4 }) {
  const [active, setActive] = useState<LeadershipMember | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const open = (m: LeadershipMember) => {
    triggerRef.current = (typeof document !== "undefined" ? (document.activeElement as HTMLElement) : null);
    setActive(m);
  };
  const close = () => {
    setActive(null);
    // Return focus to the card that opened the dialog.
    triggerRef.current?.focus?.();
  };

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  const grid = columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-2 lg:grid-cols-4";

  return (
    <>
      <div className={`grid ${grid} gap-x-8 gap-y-12`}>
        {members.map((m) => (
          <button
            key={m.name}
            onClick={() => open(m)}
            className="group text-left"
          >
            {/* Uniform 4:5 grayscale portrait, hairline frame, no radius */}
            <div className="relative aspect-[4/5] overflow-hidden bg-paper-200 ring-1 ring-hairline">
              <Portrait m={m} />
            </div>
            <h3 className="mt-5 text-ink-900 text-[18px] font-[600]">{m.name}</h3>
            <p className="mt-1 text-ink-500 text-[13px]">{m.title}</p>
            <span className="mt-3 inline-block link-underline text-[12px] group-hover:text-accent-hover">
              Read Bio +
            </span>
          </button>
        ))}
      </div>

      {/* Modal */}
      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          onClick={close}
        >
          <div className="absolute inset-0 bg-ink-900/80 backdrop-blur-sm" />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="team-modal-title"
            className="relative bg-paper-50 max-w-3xl w-full max-h-[88vh] overflow-y-auto grid sm:grid-cols-[minmax(0,0.9fr)_1.1fr]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[3/4] sm:aspect-auto sm:min-h-[440px] bg-paper-200">
              <Portrait m={active} />
            </div>
            <div className="p-8 lg:p-10">
              <button
                onClick={close}
                aria-label="Close"
                className="absolute top-3 right-3 w-11 h-11 flex items-center justify-center text-ink-600 hover:text-ink-900 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M6 6l12 12M6 18L18 6" />
                </svg>
              </button>
              <h3 id="team-modal-title" className="text-ink-900 text-[24px] font-[800] leading-tight pr-8">{active.name}</h3>
              <p className="mt-1.5 text-ink-600 text-[12px] font-[700] uppercase tracking-[0.12em]">{active.title}</p>
              <div className="mt-5 h-px w-12 bg-ink-900" />
              <p className="mt-5 text-ink-700 text-[15.5px] leading-relaxed">{active.bio}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
