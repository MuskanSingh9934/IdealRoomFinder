import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const LocationBasedData = () => {
 const locationState = useLocation();
 const placeName = locationState?.state?.placeName || "Unknown Location";
 const navigate = useNavigate();

 const data = [
  {
   id: 1,
   title: "Rooms in this Location",
   description: "Explore top-rated Hotels around your selected area.",
   image: "first.avif",
  },
  {
   id: 2,
   title: "Nearby Beaches",
   description: "Find popular hotels in your selected area.",
   image: "second.jpg",
  },
  {
   id: 3,
   title: "Hostels with Amenities",
   description: "Get access to verified hostels near your chosen location.",
   image: "third.avif",
  },
 ];

 const handleBook = (hotel) => {
  navigate("/book-room", {
   state: {
    hotel,
    location: placeName,
   },
  });
 };

 return (
  <div style={styles.wrapper}>
   <h2 style={styles.heading}>Details for 📍 <span style={{ color: "#2a5298" }}>{placeName}</span></h2>

   <div style={styles.cardContainer}>
    {data.map((item) => (
     <div key={item.id} style={styles.card}>
      <img src={item.image} alt={item.title} style={styles.image} />
      <h3 style={styles.cardTitle}>{item.title}</h3>
      <p style={styles.cardText}>{item.description}</p>
      <p style={styles.locationText}><strong>Location:</strong> {placeName}</p>
      <button style={styles.bookButton} onClick={() => handleBook(item)}>Book Now</button>
     </div>
    ))}
   </div>
  </div>
 );
};

const styles = {
wrapper: {
 padding: "2rem",
 minHeight: "100vh",
 backgroundColor: "#eef6fb",
},
heading: {
 fontSize: "1.8rem",
 marginBottom: "2rem",
 textAlign: "center",
},
cardContainer: {
 display: "flex",
 gap: "2rem",
 flexWrap: "wrap",
 justifyContent: "center",
},
card: {
 backgroundColor: "#fff",
 borderRadius: "10px",
 padding: "1rem",
 width: "300px",
 boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
 textAlign: "center",
 transition: "transform 0.2s",
},
image: {
 width: "100%",
 height: "180px",
 objectFit: "cover",
 borderRadius: "10px",
 marginBottom: "1rem",
},
cardTitle: {
 fontSize: "1.2rem",
 marginBottom: "0.5rem",
 color: "#2a5298",
},
cardText: {
 fontSize: "1rem",
 marginBottom: "1rem",
 color: "#555",
},
locationText: {
 fontSize: "0.9rem",
 color: "#333",
},
bookButton: {
 backgroundColor: "#2a5298",
 color: "white",
 padding: "0.6rem 1.2rem",
 border: "none",
 borderRadius: "8px",
 cursor: "pointer",
 fontWeight: "bold",
 transition: "0.3s",
},
};

export default LocationBasedData;
