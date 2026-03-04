import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-brand">ShopNow</p>
        <ul className="footer-links">
          <li>&copy; {currentYear} ShopNow. All rights reserved.</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;