import React from 'react';
import './About.css';
import fitness1 from '../assets/fitness-pic-1.svg';
import fitness2 from '../assets/fitness-pic-2.svg';
import nutrition1 from '../assets/nutrition-pic-1.svg';

function About() {
  return (
    <div className="about-container">
      <h1 className="animated-heading">Plans</h1>
      <p className="about-intro">
        See what's included, as well as pricing below for coaching plans!
      </p>

      {/* 3 rows x 2 columns: Card (left), Image (right) */}
      <div className="about-grid">
        {/* Row 1 */}
        <img
          src={fitness1}
          className="pricing-img row1-image"
          alt="Fitness Graphic"
        />
        <div className="about-card row1-card">
          <h2>PT Plan</h2>
          <p>
            I will provide nutrition advice, customised fitness plan to suit
            your goals, and weekly check-in calls
          </p>
          <h3>What's Included:</h3>
          <ul className="included-list">
            <li>Customized fitness plan tailored to your goals</li>
            <li>Personalized nutrition advice for a healthy lifestyle</li>
            <li>Weekly check-in calls to track progress and adjust goals</li>
            <li>Unlimited email support during your plan</li>
            <li>Access to exclusive workout resources and tips</li>
          </ul>
        </div>
        

        {/* Row 2 */}
        <div className="about-card row2-card">
          <h2>Nutrition Plan Only</h2>
          <p>
            I will provide a nutrition plan based on dietary requirements,
            and fitness goals.
          </p>
          <h3>What's Included:</h3>
          <ul className="included-list">
            <li>Personalized nutrition plan based on dietary needs and goals</li>
            <li>Detailed meal plans and grocery lists</li>
            <li>Guidance on building a healthy relationship with food</li>
            <li>Weekly email check-ins for support</li>
            <li>Access to nutritional resources and recipes</li>
          </ul>
        </div>
        <img
          src={nutrition1}
          className="pricing-img row2-image"
          alt="Nutrition Graphic"
        />

        {/* Row 3 */}
        <img
          src={fitness2}
          className="pricing-img row3-image"
          alt="Workout Graphic"
        />
        <div className="about-card row3-card">
          <h2>Fitness Plan Only</h2>
          <p>
            I will provide a customised fitness plan to suit your training
            goals.
          </p>
          <h3>What's Included:</h3>
          <ul className="included-list">
            <li>Customized fitness plan designed for your training goals</li>
            <li>Detailed workout schedules and exercise instructions</li>
            <li>Progress tracking tools and tips</li>
            <li>Bi-weekly email support for motivation</li>
            <li>Access to fitness resources and videos</li>
          </ul>
        </div>
        
      </div>

      {/* Existing Pricing Details Section */}
      <div className="price-box">
        <h2>Pricing Details</h2>
        <div className="price-options">
          <div className="price-option">
            <h3>PT Plan</h3>
            <p className="price">€100/month</p>
            <p>or €1000/year (Save 17%)</p>
            <a href="/contact" className="price-cta">
              Get Started
            </a>
          </div>
          <div className="price-option">
            <h3>Nutrition Plan Only</h3>
            <p className="price">€25</p>
            <p>As listed above</p>
            <a href="/contact" className="price-cta">
              Get Started
            </a>
          </div>
          <div className="price-option">
            <h3>Fitness Plan Only</h3>
            <p className="price">€30</p>
            <p>As listed above</p>
            <a href="/contact" className="price-cta">
              Get Started
            </a>
          </div>
        </div>
      </div>

      <div className="subtle-glow"></div>
    </div>
  );
}

export default About;
