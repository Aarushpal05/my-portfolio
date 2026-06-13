import React from "react";
import "../css/Banner.css";
import profile from "../assets/profile.avif";

function Banner() {
  return (

    <section className="hero">
  <div className="overlay"></div>

  <div className="hero-content">
    <div className="hero-text">
      <h3>Hello, I'm</h3>
      <h1>Ayush pal</h1>
     
      <h2>Full Stack Web Developer</h2>

      <p>
        I build modern, responsive, and scalable web applications
        using React, Django, and modern web technologies.
      </p>

      <div className="hero-buttons">
        <a href="#projects" className="btn-primary">
          View Projects
        </a>

        <a href="#contact" className="btn-secondary">
          Contact Me
        </a>
      </div>
    </div>
  </div>
</section>
  );
}

export default Banner;