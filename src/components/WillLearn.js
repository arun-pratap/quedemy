import React from "react";
import CardQ from "./CardQ";

import fundamentals from "../images/svgs/fundamentalsQ.svg";
import dsAlgo from "../images/svgs/ds_algoQ.svg";
import buildApps from "../images/svgs/build_appsQ.svg";
import interviewPrep from "../images/svgs/interviewQ.svg";

const whatWillYouLearn = [
  {
    title: "Programming Fundamentals",
    para: "You will get strong understanding in fundamentals of programming such as variable, types, conditional statements, loop, arrays, strings, and more.",
    img: fundamentals,
    imgAlt: "Programming Fundamentals",
  },
  {
    title: "Data Structures and Algorithms",
    para: "You will learn about Big-O Notation, Linked Lists, Stacks, Queues, Searching, Sorting, and String Manipulation and crack interviews in top companies.",
    img: dsAlgo,
    imgAlt: "Data Structures and Algorithms",
  },
  {
    title: "Build Apps from Scratch",
    para: "You will build modern, responive and scalable web apps from scratch built with HTML, CSS, Javascript, NodeJs & ReactJs and deploy your apps to production.",
    img: buildApps,
    imgAlt: "Build Apps from Scratch",
  },
  {
    title: "Interview Preparation",
    para: "You will improve your job-ready portfolio with industry graded projects and attend tests & mock interviews to improve the real interview experience.",
    img: interviewPrep,
    imgAlt: "Interview preparation",
  },
];
export default function WillLearn() {
  return (
    <div className="container-fluid pb-5">
      <div className="container pt-4 px-2 section--container">
        <div className="row justify-content-center">
          <div className="col-10 col-lg-8 col-xl-7">
            <h2 className="display-3 mb-4 pb-3 fw-bold text-center heading--light">
              What Will You Learn
            </h2>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          {whatWillYouLearn.map((learn) => (
            <div className="col-12 col-lg-6">
              <CardQ
                title={learn.title}
                para={learn.para}
                img={learn.img}
                alt={learn.imgAlt}
                cardBgColor="var(--dark-fg-color)"
                headingColor="heading--light"
                txtColor="text--light"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
