import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const RoommateFinder = () => {
  const locationState = useLocation();
  const coords = locationState?.state?.location || null;

  const [placeName, setPlaceName] = useState("Loading...");
  const [preference, setPreference] = useState("");
  const [loading, setLoading] = useState(false);
  const [matchStatus, setMatchStatus] = useState(null);
  const [mate, setMate] = useState(null); // ✅ Fix added

  const dummyUserId = 123;
  const dummyPgId = 101;

  useEffect(() => {
    const fetchPlaceName = async () => {
      if (!coords) {
        setPlaceName("No location selected");
        return;
      }

      try {
        const response = await fetch(
          `https://api.maptiler.com/geocoding/${coords.lng},${coords.lat}.json?key=yNRzpD3mzBIJHEthbItT`
        );
        const data = await response.json();
        if (data?.features?.length > 0) {
          setPlaceName(data.features[0].place_name || "Location Found");
        } else {
          setPlaceName("Unknown Location");
        }
      } catch (err) {
        console.error("Error fetching place name:", err);
        setPlaceName("Error getting location");
      }
    };

    fetchPlaceName();
  }, [coords]);

  const handleMatchSubmit = async (e) => {
    e.preventDefault();
    if (!preference) {
      alert("Please select a lifestyle preference.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost/Room/frontend1/backend/mate.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          user_id: dummyUserId,
          pg_id: dummyPgId,
          preference: preference,
          location: placeName,
        }),
      });

      const result = await response.json();
      setMatchStatus(result.status);

      if (result.status === "matched") {
        setMate(result.mate);
        alert("🎉 You have a match! Contact details are shared.");
      } else if (result.status === "pending") {
        alert("⏳ Waiting for a match...,stored in DB✅");
      } else {
        alert("❌ No match found.");
      }
    } catch (err) {
      console.error("Match error:", err);
      alert("Server error!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🧍‍♂️ Find a Roommate</h2>
      <p style={styles.subtext}>
        Discover roommates who share your lifestyle and vibe. We match you based on preferences and location.
      </p>

      <div style={styles.section}>
        <h3>📍 Selected Location:</h3>
        <div style={styles.locationBox}>
          <p style={styles.locationText}>{placeName}</p>
        </div>
      </div>

      <div style={styles.section}>
        <h3>🏠 Room Preview</h3>
        <img
          src="https://uniliv.in/wp-content/uploads/2024/06/20240509-DSC05952-1-scaled.jpg"
          alt="Room"
          style={styles.roomImage}
        />
      </div>

      {matchStatus === "matched" && mate && (
        <div style={styles.section}>
          <h3>👤 Your Matched Roommate</h3>
          <div style={styles.roommateCard}>
            <img
              src={mate.photo || "https://via.placeholder.com/70"}
              alt="Roommate"
              style={styles.profileImg}
            />
            <div>
              <p><strong>Name:</strong> {mate.name}</p>
              <p><strong>Contact:</strong> <a href={`tel:${mate.contact}`}>{mate.contact}</a></p>
              <p><strong>Nature:</strong> {mate.nature}</p>
              <p><strong>Occupation:</strong> {mate.occupation}</p>
              <p><strong>Age:</strong> {mate.age}</p>
              <p><strong>Hobbies:</strong> {mate.hobbies}</p>
            </div>
          </div>
        </div>
      )}

      <div style={styles.section}>
        <form onSubmit={handleMatchSubmit} style={styles.form}>
          <input type="text" disabled value={placeName} placeholder="Preferred location" />
          <select value={preference} onChange={(e) => setPreference(e.target.value)}>
            <option value="">Lifestyle preference</option>
            <option value="quiet">Quiet</option>
            <option value="social">Social</option>
            <option value="calm">Calm and Friendly</option>
          </select>
          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? "Finding..." : "🔍 Find Match"}
          </button>
          {matchStatus && (
            <div style={{ marginTop: "1rem", fontWeight: "bold" }}>
              Status: <span style={{ color: matchStatus === "matched" ? "green" : "#d8af27" }}>{matchStatus}</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    width: "80vw",
    maxWidth: "1000px",
    margin: "auto",
    backgroundColor: "#f7fafd",
    borderRadius: "12px",
    fontFamily: "Segoe UI, sans-serif",
    color: "#333",
  },
  heading: {
    textAlign: "center",
    fontSize: "2.5rem",
    marginBottom: "0.5rem",
    color: "#0077cc",
  },
  subtext: {
    textAlign: "center",
    marginBottom: "2rem",
    color: "#666",
    fontSize: "1.1rem",
  },
  section: {
    marginBottom: "2rem",
  },
  locationBox: {
    backgroundColor: "#ffffff",
    padding: "12px 20px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
    display: "inline-block",
    marginTop: "8px",
  },
  locationText: {
    fontSize: "1.2rem",
    fontWeight: 600,
    color: "#0077cc",
  },
  roomImage: {
    width: "100%",
    height: "200px",
    borderRadius: "12px",
    objectFit: "cover",
    marginTop: "12px",
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.05)",
  },
  roommateCard: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    width: "100%",
    backgroundColor: "#fff",
    padding: "1.5rem",
    borderRadius: "12px",
    boxShadow: "0 6px 16px rgba(0, 0, 0, 0.06)",
  },
  profileImg: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "3px solid #0077cc",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    backgroundColor: "#fff",
    padding: "1.5rem",
    borderRadius: "10px",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.05)",
  },
  button: {
    padding: "12px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default RoommateFinder;
