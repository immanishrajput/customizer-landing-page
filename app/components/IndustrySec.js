"use client";
import React from "react";
import "./industrysec.css";

const industries = [
  {
    title: "Fashion & Apparel",
    desc: "No clicks needed our smart builder adapts to every move you make.",
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1752488589/image_15_ykzbub.png",
  },
  {
    title: "Jewelry & Accessories",
    desc: "No clicks needed our smart builder adapts to every move you make.",
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1752488589/image_16_fet2ij.png",
  },
  {
    title: "Ecommerce & Retail",
    desc: "No clicks needed our smart builder adapts to every move you make.",
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1752488588/image_17_bm9ige.png",
  },
  {
    title: "Sport & Fitness",
    desc: "No clicks needed our smart builder adapts to every move you make.",
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1752488588/image_18_qfowjm.png",
  },
  {
    title: "Handmade Goods",
    desc: "No clicks needed our smart builder adapts to every move you make.",
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1752488588/image_19_nfta9v.png",
  },
  {
    title: "Corporate Branding",
    desc: "No clicks needed our smart builder adapts to every move you make.",
    icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1752488588/image_21_albggq.png",
  },
];

const IndustriesSec = () => {
  return (
    <section className="industries">
      <div className="container">
        <h2 className="industries-heading">We Customize the Way Your Industry Sells</h2>
        <div className="industries-grid">
          {industries.map((item, index) => (
            <article className="industry-card" key={index}>
              <img src={item.icon} alt={item.title} className="industry-icon" />
              <h3 className="industry-title">{item.title}</h3>
              <p className="industry-desc">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSec;
