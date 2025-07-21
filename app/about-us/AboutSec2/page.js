"use client";
import React from "react";
import Image from "next/image";
import "./aboutsec2.css";

const features = [
    {
        icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1752920088/Group_13_g20plp.png",
        title: "Simplified Product Management",
        desc: "Remotely manage and organize your customized offerings—no need to rely on lengthy deployment cycles or constant code changes.",
    },
    {
        icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1752920088/Group_13_g20plp.png",
        title: "Faster Go-to-Market",
        desc: "With Customizer, what used to take months now takes hours. Launch tailored experiences or updates instantly with zero developer bottlenecks.",
    },
    {
        icon: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1752920088/Group_13_g20plp.png",
        title: "Unified Control Across Platforms",
        desc: "Manage all your branded experiences from a single dashboard—whether on web, mobile, or custom apps. One platform. Full visibility.",
    },
];

const brandLogos = [
    { src: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1752479510/image_6_ebmi5a.png", alt: "Shopify" },
    { src: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1752479510/image_11_fbrqz9.png", alt: "Believe" },
    { src: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1752479510/image_10_hqcehb.png", alt: "PushPress" },
    { src: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1752479510/image_9_lseyo7.png", alt: "Zenchef" },
    { src: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1752479510/image_11_fbrqz9.png", alt: "Believe 2" },
];

const AboutSec2 = () => {
    return (
        <section className="why-section">
            <header className="why-header">
                <h2>What It Does?</h2>
            </header>

            <div className="why-grid">
                {features.map((item, index) => (
                    <article key={index} className="why-card">
                        <figure className="why-icon">
                            <Image src={item.icon} alt="icon" width={48} height={48} />
                        </figure>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </article>
                ))}
            </div>

        </section>
    );
};

export default AboutSec2;
