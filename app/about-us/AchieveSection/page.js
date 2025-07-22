"use client";
import React from "react";
import "./AchieveSection.css";

const achievements = [
    {
        title: "Achieve -1",
        subtitle: "Launching the Vision",
        desc: "We introduced our all-in-one Customizer platform empowering users to personalize T-shirts, rings, books, and more with real-time design tools.",
    },
    {
        title: "Achieve -2",
        subtitle: "Launching the Vision",
        desc: "We introduced our all-in-one Customizer platform empowering users to personalize T-shirts, rings, books, and more with real-time design tools.",
    },
    {
        title: "Achieve -3",
        subtitle: "Launching the Vision",
        desc: "We introduced our all-in-one Customizer platform empowering users to personalize T-shirts, rings, books, and more with real-time design tools.",
    },
];

const AchieveSection = () => {
    return (
        <section className="achieve-section">
            <header className="achieve-header">
                <h2>Here’s what you can achieve?</h2>
                <p>The dream customization team – Your best choice for ecommerce personalization.</p>
            </header>

            <div className="achieve-grid-wrapper">
                <div className="achieve-grid">
                    {achievements.map((item, index) => (
                        <article className="achieve-card" key={index}>
                            <div className="card-header">
                                <h4>{item.title}</h4>
                            <div className="card-divider" />
                                <h3>{item.subtitle}</h3>
                            </div>
                            <p>{item.desc}</p>
                        </article>

                    ))}
                </div>
            </div>


            <div className="cta-box">
                <h3>Get started for free</h3>
                <p>
                    Play around with Customizer and set up your docs for free. Add your team and pay when you're ready.
                </p>
                <button>Request a Demo</button>
            </div>
        </section>
    );
};

export default AchieveSection;
