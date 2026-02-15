"use client";

import { useState, FormEvent } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "There was an error sending your message. Please try again or email us directly at info@perkways.com."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="border border-slate-200 p-10 text-center">
        <div className="w-12 h-12 bg-navy-900 text-white flex items-center justify-center mx-auto mb-4">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-navy-900 mb-2">
          Message Received
        </h3>
        <p className="text-sm text-slate-600">
          Thank you for your inquiry. A member of our team will respond within
          one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Web3Forms configuration */}
      <input
        type="hidden"
        name="access_key"
        value="475a6ab7-cddb-4db3-8006-3898b094d8e3"
      />
      <input
        type="hidden"
        name="subject"
        value="New Inquiry — Perkway Group Website"
      />
      <input
        type="hidden"
        name="from_name"
        value="Perkway Group Contact Form"
      />
      <input type="checkbox" name="botcheck" style={{ display: "none" }} />

      {/* Error banner */}
      {status === "error" && (
        <div className="border border-red-300 bg-red-50 p-4 text-sm text-red-700">
          {errorMessage}
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-semibold text-navy-900 uppercase tracking-wide mb-2">
            First Name *
          </label>
          <input
            type="text"
            name="First Name"
            required
            className="w-full px-4 py-3 border border-slate-300 text-sm focus:outline-none focus:border-navy-400 transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-navy-900 uppercase tracking-wide mb-2">
            Last Name *
          </label>
          <input
            type="text"
            name="Last Name"
            required
            className="w-full px-4 py-3 border border-slate-300 text-sm focus:outline-none focus:border-navy-400 transition-colors"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-semibold text-navy-900 uppercase tracking-wide mb-2">
            Email *
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-slate-300 text-sm focus:outline-none focus:border-navy-400 transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-navy-900 uppercase tracking-wide mb-2">
            Phone
          </label>
          <input
            type="tel"
            name="Phone"
            className="w-full px-4 py-3 border border-slate-300 text-sm focus:outline-none focus:border-navy-400 transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-navy-900 uppercase tracking-wide mb-2">
          Organization
        </label>
        <input
          type="text"
          name="Organization"
          className="w-full px-4 py-3 border border-slate-300 text-sm focus:outline-none focus:border-navy-400 transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-navy-900 uppercase tracking-wide mb-2">
          Inquiry Type *
        </label>
        <select
          name="Inquiry Type"
          required
          defaultValue=""
          className="w-full px-4 py-3 border border-slate-300 text-sm focus:outline-none focus:border-navy-400 transition-colors bg-white"
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="Investment Opportunities">
            Investment Opportunities
          </option>
          <option value="Partnership & Co-Investment">
            Partnership & Co-Investment
          </option>
          <option value="Property Management Services">
            Property Management Services
          </option>
          <option value="Advisory & Consulting">Advisory & Consulting</option>
          <option value="Media & Press">Media & Press</option>
          <option value="Careers">Careers</option>
          <option value="General Inquiry">General Inquiry</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold text-navy-900 uppercase tracking-wide mb-2">
          Message *
        </label>
        <textarea
          name="Message"
          required
          rows={5}
          className="w-full px-4 py-3 border border-slate-300 text-sm focus:outline-none focus:border-navy-400 transition-colors resize-none"
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          required
          id="consent"
          className="mt-1 accent-navy-900"
        />
        <label
          htmlFor="consent"
          className="text-xs text-slate-500 leading-relaxed"
        >
          I consent to Perkway Group collecting and storing the data submitted
          through this form for the purpose of responding to my inquiry. I
          understand that my information will be handled in accordance with the
          Privacy Policy.
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="px-8 py-4 bg-navy-900 text-white text-sm font-semibold tracking-wide hover:bg-navy-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending..." : "Submit Inquiry"}
      </button>
    </form>
  );
}
