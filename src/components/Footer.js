// Footer.js
import React from 'react';
import './Footer.css';  // Optional: For custom styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Sean Coaching | Ireland</p>
        <div className="footer-links">
          <a href="https://github.com/seanfitz121" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/sean-fitzgibbon-96188721b/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://www.instagram.com/seanfitz00/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
