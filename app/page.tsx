import Hero from "@/components/hero";
import About from "@/components/about";
import Work from "@/components/work";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Hero />
      <About />
      <Work />
      <Footer />
    </div>
  );
}
