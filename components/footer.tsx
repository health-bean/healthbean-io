import { SITE, FOOTER } from "@/lib/content";

export function Footer() {
  return (
    <footer className="flex items-center justify-between bg-brand-900 px-6 py-6 md:px-12">
      <span className="font-display text-sm font-bold text-white/60">
        {SITE.name}
      </span>
      <p className="text-xs text-white/40">{FOOTER.copyright}</p>
    </footer>
  );
}
