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
        <nav>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">How To</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#" className="contact-button">Contact us</a>
            </li>
          </ul>
        </nav>
        <h1>Your awesome traffic permit consultant.</h1>
        <a href="#" className="contact-button">Get started →</a>
        <Mobel />
      </header>
    </div>
  );
};

export default HeroSection;
