import React, { useEffect } from "react";
import Lenis from "lenis";

import "./App.css";

import Header from "./components/header";
import Banner from "./components/Banner";
import Footer from "./components/footer";

import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import CertificationTimeline from "./pages/certifications";

function App() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <Header />

      <section id="home">
        <Banner />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section id="certifications">
        <CertificationTimeline />
      </section>

      <Footer />
    </>
  );
}

export default App;