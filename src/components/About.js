import React from 'react';
import about from "../assets/images/about.svg";

const About = () => {
  return(
    <section className="about-section">
      <div className="about-text">
        <h2>About us</h2>
        <p>The occupational traffic permit is one of the most important things in the company when carrying out freight transport.  In fact, it is a prerequisite for doing business traffic at all.</p>
        <div className="about-highlight">
          <p>How do you do when you need to obtain a commercial traffic permit for freight transport to your business?</p>
        </div>
      </div>
      <div className="about-image">
        <img src={about} alt="about" />
      </div>
    </section>
  );
};

export default About;
