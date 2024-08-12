import React from 'react';
import './Footer.css'; // Import CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 MarketRush. All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer-contact">
          <p>Contact: 9632119392</p>
          <p>Email: <a href="mailto:jayaprasadb718@gmail.com">jayaprasadb718@gmail.com</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
