import React from 'react';
import NavBar from './NavBar';
import '../assets/css/ContactUs.css'; // Ensure you create this CSS file for styling

const ContactUs: React.FC = () => {
  return (
    <div className="contact-us-container">
      <NavBar />
      <div className="contact-us-content">
        <h1 className="contact-us-header">Contact Us</h1>
        <p className="contact-us-description">
          We would love to hear from you! If you have any questions, feedback, or inquiries, please feel free to reach out to us through the form below or via our contact information.
        </p>
        <form className="contact-us-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows={4} required></textarea>
          </div>
          <button type="submit" className="contact-us-button">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
