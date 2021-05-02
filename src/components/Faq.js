import React from 'react';
import { ReactComponent as FaqImage } from '../assets/images/faq.svg';

const Faq = () => {
  // to do: function to iterate over an array of text for the questions

  return(
    <section className="faq-section">
      <div className="faq-top">
        <div className="faq-text">
          <h2>FAQ</h2>
          <h3>Questions and Answers on Professional Traffic Permits:</h3>
        </div>
        <div className="faq-image">
          <FaqImage />
        </div>
      </div>
      <div className="faq-questions">
        <div className="question-card">
          <div className="question-card-header">
            What is a professional traffic permit?
          </div>
          <div className="question-card-content">
            Traffic permits are a requirement for conducting professional traffic.
          </div>
        </div>
      </div>
      <div className="faq-bottom">
      </div>

    </section>
  );
};

export default Faq;
