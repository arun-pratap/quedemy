import React from "react";
import CardQ from "./CardQ";

import fundamentals from "../images/svgs/fundamentalsQ.svg";
import dsAlgo from "../images/svgs/ds_algoQ.svg";
import buildApps from "../images/svgs/build_appsQ.svg";
import interviewPrep from "../images/svgs/interviewQ.svg";

const whatWillYouLearn = [
  {
    title: "Programming Fundamentals",
    para: "You will learn about basic of programming such as variable, types, conditional statements loop, arrays, strings, and more",
    img: fundamentals,
    imgAlt: "Programming Fundamentals",
  },
  {
    title: "Build Apps from Scratch",
    para: "You will build apps and webpages from scratch using HTML, CSS, Javascript, Node.js, and React.js",
    img: buildApps,
    imgAlt: "Build Apps from Scratch",
  },
  {
    title: "Data Structures and Algorithms",
    para: "You will learn about big-O notation, arrays, linked lists, stacks, queues, searching, sorting, and string manipulation",
    img: dsAlgo,
    imgAlt: "Data Structures and Algorithms",
  },
  {
    title: "Interview Preparation",
    para: "You will work on your portfolio, resume, soft skills and attend mock interviews or tests",
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
        <div className="row g-4">
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
