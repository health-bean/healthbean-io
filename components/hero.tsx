import { Nav } from "./nav";
import { InsightAnimation } from "./insight-animation";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-brand-900 via-brand-800 to-brand-600">
      <Nav />
      <InsightAnimation />
    </section>
  );
}
