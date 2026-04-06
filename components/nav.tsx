import { SITE } from "@/lib/content";

export function Nav() {
  return (
    <nav
      className="absolute top-0 left-0 right-0 z-10 px-6 py-4 md:px-12"
      aria-label="Main navigation"
    >
      <a href="#" className="inline-flex items-center">
        <span className="font-display text-lg font-bold text-white">
          {SITE.name}
        </span>
      </a>
    </nav>
  );
}
