import React from "react";
import quedemy from "../images/svgs/quedemy-text-svg-logo-rect-violet.svg";
import Prism from "prismjs";
import { useEffect } from "react";

export default function Header() {

  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll()
  })
  return (
    <section className="container-fluid pt-3 pb-3" style={{ backgroundColor: "#fafaf3" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-4 text-center text-md-start">
            <a href="/">
              <img src={quedemy} alt="Quedemy Logo" width="100" />
            </a>
          </div>
          <div className="col-12 col-md-8 text-center text-md-end">
            <ul className="d-inline-flex mb-0 px-0">
              <li className="mx-1 p-2" style={{ fontWeight: "600" }}><a href="/">Home</a></li>
              <li className="mx-1 p-2" style={{ fontWeight: "600" }}><a href="/blog">Blog</a></li>
            </ul>
            {/* <small className="text-muted fw-bold">&nbsp;&nbsp;By Arun Pratap Singh</small> */}
          </div>
        </div>
      </div>
    </section>

  );
}
