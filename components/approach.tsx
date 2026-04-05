import { APPROACH } from "@/lib/content";

export function Approach() {
  return (
    <section id="approach" className="px-6 py-section text-center md:px-12">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-olive-600">
        {APPROACH.label}
      </span>
      <h2 className="mx-auto mt-3 max-w-xl text-2xl font-bold leading-snug md:text-3xl">
        {APPROACH.headline}
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed md:text-base">
        {APPROACH.body}
      </p>
      <div className="mx-auto mt-10 grid max-w-2xl gap-4 md:grid-cols-3">
        {APPROACH.pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="rounded-[--radius-card] bg-white p-5 shadow-sm"
          >
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-olive-900/5 text-xl">
              {pillar.icon}
            </div>
            <h3 className="mt-3 text-sm font-semibold">{pillar.title}</h3>
            <p className="mt-1 text-xs text-muted">{pillar.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
