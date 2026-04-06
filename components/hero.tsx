import { HERO, SITE } from "@/lib/content";
import { Nav } from "./nav";
import { EarlyAccessForm } from "./early-access-form";

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center bg-gradient-to-br from-brand-900 via-brand-800 to-brand-600 px-6 text-center">
      <Nav />
      <p className="mb-4 text-sm font-medium tracking-wide text-white/50">
        {SITE.tagline}
      </p>
      <h1 className="max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
        {HERO.headline}
      </h1>
      <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/70 md:text-lg">
        {HERO.subtitle}
      </p>
      <div className="mt-8 w-full max-w-md">
        <EarlyAccessForm />
      </div>
    </section>
  );
}
