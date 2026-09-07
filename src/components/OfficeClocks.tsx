"use client";

import { useEffect, useState } from "react";
import { globalPresence } from "@/data/company";

const ZONES: Record<string, string> = {
  London: "Europe/London",
  Toronto: "America/Toronto",
  "New York": "America/New_York",
};

type Reading = { city: string; time: string; zone: string };

function read(): Reading[] {
  const now = new Date();
  return globalPresence
    .filter((o) => ZONES[o.city])
    .map((o) => {
      // Each office in its own locale so the zone reads as it does there (BST,
      // EDT); h23 keeps a 24-hour clock without a "24:" hour.
      const parts = new Intl.DateTimeFormat(o.city === "London" ? "en-GB" : "en-US", {
        timeZone: ZONES[o.city],
        hour: "2-digit",
        minute: "2-digit",
        timeZoneName: "short",
        hourCycle: "h23",
      }).formatToParts(now);
      const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
      return { city: o.city, time: `${get("hour")}:${get("minute")}`, zone: get("timeZoneName") };
    });
}

/**
 * The firm's day across its three offices, to the minute. Rendered blank on
 * the server so the HTML never carries a stale time, filled on mount, then
 * updated on the minute boundary. Time is the one thing the accent is for.
 */
export function OfficeClocks() {
  const [readings, setReadings] = useState<Reading[] | null>(null);

  useEffect(() => {
    setReadings(read());
    let timer: number;
    const arm = () => {
      const ms = 60_000 - (Date.now() % 60_000);
      timer = window.setTimeout(() => {
        setReadings(read());
        arm();
      }, ms);
    };
    arm();
    return () => window.clearTimeout(timer);
  }, []);

  const rows = readings ?? globalPresence.filter((o) => ZONES[o.city]).map((o) => ({ city: o.city, time: "", zone: "" }));

  return (
    <dl className={`clocks ${readings ? "is-set" : ""}`} aria-label="Local time at our offices">
      {rows.map((r) => (
        <div key={r.city} className="clock">
          <dt>{r.city}</dt>
          <dd>
            <time className="clock-time">{r.time || " "}</time>
            <span className="clock-zone">{r.zone}</span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
