// components/MapTilerMap.jsx
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapTilerMap = () => {
  return (
    <MapContainer
      center={[28.6139, 77.2090]} // Default: Delhi
      zoom={13}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url={`https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=yNRzpD3mzBIJHEthbItT`}
        attribution='&copy; <a href="https://www.maptiler.com/">MapTiler</a> & OpenStreetMap contributors'
      />
      <Marker position={[28.6139, 77.2090]}>
        <Popup>Default Marker</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapTilerMap;
