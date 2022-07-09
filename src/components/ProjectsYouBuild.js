import React from "react";

export default function ProjectsYouBuild() {
  return (
    <div className="container-fluid py-5 border border-secondary border-bottom-1 softbg--gradient-light">
      <div className="container py-4 px-2">
        <div className="row justify-content-center">
          <div className="col-11 col-md-8 col-lg-12">
            <h2 className="display-3 mb-5 pb-3 fw-bold text-center heading--dark">
              Projects You Build
            </h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-11 col-lg-8">
            <div className="card p-4 pb-3 rounded-3 shadow-lg border-0 softbg--gradient-color">
              <div className="card-body">
                <div className="row g-4 justify-content-center">
                  {/* {technologies.map((tech) => (
                    <div className="col-5 col-sm-4 col-md-3">
                      <div
                        className="card p-2 h-100 border-0 text-center"
                        style={{
                          backgroundColor: "#fafbff !important",
                          borderRadius: "30px",
                        }}
                      >
                        <img
                          src={tech.img}
                          className="mt-1"
                          width="55"
                          style={{ alignSelf: "center" }}
                        />
                        <div className="card-body p-0">
                          <p className="fs-6 mb-1 fw-bold text--dark">
                            <small>{tech.subTxt}</small>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
