import About from "./components/About";
import BookCall from "./components/BookCall";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <main>
      <Navbar boolean={true} />
      <Hero />
      <About />
      <Slider />
      <BookCall />
      <Navbar />
    </main>
  );
}
