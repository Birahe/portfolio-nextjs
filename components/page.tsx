import Hero from "@/components/hero";
import About from "@/components/about";
import Work from "@/components/work";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Hero />
      <About />
      <Work />
    </div>
  );
}
