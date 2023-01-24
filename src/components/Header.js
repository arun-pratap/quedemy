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
    <div className="container-fluid pt-3 pb-3" style={{ backgroundColor: "#fafaf3" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <img src={quedemy} alt="Quedemy Logo" width="100" />
          </div>
          <div className="col-8 text-end">
            <ul className="d-inline-flex mb-0">
              <li className="mx-1 p-2" style={{ fontWeight: "600" }}><a href="/home">Home</a></li>
              <li className="mx-1 p-2" style={{ fontWeight: "600" }}><a href="/blog">Blog</a></li>
            </ul>
            {/* <small className="text-muted fw-bold">&nbsp;&nbsp;By Arun Pratap Singh</small> */}
          </div>
        </div>
      </div>
    </div>

  );
}
