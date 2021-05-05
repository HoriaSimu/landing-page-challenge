import React from 'react';
import { ReactComponent as Logo } from '../assets/images/logo.svg';
import { ReactComponent as FooterCar } from '../assets/images/trekmobil.svg';
import { ReactComponent as SemicircleForeground } from '../assets/images/semicircle1.svg';
import { ReactComponent as SemicircleBackground } from '../assets/images/semicircle2.svg';
import { ReactComponent as IconFB } from '../assets/images/icon-fb.svg';
import { ReactComponent as IconTwitter } from '../assets/images/icon-t.svg';
import { ReactComponent as IconInsta } from '../assets/images/icon-insta.svg';

const Footer = () => {
  return(
    <footer>
      <div className="footer-image">
        <FooterCar className="trekmobil" />
        <SemicircleForeground className="vector-foreground" />
        <SemicircleBackground className="vector-background" />
      </div>
      <div className="footer-content">
        <div className="footer-text">
          <p>We provide traffic management consultants so you get started quickly, contact us for a quote today!</p>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>Name</label>
          <input placeholder="Your name" />
          <label>Email address</label>
          <input placeholder="Your email address" />
          <button className="get-started-button">Get started</button>
        </form>
      </div>
      <div className="footer-bottom">
        <div className="footer-background"></div>
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
          </ul>
        </nav>
      </div>
      <div className="footer-copyright">
          <span>Copyright @ 2019</span>
          <span className="footer-social-icons">
            <a href="http://www.facebook.com">
              <IconFB />
            </a>
            <a href="http://www.twitter.com">
              <IconTwitter />
            </a>
            <a href="http://www.instagram.com">
              <IconInsta />
            </a>
          </span>
      </div>
    </footer>
  );
};

export default Footer;
