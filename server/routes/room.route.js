import express from "express";
import { auth } from "../middleware/auth.middleware.js";
import {
  createRoom,
  getAllAvailableRooms,
  getRoomById,
} from "../controller/room.controller.js";

const router = express.Router();

router.get("/", getAllAvailableRooms);
router.get("/:id", getRoomById);
router.post("/", auth, createRoom);

export default router;
