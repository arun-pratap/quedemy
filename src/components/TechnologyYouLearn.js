import React from "react";

import html5 from "../images/technology/svg/html-5.svg";
import bootstrap from "../images/technology/svg/bootstrap.svg";
import css from "../images/technology/svg/css.svg";
import js from "../images/technology/svg/javascript.svg";
import git from "../images/technology/svg/git.svg";
import react from "../images/technology/svg/react.svg";
import node from "../images/technology/svg/nodejs.svg";
import docker from "../images/technology/svg/docker.svg";

import API from "../images/technology/png/API.png";
import mongoDB from "../images/technology/png/mongoDB.png";
const technologies = [
  {
    img: git,
    subTxt: "Git",
  },
  {
    img: css,
    subTxt: "CSS",
  },
  {
    img: js,
    subTxt: "Javascript",
  },
  {
    img: bootstrap,
    subTxt: "Bootstrap",
  },
  {
    img: API,
    subTxt: "RestAPI",
  },
  {
    img: mongoDB,
    subTxt: "MongoDB",
  },
  {
    img: react,
    subTxt: "ReactJS",
  },
  {
    img: node,
    subTxt: "NodeJS",
  },
  {
    img: docker,
    subTxt: "Docker",
  },
  {
    img: html5,
    subTxt: "HTML",
  },
];
export default function TechnologyYouLearn() {
  return (
    <div className="container-fluid pt-5 pb-5 border--radius-80 softbg--gradient-light">
      <div className="container pt-4 pb-4 px-2">
        <div className="row justify-content-center">
          <div className="col-10 col-lg-8 col-xl-7">
            <h2 className="display-3 mb-4 fw-bold text-center heading--dark">
              Technologies You Will Learn Hands-on
            </h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-11 col-lg-8">
            <div className="card px-2 py-0 border-0 border--radius-80 softbg--gradient-light">
              <div className="card-body">
                <div className="row g-4 justify-content-center">
                  {technologies.map((tech) => (
                    <div className="col-6 col-sm-4 col-md-3">
                      <div
                        className="card p-2 py-4 h-100 border-0 shadow-sm text-center"
                        style={{
                          borderRadius: "30px",
                          backgroundColor: "var(--off-white-color)",
                        }}
                      >
                        <img
                          src={tech.img}
                          className="mt-1"
                          width="60"
                          style={{ alignSelf: "center" }}
                        />
                        <div className="card-body p-0">
                          <p className="fs-6 mb-1 fw-bold text--dark">
                            <small>{tech.subTxt}</small>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
