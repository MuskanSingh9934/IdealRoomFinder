import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const BookHotel = () => {
  const location = useLocation();
  const hotel = location?.state?.hotel;
  const placeName = location?.state?.location;

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost/Room/frontend1/backend/Room.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          hotelName: hotel.title,
          location: placeName,
        }),
      });

      const result = await response.json(); 
      if (result.status === "success") {
        alert(result.message); 
      } else {
        alert(result.message || "Booking failed!");
      }
    } catch (err) {
      console.error(err);
      alert("Booking failed! Server not reachable.");
    }
  };

  return (
    <div style={styles.wrapper}>
      <h2 style={styles.heading}>Booking: {hotel?.title}</h2>
      <p style={styles.subHeading}>📍 Location: {placeName}</p>
      <img src={hotel?.image} alt={hotel?.title} style={styles.image} />

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Confirm Booking</button>
      </form>
    </div>
  );
};

const styles = {
  wrapper: {
    padding: "2rem",
    maxWidth: "500px",
    margin: "0 auto",
    textAlign: "center",
  },
  heading: {
    fontSize: "1.8rem",
    marginBottom: "0.5rem",
  },
  subHeading: {
    marginBottom: "1rem",
    fontSize: "1.1rem",
    color: "#666",
  },
  image: {
    width: "100%",
    borderRadius: "10px",
    marginBottom: "1.5rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  input: {
    padding: "0.75rem",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
  button: {
    padding: "0.8rem",
    backgroundColor: "#2a5298",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "1rem",
    cursor: "pointer",
  },
};

export default BookHotel;
