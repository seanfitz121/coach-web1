import React from 'react';
import './Home.css';
import fitness from "../assets/fitness1.png";
import nutrition from "../assets/nutrition1.png";
import checkin from "../assets/checkin1.png";
import placeholderProfileImage from "../assets/placeholder-profile.jpg";
import { useNavigate } from "react-router-dom";

const services = [
  { id: 1, title: "Fitness Plans", description: "Tailored fitness plans to support your goals", icon: fitness },
  { id: 2, title: "Nutrition", description: "Nutrition advice, building a healthy relationship with food", icon: nutrition },
  { id: 3, title: "Weekly Check-ins", description: "Weekly calls to support progress, update goals and provide advice", icon: checkin },
];

const reviews = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    review: "Sean's coaching has completely transformed my fitness journey. The plans are personalized, and I love the weekly check-ins!",
    profileImage: placeholderProfileImage
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 4,
    review: "I've seen great results with the nutrition guidance provided. Sean is supportive and knowledgeable.",
    profileImage: placeholderProfileImage
  },
  {
    id: 3,
    name: "Alice Brown",
    rating: 5,
    review: "The fitness plans were exactly what I needed, and the accountability through weekly calls kept me on track. Highly recommend!",
    profileImage: placeholderProfileImage
  }
];

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <header className="home-header">
        <h1>Sean Coaching</h1>
        <p>Online Fitness & Wellbeing Coach</p>
        <div className="description-box">
          <div className='description-box2'>
            <p>I’m Sean, a dedicated fitness and wellbeing coach here to help you achieve your fitness goals and build sustainable habits. Whether you're looking to get stronger, lose weight, or improve overall health, I create personalized fitness and nutrition plans tailored to your needs.</p>
          </div>
        </div>
        <button onClick={() => navigate("/services")}> 
          <span>Get Started!</span>
        </button>
      </header>

      <div className="services-section">
        <h2>Transform Your Fitness Journey with Expert Coaching</h2>
        <div className="services-and-social">
          <div className="my-services">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <img src={service.icon} alt={service.title} className="service-icon" />
                <div className="service-info">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                
              </div>
            ))}
          </div>
          <div className="instagram-feed">
            <div className="instagram-wrapper">
              <div className="instagram-mask">
                <iframe
                  src="//lightwidget.com/widgets/37b0df008f7b5af9b979aee6ed5f9dc2.html"
                  allowTransparency="true"
                  className="lightwidget-widget"
                  title="Instagram Feed"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New "Why Choose Me?" Section to Fill White Space */}
      <section className="why-choose-me">
        <h2>Why Choose Me?</h2>
        <div className="why-choose-content">
          <div className="why-item">
            <span role="img" aria-label="check">✅</span> Personalized Plans Tailored to Your Goals
          </div>
          <div className="why-item">
            <span role="img" aria-label="check">✅</span> Expert Knowledge in Fitness & Nutrition
          </div>
          <div className="why-item">
            <span role="img" aria-label="check">✅</span> Ongoing Support with Weekly Check-ins
          </div>
          <div className="why-item">
            <span role="img" aria-label="check">✅</span> Proven Results for Hundreds of Clients
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Transform Your Life?</h2>
        <p>Take the first step toward your fitness goals today. Contact me for a personalized plan!</p>
        <a href="/contact" className="cta-button">Get in Touch</a>
      </section>

      <section className="home-portfolio">
        <h2>Client Feedback</h2>
        <p>Check out some of my recent clients' feedback!</p>
        <div className="portfolio-gallery">
          {reviews.map((review) => (
            <div key={review.id} className="portfolio-item">
              <div className="review-profile">
                <img src={review.profileImage} alt={review.name} className="profile-image" />
                <div className="review-info">
                  <h4>{review.name}</h4>
                  <div className="rating">Rating: {review.rating} ⭐</div>
                </div>
              </div>
              <p className="review-text">{review.review}</p>
            </div>
          ))}
        </div>
      </section>
      

      <footer className="home-footer">
        <p>Ready to elevate your fitness/health? <a href="/contact">Apply here today!</a></p>
      </footer>
      <div className="subtle-glow"></div>
    </div>
  );
}

export default Home;