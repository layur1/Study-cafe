import React from "react";
import { Link } from "react-router-dom"; // Added Link import from react-router-dom
import "./Footer.css";
import facebook from "../../Assets/facebook.png";
import twitter from "../../Assets/twitter.png";
import instagram from "../../Assets/instagram.png";
import youtube from "../../Assets/youtube.png";
import telegram from "../../Assets/telegram.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          {/* Logo & Tagline */}
          <div className="footer-logo">
            <h2>Brew and Brain</h2>
            <p>Where you can do anything or just do nothing.</p>
          </div>

          {/* Address Section */}
          <div className="footer-address">
            <h3>Contact Us</h3>
            <p>123 Coffee Street, Colombo, Sri Lanka</p>
            <p>Email: contact@brewandbrain.com</p>
            <p>Phone: +94 123 456 789</p>
          </div>

          {/* Navigation Links */}
          <div className="footer-links">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about-us">About</Link>
              </li>
              <li>
                <Link to="/online-mode">OnlineMode</Link>
              </li>
              <li>
                <Link to="/book">Book</Link>
              </li>
            </ul>
          </div>

          {/* Social Media with Image Icons */}
          <div className="footer-socials">
            <a href="#" className="social-icon">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="#" className="social-icon">
              <img src={twitter} alt="Twitter" />
            </a>
            <a href="#" className="social-icon">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="#" className="social-icon">
              <img src={youtube} alt="YouTube" />
            </a>
            <a href="#" className="social-icon">
              <img src={telegram} alt="Telegram" />
            </a>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom">
          <p>© 2025 Brew and Brain. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;