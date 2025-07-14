import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import './footer.css'

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
            <li><a href="#">About Us</a></li>
            <li><a href="#">How It Works</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Customizer</h3>
          <ul>
            <li><a href="#">Start Customizing</a></li>
            <li><a href="#">T-Shirt Designer</a></li>
            <li><a href="#">Ring Engraver</a></li>
            <li><a href="#">Book Cover Maker</a></li>
            <li><a href="#">Bulk Orders</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p><FaPhoneAlt size={13} style={{ marginRight: 8 }} /> 1-800-259-3265</p>
          <p><MdEmail size={15} style={{ marginRight: 8 }} /> support@kds.com</p>

          <h3>Social</h3>
          <div className="social-icons">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <a href="#">Privacy policy</a>
        <p>© 2025 Customizer. All rights reserved.</p>
      </div>
    </footer>
  );
}
