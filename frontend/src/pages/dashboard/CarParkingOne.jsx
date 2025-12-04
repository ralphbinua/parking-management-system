import React, { useEffect, useState } from "react";
import axios from "axios";
import "../dashboard/styles/parking.css";

const CarParkingOne = () => {
  const [availableSlots, setAvailableSlots] = useState(0);
  const [zoneName, setZoneName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCarZone1 = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/parking");
        const zones = response.data;

        // Find EXACT zone (CHANGE the name to match your DB!)
        const zone = zones.find(
          (z) => z.zone_type === "Car" && z.zone_name === "Car Parking 1"
        );

        if (zone) {
          setAvailableSlots(
            zone.available_slots ?? (zone.capacity - zone.current_count)
          );
          setZoneName(zone.zone_name);
        } else {
          setAvailableSlots(0);
          setZoneName("Car Parking 1 not found");
        }
      } catch (error) {
        console.error("Error fetching parking data:", error);
        setAvailableSlots(0);
        setZoneName("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchCarZone1();
  }, []);

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card p-3 shadow-sm">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="text-uppercase text-muted mb-0">
                {zoneName}
              </h6>
              <span className="badge bg-secondary text-white p-2">CAR PARKING 1</span>
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

export default CarParkingOne;
