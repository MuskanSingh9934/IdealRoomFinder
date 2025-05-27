import { useEffect, useState } from "react";
import "../styles/dashboard.css";
import { checkUserToken } from "../utils/helper";

export default function Dashboard() {
  checkUserToken();

  const [newRoom, setNewRoom] = useState<{
    title: string;
    description: string;
    pricePerMonth: number;
    location: string;
    amenities: string[];
    images: string[];
  }>({
    title: "",
    description: "",
    pricePerMonth: 0,
    location: "",
    amenities: [],
    images: [],
  });
  const [rooms, setRooms] = useState([
    {
      _id: "6834c6e3561f7bcf7c7b359d",
      title: "Luxury 2BHK Apartment in Downtown",
      description:
        "Spacious and modern apartment with great city views and easy access to public transport.",
      pricePerMonth: 1800,
      location: "Downtown, San Francisco, CA",
      images: [
        "https://example.com/images/apartment1.jpg",
        "https://example.com/images/apartment2.jpg",
        "https://example.com/images/apartment3.jpg",
      ],
      owner: {
        _id: "6832228bde97c720948d27cc",
      },
      amenities: ["Wi-Fi", "Gym", "Swimming Pool", "24/7 Security", "Parking"],
      available: true,
      createdAt: "2025-05-26T19:54:11.237Z",
      __v: 0,
    },
  ]);
  async function fetchRooms() {
    const response = await fetch("http://localhost:8000/api/room/");
    const data = await response.json();
    setRooms(data);
    console.log(data);
  }
  useEffect(() => {
    fetchRooms();
  }, [rooms, newRoom]);

  const handleCreateRoom = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("token"); // Replace with your actual token storage

    try {
      const response = await fetch("http://localhost:8000/api/room/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // 🔐 Add token here
        },
        body: JSON.stringify(newRoom), // your newRoom object
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Server error:", errorData);
        throw new Error("Failed to create room");
      }

      const result = await response.json();
      console.log("Room created successfully:", result);

      // Reset form if needed
      setNewRoom({
        title: "",
        description: "",
        pricePerMonth: 0,
        location: "",
        amenities: [],
        images: [],
      });
    } catch (error) {
      alert("error while creating");
      console.error("Error creating room:", error);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-grid">
        <div className="section-card">
          <h2 className="section-title">Available Rooms</h2>
          <div>
            {rooms.map((item) => {
              return (
                <div key={item._id}>
                  <h3>{item.title}</h3>
                  <p>{item.pricePerMonth}</p>
                  <p>{item.location}</p>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="section-card">
          <h2 className="section-title green">Post a New Room</h2>
          <div className="form-group">
            <label className="form-label">Room Title</label>
            <input
              className="form-input"
              value={newRoom.title}
              name="title"
              onChange={(e) =>
                setNewRoom((prev) => ({ ...prev, title: e.target.value }))
              }
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Room Description</label>
            <input
              className="form-input"
              value={newRoom.description}
              name="description"
              onChange={(e) =>
                setNewRoom((prev) => ({ ...prev, description: e.target.value }))
              }
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Room Price Per Month</label>
            <input
              className="form-input"
              value={newRoom.pricePerMonth}
              name="price"
              onChange={(e) =>
                setNewRoom((prev) => ({
                  ...prev,
                  pricePerMonth: Number(e.target.value),
                }))
              }
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Room Location</label>
            <input
              className="form-input"
              value={newRoom.location}
              name="location"
              onChange={(e) =>
                setNewRoom((prev) => ({
                  ...prev,
                  location: e.target.value,
                }))
              }
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Room Images (optional)</label>
            <input
              className="form-input"
              value={newRoom.images}
              name="image"
              onChange={(e) =>
                setNewRoom((prev) => ({
                  ...prev,
                  images: [...prev.images, e.target.value],
                }))
              }
            />
          </div>
          <div className="form-group">
            <label className="form-label">Room Amenties (optional)</label>
            <input
              className="form-input"
              value={newRoom.images}
              name="image"
              onChange={(e) =>
                setNewRoom((prev) => ({
                  ...prev,
                  images: [...prev.images, e.target.value],
                }))
              }
            />
          </div>

          <button className="submit-button" onClick={handleCreateRoom}>
            Post Room
          </button>
        </div>
      </div>
    </div>
  );
}
