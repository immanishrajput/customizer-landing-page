"use client";

import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import "./navbar.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

    const router = useRouter();

    return (
        <header className="navbar">
            <nav className="navbar-container">
                <div className="navbar-left">
                    <div className="logo"><Link href="/">CUSTOMIZER</Link></div>

                    <ul className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
                        <li
                            className={`nav-item dropdown ${isDropdownOpen ? "active" : ""}`}
                            onMouseEnter={() => {
                                if (window.innerWidth > 768) setDropdownOpen(true);
                            }}
                            onMouseLeave={() => {
                                if (window.innerWidth > 768) setDropdownOpen(false);
                            }}
                            onClick={() => {
                                if (window.innerWidth <= 768) setDropdownOpen(!isDropdownOpen);
                            }}
                        >
                            <span className="nav-inline">
                                Showcase <IoIosArrowDown color="#566B76" className={`arrow-icon ${isDropdownOpen ? "rotate" : ""}`} />
                            </span>

                            {/* Dropdown Menu */}
                            {/* <div className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
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
                            </div> */}
                            <div className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
                                <Link href="/toys-kinds" className="dropdown-row" id="toys-kinds">
                                    <span>Toys & Kinds</span>
                                    <IoIosArrowForward className="dropdown-arrow" />
                                </Link>
                                <Link href="/bakery" className="dropdown-row">
                                    <span>Bakery</span>
                                    <IoIosArrowForward className="dropdown-arrow" />
                                </Link>
                                <Link href="/fashion-apparel" className="dropdown-row active">
                                    <span>Fashion & Apparel</span>
                                    <IoIosArrowForward className="dropdown-arrow" />
                                </Link>
                                <Link href="/jewelry-accessories" className="dropdown-row">
                                    <span>Jewelry & Accessories</span>
                                    <IoIosArrowForward className="dropdown-arrow" />
                                </Link>
                                <Link href="/gifting-occasion" className="dropdown-row" id="gifting-occasion">
                                    <span>Gifting & Occasion-Based</span>
                                    <IoIosArrowForward className="dropdown-arrow" />
                                </Link>

                                <li className="ham-actions-mobile">
                                    <button onClick={() => router.push("/partner-registration")} className="demo-btn">
                                        Get a demo
                                    </button>
                                </li>

                            </div>

                        </li>

                        <li className="nav-item">
                            <Link href="/about-us">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#">Case Studies</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact">Contact</Link>
                        </li>

                        <li className="nav-actions-mobile">
                            <button className="login-btn">Login</button>
                            {/* <button className="demo-btn">Get a demo</button> */}
                        </li>
                    </ul>
                </div>

                <div className="nav-actions desktop-only">
                    <button className="login-btn">Login</button>
                    <button onClick={() => router.push("/partner-registration")} className="demo-btn">
                        Get a demo
                    </button>
                </div>

                {/* <div className="hamburger-icon" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                </div>

                <button className="login-icon-btn" onClick={() => router.push("/login")}>
                    <FiUser size={20} />
                </button> */}
                <div className="nav-mobile-icons">
                    <div className="hamburger-icon" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <RxCross2 size={30} /> : <GiHamburgerMenu size={30} />}
                    </div>
                    <button
                        className="login-icon-btn"
                        onClick={() => {
                            window.location.href = "/";
                        }}
                    >
                        <Image
                            src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1753099413/Buttons_yomrhk.png"
                            alt="Login"
                            width={30}
                            height={30}
                            className="login-icon-img"
                        />
                    </button>


                </div>
            </nav>
        </header>
    );
};

export default Navbar;
