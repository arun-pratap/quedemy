import React, { useEffect, useState } from "react";
import { Script } from "gatsby";

import logo from "../images/pngs/quedemy-logo.png";

const serverURL = "https://server-quedemy.herokuapp.com/";

export default function CallToActionQ({ btnText, btnSubTxt, others }) {
  const isBrowser = typeof window !== "undefined";
  const handlePayment = async () => {
    // e.preventDefault();

    if (!isBrowser) {
      return;
    }

    const paymentDetails = await fetch(`${serverURL}paymento`, {
      method: "POST",
    }).then((res) => {
      return res.json();
    });

    // console.log(paymentDetails);

    var options = {
      key: "rzp_test_SffsEnv3EsQcNd", // Enter the Key ID generated from the Dashboard
      amount: paymentDetails && paymentDetails.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: paymentDetails && paymentDetails.currency,
      name: "Quedemy",
      description: "Full Stack Developer Program",
      image: logo,
      order_id: paymentDetails && paymentDetails.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: function (response) {
        alert(
          `Your payment for ${options.description} is successful and Your Order ID is ${response.razorpay_payment_id}. Take the screenshot for future reference`
        );
      },

      theme: {
        color: "#4f15ac",
      },
    };
    const rzrpy = window.Razorpay && new window.Razorpay(options);
    rzrpy.open();
  };

  return (
    <>
      <button
        onClick={handlePayment}
        className="d-inline-flex align-items-center btn btn-lg text-light mt-2 px-4 fs-6 fw-bold rounded-3 custom--shadow"
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
