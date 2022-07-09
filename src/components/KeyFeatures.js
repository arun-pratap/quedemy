import React from "react";
import CardQ from "./CardQ";

import dsAlgo from "../images/svgs/ds_algoQ.svg"
const keyBenefits = [
  {
    title: "Coding Session",
    para: "You will learn about basic of programming such as variable, types, conditional statements loop, arrays, strings, and more",
    img: dsAlgo,
  },
  {
    title: "Doubt Session",
    para: "You will learn about basic of programming such as variable, types, conditional statements loop, arrays, strings, and more",
    img: dsAlgo,
  },
  {
    title: "Hands-on Learning",
    para: "You will learn about basic of programming such as variable, types, conditional statements loop, arrays, strings, and more",
    img: dsAlgo,
  },
  {
    title: "Build Potfoilo",
    para: "You will learn about basic of programming such as variable, types, conditional statements loop, arrays, strings, and more",
    img: dsAlgo,
  },
  {
    title: "Career Assitance",
    para: "You will learn about basic of programming such as variable, types, conditional statements loop, arrays, strings, and more",
    img: dsAlgo,
  },
  {
    title: "Get Certified",
    para: "You will learn about basic of programming such as variable, types, conditional statements loop, arrays, strings, and more",
    img: dsAlgo,
  },
];
export default function KeyFeatures() {
  return (
    <div className="container-fluid pb-5">
      <div className="container py-4 px-2">
        <div className="row justify-content-center">
          <div className="col-11 col-md-8 col-lg-12">
            <h2 className="display-3 mb-5 pb-3 fw-bold text-center heading--light">
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
