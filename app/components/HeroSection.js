"use client";
import React, { useEffect } from "react";
import "./herosec.css";
import Image from "next/image";

const brandLogos = [
  { src: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1752479510/image_6_ebmi5a.png", alt: "Shopify" },
  { src: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1752479510/image_11_fbrqz9.png", alt: "Believe" },
  { src: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1752479510/image_10_hqcehb.png", alt: "PushPress" },
  { src: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1752479510/image_9_lseyo7.png", alt: "Zenchef" },
  { src: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1752479510/image_11_fbrqz9.png", alt: "Believe 2" },
];

const HeroSection = () => {

  return (
    <section className="hero-section">
      <div className="hero-wrapper">
        <header className="hero-heading">
          <h1>
            Make It Yours. <br /> Every Detail
          </h1>
        </header>
        <p className="hero-subtext">
          Design, preview, and personalize every item with zero design skills.
          Skyrocket your brand or gift game.
        </p>
        <div className="hero-buttons">
          <button className="btn-outline">Get a demo</button>
          <button className="btn-solid">Try for free</button>
        </div>

        <footer className="trusted">
          <p className="trusted-heading">
            Trusted by product teams from the top industry leaders
          </p>
          <div className="brands-wrapper">
            {brandLogos.map((brand, index) => (
              <figure key={index} className="brand-logo">
                <Image src={brand.src} alt={brand.alt} 
                  width={100}
                  height={50}
                  className="brand-logo-img"
                  priority
                />
              </figure>
            ))}
          </div>
        </footer>
      </div>
    </section>
  );
};

export default HeroSection;
