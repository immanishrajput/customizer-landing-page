"use client";
import React from "react";
import "./JewelryBanner.css";
import Image from "next/image";

const JewelryBanner = () => {
    return (
        <section className="Jewelrybanner-section" aria-labelledby="Jewelrybanner-heading">
            <div className="Jewelrybanner-container">
                <article className="Jewelrybanner-content">
                    <h1 id="Jewelrybanner-heading">Bring your Sports & Apparel
                        portfolio to life with our diverse
                        set of product configurators.</h1>
                    <p>
                        From product configurators to dynamic storefronts, we help you turn every customer interaction into a visually stunning, high-converting experience.
                    </p>
                    <a href="/contact" className="Jewelrybanner-btn">Request a Demo</a>
                </article>

                <figure className="Jewelrybanner-image">
                    <Image src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1753274028/Group_15_cnallx.png" alt="T-shirt product configurator demo"
                        width={400}
                        height={400}
                        priority />
                </figure>
            </div>
        </section>
    );
};

export default JewelryBanner;
