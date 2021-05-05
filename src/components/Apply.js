import React from 'react';
import apply from "../assets/images/apply.svg";

const Apply = () => {
  return(
    <section className="apply-section">
      <div className="apply-image">
        <img src={apply} alt="apply" />
      </div>
      <div className="apply-text">
        <h2>How to apply</h2>
        <p>When applying for a traffic permit, there are certain requirements that you must meet that are included in the examination: requirements for professional knowledge, solid establishment, good reputation and financial resources. Important to remember is to confirm your application for a traffic permit by the company's company signer or CEO.</p>
      </div>
    </section>
  );
};

export default Apply;
