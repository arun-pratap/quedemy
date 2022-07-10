import React from "react";
import arun from "../images/profile/arun.png"
import rahul from "../images/profile/rahul.png"

export default function MeetInstructors() {
  return (
    <div
      className="container-fluid mt-4 pb-5 pt-4 softbg--gradient-light border--radius-80 px-2"
      style={{ maxWidth:"1180px" }}
    >
      <div className="container px-2 py-5">
        <div className="row g-4 justify-content-center">
          <div className="col-10 col-lg-8 col-xl-7">
            <h2 className="display-3 mb-3 pb-3 fw-bold text-center heading--dark">
              Meet Your Instructors
            </h2>
          </div>
        </div>
        <div className="row g-3 justify-content-center">
          <div className="col-12 col-md-7 col-lg-5 col-xl-4">
            <div className="card p-3 pb-2 rounded-3">
              <div className="d-flex align-items-center">
                <div>
                  <img
                    src={arun}
                    className="rounded-circle me-3 mb-1 border border-2"
                    alt=".."
                    width="75px"
                  />
                </div>
                <div>
                  <h5 className="fs-4 heading--dark mb-1">Arun Pratap Singh</h5>
                  <p
                    className="fs-6 text-secondary mb-1"
                    style={{ fontWeight: "500" }}
                  >
                    Founder, AppQue
                  </p>
                  {/* <a href="">
                  <i class="bi bi-linkedin"></i>
                </a> */}
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-5 col-xl-4">
            <div className="card p-3 pb-2 rounded-3">
              <div className="d-flex align-items-center">
                <div>
                  <img
                    src={rahul}
                    className="rounded-circle me-3 mb-1 border border-2"
                    alt=".."
                    width="75px"
                  />
                </div>
                <div>
                  <h5 className="fs-4 heading--dark mb-1">Rahul Kumar</h5>
                  <p
                    className="fs-6 text-secondary mb-1"
                    style={{ fontWeight: "500" }}
                  >
                    QA Engineer, Informatica
                  </p>
                  {/* <a href="">
                  <i class="bi bi-linkedin"></i>
                </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
