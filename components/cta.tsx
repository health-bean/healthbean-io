import { CTA } from "@/lib/content";

export function Cta() {
  return (
    <section className="bg-gradient-to-b from-cream to-cream-dark px-6 py-section text-center md:px-12">
      <h2 className="text-2xl font-bold leading-snug md:text-3xl">
        {CTA.headline}
      </h2>
      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted md:text-base">
        {CTA.body}
      </p>
      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <a
          href={CTA.primaryCta.href}
          className="rounded-[--radius-button] bg-olive-700 px-8 py-3 text-sm font-semibold text-cream transition-colors hover:bg-olive-800"
        >
          {CTA.primaryCta.label}
        </a>
        <a
          href={CTA.secondaryCta.href}
          className="rounded-[--radius-button] border border-olive-700 px-8 py-3 text-sm font-semibold text-olive-700 transition-colors hover:bg-olive-700/5"
        >
          {CTA.secondaryCta.label}
        </a>
      </div>
    </section>
  );
}
