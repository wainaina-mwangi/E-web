import React from 'react';
import './AppFooter.css';
import { BsFacebook, BsTwitter, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';

function AppFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="custom-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand-section">
            <h2 className="footer-logo">ShopNow<span>.</span></h2>
            <p>Bringing the best products to your doorstep with style and quality.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><BsFacebook /></a>
              <a href="#" aria-label="Instagram"><BsInstagram /></a>
              <a href="#" aria-label="Twitter"><BsTwitter /></a>
              <a href="#" aria-label="Github"><BsGithub /></a>
            </div>
          </div>

          <div className="footer-links-grid">
            <div className="link-group">
              <h3>Shop</h3>
              <ul>
                <li><a href="#">New Arrivals</a></li>
                <li><a href="#">Best Sellers</a></li>
                <li><a href="#">Offers</a></li>
              </ul>
            </div>
            <div className="link-group">
              <h3>Company</h3>
              <ul>
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-newsletter">
            <h3>Stay Updated</h3>
            <p>Subscribe for exclusive drops and news.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Email address" required />
              <button type="submit">Join</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} ShopNow Inc. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default AppFooter;