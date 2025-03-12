import { useState } from "react";
import "../styles/register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleTermsChange = (e) => setAgreeToTerms(e.target.checked);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { email, password, agreeToTerms });
  };

  return (
    <div className="signup-container">
      <div className="left-section">
        <h1 className="main-heading">Generate Awesome Web Pages</h1>
        <p className="description">
          The most important part of the Startup is the samples. The samples
          form a set of 25 usable pages you can use as is or you can add new
          blocks.
        </p>
        <button className="learn-more-btn">Learn More</button>
      </div>

      <div className="right-section">
        <div className="form-container">
          <h2 className="form-heading">Sign Up Now</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={handleEmailChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                placeholder="Your password"
                value={password}
                onChange={handlePasswordChange}
                required
                className="form-input"
              />
            </div>

            <div className="checkbox-group">
              <input
                type="checkbox"
                id="terms"
                checked={agreeToTerms}
                onChange={handleTermsChange}
                required
              />
              <label htmlFor="terms">I agree to the Terms of Service.</label>
            </div>

            <button type="submit" className="signin-btn">
              Sign In
            </button>

            <div className="login-link">
              <span>Do you have an Account? </span>
              <a href="/login">Sign In</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
