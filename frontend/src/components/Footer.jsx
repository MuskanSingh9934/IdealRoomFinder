export function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-section">
          <div className="footer-logo">
            <span className="logo-icon">
              <img src="logo.png" alt="nt-v" className="img1"/>
              </span>Matez..
          </div>
          <p>
            Finding your perfect room or roommate made simple and stress-free.
          </p>
          <div className="social-links">
            <a href="#" className="social-icon">
              f
            </a>
            <a href="#" className="social-icon">
              in
            </a>
            <a href="#" className="social-icon">
              X
            </a>
            <a href="#" className="social-icon">
              ig
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>For Roommates</h3>
          <ul className="footer-links">
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

        <div className="footer-section">
          <h3>For Property Owners</h3>
          <ul className="footer-links">
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

        <div className="footer-section">
          <h3>Company</h3>
          <ul className="footer-links">
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

      <div className="footer-bottom">
        <p>&copy; 2025 Matez.. All rights reserved.</p>
      </div>
    </footer>
  );
}
