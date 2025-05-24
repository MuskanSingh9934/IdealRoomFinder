import { Room } from "../model/room.model.js";

// Create Room
export const createRoom = async (req, res) => {
  try {
    const { title, description, pricePerMonth, location, amenities, images } =
      req.body;
    const ownerId = req.userId; // from auth middleware

    const newRoom = await Room.create({
      title,
      description,
      pricePerMonth,
      location,
      amenities,
      images,
      owner: ownerId,
    });

    res.status(201).json(newRoom);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All Available Rooms
export const getAllAvailableRooms = async (req, res) => {
  try {
    const rooms = await Room.find({ available: true }).populate(
      "owner",
      "name email"
    );
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Room by ID
export const getRoomById = async (req, res) => {
  try {
    const { id } = req.params;
    const room = await Room.findById(id).populate("owner", "name email");

    if (!room) return res.status(404).json({ message: "Room not found" });

    res.status(200).json(room);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
