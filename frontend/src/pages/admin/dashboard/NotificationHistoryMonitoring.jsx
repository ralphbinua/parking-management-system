import { useEffect, useState } from "react";
import axios from "axios";
import "./styles/NotificationHistoryMonitoring.css";

const NotificationHistoryMonitoring = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchNotifications = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:5001/api/notifications");
      setRecords(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load notifications");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  if (loading) return <div className="nh-wrapper">Loading...</div>;
  if (error) return <div className="nh-wrapper">{error}</div>;

  return (
    <div className="nh-container">
      <table className="nh-table">
        <thead>
          <tr>
            <th>DATE</th>
            <th>AREA</th>
            <th>STATUS</th>
            <th>TIME</th>
          </tr>
        </thead>

        <tbody>
          {records.map((item) => (
            <tr key={item._id}>
              <td>{item.date}</td>
              <td>{item.area}</td>
              <td>{item.status}</td>
              <td>{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NotificationHistoryMonitoring;
