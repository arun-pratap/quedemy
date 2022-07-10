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
    <div
      className="container-fluid mt-4 pb-5 pt-4 softbg--gradient-light border--radius-80 px-2"
      style={{ maxWidth: "1180px" }}
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
          {instructors.map((instructor) => (
            <div
              key={instructor.Name}
              className="col-12 col-md-6 col-lg-5 col-xl-4"
            >
              <div className="card p-3 pb-2 border--radius-40">
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
                    <h5 className="fs-4 heading--dark mb-1">
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
                          className="px-2 py-1 me-3 shadow-sm fw-bold heading--dark border--radius-40"
                          style={{ backgroundColor: "var(--highlight-color)" }}
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
