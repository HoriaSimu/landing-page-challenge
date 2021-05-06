import React, { useEffect } from 'react';
import logo from "../assets/images/logo.svg";
import mobel from "../assets/images/mobel.svg";

const HeroSection = () => {
  useEffect(() => {
    // navigation behavior for the top buttons

    let ul = document.querySelector("#top-buttons");

    ul.addEventListener("click", (e) => {
      if (!e.target.closest("button")) return;
      if (!ul.contains(e.target)) return;

      switch (e.target.className) {
        case "about-button":
          document.getElementById("about").scrollIntoView();
          return;
        case "how-to-button":
          document.getElementById("apply").scrollIntoView();
          return;
        case "faq-button":
          document.getElementById("faq").scrollIntoView();
          return;
        case "contact-button":
          document.getElementById("contact").scrollIntoView();
          return;
        default:
          return;
      }
    });
  }, []);

  return(
    <div>
      <header className="hero-section">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className="nav-top">
          <ul id="top-buttons">
            <li>
              <button className="about-button">About</button>
            </li>
            <li>
              <button className="how-to-button">How To</button>
            </li>
            <li>
              <button className="faq-button">FAQs</button>
            </li>
            <li>
              <button className="contact-button">Contact us</button>
            </li>
          </ul>
        </nav>
        <h1>Your awesome traffic permit consultant.</h1>
        <button className="get-started-button">Get started</button>
        <img className="mobel align-left slide-in" src={mobel} alt="mobel" />
      </header>
    </div>
  );
};

export default HeroSection;
