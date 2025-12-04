import React from 'react';
import '../dashboard/styles/parking.css';

const Faculty = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          {/* SLOT DISPLAY CARD */}
          <div className="card p-3 shadow-sm">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="text-uppercase text-muted mb-0">Area</h6>
              <span className="badge bg-secondary text-white p-2">Faculty and Staff</span>
            </div>

            <div className="slot-display bg-white text-center p-4">
              <div className="slot-number display-1">34</div>
              <h6 className="text-uppercase text-muted mt-2">Available Slots</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
