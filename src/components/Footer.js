// Footer.js
import React from 'react';
import './Footer.css';
import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin.png';
import instagramIcon from '../assets/insta.png';
import tiktokIcon from '../assets/tiktok.png';
import emailIcon from '../assets/email.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Sean Coaching | Ireland</p>
        <div className="footer-links">
          <a href="https://github.com/seanfitz121" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/sean-fitzgibbon-96188721b/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/seanfitz00/" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
            <img src={tiktokIcon} alt="TikTok" />
          </a>
          <a href="mailto:your-email@example.com">
            <img src={emailIcon} alt="Email" />
          </a>
        </div>
      </div>

      {/* ✅ Web Design Watermark */}
      <div className="watermark">
        <p>Created by <a href="https://github.com/seanfitz121" target="_blank" rel="noopener noreferrer">SF</a></p>
      </div>
    </footer>
  );
};

export default Footer;
