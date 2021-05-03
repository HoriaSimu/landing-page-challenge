import React from 'react';
import { ReactComponent as Logo } from '../assets/images/logo.svg';
import { ReactComponent as FooterCar } from '../assets/images/trekmobil.svg';
import { ReactComponent as SemicircleForeground } from '../assets/images/semicircle1.svg';
import { ReactComponent as SemicircleBackground } from '../assets/images/semicircle2.svg';

const Footer = () => {
  return(
    <footer>
      <div className="footer-image">
        <FooterCar />
        <SemicircleForeground />
        <SemicircleBackground />
      </div>
      <div className="footer-content">
        <div className="footer-text">
          We provide traffic management consultants so you get started quickly, contact us for a quote today!
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>Name</label>
          <input placeholder="Your name" />
          <label>Email address</label>
          <input placeholder="Your email address" />
          <button>Get started</button>
        </form>
      </div>
      <div className="footer-bottom">
        <div className="logo-bottom">
          <Logo />
        </div>
        <nav>
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
      </div>
    </footer>
  );
};

export default Footer;
