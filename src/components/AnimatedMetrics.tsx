interface Metric {
  value: string;
  label: string;
}

export function AnimatedMetrics({ metrics }: { metrics: Metric[] }) {
  return (
    <section
      className="border-y border-slate-200 py-12 lg:py-16"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <div
                className="text-2xl lg:text-3xl font-bold mb-1"
                style={{ color: "#0d1120" }}
              >
                {metric.value}
              </div>
              <div
                className="text-xs tracking-wide uppercase"
                style={{ color: "#adb5bd" }}
              >
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
