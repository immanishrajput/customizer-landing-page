"use client";
import React from "react";
import "./aboutbanner.css";
import Image from "next/image";

const AboutUsBanner = () => {
  return (
    <section className="aboutussec-section" aria-labelledby="aboutussec-heading">
      <div className="aboutussec-container">
        <article className="aboutussec-content">
          <h1 id="aboutussec-heading">Transforming the Way You Sell</h1>
          <p>
            From product configurators to dynamic storefronts, we help you turn every customer interaction
            into a visually stunning, high-converting experience.
          </p>
          <a href="/contact" className="aboutussec-btn">Request a Demo</a>
        </article>

        <figure className="aboutussec-image">
          <Image src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1753100750/Group_14_msuqx4.png" alt="T-shirt product configurator demo"
            width={400}
            height={400}
            priority />
        </figure>
      </div>
    </section>
  );
};

export default AboutUsBanner;
