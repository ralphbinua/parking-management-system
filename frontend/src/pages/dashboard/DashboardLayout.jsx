import { Outlet, Link } from "react-router-dom";
import "../dashboard/styles/DashboardLayout.css";

const DashboardLayout = () => {
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-dark navbar-custom mb-4">
        <span className="navbar-brand ms-3 h3">ParkEra</span>
        <i className="bi bi-person-circle text-white fs-4 me-3"></i>
      </nav>

      <div className="container-fluid">
        <div className="row g-4">

          {/* LEFT SIDEBAR */}
          <div className="col-md-3">
            <div className="card card-profile shadow-sm p-3">

              <div className="text-center">
                <i className="bi bi-person-circle profile-icon mb-3"></i>
                <h6 className="mb-0">JUAN DELA CRUZ</h6>
                <p className="text-muted small">juandelacruz@neu.edu.ph</p>
              </div>

              <hr />

              {/* AREA BUTTONS */}
              <div className="d-grid gap-2 mt-3">
                <Link className="btn area-selector-btn" to="motorcycle">MOTORCYCLE</Link>
                <Link className="btn area-selector-btn" to="car1">CAR PARKING 1</Link>
                <Link className="btn area-selector-btn" to="car2">CAR PARKING 2</Link>
                <Link className="btn area-selector-btn" to="faculty">FACULTY & STAFF</Link>
                <Link className="btn area-selector-btn" to="psb">PSB PARKING</Link>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="col-md-9">
            <Outlet /> {/* Nested Route Content Here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
