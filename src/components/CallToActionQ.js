import React, { useEffect, useState } from "react";

export default function CallToActionQ({ btnText, btnSubTxt, others }) {

  return (
    <>
      <a
        href="https://rzp.io/l/fullstackdev"
        className="d-inline-flex align-items-center btn btn-lg text-dark mt-2 px-4 fs-6 fw-bold rounded-3 custom--shadow"
        style={{
          paddingTop: "0.75rem",
          paddingBottom: "0.90rem",
          background: "#fcd24f",
          // background:
          //   "linear-gradient(330deg, hsl(263deg 78% 55%), hsl(336deg 80% 60%))",
          // background:
          //   "linear-gradient(330deg, hsl(263deg 78% 58%), hsl(152deg 80% 40%))",
          fontWeight: "500",
        }}
      >
        <p className="mb-0 fs-6">
          <small>{btnText}</small>
          {btnSubTxt}
        </p>
        <i className="bi bi-chevron-right fs-5"></i>
      </a>
    </>
  );
}

// 0 0.25rem 2rem hwb(333deg 26% 10% / 55%) !important
