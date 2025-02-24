import React from 'react';
import './Services.css';
import fitnessImage from '../assets/fitness-plan.svg';
import nutritionImage from '../assets/food-plan.svg';
import checkinImage from '../assets/checkin-3.svg';
import knowledgeImage from '../assets/knowledge-1.svg';
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: 'Fitness Plans',
    description: 'Tailored fitness plans to support your goals. I will work alongside you to create a quality, personalised fitness plan that keeps your goals in mind. This will include your weekly plan, information on exercise form and recovery, and access to support emails.',
    image: fitnessImage,
    included1: 'Fitness Plan',
    included2: 'Support',
    included3: 'Knowledgebase (Exercise form/technique, recovery etc)'
  },
  {
    title: 'Nutrition Plans',
    description: 'Nutrition advice, building a healthy relationship with food. I will work with you to create a weekly meal plan, working around allergies and food preferences.',
    image: nutritionImage,
    included1: 'Weekly Nutrition Plan',
    included2: 'Adjustments based on preference, allergies',
    included3: 'Knowledgebase (General Food/Nutrition advice)'
  },
  {
    title: 'Weekly Check-Ins',
    description: 'Weekly calls to support progress, update goals and provide advice. This is included in the PT plan, and allows for frequent communication to keep aligned with goals.',
    image: checkinImage,
    included1: 'Included in PT plan',
    included2: 'Advice based on goals',
    included3: 'Knowledgebase (Exercise form/technique, recovery etc)'
  },
  {
    title: 'Knowledgebase',
    description: 'Access to knowledgebase document with information on training, recovery and exercise form, with any purchase of Fitness Plans or PT plans.',
    image: knowledgeImage,
    included1: 'Included with every purchase (Nutrition/Training)',
    included2: 'Training advice',
    included3: 'Recovery advice'
  }
];

function Services() {
  const navigate = useNavigate();
  return (
    <div className="services-container">
      <h1 className="services-title" style={{color: "#ffffff", marginBottom: '12px'}}>My Services</h1>
      {services.map((service, index) => (
        <div className="service-tile">
          <div key={index} className="service fade-in" style={{ animationDelay: `${index * 0.3}s` }}>
            <div className="service-text">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <ul className='included-list'>
                <li>{service.included1}</li>
                <li>{service.included2}</li>
                <li>{service.included3}</li>
              </ul>
            </div>
            <img src={service.image} alt={service.title} className="service-image" />
          </div>
        </div>
      ))}
      <div className="subtle-glow"></div>
      <button onClick={() => navigate("/pricing")}> 
          <span>See Pricing/Info!</span>
        </button>
    </div>
  );
}

export default Services;