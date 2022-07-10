import React from "react";
import CallToActionQ from "./CallToActionQ";

import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import digitalNomad from "../images/svgs/undraw_digital_nomad.svg";
export default function CoverPage() {
  return (
    <div>
      <div className="container-fluid pt-4 pb-5">
        <div className="container px-2 pb-4">
          <div className="row justify-content-center align-items-center g-5">
            <div className="col-12 col-md-12 col-lg-7 col-xl-8 text-center text-md-start">
              <Fade bottom>
                <h1 className="display-2 mt-3 text-center text-md-start fw-bold heading--light">
                  {/* Delivering Digital Experience */}
                  Become{" "}
                  <span style={{ color: "var(--highlight-color)" }}>
                    Industry Ready
                  </span>{" "}
                  Full Stack Developer
                </h1>
              </Fade>
              <Fade bottom>
                <p className="fs-5 mt-3 mb-5 text-center text-md-start text--light">
                  6 months intensive job ready training program. Industry
                  defined curriculum that helps you crack your dream job in top
                  companies upto 25 LPA.
                  {/* linear-gradient(277deg, #ef1237, hsl(337deg 87% 44%)) */}
                </p>
                <CallToActionQ
                  btnText="Book Now"
                  btnSubTxt=" and Get 90% Scholarship&nbsp;"
                />
              </Fade>
            </div>
            <div className="col-9 col-md-7 col-lg-5 col-xl-4 text-white">
              <Zoom>
                <img src={digitalNomad} className="img-fluid" />
              </Zoom>
            </div>
          </div>
        </div>

        <div className="container pb-4 px-2">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-11 col-lg-10">
              <div
                className="card mt-4 p-5 py-4 text-center shadow-sm border-0 border--radius-40 text-light"
                style={{ background: "var(--dark-fg-color)" }}
              >
                <div className="row justify-content-center">
                  <div className="col-8 col-sm-5 col-lg-3 col-xl-3">
                    <div className="card-body">
                      <h5 className="card-title fs-5 fw-bold">Next Batch</h5>
                      <p className="card-text fs-5 fw-bold text--highlight">
                        July 15, 2022
                      </p>
                    </div>
                  </div>
                  <div className="col-8 col-sm-5 col-lg-3 col-xl-3">
                    <div className="card-body">
                      <h5 className="card-title fs-5 fw-bold">Duration</h5>
                      <p className="card-text fs-5 fw-bold text--highlight">4 months</p>
                    </div>
                  </div>
                  <div className="col-8 col-sm-5 col-lg-3 col-xl-3">
                    <div className="card-body">
                      <h5 className="card-title fs-5 fw-bold">Mode</h5>
                      <p className="card-text fs-5 fw-bold text--highlight">Online</p>
                    </div>
                  </div>

                  <div className="col-8 col-sm-5 col-lg-3 col-xl-3">
                    <div className="card-body">
                      <h5 className="card-title fs-5 fw-bold">Projects</h5>
                      <p className="card-text fs-5 fw-bold text--highlight">15+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
