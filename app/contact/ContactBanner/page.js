"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import "./ContactSection.css";
import { FiChevronRight } from "react-icons/fi";

const ContactSection = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
    const popupRef = useRef(null);

    const togglePopup = () => setShowPopup((prev) => !prev);

    const handleItemClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index); // toggle
    };

    // Close popup on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setShowPopup(false);
            }
        };
        if (showPopup) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showPopup]);

    return (
        <section className="contact-section">
            <header className="contact-header">
                <h2>
                    Get in touch with our team <br /> — we&rsquo;re happy to help!
                </h2>
            </header>

            <div className="contact-cards">
                {/* Sales Card */}
                <article className="contact-card">
                    <Image
                        src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1753265381/chat_1_spfhad.png"
                        alt="Sales Icon"
                        width={70}
                        height={70}
                    />
                    <h3>Sales</h3>
                    <p>
                        Get in touch to learn more about Customizer and how we can help you
                        take control of your documentation.
                    </p>
                    <button className="contact-button">Contact Sales</button>
                </article>

                {/* Support Card */}
                <article className="contact-card support-card">
                    <Image
                        src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1753265381/chat_1_1_tkwjq0.png"
                        alt="Support Icon"
                        width={70}
                        height={70}
                    />
                    <h3>Support</h3>
                    <p>
                        Get in touch to learn more about Customizer and how we can help you
                        take control of your documentation.
                    </p>
                    <button className="contact-button" onClick={togglePopup}>
                        Contact Support
                    </button>

                    {/* Popup */}
                    {showPopup && (
                        <div className="help-popup" ref={popupRef}>
                            <div className="help-popup-header">
                                <div className="help-popup-icon">
                                    <Image
                                        src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1753266712/Vector_2_thpzqb.png"
                                        alt="bell"
                                        width={18}
                                        height={18}
                                    />
                                </div>
                                <span className="help-icon-span">Customizer&rsquo;s Help Center</span>
                                <button className="help-popup-close" onClick={togglePopup}>
                                    ✕
                                </button>
                                <p className="help-popup-subtitle">
                                    How can we help you today?
                                </p>
                            </div>

                            <ul className="help-popup-list">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <li
                                        key={i}
                                        onClick={() => handleItemClick(i)}
                                        className={activeIndex === i ? "active" : ""}
                                    >
                                        <div className="list-title">
                                            How customizer work?
                                            <FiChevronRight
                                                style={{
                                                    transform: activeIndex === i ? "rotate(90deg)" : "rotate(0deg)",
                                                    transition: "transform 0.3s ease",
                                                    display: "inline-block",
                                                }}
                                                size={16}
                                            />
                                        </div>

                                        <div
                                            className="list-content-wrapper"
                                            style={{
                                                maxHeight: activeIndex === i ? "200px" : "0px",
                                                opacity: activeIndex === i ? 1 : 0,
                                                overflow: "hidden",
                                                transition: "all 0.3s ease",
                                            }}
                                        >
                                            <div className="list-content">
                                                Customizer allows users to personalize products in real-time, giving full control over design, preview, and documentation without needing developers.
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    )}
                </article>
            </div>
        </section>
    );
};

export default ContactSection;
