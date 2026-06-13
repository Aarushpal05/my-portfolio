
import './App.css';
import React from 'react';

import Header from './components/header';
import Banner from './components/Banner';
import Footer from './components/footer';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';


function App() {
  return (
    <>
      <Header />
      <section id="home">
        <Banner/>
      </section>

      <section id="about">
        <About/>
      </section>

      <section id="skills">
        <Skills/>
      </section>

      <section id="projects">
        <Projects/>
      </section>

      <section id="contact">
        <Contact/>
      </section>
      
      <Footer/>
    </>
  );
}

export default App;