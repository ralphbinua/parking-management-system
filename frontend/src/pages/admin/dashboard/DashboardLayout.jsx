import { Outlet, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const DashboardLayout = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    setUser(savedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <>
      <nav
        className="navbar navbar-dark"
        style={{ backgroundColor: "#3b82f6", padding: "1rem 1.5rem" }}
      >
        <span className="navbar-brand h4 fw-bold text-white">ParkEra Admin</span>
        <i className="bi bi-person-circle text-white fs-4"></i>
      </nav>

      <div className="container-fluid">
        <div className="row g-4">
          <aside className="col-md-3">
            <div
              className="card shadow-sm p-3"
              style={{ minHeight: "80vh", borderRadius: "0.5rem" }}
            >
              <div className="text-center mb-3">
                <i
                  className="bi bi-person-circle"
                  style={{ fontSize: "5rem", color: "#6c757d" }}
                ></i>
                <h6 className="mt-2 mb-0">{user?.full_name || "Loading..."}</h6>
                <small className="text-muted">{user?.email || ""}</small>
              </div>

              <hr />

              <nav className="d-grid gap-2 mt-3">
                <NavLink
                  to="RealTimeSlotMonitoring"
                  className={({ isActive }) =>
                    `btn btn-outline-secondary rounded-3 fw-bold text-start ${
                      isActive ? "active" : ""
                    }`
                  }
                  style={{ textTransform: "uppercase" }}
                >
                  REAL-TIME SLOT MONITORING
                </NavLink>

                <NavLink
                  to="EntryExitCounter"
                  className={({ isActive }) =>
                    `btn btn-outline-secondary rounded-3 fw-bold text-start ${
                      isActive ? "active" : ""
                    }`
                  }
                  style={{ textTransform: "uppercase" }}
                >
                  ENTRY AND EXIT COUNTER
                </NavLink>

                <NavLink
                  to="NotificationHistoryMonitoring"
                  className={({ isActive }) =>
                    `btn btn-outline-secondary rounded-3 fw-bold text-start ${
                      isActive ? "active" : ""
                    }`
                  }
                  style={{ textTransform: "uppercase" }}
                >
                  NOTIFICATION HISTORY AND MONITORING
                </NavLink>
              </nav>

              <hr />

              <div className="d-grid mt-auto">
                <button className="btn btn-danger" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </div>
          </aside>

          <main className="col-md-9">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
