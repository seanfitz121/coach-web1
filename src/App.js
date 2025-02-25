// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import { initGA, trackPageView } from "./analytics"; // Import tracking

function App() {

  useEffect(() => {
    initGA(); // Initialize Google Analytics
  }, []);

  return (
    <Router>
      <PageTracker /> {/* ✅ Tracks page views */}
      <div className='app'>
      <ScrollToTop/>
      <Navbar />
      <div className='main-content'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
      <Footer />
      </div>
    </Router>
  );
}

function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  return null;
}

export default App;
