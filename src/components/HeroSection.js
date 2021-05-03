import React from 'react';
import { ReactComponent as Logo } from '../assets/images/logo.svg';
import { ReactComponent as Mobel } from '../assets/images/mobel.svg';

const HeroSection = () => {
  return(
    <div>
      <header className="hero-section">
        <div className="logo">
          <Logo />
        </div>
        <nav className="nav-top">
          <ul>
            <li>
              <button href="#">About</button>
            </li>
            <li>
              <button href="#">How To</button>
            </li>
            <li>
              <button href="#">FAQs</button>
            </li>
            <li>
              <button href="#" className="contact-button">Contact us</button>
            </li>
          </ul>
        </nav>
        <h1>Your awesome traffic permit consultant.</h1>
        <a href="#" className="contact-button">Get started →</a>
        <Mobel className="mobel" />
      </header>
    </div>
  );
};

export default HeroSection;
