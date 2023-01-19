import React from "react";
import CallToActionQ from "./CallToActionQ";

import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import digitalNomad from "../images/svgs/undraw_digital_nomad.svg";

const highlights = [
  {
    title: "Online",
    para: "4 months",
  },
  {
    title: "Placement Assistance",
    para: "100%",
  },
  {
    title: "Projects",
    para: "15+",
  },
  {
    title: "Next Batch",
    para: "January 27, 2023",
  },
];

export default function CoverPage() {
  return (
    <div>
      <div className="container-fluid pt-4 pb-5">
        <div className="container px-2 pb-5">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-12 col-md-12 col-lg-7 col-xl-8 text-center text-md-start mb-4">
              <Fade bottom>
                <h1 className="display-2 mt-3 text-center text-md-start fw-bold heading--dark">
                  {/* Delivering Digital Experience */}
                  Become{" "}
                  <span style={{ color:"hsl(143deg 100% 50%)",color:"#a96fff" }}>
                    Industry Ready
                  </span>{" "}
                  Full Stack Developer
                </h1>
              </Fade>
              <Fade bottom>
                <p className="fs-6 mt-3 mb-4 text-center text-md-start text--dark">
                  5-Months Intensive Job Ready Training Program. Industry
                  Defined Curriculum That Helps You Crack Your Dream Job In Top
                  Companies Upto 15 LPA.
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
          <div className="row justify-content-center pb-5">
            <div className="col-12 col-sm-11 col-lg-10">
              <div
                className="card mt-4 p-5 py-4 text-center shadow-sm border-0 border--radius-30 text--dark"
                style={{ background: "#faf7ff" }}
              >
                <div className="row justify-content-center">
                  {highlights.map((highlight) => (
                    <div
                      key={highlight.title}
                      className="col-8 col-sm-5 col-lg-3 col-xl-3"
                    >
                      <div className="card-body">
                        <h5 className="card-title fs-6">
                          {highlight.title}
                        </h5>
                        <p className="card-text fs-6 fw-bold text--highlight">
                          {highlight.para}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
