import Background from "@/components/Background";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import Contact from "@/sections/Contact";
import Footer from "@/components/layout/Footer";
import ScrollTop from "@/components/ScrollTop";


export default function Home() {
  return (
    <>
      <Background />
      <Navbar />

      <main className="bg-slate-950 text-white">

  <Hero />

  <About />

  <Experience />

  <Projects />

  <Skills />

  <Contact />

</main>

<Footer />
    </>
  );
}
<ScrollTop />