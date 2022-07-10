import React from "react";
import arun from "../images/profile/arun.png";

const projects = [
  {
    title: "News Aggregator Feed",
    subTxt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel tellus tortor. Quisque eget viverra diam. Aenean id metus id purus convallis porta.",
    tags: ["HTML", "CSS", "JavaScript"],
    img: arun,
    imgAlt: "Google News",
  },
  {
    title: "Food Odering Platform",
    subTxt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel tellus tortor. Quisque eget viverra diam. Aenean id metus id purus convallis porta.",
    tags: ["HTML", "CSS", "JavaScript"],
    img: arun,
    imgAlt: "Google News",
  },
  {
    title: "Movie Booking Platform",
    subTxt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel tellus tortor. Quisque eget viverra diam. Aenean id metus id purus convallis porta.",
    tags: ["HTML", "CSS", "JavaScript"],
    img: arun,
    imgAlt: "Google News",
  },
  {
    title: "E-commerce Platform",
    subTxt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel tellus tortor. Quisque eget viverra diam. Aenean id metus id purus convallis porta.",
    tags: ["HTML", "CSS", "JavaScript"],
    img: arun,
    imgAlt: "Google News",
  },
  {
    title: "Personal Portfolio",
    subTxt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel tellus tortor. Quisque eget viverra diam. Aenean id metus id purus convallis porta.",
    tags: ["HTML", "CSS", "JavaScript"],
    img: arun,
    imgAlt: "Google News",
  },
];

export default function ProjectsYouBuild() {
  return (
    <div className="container-fluid py-5">
      <div className="container py-4 px-2">
        <div className="row justify-content-center">
          <div className="col-10 col-lg-8 col-xl-7">
            <h2 className="display-3 mb-5 pb-3 fw-bold text-center heading--light">
              Projects You Build
            </h2>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          {projects.map((project) => (
            <div key={project.title} className="col-12 col-md-6 col-xl-4">
              <div
                className="card p-4 h-100 border-0 text--light"
                style={{
                  backgroundColor: "#4f15ac",
                  borderRadius: "30px",
                }}
              >
                <div className="card-body p-0">
                  <div className="mb-3 text-left">
                    <img
                      src={project.img}
                      className="mt-1"
                      width="75"
                      style={{ alignSelf: "center", borderRadius: "15px" }}
                    />
                  </div>
                  <h5 className="fs-2 mt-1 mb-2 heading--light">
                    {project.title}
                  </h5>
                  <p className="fs-5 text--light">{project.subTxt}</p>
                </div>
                <div className="d-inline-flex mb-1 pb-2">
                  {project.tags.map((tag) => (
                    <small
                      key={tag}
                      className="px-3 py-1 me-2 shadow-sm fw-bold heading--dark"
                      style={{
                        backgroundColor: "var(--highlight-color)",
                        borderRadius: "10px",
                      }}
                    >
                      {tag}
                    </small>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
