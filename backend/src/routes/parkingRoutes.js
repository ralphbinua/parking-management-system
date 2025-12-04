import express from "express";

import {createZone,getAllZones,getZone,updateZone,deleteZone} from "../controllers/parkingController.js";

const router = express.Router();

// Create new parking zone
router.post("/", createZone);

// Get all parking zones
router.get("/", getAllZones);

// Get a specific zone by zone_id
router.get("/:zone_id", getZone);

// Update a specific zone
router.put("/:zone_id", updateZone);

// Delete a specific zone
router.delete("/:zone_id", deleteZone);

export default router;
