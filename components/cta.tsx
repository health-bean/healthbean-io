import { CTA } from "@/lib/content";
import { EarlyAccessForm } from "./early-access-form";

export function Cta() {
  return (
    <section className="bg-gradient-to-b from-cream to-cream-dark px-6 py-section text-center md:px-12">
      <h2 className="text-2xl font-bold leading-snug md:text-3xl">
        {CTA.headline}
      </h2>
      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted md:text-base">
        {CTA.body}
      </p>
      <div className="mt-8">
        <EarlyAccessForm />
      </div>
      <p className="mt-3 text-xs text-muted">
        No spam. Just a heads up when we launch.
      </p>
    </section>
  );
}
