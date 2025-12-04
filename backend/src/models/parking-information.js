import mongoose from "mongoose";

const parkingInformationSchema = new mongoose.Schema({
  zone_name: { type: String, required: true, maxlength: 100 },
  capacity: { type: Number, required: true, min: 0 },
  current_count: { type: Number, required: true, min: 0 },
  zone_type: { type: String, required: true, maxlength: 50, enum: ["Car", "Motorcycle"] },
  created_at: { type: Date, default: Date.now }
});

// Virtual for available slots
parkingInformationSchema.virtual("available_slots").get(function () {
  return this.capacity - this.current_count;
});

// ✅ Include virtuals in JSON
parkingInformationSchema.set("toJSON", { virtuals: true });
parkingInformationSchema.set("toObject", { virtuals: true });

const ParkingZone = mongoose.model("parkingInformation", parkingInformationSchema);
export default ParkingZone;
