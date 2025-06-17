import { model, Schema } from "mongoose";

const RoomSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  pricePerMonth: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  images: [String],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  amenities: [String],
  available: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Room = model("Room", RoomSchema);
