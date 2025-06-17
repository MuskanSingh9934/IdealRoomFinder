import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const center = {
  lat: 28.6139, 
  lng: 77.2090,
};

const containerStyle = {
  width: "100%",
  height: "400px",
};

const LocationMap = ({ onLocationSelect }) => {
  const [marker, setMarker] = useState(null);

  const LocationClickHandler = () => {
    useMapEvents({
      click(e) {
        const location = {
          lat: e.latlng.lat,
          lng: e.latlng.lng,
        };
        setMarker(location);
        onLocationSelect(location);
      },
    });
    return null;
  };

  return (
    <MapContainer center={center} zoom={12} style={containerStyle}>
      <TileLayer
        url="https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=yNRzpD3mzBIJHEthbItT"
        attribution='&copy; <a href="https://www.maptiler.com/">MapTiler</a> & OpenStreetMap contributors'
      />
      <LocationClickHandler />
      {marker && <Marker position={marker} />}
    </MapContainer>
  );
};

export default LocationMap;
