import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Seasons } from "@/components/seasons";
import { Cast } from "@/components/cast";
import { Reviews } from "@/components/reviews";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Seasons />
        <Cast />
        <Reviews />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
