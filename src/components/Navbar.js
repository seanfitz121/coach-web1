import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/profSF.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    console.log("useEffect mounted"); // Confirm effect runs

    // Debounce function to limit scroll event frequency
    const debounce = (func, delay) => {
      let timeoutId;
      return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
      };
    };

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = currentScrollPos > prevScrollPos;
      const isNearTop = currentScrollPos < 50;

      setVisible(isNearTop || !isScrollingDown);
      setPrevScrollPos(currentScrollPos);

      console.log({
        currentScrollPos,
        prevScrollPos,
        isScrollingDown,
        visible: isNearTop || !isScrollingDown,
      });
    };

    const debouncedHandleScroll = debounce(handleScroll, 100); // 100ms debounce

    window.addEventListener("scroll", debouncedHandleScroll);
    return () => {
      console.log("useEffect unmounted");
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav className={`navbar ${visible ? "visible" : "hidden"}`}>
      <div className="navbar-logo">
        <img src={logo} alt="Brand Logo" className="brand-icon" />
        <Link to="/">Sean Coaching</Link>
      </div>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
      </div>

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