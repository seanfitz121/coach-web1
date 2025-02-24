import React, { useEffect } from 'react';
import './Contact.css';
import logo from '../assets/Sean.svg';

function Contact() {
  useEffect(() => {
    const handleIframeResize = (event) => {
      if (event.origin.includes('jotform.com')) {
        const { type, height } = event.data;
        if (type === 'setHeight') {
          document.getElementById('JotFormIFrame-250494657050054').style.height = `${height}px`;
        }
      }
    };

    window.addEventListener('message', handleIframeResize);
    return () => window.removeEventListener('message', handleIframeResize);
  }, []);

  return (
    <div className="contact">
      <h1 className='underline-heading animated-heading glow-heading' style={{marginBottom: "12px"}}>Get in Touch!</h1>
      <p style={{ color: '#ffffff' }}>Leave a message below and I'll get back to you!</p>
      <p style={{ color: '#ffffff', padding: '2px', marginBottom: "12px" }}>Please add the plan you're interested in and we can discuss further</p>
      <img src={logo} alt="Brand Logo" className="brand-icon1" />
      <div>
        <iframe
          className="jotform"
          id="JotFormIFrame-250494657050054"
          title="Form"
          allowTransparency="true"
          allow="geolocation; microphone; camera; fullscreen"
          src="https://form.jotform.com/250494657050054"
          frameBorder="0"
          style={{ border: 'none', minHeight: '600px' }} // Removed width from inline style
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;