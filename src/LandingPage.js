import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"; 

const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Navbar */}
      <nav className="navbar fixed-top">
        <div className="container">
          <h1 className="logo">Mental Health Care</h1>
          <div className="nav-links">
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/login">Login</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="main-section">
        <h1 id="welcome">Welcome to Mental Health Care</h1>
        <h2 id="homeh2">Your safe space to track and improve your mental well-being.</h2>
        <button className="btn btn-primary">Get Started</button>
      </main>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <p>We offer personalized mental health assessments, therapy sessions, and self-improvement programs.</p>
        <div className="service-list">
          <div className="service-card">💬 One-on-One Therapy</div>
          <Link to="/mental-health-tracking" style={{ textDecoration: "none" }}>
            <div className="service-card">📊 Basic questions</div>
          </Link>
          <Link to="/mental-health-form"style={{ textDecoration: "none" }} className="service-card">
          <diV>📊 Specific Questions</diV>
          </Link>

      
          <div className="service-card">📚 Self-Help Resources</div>
        </div>
      </section>

      

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <p>"This platform has changed my life. I finally feel heard and supported!" - User A</p>
        <p>"The AI-based suggestions are so helpful for daily mental well-being." - User B</p>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>Email: support@mentalhealthcare.com</p>
        <p>Phone: +123 456 7890</p>
      </section>
    </div>
  );
};

export default LandingPage;
