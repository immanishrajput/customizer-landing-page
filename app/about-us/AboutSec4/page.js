"use client";
import React from "react";
import "./aboutsec4.css";
import Image from "next/image";

const AboutSec4 = () => {
    return (
        <section className="aboutsec4-section" aria-labelledby="aboutsec4-heading">
            <div className="aboutsec4-container">
                <figure className="aboutsec4-image">
                    <Image
                        src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1753102164/14449322_5464026_1_n4quk0.png"
                        alt="T-shirt product configurator demo"
                        width={500}
                        height={500}
                        priority
                    />
                </figure>
                <article className="aboutsec4-content">
                    <h3 id="aboutsec4-heading">Use The Ecommerce Personalization Designer Anywhere</h3>
                    <p>
                        Whether shopping on-the-go or browsing over a coffee break, your customers can now create exactly what they want anytime, anywhere. Our powerful Customizer transforms ordinary products into personalized experiences with ease. We believe every item should reflect the user’s style, and now you can give them that freedom. Because nothing connects shoppers to your brand like the ability to make it their own.
                    </p>
                </article>
            </div>
        </section>
    );
};

export default AboutSec4;
