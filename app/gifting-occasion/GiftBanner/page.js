"use client";
import React from "react";
import "./GiftBanner.css";
import Image from "next/image";

const GiftBanner = () => {
    return (
        <section className="giftbanner-section" aria-labelledby="giftbanner-heading">
            <div className="giftbanner-container">
                <article className="giftbanner-content">
                    <h1 id="giftbanner-heading">Bring your Sports & Apparel
                        portfolio to life with our diverse
                        set of product configurators.</h1>
                    <p>
                        From product configurators to dynamic storefronts, we help you turn every customer interaction into a visually stunning, high-converting experience.
                    </p>
                    <a href="/contact" className="giftbanner-btn">Request a Demo</a>
                </article>

                <figure className="giftbanner-image">
                    <Image src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1753274028/Group_15_cnallx.png" alt="T-shirt product configurator demo"
                        width={400}
                        height={400}
                        priority />
                </figure>
            </div>
        </section>
    );
};

export default GiftBanner;
