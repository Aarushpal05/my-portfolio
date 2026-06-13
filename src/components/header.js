import React, { useState } from "react";
import '../css/nav.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        <a href="#home" style={{textDecoration: 'none', color: 'inherit'}}>Ayush<span>Portfolio</span></a>
      </div>

      {/* Menu */}
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li>
          <a href="#home" onClick={handleLinkClick}>Home</a>
        </li>

        <li>
          <a href="#about" onClick={handleLinkClick}>About</a>
        </li>

        <li>
          <a href="#skills" onClick={handleLinkClick}>Skills</a>
        </li>

        <li>
          <a href="#projects" onClick={handleLinkClick}>Projects</a>
        </li>

        <li>
          <a href="#contact" onClick={handleLinkClick}>Contact</a>
        </li>

      </ul>

      {/* Button */}
      <a href="#contact" className="contact-btn">
        Hire Me
      </a>

      {/* Mobile Menu */}
      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

    </nav>
  );
}

export default Navbar;