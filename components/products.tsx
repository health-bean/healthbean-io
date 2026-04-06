import { PRODUCTS } from "@/lib/content";

function ProductCard({
  product,
}: {
  product: (typeof PRODUCTS.items)[number];
}) {
  const isChewiq = product.variant === "chewiq";

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-md">
      <div
        className={`px-6 py-6 text-center ${
          isChewiq
            ? "bg-gradient-to-br from-chewiq-dark to-chewiq-light"
            : "bg-gradient-to-br from-honeydo-dark to-honeydo-light"
        }`}
      >
        <div className="text-2xl font-bold">
          <span
            className={
              isChewiq
                ? "font-display text-chewiq-bg"
                : "font-extrabold text-honeydo-bg"
            }
          >
            {product.wordmark.primary}
          </span>
          <span
            className={
              isChewiq
                ? "font-display italic text-chewiq-bg/70"
                : "font-extrabold text-honeydo-text"
            }
          >
            {product.wordmark.accent}
          </span>
        </div>
        <p
          className={`mt-1 text-xs ${
            isChewiq ? "text-chewiq-bg/80" : "text-honeydo-subtitle"
          }`}
        >
          {product.tagline}
        </p>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <ul className="flex-1 space-y-2 text-sm leading-relaxed">
          {product.features.map((feature) => (
            <li key={feature} className="flex gap-2">
              <span className="mt-0.5 text-brand-600" aria-hidden="true">
                •
              </span>
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex gap-2">
          <a
            href={product.primaryCta.href}
            className={`flex-1 rounded-[--radius-button] py-2 text-center text-sm font-semibold transition-colors ${
              isChewiq
                ? "bg-chewiq-bg text-chewiq-dark hover:bg-chewiq-bg/80"
                : "bg-honeydo-bg text-honeydo-dark hover:bg-honeydo-bg/80"
            }`}
          >
            {product.primaryCta.label}
          </a>
          <a
            href={product.secondaryCta.href}
            className={`flex-1 rounded-[--radius-button] border py-2 text-center text-sm font-semibold transition-colors ${
              isChewiq
                ? "border-chewiq-light text-chewiq-dark hover:bg-chewiq-bg/30"
                : "border-honeydo-light text-honeydo-dark hover:bg-honeydo-bg/30"
            }`}
          >
            {product.secondaryCta.label}
          </a>
        </div>
      </div>
    </div>
  );
}

export function Products() {
  return (
    <section
      id="products"
      className="border-b border-brand-900/10 px-6 py-section md:px-12"
    >
      <div className="text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
          {PRODUCTS.label}
        </span>
        <h2 className="mt-3 text-2xl font-bold leading-snug md:text-3xl">
          {PRODUCTS.headline}
        </h2>
      </div>
      <div className="mx-auto mt-10 grid max-w-3xl gap-6 md:grid-cols-2">
        {PRODUCTS.items.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </section>
  );
}
