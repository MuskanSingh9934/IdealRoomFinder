import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SelectAction = () => {
 const locationState = useLocation();
 const location = locationState?.state?.location || null;
 const [placeName, setPlaceName] = useState("Loading...");
 const navigate = useNavigate();

 useEffect(() => {
  const fetchPlaceName = async () => {
   if (!location) return;

   try {
    const response = await fetch(
     `https://api.maptiler.com/geocoding/${location.lng},${location.lat}.json?key=yNRzpD3mzBIJHEthbItT`
    );
    const data = await response.json();
    if (data?.features?.length > 0) {
     setPlaceName(data.features[0].place_name || "Location Found");
    } else {
     setPlaceName("Unknown Location");
    }
   } catch (err) {
    console.error("Reverse geocoding failed:", err);
    setPlaceName("Error getting location");
   }
  };

  fetchPlaceName();
 }, [location]);

 const handleNavigate = (path) => {
  if (!location) {
   alert("No location selected!");
   return;
  }
  navigate(path, { state: { location, placeName } });
 };

 return (
  <div style={styles.wrapper}>
   <div style={styles.card}>
    <h2 style={styles.heading}>Selected Location</h2>
    <p style={styles.place}><strong>📍 Place:</strong> {placeName}</p>
    <div style={styles.buttonGroup}>
     <button style={styles.button} onClick={() => handleNavigate("/Roomselec")}>
      🏠 Find Room
     </button>
     <button style={styles.button} onClick={() => handleNavigate("/find-roommate")}>
      👥 Find Roommate
     </button>
     <button style={styles.button} onClick={() => handleNavigate("/list-room")}>
      ➕ List Room
     </button>
    </div>
   </div>
  </div>
 );
};

const styles = {
 wrapper: {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "2rem",
  backgroundColor: "rgba(52, 52, 208, 0.2)",
 },
 card: {
  backgroundColor: "rgba(122, 195, 255, 0.2)",
  borderRadius: "15px",
  padding: "2rem 3rem",
  maxWidth: "500px",
  width: "100%",
  boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
  textAlign: "center",
 },
 heading: {
  marginBottom: "1rem",
  color: "#2a5298",
  fontSize: "1.8rem",
 },
 place: {
  fontSize: "1.2rem",
  color: "#444",
  marginBottom: "1.5rem",
 },
 buttonGroup: {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
 },
 button: {
  backgroundColor: "#2a5298",
  color: "white",
  padding: "0.75rem",
  border: "none",
  borderRadius: "8px",
  fontSize: "1rem",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "background 0.3s",
 },
};

export default SelectAction;
