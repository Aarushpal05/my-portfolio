// Footer.js
import React from "react";
import "../css/Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-brand">
          <h2>Ayush</h2>
          <p>
            Creative Frontend Developer building modern,
            responsive and user-friendly web experiences.
          </p>
        </div>

        {/* CENTER */}
        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/skills">Skills</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </div>

        {/* RIGHT */}
        <div className="footer-social">
          <h3>Follow Me</h3>

          <div className="social-icons">
            <a href="#">
              <FaGithub />
            </a>

            <a href="#">
              <FaLinkedin />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 Ayush.dev | All Rights Reserved</p>

        <a href="#top" className="top-btn">
          <FaArrowUp />
        </a>
      </div>
    </footer>
  );
}

export default Footer;