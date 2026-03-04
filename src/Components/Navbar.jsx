import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">ShopNow</Link>

        {/* Hamburger Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          <span className={isOpen ? "bar open" : "bar"}></span>
          <span className={isOpen ? "bar open" : "bar"}></span>
          <span className={isOpen ? "bar open" : "bar"}></span>
        </div>

        {/* Nav Links - Toggled by 'active' class */}
        <div className={isOpen ? "nav-menu active" : "nav-menu"}>
          <div className="navbar-links">
            <Link to="/" className="navbar-link" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/Checkout" className="navbar-link" onClick={() => setIsOpen(false)}>Cart</Link>
          </div>
          
          <div className="navbar-auth-links">
            <Link to='/auth' className="btn btn-secondary" onClick={() => setIsOpen(false)}>Login</Link>
            <Link to='/auth' className="btn btn-primary" onClick={() => setIsOpen(false)}>SignUp</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;