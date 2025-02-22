import React, { useEffect } from 'react';
import './Contact.css';
import logo from "../assets/profSF.png";

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

    return () => {
      window.removeEventListener('message', handleIframeResize);
    };
  }, []);

  return (
    <div className="contact">
      <h1>Get in Touch!</h1>
      <p style={{color: '#ffffff'}}>Leave a message below and I'll get back to you!</p>
      <p style={{color: '#ffffff'}}>Please add the plan you're interested in and we can discuss further</p>
      <img src={logo} alt="Brand Logo" className="brand-icon1" />

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <iframe
          className="jotform"
          id="JotFormIFrame-250494657050054"
          title="Form"
          allowTransparency="true"
          allow="geolocation; microphone; camera; fullscreen"
          src="https://form.jotform.com/250494657050054"
          frameBorder="0"
          style={{ width: '100%', border: 'none', minHeight: '600px' }}
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
