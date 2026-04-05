import { HERO } from "@/lib/content";
import { Nav } from "./nav";

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center bg-gradient-to-br from-olive-900 via-olive-800 to-olive-700 px-6 text-center">
      <Nav />
      <h1 className="max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight text-cream md:text-5xl lg:text-6xl">
        {HERO.headline}
      </h1>
      <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-olive-400 md:text-lg">
        {HERO.subtitle}
      </p>
      <div className="mt-8 flex gap-3">
        <a
          href={HERO.primaryCta.href}
          className="rounded-[--radius-button] bg-olive-400 px-6 py-3 text-sm font-semibold text-olive-900 transition-colors hover:bg-olive-400/90"
        >
          {HERO.primaryCta.label}
        </a>
        <a
          href={HERO.secondaryCta.href}
          className="rounded-[--radius-button] border border-cream/30 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-white/5"
        >
          {HERO.secondaryCta.label}
        </a>
      </div>
    </section>
  );
}
