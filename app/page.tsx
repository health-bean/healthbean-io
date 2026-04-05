import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { Approach } from "@/components/approach";
import { Products } from "@/components/products";
import { Connection } from "@/components/connection";
import { Team } from "@/components/team";
import { Cta } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Approach />
      <Products />
      <Connection />
      <Team />
      <Cta />
      <Footer />
    </main>
  );
}
