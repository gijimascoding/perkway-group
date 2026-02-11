import type { Metadata } from "next";
import Link from "next/link";
import { insights } from "@/data/company";

export const metadata: Metadata = {
  title: "Insights | Perkway Group",
  description:
    "Perspectives, market intelligence, and thought leadership from Perkway Group's investment and operations teams.",
};

export default function InsightsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-gold-500" />
              <span className="text-gold-500 text-xs font-semibold tracking-[0.2em] uppercase">
                Insights
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-[1.1] mb-6">
              Perspectives & <span className="font-semibold">Research</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Market intelligence, investment commentary, and thought
              leadership from across the Perkway Group platform.
            </p>
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Featured Insight */}
          <div className="border border-slate-200 p-10 lg:p-14 mb-12">
            <div className="grid lg:grid-cols-2 gap-10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold tracking-wide text-gold-600 uppercase">
                    {insights[0].category}
                  </span>
                  <span className="text-xs text-slate-400">
                    {insights[0].date}
                  </span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-semibold text-navy-900 leading-snug mb-4">
                  {insights[0].title}
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  {insights[0].excerpt}
                </p>
              </div>
              <div className="bg-navy-50 flex items-center justify-center min-h-[200px]">
                <span className="text-slate-400 text-sm">Featured</span>
              </div>
            </div>
          </div>

          {/* Rest of Insights */}
          <div className="grid md:grid-cols-3 gap-8">
            {insights.slice(1).map((item) => (
              <article
                key={item.id}
                className="border border-slate-200 hover:border-navy-200 transition-colors group"
              >
                <div className="bg-navy-50 h-40 flex items-center justify-center">
                  <span className="text-slate-400 text-xs">
                    {item.category}
                  </span>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold tracking-wide text-gold-600 uppercase">
                      {item.category}
                    </span>
                    <span className="text-xs text-slate-400">{item.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900 leading-snug mb-3 group-hover:text-navy-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-light text-navy-900 mb-4">
            Stay <span className="font-semibold">Informed</span>
          </h2>
          <p className="text-slate-600 mb-8">
            Receive quarterly market updates, investment commentary, and
            group news directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 px-4 py-3 border border-slate-300 text-sm focus:outline-none focus:border-navy-400"
            />
            <button className="px-6 py-3 bg-navy-900 text-white text-sm font-semibold tracking-wide hover:bg-navy-800 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-slate-400 mt-3">
            By subscribing, you agree to receive communications from Perkway
            Group. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </>
  );
}
