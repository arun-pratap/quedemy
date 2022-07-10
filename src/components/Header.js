import React from "react";
import quedemy from "../images/pngs/quedemy-logo.png";
export default function Header() {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="d-inline-flex align-items-center">
              <img src={quedemy} alt="Quedemy Logo" width="38" />
              <small className="text-light fs-2 fw-bold">&nbsp;&nbsp;Quedemy</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
