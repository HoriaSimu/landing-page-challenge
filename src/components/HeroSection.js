import React from 'react';
import logo from "../assets/images/logo.svg";
import mobel from "../assets/images/mobel.svg";

const HeroSection = () => {
  return(
    <div>
      <header className="hero-section">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className="nav-top">
          <ul>
            <li>
              <button>About</button>
            </li>
            <li>
              <button>How To</button>
            </li>
            <li>
              <button>FAQs</button>
            </li>
            <li>
              <button className="contact-button">Contact us</button>
            </li>
          </ul>
        </nav>
        <h1>Your awesome traffic permit consultant.</h1>
        <button className="get-started-button">Get started</button>
        <img className="mobel" src={mobel} alt="mobel" />
      </header>
    </div>
  );
};

export default HeroSection;
