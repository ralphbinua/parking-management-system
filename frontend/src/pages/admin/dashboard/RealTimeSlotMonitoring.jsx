import { useEffect, useState } from "react";
import axios from "axios";
import "./styles/RealTimeSlotMonitoring.css";

const RealTimeSlotMonitoring = () => {
  const [zones, setZones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchZones = async () => {
    try {
      setLoading(true);

      const res = await axios.get("http://localhost:5001/api/parking");
      // Your backend returns array of zones
      setZones(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load parking data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchZones();
  }, []);

  if (loading) return <div className="rt-wrapper">Loading...</div>;
  if (error) return <div className="rt-wrapper">{error}</div>;

  return (
    <div className="rt-wrapper">
      <div className="rt-card">
        <h5 className="rt-title">REAL-TIME SLOT MONITORING</h5>

        <div className="rt-list">
          {zones.map((zone) => (
            <div className="rt-row" key={zone._id}>
              <button className="rt-label">{zone.zone_name}</button>

              <div className="rt-value">
                {zone.current_count}/{zone.capacity}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RealTimeSlotMonitoring;
