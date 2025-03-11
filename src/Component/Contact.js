import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css"; // Import your CSS for styling
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("✅ Your message has been sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container contact-container mt-5">
      <h2 className="text-center mb-4">📞 Contact Us</h2>

      {/* Contact Information */}
      <div className="row">
        <div className="col-md-6">
          <h4>📍 Our Location</h4>
          <p><FaMapMarkerAlt /> 123 Main Street, Pune, India</p>
          <p><FaPhone /> +91 98765 43210</p>
          <p><FaEnvelope /> contact@mentalhealthcare.com</p>

          {/* Social Media Links */}
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="social-icon" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="social-icon" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-md-6">
          <h4>💬 Get in Touch</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Your Name</label>
              <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Your Email</label>
              <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>

          {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
        </div>
      </div>

      {/* Google Map */}
      <div className="mt-4">
        <h4>🗺️ Find Us on the Map</h4>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.302830297741!2d-122.4194150846776!3d37.77492977975953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c0c9c55ff%3A0x100b7ffb8f16d02a!2sPune%2C%20India!5e0!3m2!1sen!2sus!4v1628253881234!5m2!1sen!2sus"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
          className="rounded"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
