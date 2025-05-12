import React, { useState } from "react";

const ListingRoom = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    rent: "",
    location: ""
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("rent", formData.rent);
    data.append("location", formData.location);

    try {
      const response = await fetch("http://localhost/Room/frontend1/backend/listing.php", {
        method: "POST",
        body: data,
      });

      const result = await response.text(); // PHP returns plain text
      alert(result);
    } catch (error) {
      console.error("Error submitting listing:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📝 List Your Room</h2>
      <p style={styles.subtext}>Post your available room and connect with potential roommates.</p>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="title"
          placeholder="Room Title"
          style={styles.input}
          required
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          placeholder="Room Description"
          style={{ ...styles.input, height: "100px" }}
          required
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="rent"
          placeholder="Rent (₹)"
          style={styles.input}
          required
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          style={styles.input}
          required
          onChange={handleInputChange}
        />

        <button type="submit" style={styles.button}>Submit Listing</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "30px",
    backgroundColor: "#f9f9f9",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    fontFamily: "Segoe UI, sans-serif",
    color: "#333"
  },
  heading: {
    textAlign: "center",
    color: "#1e90ff"
  },
  subtext: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#555"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  input: {
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "1px solid #ccc"
  },
  button: {
    padding: "12px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background 0.3s"
  }
};

export default ListingRoom;
