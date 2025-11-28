import React from 'react'
import './Faculty.css'

const Faculty = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom mb-4">
        <div className="container-fluid">
            <span className="navbar-brand h1 mb-0 ms-3">ParkEra</span>
            <span className="d-flex align-items-center me-3">
                <i className="bi bi-person-circle text-white fs-4"></i>
            </span>
        </div>
    </nav>

    <div className="container-fluid">
        <div className="row g-4">

            <div className="col-md-3">
                <div className="card card-profile shadow-sm p-3">
                    <div className="d-flex flex-column align-items-center text-center">
                        <i className="bi bi-person-circle profile-icon mb-3"></i>
                        <h6 className="mb-0">JUAN DELA CRUZ</h6>
                        <p className="text-muted small">juandelacruz@neu.edu.ph</p>
                    </div>

                    <hr />

                    <h6 className="text-center mb-2">PEAK HOURS</h6>
                    <div className="peak-hours-table">
                        <table className="table table-bordered mb-3">
                            <thead>
                                <tr className="bg-light">
                                    <th scope="col" className="text-center">DAY</th>
                                    <th scope="col" className="text-center">TIME</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>MONDAY</td><td>7:00 AM - 12:00 PM</td></tr>
                                <tr><td>TUESDAY</td><td>8:00 AM - 2:00 PM</td></tr>
                                <tr><td>WEDNESDAY</td><td>10:00 AM - 1:00 PM</td></tr>
                                <tr><td>THURSDAY</td><td>8:00 AM - 2:00 PM</td></tr>
                                <tr><td>FRIDAY</td><td>9:00 AM - 11:00 AM</td></tr>
                                <tr><td>SATURDAY</td><td>9:00 AM - 12:00 PM</td></tr>
                                <tr className="text-center"><td colSpan="2">NO PEAK HOURS</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <button className="btn btn-outline-primary btn-sm w-100 mt-2">
                        <i className="bi bi-box-arrow-right me-2"></i> LOG OUT
                    </button>
                </div>
            </div>

            <div className="col-md-9">
                <div className="row g-4">

                    <div className="col-lg-5">
                        <div className="card area-selector-card p-3 shadow-sm">
                            <div className="logo-placeholder">LOGO</div>

                            <h6 className="text-center text-uppercase mb-3">Select Area</h6>

                            <button className="btn area-selector-btn w-100">MOTORCYCLE</button>
                            <button className="btn area-selector-btn w-100">CAR PARKING 1</button>
                            <button className="btn area-selector-btn w-100">CAR PARKING 2</button>
                            <button className="btn area-selector-btn w-100 active">FACULTY AND STAFF</button>
                            <button className="btn area-selector-btn w-100">PSB PARKING</button>
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="card p-3 shadow-sm">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h6 className="text-uppercase text-muted mb-0">Area</h6>
                                <span className="badge bg-secondary text-white p-2">Faculty and Staff</span>
                            </div>

                            <div className="slot-display bg-white">
                                <div className="slot-number">34</div>
                                <h6 className="text-uppercase text-muted mt-2">Available Slots</h6>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default Faculty