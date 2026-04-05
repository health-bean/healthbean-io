import { SITE, NAV_LINKS } from "@/lib/content";

export function Nav() {
  return (
    <nav
      className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-4 md:px-12"
      aria-label="Main navigation"
    >
      <a href="#" className="flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-base">
          🫘
        </span>
        <span className="font-display text-base font-bold text-cream">
          {SITE.name}
        </span>
      </a>
      <ul className="hidden gap-6 md:flex">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-sm text-olive-400 transition-colors hover:text-cream"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
