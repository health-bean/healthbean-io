import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { Approach } from "@/components/approach";
import { Connection } from "@/components/connection";
import { Team } from "@/components/team";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Approach />
      <Connection />
      <Team />
      <Footer />
    </main>
  );
}
