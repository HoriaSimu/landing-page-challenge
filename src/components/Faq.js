import React from 'react';
import faq from "../assets/images/faq.svg";
import { faqTexts } from "../assets/texts/faq-text";

const Faq = () => {

  const generateQuestions = () => {
    return faqTexts.map((text, index) => {
      return(
        <div className="question-card" key={text.id}>
          <button className="question-card-header">
            <span className="question-title">{text.question}</span>
            <span className="question-sign"></span>
          </button>
          <div className="question-card-content content-show">
            {text.answer}
          </div>
        </div>
      );
    });
  };

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
        {generateQuestions()}
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
