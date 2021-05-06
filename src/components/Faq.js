import React, { useState } from 'react';
import faq from "../assets/images/faq.svg";
import { faqTexts } from "../assets/texts/faq-text";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const generateQuestions = () => {
    return faqTexts.map((item, index) => {
      const activeSignClass = index === activeIndex ? '' : 'question-sign-plus';
      const activeContentClass = index === activeIndex ? 'content-show' : '';

      return(
        <div className="question-card" key={item.id}>
          <button className="question-card-header" onClick={() => onTitleClick(index)}>
            <span className="question-title">{item.question}</span>
            <span className={`question-sign ${activeSignClass}`}></span>
          </button>
          <div className={`question-card-content ${activeContentClass}`}>
            {item.answer}
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
