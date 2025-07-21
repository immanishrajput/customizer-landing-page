"use client";
import React from "react";
import Image from "next/image";
import "./customhero.css";

const CustomizerPartHeroSec = () => {
  return (
    <section className="partner-section">
      <article className="partner-content">
        <h1>Become a Customizer Partner</h1>
        <p>
          Help brands launch and scale customized experiences.
          <br />
          We’ll send you leads your expertise does the rest.
          <br />
          Integrate your tools with Customizer to unlock new use cases and reach a wider audience.
        </p>
        <button className="partner-button">Become an Integrated Partner</button>
      </article>
      <figure className="partner-image-wrapper">
        <Image
          src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1752917496/Rectangle_13_ascdwk.png"
          alt="Handshake with partners"
          width={800}
          height={500}
          className="partner-image"
        />
      </figure>
    </section>
  );
};

export default CustomizerPartHeroSec;
