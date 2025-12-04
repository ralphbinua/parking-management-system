import React, { useEffect, useState } from "react";
import axios from "axios";
import "../dashboard/styles/parking.css";

const MotorParking = () => {
  const [availableSlots, setAvailableSlots] = useState(0);
  const [loading, setLoading] = useState(true);
  const [zoneNames, setZoneNames] = useState([]);

  useEffect(() => {
    const fetchMotorZones = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/parking");
        const zones = response.data;

        // Filter all motorcycle zones
        const motorcycleZones = zones.filter(zone => zone.zone_type === "Motorcycle");

        if (motorcycleZones.length > 0) {
          // Sum available slots
          const totalAvailable = motorcycleZones.reduce(
            (sum, zone) => sum + (zone.available_slots ?? (zone.capacity - zone.current_count)),
            0
          );

          setAvailableSlots(totalAvailable);

          // Save names for display
          setZoneNames(motorcycleZones.map(zone => zone.zone_name));
        } else {
          setAvailableSlots(0);
          setZoneNames(["No motorcycle zones found"]);
        }
      } catch (error) {
        console.error("Error fetching parking data:", error);
        setAvailableSlots(0);
        setZoneNames(["Error fetching data"]);
      } finally {
        setLoading(false);
      }
    };

    fetchMotorZones();
  }, []);

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card p-3 shadow-sm">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="text-uppercase text-muted mb-0">
                {zoneNames.join(", ")}
              </h6>
              <span className="badge bg-secondary text-white p-2">MOTORCYCLE</span>
            </div>

            <div className="slot-display bg-white text-center p-4">
              <div className="slot-number display-1">
                {loading ? "Loading..." : availableSlots}
              </div>
              <h6 className="text-uppercase text-muted mt-2">Available Slots</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotorParking;
