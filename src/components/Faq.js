import React from "react";

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
    <div className="container-fluid py-5 softbg--gradient-light">
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-10 col-lg-8 col-xl-7">
            <h2 className="display-3 mb-4 pb-3 fw-bold text-center heading--dark">
              Frequently Asked Questions
            </h2>
          </div>
        </div>
        <div className="row g-3 justify-content-center">
          {faqs.map((faq) => (
            <div className="col-12 col-md-11">
              <div
                className="p-4 border--radius-40"
                style={{ backgroundColor: "var(--off-white-color)" }}
              >
                <h5 className="fs-6 mt-1 mb-2 fw-bold heading--dark">{faq.title}</h5>
                <p className="fs-6 mb-0 text--dark">{faq.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
