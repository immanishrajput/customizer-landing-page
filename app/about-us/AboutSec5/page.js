"use client";
import React from "react";
import "./aboutsec5.css";
import Image from "next/image";

const AboutSec5 = () => {
    return (
        <section className="aboutsec5-section" aria-labelledby="aboutsec5-heading">
            <div className="aboutsec5-container">
                <article className="aboutsec5-content">
                    <h3 id="aboutsec5-heading">Use The Ecommerce Personalization Designer Anywhere</h3>
                    <p>
                        Whether shopping on-the-go or browsing over a coffee break, your customers can now create exactly what they want anytime, anywhere. Our powerful Customizer transforms ordinary products into personalized experiences with ease. We believe every item should reflect the user’s style, and now you can give them that freedom. Because nothing connects shoppers to your brand like the ability to make it their own.
                    </p>
                </article>

                <figure className="aboutsec5-image">
                    <Image
                        src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1753102164/14449322_5464026_1_n4quk0.png"
                        alt="T-shirt product configurator demo"
                        width={500}
                        height={500}
                        priority
                    />
                </figure>
            </div>
        </section>
    );
};

export default AboutSec5;
