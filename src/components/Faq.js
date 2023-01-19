import React from "react";
import CallToActionQ from "./CallToActionQ";

const faqs = [
  {
    title: "What is your question1 for this program",
    para: "Nullam sollicitudin sagittis erat, aliquam lobortis dui aliquet ac. Maecenas nec bibendum tellus. Aliquam erat volutpat. Aliquam eget vestibulum nibh.",
  },
  {
    title: "What is your question1 for this program",
    para: "Nullam sollicitudin sagittis erat, aliquam lobortis dui aliquet ac. Maecenas nec bibendum tellus. Aliquam erat volutpat. Aliquam eget vestibulum nibh.",
  },
  {
    title: "What is your question1 for this program",
    para: "Nullam sollicitudin sagittis erat, aliquam lobortis dui aliquet ac. Maecenas nec bibendum tellus. Aliquam erat volutpat. Aliquam eget vestibulum nibh.",
  },
];

export default function Faq() {
  return (
    <div
      className="container-fluid py-5 border--radius-80"
      style={{ borderTopLeftRadius: "0px", borderTopRightRadius: "0px" ,backgroundColor:""}}
    >
      <div className="container section--container py-5">
        <div className="row justify-content-center">
          <div className="col-10 col-lg-8 col-xl-7">
            <h2 className="display-3 mb-4 pb-4 fw-bold text-center heading--dark">
              Frequently Asked Questions
            </h2>
          </div>
        </div>
        <div className="row g-3 justify-content-center">
          {faqs.map((faq, i) => (
            <div key={i} className="col-12 col-md-11">
              <div
                className="p-4 border--radius-30"
                style={{ backgroundColor: "var(--off-white-color)" }}
              >
                <h5 className="fs-6 mt-1 mb-2 fw-bold heading--dark">
                  {faq.title}
                </h5>
                <p className="fs-6 mb-0 text--dark">{faq.para}</p>
              </div>
            </div>
          ))}

          <div className="col-12 col-md-11 pt-5 text-center">
            <CallToActionQ
              btnText="Book Now"
              btnSubTxt=" and Get 90% Scholarship&nbsp;"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
