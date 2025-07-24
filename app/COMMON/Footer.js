import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter
} from "react-icons/fa";
import { MdCall, MdEmail } from "react-icons/md";

import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-logo">CUSTOMIZER</h2>
          <p className="footer-desc">Get tips, new features & exclusive deals</p>
        </div>

        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="#">Showcase</a></li>
            <li><a href="#">Case Studies</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/customizer-partner">Become a Partner</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Customizer</h3>
          <ul>
            <li><a href="/bakery">Bakery</a></li>
            <li><a href="/fashion-apparel">Fashion & Apparel</a></li>
            <li><a href="/jewelry-accessories">Jewelry & Accessories</a></li>
            <li><a href="/gifting-occasion">Gifting & Occasion-Based</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p><MdCall size={20} style={{ marginRight: 8 }} /> 1-800-259-3265</p>
          <p><MdEmail size={20} style={{ marginRight: 8 }} /> support@kds.com</p>

          <h3>Social</h3>
          <div className="social-icons">
            <a href="#"><FaInstagram color="#E94084" /></a>
            <a href="#"><FaTwitter color="#1AA2F8" /></a>
            <a href="#"><FaFacebook color="#067EEC" /></a>
            <a href="#"><FaLinkedin color="#0B66C3" /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <a href="/privacy-policy">Privacy policy</a>
        <p>© 2025 Customizer. All rights reserved.</p>
      </div>
    </footer>
  );
}
