import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Slider />
    </main>
  );
}
