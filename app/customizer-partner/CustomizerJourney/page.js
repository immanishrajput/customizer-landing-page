"use client";
import React from "react";
import "./customjourney.css";
import { IoMdCheckmark } from "react-icons/io";

const steps = [
  "A powerful platform built for modern businesses. Trusted by growing startups and leading brands alike.",
  "A powerful platform built for modern businesses. Trusted by growing startups and leading brands alike.",
  "A powerful platform built for modern businesses. Trusted by growing startups and leading brands alike.",
  "A powerful platform built for modern businesses. Trusted by growing startups and leading brands alike.",
];

const CustomizerJourney = () => {
  return (
    <section className="journey-section">
      <div className="journey-container">
        <div className="journey-heading">
          <h2>How the Customizer integration journey works?</h2>
        </div>
        <ul className="journey-steps">
          {steps.map((step, index) => (
            <li key={index}>
              <span className="checkmark"><IoMdCheckmark /></span>
              <p>{step}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CustomizerJourney;
