import React, { useState } from 'react';
import './Navbar.css';

function Navbar({ cartCount, wishlistCount, onCartClick, onWishlistClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1>NIKE</h1>
        </div>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#products" className="nav-link">
              Products
            </a>
          </li>
          <li className="nav-item">
            <a href="#newarrival" className="nav-link">
              New Arrivals
            </a>
          </li>
        </ul>

        <div className="navbar-icons">
          <button className="icon-btn wishlist-btn" onClick={onWishlistClick}>
            <span className="icon">❤️</span>
            {wishlistCount > 0 && <span className="badge">{wishlistCount}</span>}
          </button>
          <button className="icon-btn cart-btn" onClick={onCartClick}>
            <span className="icon">🛒</span>
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </button>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;