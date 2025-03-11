import React from "react";
import { FaBrain, FaHandsHelping, FaUsers } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css"; // Importing CSS for styling

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Us 🧠</h1>
      <p className="about-description">
        Welcome to <strong>Mental Health Care</strong>, your safe space for improving mental well-being. 
        Our platform provides personalized assessments, therapy support, and mental health tracking 
        to help you take control of your mental health journey.
      </p>

      {/* Features Section */}
      <div className="about-features">
        <div className="feature-card">
          <FaBrain className="feature-icon" />
          <h3>Advanced AI Analysis</h3>
          <p>We use AI-driven insights to assess your mental health and provide actionable recommendations.</p>
        </div>
        <div className="feature-card">
          <FaHandsHelping className="feature-icon" />
          <h3>Support & Therapy</h3>
          <p>Connect with professionals and get personalized therapy based on your needs.</p>
        </div>
        <div className="feature-card">
          <FaUsers className="feature-icon" />
          <h3>Community & Resources</h3>
          <p>Join a supportive community and access self-help resources for mental well-being.</p>
        </div>
      </div>

      {/* Interactive Button */}
      <button className="btn btn-primary about-btn">Learn More</button>
    </div>
  );
};

export default About;
