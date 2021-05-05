import React from 'react';
import faq from "../assets/images/faq.svg";

const Faq = () => {
  return(
    <section className="faq-section" id="faq">
      <div className="faq-background"></div>
      <div className="faq-top">
        <div className="faq-text">
          <h2>FAQ</h2>
          <h3>Questions and Answers on Professional Traffic Permits:</h3>
        </div>
        <div className="faq-image">
          <img src={faq} alt="faq" />
        </div>
      </div>
      <div className="faq-questions">
        <div className="question-card">
          <button className="question-card-header">
            <span className="question-title">What is a professional traffic permit?</span>
            <span className="question-sign"></span>
          </button>
          <div className="question-card-content content-show">
            Traffic permits are a requirement for conducting professional traffic.
          </div>
        </div>
        <div className="question-card">
          <button className="question-card-header">
            <span className="question-title">What is a professional traffic permit?</span>
            <span className="question-sign"></span>
          </button>
          <div className="question-card-content">
            Traffic permits are a requirement for conducting professional traffic.
          </div>
        </div>
        <div className="question-card">
          <button className="question-card-header">
            <span className="question-title">Are there professional traffic permit training courses at a distance?</span>
            <span className="question-sign"></span>
          </button>
          <div className="question-card-content">
            Traffic permits are a requirement for conducting professional traffic.
          </div>
        </div>
        <div className="question-card">
          <button className="question-card-header">
            <span className="question-title">What is a professional traffic permit?</span>
            <span className="question-sign"></span>
          </button>
          <div className="question-card-content">
            Traffic permits are a requirement for conducting professional traffic.
          </div>
        </div>
      </div>
      <div className="faq-bottom">
        <button className="load-more-button">
          <span className="load-more-text">Load More</span>
          <span className="question-sign"></span>
        </button>
      </div>

    </section>
  );
};

export default Faq;
