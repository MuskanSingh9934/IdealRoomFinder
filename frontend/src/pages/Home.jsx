import React from "react";
import image1 from "../media/image1.jpg";
import image2 from "../media/image2.jpg";
import image3 from "../media/image3.jpg";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="hero-section">
      <div className="information">
        <p id="title">Find Your Perfect Room or Roommate and Listing Room</p>
        <p>
          Helps you connect with compatible roommates and find the perfect
          living.
        </p>
        <button className="btn">Click</button>
      </div>
      <div className="images">
        <img src={image1} alt="image1" />
        <img src={image2} alt="image2" />
        <img src={image3} alt="image3" />
      </div>
    </div>
  );
}
