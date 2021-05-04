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
        <Mobel className="mobel" />
      </header>
    </div>
  );
};

export default HeroSection;
