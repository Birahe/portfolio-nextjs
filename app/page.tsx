import Hero from "@/components/hero";
import About from "@/components/about";
import Work from "@/components/work";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Hero />
      <About />
      <Work />
      <Contact />
    </div>
  );
}
