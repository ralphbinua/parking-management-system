import ParkingZone from "../models/parking-information.js";

// CREATE new parking zone
export const createZone = async (req, res) => {
  try {
    const { zone_name, capacity, current_count, zone_type } = req.body;

    if (current_count > capacity) {
      return res.status(400).json({
        message: "current_count cannot exceed capacity"
      });
    }

    const newZone = new ParkingZone({
      zone_name,
      capacity,
      current_count,
      zone_type
    });

    await newZone.save();

    // Return JSON with virtuals
    res.status(201).json({
      message: "Parking zone created successfully",
      zone: newZone.toJSON()
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating parking zone",
      error: error.message
    });
  }
};

// GET all zones
export const getAllZones = async (req, res) => {
  try {
    const zones = await ParkingZone.find().lean({ virtuals: true });
    res.json(zones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET a single zone by ID
export const getZone = async (req, res) => {
  try {
    const zone = await ParkingZone.findById(req.params.zone_id).lean({ virtuals: true });

    if (!zone) {
      return res.status(404).json({ message: "Parking zone not found" });
    }

    res.json(zone);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE parking zone by ID
export const updateZone = async (req, res) => {
  try {
    const { capacity, current_count } = req.body;

    if (capacity !== undefined && current_count !== undefined) {
      if (current_count > capacity) {
        return res.status(400).json({
          message: "current_count cannot exceed capacity"
        });
      }
    }

    // Update & return plain object with virtuals
    const updatedZone = await ParkingZone.findByIdAndUpdate(
      req.params.zone_id,
      req.body,
      { new: true, runValidators: true }
    ).lean({ virtuals: true });

    if (!updatedZone) {
      return res.status(404).json({ message: "Parking zone not found" });
    }

    res.json({
      message: "Parking zone updated successfully",
      zone: updatedZone
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE parking zone by ID
export const deleteZone = async (req, res) => {
  try {
    const deletedZone = await ParkingZone.findByIdAndDelete(req.params.zone_id).lean({ virtuals: true });

    if (!deletedZone) {
      return res.status(404).json({ message: "Parking zone not found" });
    }

    res.json({ message: "Parking zone deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
