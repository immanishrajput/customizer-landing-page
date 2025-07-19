"use client";

import { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    // Check if screen is mobile
    const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

    return (
        <header className="navbar">
            <nav className="navbar-container">
                {/* Left: Logo + Nav */}
                <div className="navbar-left">
                    <div className="logo">CUSTOMIZER</div>

                    <ul className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
                        <li
                            className={`nav-item dropdown ${isDropdownOpen ? "active" : ""}`}
                            onClick={() => {
                                if (window.innerWidth <= 768) {
                                    setDropdownOpen(!isDropdownOpen);
                                }
                            }}
                        >
                            <span className="nav-inline">
                                Showcase <IoIosArrowDown className={`arrow-icon ${isDropdownOpen ? "rotate" : ""}`} />
                            </span>

                            {/* Dropdown Menu */}
                            <div className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
                                <div className="dropdown-card blue-card">
                                    <span>Customizer shirts</span>
                                    <img src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1752493138/football-shirt_1_dklwy3.png" alt="Shirt" className="dropdown-img" />
                                    <IoIosArrowForward className="dropdown-arrow" />
                                </div>
                                <div className="dropdown-card cream-card">
                                    <span>Customizer rings</span>
                                    <img src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1752493188/ring_1_voiulm.png" alt="Ring" className="dropdown-img" />
                                    <IoIosArrowForward className="dropdown-arrow" />
                                </div>
                                <div className="dropdown-card blue-card">
                                    <span>Product catalog</span>
                                    <IoIosArrowForward className="dropdown-arrow" />
                                </div>
                            </div>
                        </li>

                        <li className="nav-item">About Us</li>
                        <li className="nav-item">Case Studies</li>
                        <li className="nav-item">Blog</li>
                        <li className="nav-item">Contact</li>

                        {/* Mobile login/demo buttons */}
                        <li className="nav-actions-mobile">
                            <button className="login-btn">Login</button>
                            <button className="demo-btn">Get a demo</button>
                        </li>
                    </ul>
                </div>

                {/* Desktop login/demo */}
                <div className="nav-actions desktop-only">
                    <button className="login-btn">Login</button>
                    <button className="demo-btn">Get a demo</button>
                </div>

                {/* Hamburger */}
                <div className="hamburger-icon" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
