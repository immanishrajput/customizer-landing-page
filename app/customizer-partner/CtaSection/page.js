"use client";
import React from "react";
import "./ctasection.css";

const CtaSection = () => {
  return (
    <section className="cta-section">
      <div className="cta-box">
        <h2 className="cta-title">Get started for free</h2>
        <p className="cta-subtext">
          Play around with Customizer and set up your docs for free. Add your team and pay when you’re ready.
        </p>
        <a href="/contact" className="cta-btn">
          Request a Demo
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
