import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Work } from "@/components/work";
import { About } from "@/components/about";
import { Approach } from "@/components/approach";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { PageEffects } from "@/components/page-effects";

export default function Home() {
  return (
    // `tt` scopes the reduced-motion rule in globals.css
    <div className="tt bg-ink text-paper">
      <PageEffects />
      <Header />
      <main>
        <Hero />
        <Services />
        <Work />
        <About />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
