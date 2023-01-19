import React from "react";
import quedemy from "../images/svgs/quedemy-text-svg-logo-rect-violet.svg";
export default function Header() {
  return (
    <div className="container-fluid pt-4 pb-3">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="d-flex align-items-center">
              <img src={quedemy} alt="Quedemy Logo" width="100" />
              <small className="text-muted">&nbsp;&nbsp;By Arun Pratap Singh</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
