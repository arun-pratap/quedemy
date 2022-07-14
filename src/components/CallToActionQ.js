import React, { useEffect } from "react";
import { Script } from "gatsby";

import logo from "../images/pngs/quedemy-logo.png";

export default function CallToActionQ({ btnText, btnSubTxt, others }) {
  var options = {
    key: "rzp_test_SffsEnv3EsQcNd", // Enter the Key ID generated from the Dashboard
    amount: "1000000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    name: "Quedemy",
    description: "Course Name",
    image: logo,
    order_id: "order_JtMgM6N8smwK8k", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    handler: function (response) {
      alert(response.razorpay_payment_id);
      alert(response.razorpay_order_id);
      alert(response.razorpay_signature);
    },

    theme: {
      color: "#4f15ac",
    },
  };

  const isBrowser = typeof window !== "undefined";

  console.log(window);
  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
      <button
        {...others}
        onClick={(e) => {
          if (!isBrowser) {
            return;
          } else {
            const rzrpy = window.Razorpay && new window.Razorpay(options);
            rzrpy.open();
          }
          e.preventDefault();
        }}
        className="d-inline-flex align-items-center btn btn-lg text-black mt-2 px-4 fs-6 fw-bold rounded-3 custom--shadow"
        style={{
          paddingTop: "0.75rem",
          paddingBottom: "0.90rem",
          background: "var(--cta-color)",
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
      </button>
    </>
  );
}

// 0 0.25rem 2rem hwb(333deg 26% 10% / 55%) !important
