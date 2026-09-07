"use client";

import { useRef, useState, type FormEvent } from "react";
import Link from "next/link";

type FormStatus = "idle" | "submitting" | "success" | "error";

/* One place for every field: its id, label, the name Web3Forms receives, the
   autocomplete token, and the message shown when it is missing or malformed.
   Validation runs here, not in the browser's bubbles, so every visitor sees the
   same inline message under the field and a summary they can tab through. */
const FIELDS = {
  first: { id: "cf-first", label: "First name", name: "First Name", autoComplete: "given-name", missing: "Enter your first name" },
  last: { id: "cf-last", label: "Last name", name: "Last Name", autoComplete: "family-name", missing: "Enter your last name" },
  email: { id: "cf-email", label: "Email", name: "email", autoComplete: "email", missing: "Enter an email address we can reply to" },
  phone: { id: "cf-phone", label: "Phone", name: "Phone", autoComplete: "tel", missing: "" },
  org: { id: "cf-org", label: "Organization", name: "Organization", autoComplete: "organization", missing: "" },
  inquiry: { id: "cf-inquiry", label: "Inquiry type", name: "Inquiry Type", autoComplete: "off", missing: "Choose the kind of inquiry" },
  message: { id: "cf-message", label: "Message", name: "Message", autoComplete: "off", missing: "Tell us what you are writing about" },
  consent: { id: "cf-consent", label: "Consent", name: "Consent", autoComplete: "off", missing: "Confirm you agree to us handling your details" },
} as const;
type FieldKey = keyof typeof FIELDS;

const INQUIRY_TYPES = [
  "Investment Opportunities",
  "Partnership & Co-Investment",
  "Property Management Services",
  "Advisory & Consulting",
  "Media & Press",
  "Careers",
  "General Inquiry",
];

const inputClass = (invalid: boolean) =>
  `w-full px-4 py-3 border t-body bg-paper-50 transition-colors ${invalid ? "border-error" : "border-hairline focus:border-accent"}`;
const labelClass = "block t-micro font-semibold text-ink-500 uppercase tracking-[0.08em] mb-2";

function validate(data: FormData): Partial<Record<FieldKey, string>> {
  const e: Partial<Record<FieldKey, string>> = {};
  const v = (k: FieldKey) => String(data.get(FIELDS[k].name) ?? "").trim();
  if (!v("first")) e.first = FIELDS.first.missing;
  if (!v("last")) e.last = FIELDS.last.missing;
  const email = v("email");
  if (!email) e.email = FIELDS.email.missing;
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) e.email = "Enter an email address in the form name@example.com";
  if (!v("inquiry")) e.inquiry = FIELDS.inquiry.missing;
  if (!v("message")) e.message = FIELDS.message.missing;
  if (data.get(FIELDS.consent.name) !== "on") e.consent = FIELDS.consent.missing;
  return e;
}

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});
  const [sendError, setSendError] = useState("");
  const summaryRef = useRef<HTMLDivElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const found = validate(formData);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      // Focus the summary so keyboard and screen-reader users land on it.
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    setStatus("submitting");
    setSendError("");
    const data: Record<string, string> = {};
    formData.forEach((value, key) => { data[key] = value.toString(); });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Failed to send message");
      const result = await response.json();
      if (!result.success) throw new Error(result.message || "Failed to send message");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setSendError("Your message could not be sent. Please try again in a moment, or email us directly at info@perkways.com.");
      requestAnimationFrame(() => summaryRef.current?.focus());
    }
  }

  // Clear a field's error as soon as the visitor edits it.
  const clear = (k: FieldKey) => () => setErrors((prev) => (prev[k] ? { ...prev, [k]: undefined } : prev));

  const describedBy = (k: FieldKey) => (errors[k] ? `${FIELDS[k].id}-error` : undefined);
  const ErrorLine = ({ k }: { k: FieldKey }) =>
    errors[k] ? (
      <p id={`${FIELDS[k].id}-error`} className="mt-2 t-small text-error">{errors[k]}</p>
    ) : null;

  if (status === "success") {
    return (
      <div role="status" className="border border-hairline p-10 text-center">
        <div className="w-12 h-12 bg-ink-900 text-paper-100 flex items-center justify-center mx-auto mb-4" aria-hidden>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="h3 text-ink-900 mb-2">Message received</h3>
        <p className="t-small text-ink-600">Thank you for your inquiry. A member of our team will respond within one business day.</p>
      </div>
    );
  }

  const errorEntries = (Object.keys(errors) as FieldKey[]).filter((k) => errors[k]);

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Web3Forms configuration */}
      <input type="hidden" name="access_key" value="475a6ab7-cddb-4db3-8006-3898b094d8e3" />
      <input type="hidden" name="subject" value="New Inquiry — Perkway Group Website" />
      <input type="hidden" name="from_name" value="Perkway Group Contact Form" />
      <input type="checkbox" name="botcheck" tabIndex={-1} aria-hidden className="hidden" />

      {/* Error summary: focusable, lists each problem, links to the field. */}
      {(errorEntries.length > 0 || status === "error") && (
        <div ref={summaryRef} tabIndex={-1} role="alert" aria-labelledby="cf-error-title" className="border border-error p-5">
          <p id="cf-error-title" className="h3 text-ink-900">
            {status === "error" ? "The message was not sent" : `There ${errorEntries.length === 1 ? "is one problem" : `are ${errorEntries.length} problems`} with the form`}
          </p>
          {status === "error" && <p className="mt-2 t-small text-ink-700">{sendError}</p>}
          {errorEntries.length > 0 && (
            <ul className="mt-3 space-y-1.5">
              {errorEntries.map((k) => (
                <li key={k}>
                  <a href={`#${FIELDS[k].id}`} className="t-small text-error underline underline-offset-4">{errors[k]}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor={FIELDS.first.id} className={labelClass}>{FIELDS.first.label} *</label>
          <input id={FIELDS.first.id} type="text" name={FIELDS.first.name} autoComplete={FIELDS.first.autoComplete} required
            aria-invalid={!!errors.first || undefined} aria-describedby={describedBy("first")} onInput={clear("first")} className={inputClass(!!errors.first)} />
          <ErrorLine k="first" />
        </div>
        <div>
          <label htmlFor={FIELDS.last.id} className={labelClass}>{FIELDS.last.label} *</label>
          <input id={FIELDS.last.id} type="text" name={FIELDS.last.name} autoComplete={FIELDS.last.autoComplete} required
            aria-invalid={!!errors.last || undefined} aria-describedby={describedBy("last")} onInput={clear("last")} className={inputClass(!!errors.last)} />
          <ErrorLine k="last" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor={FIELDS.email.id} className={labelClass}>{FIELDS.email.label} *</label>
          <input id={FIELDS.email.id} type="email" name={FIELDS.email.name} autoComplete={FIELDS.email.autoComplete} inputMode="email" required
            aria-invalid={!!errors.email || undefined} aria-describedby={describedBy("email")} onInput={clear("email")} className={inputClass(!!errors.email)} />
          <ErrorLine k="email" />
        </div>
        <div>
          <label htmlFor={FIELDS.phone.id} className={labelClass}>{FIELDS.phone.label}</label>
          <input id={FIELDS.phone.id} type="tel" name={FIELDS.phone.name} autoComplete={FIELDS.phone.autoComplete} inputMode="tel" className={inputClass(false)} />
        </div>
      </div>

      <div>
        <label htmlFor={FIELDS.org.id} className={labelClass}>{FIELDS.org.label}</label>
        <input id={FIELDS.org.id} type="text" name={FIELDS.org.name} autoComplete={FIELDS.org.autoComplete} className={inputClass(false)} />
      </div>

      <div>
        <label htmlFor={FIELDS.inquiry.id} className={labelClass}>{FIELDS.inquiry.label} *</label>
        <select id={FIELDS.inquiry.id} name={FIELDS.inquiry.name} required defaultValue=""
          aria-invalid={!!errors.inquiry || undefined} aria-describedby={describedBy("inquiry")} onChange={clear("inquiry")} className={inputClass(!!errors.inquiry)}>
          <option value="" disabled>Select an option</option>
          {INQUIRY_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
        <ErrorLine k="inquiry" />
      </div>

      <div>
        <label htmlFor={FIELDS.message.id} className={labelClass}>{FIELDS.message.label} *</label>
        <textarea id={FIELDS.message.id} name={FIELDS.message.name} required rows={5}
          aria-invalid={!!errors.message || undefined} aria-describedby={describedBy("message")} onInput={clear("message")} className={`${inputClass(!!errors.message)} resize-none`} />
        <ErrorLine k="message" />
      </div>

      <div>
        <div className="flex items-start gap-3">
          <input type="checkbox" id={FIELDS.consent.id} name={FIELDS.consent.name} required
            aria-invalid={!!errors.consent || undefined} aria-describedby={describedBy("consent")} onChange={clear("consent")} className="mt-1 h-4 w-4 accent-ink-900" />
          <label htmlFor={FIELDS.consent.id} className="t-small text-ink-600">
            I consent to Perkway Group collecting and storing the details submitted through this form for the purpose of
            responding to my inquiry, as described in the{" "}
            <Link href="/privacy" className="link-underline">Privacy Policy</Link>.
          </label>
        </div>
        <ErrorLine k="consent" />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center h-[52px] px-8 bg-ink-900 text-paper-100 t-micro uppercase tracking-[0.06em] hover:bg-ink-800 transition-colors disabled:opacity-50"
      >
        {status === "submitting" ? "Sending…" : "Submit Inquiry"}
      </button>
    </form>
  );
}
