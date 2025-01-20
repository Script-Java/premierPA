import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Services from "./components/Services";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
