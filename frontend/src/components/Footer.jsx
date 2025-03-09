import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <div class="footer-grid">
        <div class="footer-section">
          <div class="footer-logo">
            <img class="logo-icon" src="/logo.png"></img>
            Ideal Stay
          </div>
          <p>
            Finding your perfect room or roommate made simple and stress-free.
          </p>
          <div class="social-links">
            <a href="#" class="social-icon">
              f
            </a>
            <a href="#" class="social-icon">
              in
            </a>
            <a href="#" class="social-icon">
              X
            </a>
            <a href="#" class="social-icon">
              ig
            </a>
          </div>
        </div>

        <div class="footer-section">
          <h3>For Roommates</h3>
          <ul class="footer-links">
            <li>
              <a href="#">Find Rooms</a>
            </li>
            <li>
              <a href="#">Room Preferences</a>
            </li>
            <li>
              <a href="#">Safety Tips</a>
            </li>
            <li>
              <a href="#">Roommate Agreement</a>
            </li>
          </ul>
        </div>

        <div class="footer-section">
          <h3>For Property Owners</h3>
          <ul class="footer-links">
            <li>
              <a href="#">List Your Property</a>
            </li>
            <li>
              <a href="#">Verification Process</a>
            </li>
            <li>
              <a href="#">Owner Dashboard</a>
            </li>
            <li>
              <a href="#">Success Stories</a>
            </li>
          </ul>
        </div>

        <div class="footer-section">
          <h3>Company</h3>
          <ul class="footer-links">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2025 Ideal Stay. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
