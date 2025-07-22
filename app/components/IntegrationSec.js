"use client";
import React from "react";
import "./integrationsec.css";
import Image from "next/image";

const logos = [
  { src: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1752480094/shopify-svgrepo-com_spabnz.png", alt: "Shopify" },
  { src: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1752480094/salesforce-svgrepo-com_rl1qtr.png", alt: "Salesforce" },
  { src: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1752480094/Frame_203_dxx3k8.png", alt: "AWS" },
  { src: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1752480094/wordpress-svgrepo-com_bws4gc.png", alt: "WordPress" },
  { src: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1752480094/Frame_202_ajrjzi.png", alt: "BigCommerce" },
  { src: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1752480094/adobe-cloud-131-svgrepo-com_zbzn0b.png", alt: "Adobe" },
];

const IntegrationSection = () => {
  return (
    <section className="integration-section">
      <div className="integration-container">
        <div className="integration-content">
          <span className="tag">Integration</span>
          <h2>Seamless integration with any ecommerce platform</h2>
        </div>
        
        <div className="integration-logos">
          {logos.map((logo, index) => (
            <figure key={index} className="logo-box">
              <Image src={logo.src} alt={logo.alt}
                width={100}
                height={50}
                className="integration-logo"
                priority
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
