import { Outlet, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const DashboardLayout = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    setUser(savedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/"; // redirect to login
  };

  return (
    <>

      <nav className="navbar navbar-dark navbar-custom mb-4">
        <span className="navbar-brand ms-3 h3">ParkEra</span>
        <i className="bi bi-person-circle text-white fs-4 me-3"></i>
      </nav>

      <div className="container-fluid">
        <div className="row g-4">

          <div className="col-md-3">
            <div className="card card-profile shadow-sm p-3">

              <div className="text-center">
                <i className="bi bi-person-circle profile-icon mb-3"></i>
                <h6 className="mb-0">{user?.full_name || "Loading..."}</h6>
              </div>

              <hr />

              <div className="d-grid gap-2 mt-3">
                <Link className="btn area-selector-btn" to="MotorParking">MOTORCYCLE</Link>
                <Link className="btn area-selector-btn" to="CarParkingOne">CAR PARKING 1</Link>
                <Link className="btn area-selector-btn" to="CarParkingTwo">CAR PARKING 2</Link>
                {/*<Link className="btn area-selector-btn" to="Faculty">FACULTY & STAFF</Link>*/}
                <Link className="btn area-selector-btn" to="PSBParking">PSB PARKING</Link>
              </div>

              <hr />

              <div className="d-grid">
                <button className="btn btn-danger" onClick={handleLogout}>
                  Logout
                </button>
              </div>

            </div>
          </div>

          <div className="col-md-9">
            <Outlet />
          </div>

        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
