import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="social-icons">
          <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-google-plus-g"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-vk"></i></a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-section">
          <h4>CreatorShip.org</h4>
          <ul>
            <li><a href="#">Teardown</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Partners</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Terms of Use</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Social</h4>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">YouTube</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Service</h4>
          <ul>
            <li><a href="#">Compare</a></li>
            <li><a href="#">Download</a></li>
            <li><a href="#">Feedback</a></li>
            <li><a href="#">Bug Report</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Activity</h4>
          <ul>
            <li><a href="#">Influencers</a></li>
            <li><a href="#">Affiliate</a></li>
            <li><a href="#">Co-branding</a></li>
            <li><a href="#">Honor</a></li>
            <li><a href="#">Giveaway</a></li>
          </ul>
        </div>
        <div className="footer-section newsletter">
          <h4>Newsletter Subscription</h4>
          <div className="newsletter-form">
            <input type="email" placeholder="Subscribe to our newsletter" />
            <button type="submit">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-copy">
        <p>Copyright© 2018 CreatorShip.org. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
