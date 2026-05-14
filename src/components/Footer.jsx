import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Nike</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#news">News & Press</a></li>
            <li><a href="#investors">Investors</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#shipping">Shipping Info</a></li>
            <li><a href="#returns">Returns & Exchange</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Policies</h4>
          <ul>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#cookies">Cookie Policy</a></li>
            <li><a href="#warranty">Warranty</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#facebook" className="social-link">Facebook</a>
            <a href="#twitter" className="social-link">Twitter</a>
            <a href="#instagram" className="social-link">Instagram</a>
            <a href="#youtube" className="social-link">YouTube</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Nike, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;