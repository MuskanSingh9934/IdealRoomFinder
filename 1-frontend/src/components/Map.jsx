import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fixing marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const LocationSelect = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [search, setSearch] = useState("");
  const [mapCenter, setMapCenter] = useState([22.9734, 78.6569]); // Center of India
  const mapRef = useRef(null);
  const navigate = useNavigate();

  // Allow click on map to set marker
  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        setSelectedLocation(e.latlng);
      },
    });

    return selectedLocation ? (
      <Marker position={[selectedLocation.lat, selectedLocation.lng]} />
    ) : null;
  };

  // Handle search + move map
  const handleSearch = async () => {
    if (!search.trim()) return;

    const query = encodeURIComponent(search);
    const response = await fetch(
      `https://api.maptiler.com/geocoding/${query}.json?key=yNRzpD3mzBIJHEthbItT`
    );
    const data = await response.json();

    if (data.features && data.features.length > 0) {
      const [lng, lat] = data.features[0].center;
      setMapCenter([lat, lng]);
      setSelectedLocation({ lat, lng });

      if (mapRef.current) {
        mapRef.current.setView([lat, lng], 13); 
      }
    } else {
      alert("Location not found.");
    }
  };

  return (
    <div style={styles.wrapper}>
      <h1>Search and Select Location</h1>

      <div style={styles.top}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search location..."
          style={styles.input}
        />
        <button onClick={handleSearch} style={styles.button}>
          Search
        </button>
      </div>

      <div style={styles.mapContainer}>
        <MapContainer
          center={mapCenter}
          zoom={4}
          style={styles.map}
          whenCreated={(mapInstance) => {
            mapRef.current = mapInstance;
          }}
        >
          <TileLayer
            url="https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=yNRzpD3mzBIJHEthbItT"
            attribution='&copy; <a href="https://www.maptiler.com/">MapTiler</a> & OpenStreetMap contributors'
          />
          <LocationMarker />
        </MapContainer>
      </div>

      <div style={styles.bottom}>
        <button
          onClick={() =>
            selectedLocation
              ? navigate("/select", { state: { location: selectedLocation } })
              : alert("Please select a location.")
          }
          style={styles.button}
        >
          Confirm Location
        </button>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    backgroundColor: "#f2f2f2",
  },
  top: {
    textAlign: "center",
  },
  input: {
    padding: "10px",
    width: "60vw",
    maxWidth: "400px",
    marginRight: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  mapContainer: {
    width: "80vw",
    height: "60vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
  },
  bottom: {
    textAlign: "center",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default LocationSelect;
