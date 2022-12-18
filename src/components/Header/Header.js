import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header-container'>
            <div className="logo">
             <h2>SUMON</h2>
            </div>
            <div className="navber">
            <a href="#home" id='skill'>HOME</a>
            <a href="#about">ABOUT ME</a>
            <a href="#skill-section">SKILL</a>
            <a href="#archives">PORTFOLIO</a>
            <a href="#contact-section">CONTACT </a>
            </div>
        </div>
    );
};

export default Header;