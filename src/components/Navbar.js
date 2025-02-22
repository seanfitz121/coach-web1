import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/profSF.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      // Add a small threshold to prevent jitter (e.g., only hide if scrolling down by more than 10px)
      const scrollThreshold = 10;
      
      // Fade out when scrolling down (unless near the top), fade in when scrolling up
      setVisible(
        prevScrollPos > currentScrollPos + scrollThreshold || currentScrollPos < 50
      );
      setPrevScrollPos(currentScrollPos);
      
      // Debugging log (remove in production)
      console.log("Scroll position:", currentScrollPos, "Visible:", visible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]); // Added visible to dependency array for reactivity

  return (
    <nav className={`navbar ${visible ? "visible" : "hidden"}`}>
      {/* Brand with Circular Image */}
      <div className="navbar-logo">
        <img src={logo} alt="Brand Logo" className="brand-icon" />
        <Link to="/">Sean Coaching</Link>
      </div>

      {/* Hamburger Icon */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
      </div>

      {/* Navbar Links */}
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/services" onClick={() => setMenuOpen(false)}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/pricing" onClick={() => setMenuOpen(false)}>
            Pricing
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;