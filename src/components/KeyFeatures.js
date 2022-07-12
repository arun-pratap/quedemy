import React from "react";
import CardQ from "./CardQ";

import dsAlgo from "../images/svgs/ds_algoQ.svg";
const keyBenefits = [
  {
    title: "Coding Session",
    para: "You will attend live coding session on every weekend and work on resolving problems with team to make learning process effective.",
    img: dsAlgo,
    imgAlt: "Live Coding Session",
  },
  {
    title: "Doubt Session",
    para: "You will learn about basic of programming such as variable, types, conditional statements loop, arrays, strings, and more",
    img: dsAlgo,
    imgAlt: "Live Doubt Session",
  },
  {
    title: "Hands-on Learning",
    para: "You will learn about basic of programming such as variable, types, conditional statements loop, arrays, strings, and more",
    img: dsAlgo,
    imgAlt: "Hands-on Learning",
  },
  {
    title: "Build Portfoilo",
    para: "You will learn about basic of programming such as variable, types, conditional statements loop, arrays, strings, and more",
    img: dsAlgo,
    imgAlt: "Build Portfolio",
  },
  {
    title: "Career Assistance",
    para: "You will learn about basic of programming such as variable, types, conditional statements loop, arrays, strings, and more",
    img: dsAlgo,
    imgAlt: "Career Assistance",
  },
  {
    title: "Get Certified",
    para: "You will learn about basic of programming such as variable, types, conditional statements loop, arrays, strings, and more",
    img: dsAlgo,
    imgAlt: "Get Cerified",
  },
];
export default function KeyFeatures() {
  return (
    <div className="container-fluid pt-5 pb-4 ">
      <div className="container px-2 section--container">
        <div className="row justify-content-center">
          <div className="col-10 col-lg-8 col-xl-7">
            <h2 className="display-3 mb-4 pb-3 fw-bold text-center heading--light">
              Key Features
            </h2>
          </div>
        </div>
        <div className="row g-4">
          {keyBenefits.map((learn) => (
            <div className="col-12 col-md-6 col-xl-4">
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
