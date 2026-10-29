import { SITE } from "@/lib/content";
import { Logo } from "./logo";

export function Nav() {
  return (
    <nav
      className="absolute top-0 left-0 right-0 z-10 px-6 py-4 md:px-12"
      aria-label="Main navigation"
    >
      <a href="#" className="inline-flex items-center gap-2.5">
        <Logo variant="light" className="h-9 w-9" />
        <span className="font-display text-lg font-bold text-white">
          {SITE.name}
        </span>
      </a>
    </nav>
  );
}
