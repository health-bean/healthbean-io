import { CONNECTION } from "@/lib/content";

export function Connection() {
  return (
    <section className="bg-brand-900 px-6 py-10 text-center md:px-12 md:py-14">
      <blockquote className="mx-auto max-w-lg font-display text-lg italic leading-relaxed text-white/70 md:text-xl">
        &ldquo;{CONNECTION.quote}&rdquo;
      </blockquote>
    </section>
  );
}
