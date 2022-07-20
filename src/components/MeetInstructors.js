import React from "react";
import arun from "../images/profile/arun.png";
import rahul from "../images/profile/rahul.png";

const instructors = [
  {
    img: arun,
    imgAlt: "Arun Profie",
    Name: "Arun Pratap Singh",
    title: "Founder, AppQue",
    tags: ["GLBian", "GBUian"],
  },
  {
    img: rahul,
    imgAlt: "Rahul Profie",
    Name: "Rahul Kumar",
    title: "QA Engineer, Informatica",
    tags: ["ex-PayTm"],
  },
];

export default function MeetInstructors() {
  return (
    <div className="container-fluid pb-4 pt-2 bg--dark">
      <div className="container px-4 py-5 mt-4 softbg--gradient-light border--radius-80 section--container">
        <div className="row g-4 justify-content-center ">
          <div className="col-10 col-lg-8 col-xl-7">
            <h2 className="display-3 mb-4 pb-3 fw-bold text-center heading--dark">
              Meet Your Instructors
            </h2>
          </div>
        </div>
        <div className="row g-4 justify-content-center pb-4">
          {instructors.map((instructor) => (
            <div
              key={instructor.Name}
              className="col-12 col-md-6 col-lg-5 col-xl-4"
            >
              <div className="card p-3 pb-2 border--radius-30">
                <div className="d-flex align-items-center">
                  <div>
                    <img
                      src={instructor.img}
                      className="rounded-circle me-3 mb-1 border border-2"
                      alt={instructor.imgAlt}
                      width="75px"
                    />
                  </div>
                  <div>
                    <h5 className="fs-5 heading--dark mb-1">
                      {instructor.Name}
                    </h5>
                    <p
                      className="fs-6 text-secondary mb-1"
                      style={{ fontWeight: "500" }}
                    >
                      {instructor.title}
                    </p>
                    <div className="d-inline-flex my-1 pb-2">
                      {instructor.tags.map((tag) => (
                        <small
                          key={tag}
                          className="px-3 py-1 me-2 shadow-sm fw-bold heading--light"
                          style={{
                            backgroundColor: "var(--highlight-color-2)",
                            borderRadius: "10px",
                          }}
                        >
                          {tag}
                        </small>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
