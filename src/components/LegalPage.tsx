import type { ReactNode } from "react";

/* One layout for the three legal documents: eyebrow, title, effective date,
   then numbered sections in reading measure. Plain type, no imagery, the way
   a firm's terms read on paper. */
export function LegalPage({
  eyebrow,
  title,
  effective,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  effective: string;
  intro: ReactNode;
  sections: { heading: string; body: ReactNode }[];
}) {
  return (
    <>
      <section className="bg-paper-100 border-b border-hairline">
        <div className="container-x pt-[128px] pb-[56px] lg:pt-[160px] lg:pb-[80px]">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="h1 mt-8 text-ink-900 max-w-[20ch] text-balance">{title}</h1>
          <p className="mt-6 t-small nums text-ink-500">Effective {effective}</p>
        </div>
      </section>
      <section className="bg-paper-50">
        <div className="container-x py-[64px] lg:py-[96px]">
          <div className="measure space-y-6 text-ink-700">{intro}</div>
          <ol className="mt-16 space-y-14 measure">
            {sections.map((s, i) => (
              <li key={s.heading} className="border-t border-hairline pt-8">
                <h2 className="h3 text-ink-900">
                  <span className="text-ink-400 nums mr-3">{String(i + 1).padStart(2, "0")}</span>
                  {s.heading}
                </h2>
                <div className="mt-5 space-y-5 text-ink-700 t-body">{s.body}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
