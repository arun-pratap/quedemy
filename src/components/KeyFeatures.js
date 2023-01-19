import React from "react";
import CardQ from "./CardQ";

import dsAlgo from "../images/svgs/ds_algoQ.svg";
const keyBenefits = [
  {
    title: "Coding Session",
    para: "You will attend live coding sessions on selected weekdays and work on resolving problems with the team to impact the learning process.",
    img: dsAlgo,
    imgAlt: "Live Coding Session",
  },
  {
    title: "Doubt Session",
    para: "You will get guidance to solve your doubts live. you will resolve your doubts with passionate developer community on discussion forms.",
    img: dsAlgo,
    imgAlt: "Live Doubt Session",
  },
  {
    title: "Hands-on Learning",
    para: "You will learn by doing because it is more interactive and efficient. You will learn to explore the problems and solve them with fellow learners.",
    img: dsAlgo,
    imgAlt: "Hands-on Learning",
  },
  {
    title: "Capstone Projects",
    para: "You will build industry-relevant projects.You will work on the independent projects. It helps you build your portfolio and stand out from others.",
    img: dsAlgo,
    imgAlt: "Build Portfolio",
  },
  {
    title: "Career Assistance",
    para: "You will work with experienced mentor to improve your profile (Linkedin and Resume). You will improve your interview skills to get job ready.",
    img: dsAlgo,
    imgAlt: "Career Assistance",
  },
  {
    title: "Get Certified",
    para: "You will earn a certification for completing the course as you complete all the assignments & projects. You can share credentials to your LinkedIn Network.",
    img: dsAlgo,
    imgAlt: "Get Cerified",
  },
];
export default function KeyFeatures() {
  return (
    <div className="container-fluid pt-5 pb-4">
      <div className="container px-2 section--container">
        <div className="row justify-content-center">
          <div className="col-10 col-lg-8 col-xl-7">
            <h2 className="display-3 mb-4 pb-3 fw-bold text-center heading--dark">
              Key Features
            </h2>
          </div>
        </div>
        <div className="row g-4 pb-5">
          {keyBenefits.map((key) => (
            <div key={key.title} className="col-12 col-md-6 col-xl-4">
              <CardQ
                title={key.title}
                para={key.para}
                img={key.img}
                alt={key.imgAlt}
                // cardBgColor="var(--dark-fg-color)"
                headingColor="heading--dark"
                txtColor="text--dark"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
