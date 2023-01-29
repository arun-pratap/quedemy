import React from "react";
import quedemyLogo from "../images/svgs/quedemy-text-svg-logo-rect-white.svg"
import { Link } from "gatsby";

export default function Footer() {
  return (

    <section className="container-fluid pt-2 pb-4" style={{
      backgroundColor: "#292037",
    }}>

      <div className="container-fluid my-5 py-2 justify-content-around">
        <div className="row g-5">

          <div className="col-12 col-md-5 col-lg-4 text-center text-md-start">
            <img src={quedemyLogo} alt="QuedemyLogo" width="135" />

            <p className="ms-2 mb-0 text--grey fs-5" style={{ marginTop: "-20px" }}>Learn and crack your first job in Software Company with Quedemy</p>
          </div>

          <div className="col-12 col-md-7 col-lg-5 text-center">

            <div className="py-5 px-3" style={{
              backgroundColor: "#1b1525",
              borderRadius: "30px"
            }}>
              {/* color: "#dcdcdc"  */}
              <h5 className="fw-bold" style={{ color: "#dcdcdc" }}>
                Learn and Grow Your Career for FREE.
              </h5>

              <p className="text--grey" style={{ maxWidth: "350px", margin: "auto" }}>
                Join 100+ subscribers who get actionable tips to upskill and grow career in 4 minutes daily.
              </p>
              <form>

                <div className="row g-0 align-items-center justify-content-center text-center mt-4 mb-1">
                  <div className="col-auto">
                    <label htmfor="email" className="form-label d-none">Email:</label>
                  </div>
                  <div className="col-auto">
                    {/* style={{ padding: "0.55rem 0.75rem" }} */}
                    <input type="email" className="form-control" placeholder="Your Email Address" required />
                  </div>
                  <div className="col-auto text-start">
                    <button type="submit" className="btn btn-secondary px-2" style={{ marginLeft: "-10px", backgroundColor: "#4f15ac", fontWeight: "500" }}>Subscribe</button>
                  </div>
                </div>
              </form>
            </div>

          </div>

          <div className="col-12 col-md-3 col-lg-3 text-center text-md-start">

            <h4 className="mt-md-4 mt-md-4" style={{ color: "#dcdcdc" }}>Follow us on</h4>

            <ul className="d-inline-flex ps-0 justify-content-center justify-content-md-start">
              <li>
                <a className=" mx-1" to="https://www.linkedin.com/company/quedemy-learning">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#e8e8e8" className="bi bi-linkedin" viewBox="0 0 16 16" style={{ borderRadius: "0.25rem", opacity: "0.5" }}>
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
              </li>
              <li>
                <a className=" mx-1" to="https://www.linkedin.com/company/quedemy-learning">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#e8e8e8" className="bi bi-linkedin" viewBox="0 0 16 16" style={{ borderRadius: "0.25rem", opacity: "0.5" }}>
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
              </li>
              <li>
                <a className=" mx-1" to="https://www.linkedin.com/company/quedemy-learning">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#e8e8e8" className="bi bi-linkedin" viewBox="0 0 16 16" style={{ borderRadius: "0.25rem", opacity: "0.5" }}>
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
      <div className="container-fluid">
        <hr className="mt-5 mb-4 text-light" />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-6 text-center text-md-start">
            <p className="text-muted small my-2">
              <a href="/privacy-policy">Privacy Policy</a>
              &nbsp;·&nbsp;
              <a href="/terms-and-conditions">Terms & Conditions</a>
              &nbsp;·&nbsp;
              <a href="/refunds-and-cancellation-policy">Cancellation & Refund Policy</a>
            </p>
          </div>
          <div className="col-12 col-md-6 text-center text-md-end">
            <p className="text-muted small my-2">
              &copy; 2023 Quedemy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /**
   * Company > about us, contact
   * Courses > Placement Program, fullstack(Mern), frontend
   * Resources > Blog 
 */
}