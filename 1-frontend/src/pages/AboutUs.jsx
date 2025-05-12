import React from "react";

const AboutUs = () => {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.heading}>About <span style={styles.brand}>Matez...</span></h1>
        <p style={styles.paragraph}>
          <strong>Matez...</strong> is your go-to platform for finding the perfect accommodation or roommate.
          Whether you're a student, working professional, or someone relocating to a new city, we make it
          simple to discover trusted PGs, rent rooms, or connect with like-minded roommates.
        </p>

        <h2 style={styles.subheading}>🎯 Our Mission</h2>
        <p style={styles.paragraph}>
          Our mission is to remove the hassle from house hunting by offering a reliable,
          user-friendly, and efficient platform. We bridge the gap between people looking
          for a place to stay and those offering it.
        </p>

        <h2 style={styles.subheading}>💡 Why Choose Us?</h2>
        <ul style={styles.list}>
          <li>🔍 <strong>Smart</strong> location-based search</li>
          <li>💬 <strong>Instant messaging</strong> & seamless connections</li>
          <li>🧠 <strong>Advanced roommate matching algorithm</strong></li>
          <li>📍 <strong>Integrated Google Maps</strong> for accurate location tracking</li>
          <li>🔐 <strong>Verified listings</strong> & secure profiles</li>
        </ul>

        <h2 style={styles.subheading}>🛠 Built With ❤️ Using</h2>
        <ul style={styles.list}>
          <li>⚛️ ReactJS (Frontend)</li>
          <li>🐘 PHP (Backend & Database Handling)</li>
          <li>🌍 Google Maps API (Geocoding, Places, Directions)</li>
        </ul>

        <p style={styles.footer}>
          We’re here to help you find your perfect <strong>Matez...</strong> 👬
        </p>
      </div>
    </div>
  );
};

const styles = {
  page: {
    background: "linear-gradient(to right, #f5f7fa, #c3cfe2)",
    minHeight: "100vh",
    padding: "3rem 1rem",
  },
  container: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    padding: "2rem 3rem",
    heigth:"100vh",
    Width: "100vw",
    margin: "auto",
    fontFamily: "'Segoe UI', sans-serif",
    color: "#333",
  },
  heading: {
    fontSize: "2.8rem",
    marginBottom: "1rem",
    textAlign: "center",
    color: "#3b3b98",
  },
  brand: {
    color: "#ff4d4d",
  },
  subheading: {
    fontSize: "1.8rem",
    marginTop: "2rem",
    marginBottom: "0.8rem",
    color: "#2c3e50",
  },
  paragraph: {
    fontSize: "1.1rem",
    color: "#444",
    marginBottom: "1rem",
  },
  list: {
    fontSize: "1.05rem",
    paddingLeft: "1.2rem",
    color: "#444",
    lineHeight: "1.7",
  },
  footer: {
    marginTop: "3rem",
    fontWeight: "bold",
    fontSize: "1.2rem",
    textAlign: "center",
    color: "#3b3b98",
  },
};

export default AboutUs;
