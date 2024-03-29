import React from "react";

import ticket from "../images/projects/pngs/ticket.png";
import portfolio from "../images/projects/pngs/portfolio.png";
import food from "../images/projects/pngs/food.png";
import ecommerce from "../images/projects/pngs/ecommerce.png";

import news from "../images/projects/svgs/news.svg";

const projects = [
  {
    title: "News Aggregator Feed",
    subTxt:
      "You will build a news aggregator like google news that fetch informations/blogs from online resources as soon as it is available digitally.",
    tags: ["HTML", "CSS", "Flexbox", "RestAPI"],
    img: news,
    imgAlt: "Google News Clone",
  },
  {
    title: "Food Odering Platform",
    subTxt:
      "you will build restaurant aggregator like zomato that display the list of nearby restaurant on your mobile screen.",
    tags: ["Redux", "NodeJS", "ExpressJS", "MongoDB"],
    img: food,
    imgAlt: "Zomato Clone",
  },
  {
    title: "Movie Booking Platform",
    subTxt:
      "You will build movie booking web app like BookMyShow that display available movies and show and book tickets online.",
    tags: ["ReactJS", "Redux"],
    img: ticket,
    imgAlt: "BookMyShow Clone",
  },
  {
    title: "E-commerce Platform",
    subTxt:
      "You will build scalable ecommerce web app like amazon featured with product listing,  add to cart, cart checkout and payment gateway.",
    tags: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
    img: ecommerce,
    imgAlt: "Amazon Clone",
  },
  {
    title: "Personal Portfolio",
    subTxt:
      "You build your own portfolio and showcase all your projects and skill that helps you impress the recruiters.",
    tags: ["HTML", "Bootstarp", "ReactJS"],
    img: portfolio,
    imgAlt: "Portfolio",
  },
];

export default function ProjectsYouBuild() {
  return (
    <div className="container-fluid pt-5 pb-5" style={{ backgroundColor: "#4f15ac" }}>
      <div className="container pt-4 pb-5 px-2 section--container">
        <div className="row justify-content-center">
          <div className="col-10 col-lg-8 col-xl-7">
            <h2 className="display-3 mb-4 pb-5 fw-bold text-center heading--light">
              Projects You Build
            </h2>
          </div>
        </div>
        <div className="row g-4 pb-5 justify-content-center">
          {projects.map((project) => (
            <div key={project.title} className="col-12 col-md-6 col-xl-4">
              <div
                className="card p-4 h-100 shadow-lg border-0 card--custom"
                style={{
                  // backgroundColor: "var(--highlight-color-1)",
                  backgroundColor:"#f5f5fa",
                  borderRadius: "30px",
                }}
              >
                <div className="card-body p-0">
                  <div className="mb-3 text-left">
                    <img
                      src={project.img}
                      alt={project.imgAlt}
                      className="mt-1 p-2"
                      width="60"
                      style={{
                        alignSelf: "center",
                        borderRadius: "15px",
                        // backgroundColor: "hsl(263deg 78% 85%)",
                      }}
                    />
                  </div>
                  <h5 className="fs-5 mt-1 mb-2 heading--dark">
                    {project.title}
                  </h5>
                  <p className="fs-6 text--dark">{project.subTxt}</p>
                  <div className="d--inline-flex" style={{ flexWrap: "wrap" }}>
                    {project.tags.map((tag) => (
                      <small
                        key={tag}
                        className="d-inline-block px-3 py-1 me-2 mb-2 shadow-sm fw-bold heading--dark"
                        style={{
                          backgroundColor: "var(--highlight-color-2)",
                          backgroundColor: "#a96fff",
                          borderRadius: "30px",
                        }}
                      >
                        {tag}
                      </small>
                    ))}
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
