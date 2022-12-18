import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer-desc">
        &copy; Sumon 2023. Developed with <span>❤</span> by sumon.
      </div>
      <div className="footer-items">
            <a href="#bg-style" id='skill'>HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#skill-section">SKILL</a>
            <a href="#archives">PORTFOLIO</a>
            <a href="#contact-section">CONTACT </a>
      </div>
    </footer>
  );
};

export default Footer;
