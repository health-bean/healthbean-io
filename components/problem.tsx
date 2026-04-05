import { PROBLEM } from "@/lib/content";

export function Problem() {
  return (
    <section id="problem" className="border-b border-olive-900/10 px-6 py-section text-center md:px-12">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-olive-600">
        {PROBLEM.label}
      </span>
      <h2 className="mx-auto mt-3 max-w-xl text-2xl font-bold leading-snug md:text-3xl">
        {PROBLEM.headline}
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed md:text-base">
        {PROBLEM.body}
      </p>
      <div className="mx-auto mt-10 flex max-w-lg items-center justify-center gap-8 md:gap-12">
        {PROBLEM.stats.map((stat, i) => (
          <div key={stat.value} className="flex items-center gap-8 md:gap-12">
            {i > 0 && (
              <div className="h-12 w-px bg-olive-900/15" aria-hidden="true" />
            )}
            <div className="text-center">
              <div className="font-display text-3xl font-bold text-olive-700 md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 whitespace-pre-line text-xs text-muted">
                {stat.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
