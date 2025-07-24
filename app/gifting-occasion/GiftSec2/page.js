"use client";
import React from "react";
import "./giftsec2.css";
import Image from "next/image";

const products = [
  {
    title: (
      <>
        Sublimated Football <br /> Jersey
      </>
    ),
    image: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1753273050/image_23_swbwzb.png",
  },
  {
    title: (
      <>
        Sublimated Football <br /> Jersey
      </>
    ),
    image: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1753273050/image_23_swbwzb.png",
  },
  {
    title: (
      <>
        Sublimated Football <br /> Jersey
      </>
    ),
    image: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1753273050/image_23_swbwzb.png",
  },
  {
    title: (
      <>
        Sublimated Football <br /> Jersey
      </>
    ),
    image: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1753273050/image_23_swbwzb.png",
  },
  {
    title: (
      <>
        Sublimated Football <br /> Jersey
      </>
    ),
    image: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1753273050/image_23_swbwzb.png",
  },
  {
    title: (
      <>
        Sublimated Football <br /> Jersey
      </>
    ),
    image: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1753273050/image_23_swbwzb.png",
  },
];


const GiftSec2 = () => {
  return (
    <section className="sports-section">
      <div className="container">
        <header className="sports-header">
          <h2>Sports & Apparel Products</h2>
          <p>
            Remotely manage and organize your customized offerings no need to
            rely on lengthy deployment cycles or constant code changes.
          </p>
        </header>

        <div className="products-grid">
          {products.map((product, index) => (
            <article className="product-card" key={index}>
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={300}
                className="product-image"
              />
              <div className="product-info">
                <h3>{product.title}</h3>
                <button className="customize-button">Customize It</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GiftSec2;
