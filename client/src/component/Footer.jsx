
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="main-footer">
      <h2 className="footer-title">Rocket Fuel for Your Business</h2>
      <div className="footer-columns">
        <div className="footer-column">
          <h4>About Shift4Shop</h4>
          <ul>
            <li>Why Shift4Shop</li>
            <li>Shopping Cart Software</li>
            <li>Success Stories</li>
            <li>Shift4Shop Reviews</li>
            <li>eCommerce Blog</li>
            <li>Sitemap</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>eCommerce</h4>
          <ul>
            <li>Features</li>
            <li>How to Sell Online</li>
            <li>Create a Website</li>
            <li>Start an Online Store</li>
            <li>eCommerce</li>
            <li>Online Store Builder</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li>eCommerce Web Design</li>
            <li>eCommerce Marketing</li>
            <li>Custom Development</li>
            <li>Start an Online Business</li>
            <li>App Store</li>
            <li>Theme Store</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Technical Support</h4>
          <ul>
            <li>Support Center</li>
            <li>Help Manual</li>
            <li>eCommerce Forum</li>
            <li>eCommerce University</li>
            <li>Developer Portal</li>
            <li>Supported Payments</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Become a Partner</li>
            <li>Affiliate Program</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2025 Shift4Shop</p>
        <p>
          <a href="#">Terms and Conditions</a> | <a href="#">Privacy Policy</a>
        </p>
        <div className="footer-icons">
          <FaFacebookF />
          <FaTwitter />
          <FaYoutube />
          <FaLinkedin />
          <FaInstagram />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
