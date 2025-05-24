import { useState } from "react";

const baseURL = "http://localhost:8000";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${baseURL}/api/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        localStorage.setItem("token", data.token);

        return (window.location.href = "/dashboard");
      }
      throw new Error(await response.json().message);
    } catch (error) {
      setError(error.message || "Login failed. Please try again.");
    } finally {
      setEmail("");
      setPassword("");
    }
  };

  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      padding: "20px",
      width: "100vw",
      backgroundColor: "#1e3a8a",
      backgroundImage: "linear-gradient(rgba(0,0,50,0.5), rgba(0,0,100,0.7))",
    },
    formCard: {
      backgroundColor: "white",
      borderRadius: "8px",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
      padding: "32px",
      width: "100%",
      maxWidth: "450px",
    },
    title: {
      fontSize: "28px",
      fontWeight: "bold",
      textAlign: "center",
      color: "#312e81",
      marginBottom: "32px",
    },
    formGroup: {
      marginBottom: "24px",
    },
    input: {
      width: "100%",
      padding: "12px 16px",
      borderRadius: "50px",
      border: "1px solid #d1d5db",
      fontSize: "16px",
      outline: "none",
      boxSizing: "border-box",
    },
    forgotPassword: {
      textAlign: "right",
      marginTop: "8px",
    },
    forgotPasswordLink: {
      color: "#6b7280",
      fontSize: "14px",
      textDecoration: "none",
    },
    submitButton: {
      width: "100%",
      padding: "12px 16px",
      backgroundColor: "#2dd4bf",
      color: "white",
      border: "none",
      borderRadius: "50px",
      fontSize: "16px",
      fontWeight: "500",
      cursor: "pointer",
      transition: "background-color 0.2s",
    },
    footer: {
      marginTop: "32px",
      paddingTop: "24px",
      borderTop: "1px solid #e5e7eb",
      textAlign: "center",
    },
    footerText: {
      color: "#6b7280",
      fontSize: "15px",
    },
    signUpLink: {
      color: "#4f46e5",
      fontWeight: "500",
      textDecoration: "none",
    },
  };

  // Add hover effects
  const buttonHover = (e) => {
    e.target.style.backgroundColor = "#14b8a6";
  };

  const buttonLeave = (e) => {
    e.target.style.backgroundColor = "#2dd4bf";
  };

  return (
    <div style={styles.container}>
      <div style={styles.formCard}>
        <h1 style={styles.title}>Sign In</h1>

        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <input
              type="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
            <div style={styles.forgotPassword}>
              <a href="#" style={styles.forgotPasswordLink}>
                Forgot Password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            style={styles.submitButton}
            onMouseOver={buttonHover}
            onMouseOut={buttonLeave}
          >
            Sign In
          </button>
        </form>
        <span style={{ color: "red" }}>{error}</span>

        <div style={styles.footer}>
          <p style={styles.footerText}>
            Don't have an account?{" "}
            <a href="/register" style={styles.signUpLink}>
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
