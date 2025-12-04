import { useEffect, useState } from "react";
import axios from "axios";
import "./styles/EntryExitCounter.css";

const EntryExitCounter = () => {
  const [zones, setZones] = useState([]);
  const [selectedZone, setSelectedZone] = useState(null);
  const [count, setCount] = useState(0);

  // Fetch parking zones from backend
  const fetchZones = async () => {
    try {
      const res = await axios.get("http://localhost:5001/api/parking");
      setZones(res.data);

      // Set default selected zone
      if (res.data.length > 0) {
        setSelectedZone(res.data[0]);
        setCount(res.data[0].current_count);
      }
    } catch (error) {
      console.error("Error fetching zones:", error);
    }
  };

  useEffect(() => {
    fetchZones();
  }, []);

  const increment = () => {
    if (selectedZone && count < selectedZone.capacity) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (selectedZone && count > 0) {
      setCount(count - 1);
    }
  };

  // Update backend on DONE
  const handleDone = async () => {
    if (!selectedZone) return;

    try {
      await axios.put(
        `http://localhost:5001/api/parking/${selectedZone._id}`,
        { current_count: count }
      );

      alert(`Updated ${selectedZone.zone_name} to ${count}`);

      // Refresh updated data
      fetchZones();
    } catch (err) {
      console.error(err);
      alert("Failed to update count.");
    }
  };

  return (
    <div className="container-wrapper">
      {/* LEFT: AREA SELECTOR */}
      <div className="area-selector">
        <h5 className="selector-title">SELECT AREA</h5>

        <div className="area-buttons">
          {zones.map((zone) => (
            <button
              key={zone._id}
              className={`area-btn ${
                selectedZone && selectedZone._id === zone._id ? "active" : ""
              }`}
              onClick={() => {
                setSelectedZone(zone);
                setCount(zone.current_count);
              }}
            >
              {zone.zone_name}
            </button>
          ))}
        </div>
      </div>

      {/* RIGHT: COUNTER */}
      <div className="counter-box">
        <h6 className="area-label">AREA</h6>

        <div className="area-name">
          {selectedZone ? selectedZone.zone_name : "Loading..."}
        </div>

        <div className="count-current">{count}</div>

        <hr className="divider" />

        <div className="count-capacity">
          {selectedZone ? selectedZone.capacity : 0}
        </div>

        <div className="counter-controls">
          <button
            className="circle-btn"
            onClick={increment}
            disabled={!selectedZone || count >= selectedZone.capacity}
          >
            +
          </button>

          <button
            className="circle-btn"
            onClick={decrement}
            disabled={!selectedZone || count <= 0}
          >
            –
          </button>
        </div>

        <button className="done-btn" onClick={handleDone}>
          DONE
        </button>
      </div>
    </div>
  );
};

export default EntryExitCounter;
