import React from "react";
import "../css/about.css";
import profile from "../assets/about.avif"

function About() {
  return (
    <section className="about-section">
      <div className="about-container">

        <div className="about-image">
          <img
            src={profile}
            alt="Profile"
          />
        </div>

        <div className="about-content">
          <h4 className="about-subtitle">ABOUT ME</h4>

          <h1 className="about-title">
            Passionate Full Stack Developer
          </h1>

          <p className="about-description">
            I'm a Full Stack Developer specializing in modern web
            applications using React, Django, Python, and JavaScript.
            I enjoy building responsive, user-friendly, and scalable
            digital solutions that deliver exceptional user experiences.
          </p>

          <p className="about-description">
            My focus is on creating clean UI designs, efficient backend
            systems, and high-performance applications that help businesses
            grow in the digital world.
          </p>

          <div className="about-stats">
            <div className="stat-box">
              <h2>5+</h2>
              <p>Projects</p>
            </div>

            <div className="stat-box">
              <h2>2+</h2>
              <p>Years Learning</p>
            </div>

            <div className="stat-box">
              <h2>100%</h2>
              <p>Dedication</p>
            </div>
          </div>

       
        </div>

      </div>
    </section>
  );
}

export default About;