import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Profile from "./pages/Profile.jsx";
import MapPage from "./components/Map.jsx";
import RoomBooking from "./pages/Room.jsx";
import RoommateFinder from "./pages/Matefinder.jsx";
import ListingRoom from "./pages/Listing.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import SelectAction from "./pages/SelectionAction.jsx";
import Roomselec from "./pages/Roomselec.jsx";
createRoot(document.getElementById("root")).render(
 <StrictMode>
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<App />} />
    <Route path="/login" element={<Login />} />
    <Route path="/Signup" element={<Signup />} />
    <Route path="/Profile" element={<Profile />} />
    <Route path="/map" element={<MapPage />} />
    <Route path="/book-room" element={<RoomBooking />} />
    <Route path="/find-roommate" element={<RoommateFinder />} />
    <Route path="/list-room" element={<ListingRoom />} />
    <Route path="/about" element={<AboutUs />} />
    <Route path="/select" element={<SelectAction />} />
    <Route path="/Roomselec" element={<Roomselec />} />
   
   </Routes>
  </BrowserRouter>
 </StrictMode>
);
