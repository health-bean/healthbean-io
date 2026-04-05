import { SITE, FOOTER } from "@/lib/content";

export function Footer() {
  return (
    <footer className="flex items-center justify-between bg-olive-900 px-6 py-6 md:px-12">
      <a
        href="#"
        aria-label={SITE.name}
        className="flex items-center gap-2 font-display text-sm text-olive-400 transition-colors hover:text-olive-300"
      >
        <span aria-hidden="true">🫘</span>
      </a>
      <p className="text-xs text-muted">{FOOTER.copyright}</p>
    </footer>
  );
}
