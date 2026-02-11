"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-6"
    >
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-semibold text-navy-900 uppercase tracking-wide mb-2">
            First Name *
          </label>
          <input
            type="text"
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
          className="w-full px-4 py-3 border border-slate-300 text-sm focus:outline-none focus:border-navy-400 transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-navy-900 uppercase tracking-wide mb-2">
          Inquiry Type *
        </label>
        <select
          required
          defaultValue=""
          className="w-full px-4 py-3 border border-slate-300 text-sm focus:outline-none focus:border-navy-400 transition-colors bg-white"
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="investment">Investment Opportunities</option>
          <option value="partnership">Partnership & Co-Investment</option>
          <option value="services">Property Management Services</option>
          <option value="advisory">Advisory & Consulting</option>
          <option value="media">Media & Press</option>
          <option value="careers">Careers</option>
          <option value="general">General Inquiry</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold text-navy-900 uppercase tracking-wide mb-2">
          Message *
        </label>
        <textarea
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
        <label htmlFor="consent" className="text-xs text-slate-500 leading-relaxed">
          I consent to Perkway Group collecting and storing the data submitted
          through this form for the purpose of responding to my inquiry. I
          understand that my information will be handled in accordance with the
          Privacy Policy.
        </label>
      </div>

      <button
        type="submit"
        className="px-8 py-4 bg-navy-900 text-white text-sm font-semibold tracking-wide hover:bg-navy-800 transition-colors"
      >
        Submit Inquiry
      </button>
    </form>
  );
}
