import React from "react";
import quedemy from "../images/svgs/quedemy-text-svg-logo-rect-violet.svg";
import Prism from "prismjs";
import { useEffect } from "react";

export default function Header() {


  return (
    <section className="container-fluid py-3" style={{
      backgroundColor: "#fcfbfe",
      boxShadow: "0 0.125rem 0.25rem rgb(79 21 172 / 2%)",
      boxShadow: "0 0.5rem 1rem rgb(79 21 172 / 2%)"
    }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-4 text-center text-md-start">
            <a href="/" className="d-inline-flex align-items-center" style={{
              // height: "72px"
            }}>
              <img src={quedemy} alt="Quedemy Logo" height="32" width="auto" />
            </a>
          </div>
          <div className=" col-12 col-md-8 text-center text-md-end">
            <ul className="nav-item d-inline-flex mb-0 px-0 justify-content-center justify-content-md-end">
              <li className="nav-link mx-1 p-2"
                style={{
                  fontWeight: "500",
                  fontSize: "1.125rem"
                }}>
                <a href="/" className="text--dark">Home</a>
              </li>
              <li className="nav-link mx-1 p-2"
                style={{
                  fontWeight: "500",
                  fontSize: "1.125rem"
                }}>
                <a href="/blog" className="text--dark">Blog</a>
              </li>
            </ul>
            {/* <small className="text-muted fw-bold">&nbsp;&nbsp;By Arun Pratap Singh</small> */}
          </div>
        </div>
      </div>
    </section>

  );
}
