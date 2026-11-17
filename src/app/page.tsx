import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Work } from "@/components/work";
import { About } from "@/components/about";
import { Approach } from "@/components/approach";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { PageEffects } from "@/components/page-effects";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.techtilde.com/#organization",
      name: "TechTilde",
      alternateName: ["TechTilde Software Studio", "techtilde.com"],
      description:
        "TechTilde is a software studio of developers building websites, web applications and custom software for businesses.",
      url: "https://www.techtilde.com/",
      logo: "https://www.techtilde.com/icon.png",
      email: "contact@techtilde.com",
      sameAs: ["https://github.com/TechTilde"],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.techtilde.com/#website",
      name: "TechTilde",
      alternateName: ["TechTilde Software Studio", "techtilde.com"],
      url: "https://www.techtilde.com/",
      publisher: { "@id": "https://www.techtilde.com/#organization" },
    },
  ],
};

export default function Home() {
  return (
    <div className="tt bg-ink text-paper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
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
