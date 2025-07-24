"use client";
import React from "react";
import "./BakeryBanner.css";
import Image from "next/image";

const BakeryBanner = () => {
    return (
        <section className="bakerybanner-section" aria-labelledby="bakerybanner-heading">
            <div className="bakerybanner-container">
                <article className="bakerybanner-content">
                    <h1 id="bakerybanner-heading">Bring your Sports & Apparel
                        portfolio to life with our diverse
                        set of product configurators.</h1>
                    <p>
                        From product configurators to dynamic storefronts, we help you turn every customer interaction into a visually stunning, high-converting experience.
                    </p>
                    <a href="/contact" className="bakerybanner-btn">Request a Demo</a>
                </article>

                <figure className="bakerybanner-image">
                    <Image src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1753274028/Group_15_cnallx.png" alt="T-shirt product configurator demo"
                        width={400}
                        height={400}
                        priority />
                </figure>
            </div>
        </section>
    );
};

export default BakeryBanner;
