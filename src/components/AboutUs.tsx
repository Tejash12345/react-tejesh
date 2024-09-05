//import React from 'react'
import React from 'react';
import NavBar from './NavBar';
import '../assets/css/AboutUs.css'; // Import a CSS file for styling if needed

const AboutUs: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div className="about-us-container">
        <header className="about-us-header">
          <h1>About Us</h1>
        </header>
        <section className="about-us-content">
          <h2>Welcome to Our Tourism Guide!</h2>
          <p>
            We are passionate about helping you discover the most amazing places around the world. Our mission is to provide you with comprehensive information about top travel destinations, local attractions, and unique experiences.
          </p>
          <p>
            Whether you're looking for a romantic getaway, an adventurous trip, or a cultural exploration, we've got you covered. Our team of travel experts curates detailed guides and recommendations to ensure you have a memorable journey.
          </p>
          <p>
            From the iconic landmarks of Paris to the vibrant streets of Tokyo, our website offers insights into the best cities to visit, their top attractions, and local specialties. We strive to make travel planning easy and enjoyable for you.
          </p>
        </section>
        <footer className="about-us-footer">
          <p>&copy; 2024 Tourism Guide. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default AboutUs;

