"use client";
import React from "react";
import "./product.css";

const features = [
  {
    alt: "AI Editor",
    img: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1752482651/Frame_183_jfy0nl.png",
  },
  {
    alt: "Edit",
    img: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1752482651/Frame_184_ng5esz.png",
  },
  {
    alt: "Text",
    img: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1752482650/Frame_183_1_cfgjti.png",
  },
  {
    alt: "Colours",
    img: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1752482651/Frame_184_1_dl7psl.png",
  },
];

const ProductSec = () => {
  return (
    <section className="product-tour">
      <div className="container">
        <h2 className="section-heading">More Than Just Product Tours</h2>

        <div className="main-preview">
          <img
            src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1752482654/Group_12_o6lgrj.png"
            alt="Main product tour preview"
          />
        </div>

        <div className="feature-grid">
          {features.map((item, index) => (
            <figure className="feature-card" key={index}>
              <img src={item.img} alt={item.alt} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSec;
