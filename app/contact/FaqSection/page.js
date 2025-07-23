"use client";
import React, { useState } from "react";
import "./faqsec.css";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
  {
    question: "How do I start customizing a product?",
    answer:
      `Simply choose a product category (like T-shirts, rings, or books) and click “Start Customizing.” You’ll enter our live design tool where you can upload artwork, add text, and preview in real time.`,
  },
  {
    question: "Can I upload my own design or logo?",
    answer: `Yes, you can easily upload your own artwork or logo in the Customizer.`,
  },
  {
    question: "Do I need to order in bulk?",
    answer: `No bulk order required. You can customize and order even a single item.`,
  },
  {
    question: "What types of products can I customize?",
    answer: `You can customize a wide range of products like apparel, mugs, stationery, and more.`,
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
     <section className="faq-section">
      <div className="faq-container">
        <aside className="faq-left">
          <h2>Got questions? We’ve got answers.</h2>
          <p>Below are responses to common inquiries about using our Customizer.</p>
        </aside>
        <div className="faq-right">
          {faqs.map((faq, index) => (
            <article key={index} className="faq-item">
              <button
                className={`faq-question ${openIndex === index ? "active" : ""}`}
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
                <span className="faq-arrow">
                  {openIndex === index ? <FiChevronUp /> : <FiChevronDown />}
                </span>
              </button>
              {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
