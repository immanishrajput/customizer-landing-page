"use client";
import React from "react";
import "./ctasection.css";

const CtaSection = () => {
  return (
    <section className="cta-section" aria-labelledby="cta-heading">
      <div className="cta-container">
        <h2 id="cta-heading">Take the Next Steps to Integrate With Customizer</h2>
        <a href="/contact" className="cta-button">
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
