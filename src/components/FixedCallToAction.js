import React from "react";
import { Script } from "gatsby";
import CallToActionQ from "./CallToActionQ";

export default function FixedCallToAction() {
  return (
    <div className="container-fluid position-relative border border-secondary border-bottom-1">
      <div className="container px-2">
        <div className="row">
          <div className="col d-block d-sm-block d-md-none text-center">
            <div
              className=" position-fixed px-2"
              style={{
                zIndex: "1000",
                left: "2%",
                right: "2%",
                bottom: "4%",
              }}
            >
              <CallToActionQ
                btnText="Book Now"
                btnSubTxt=" and Get 90% Scholarship&nbsp;"
              />
            </div>
          </div>
          <div className="col-6">
            <div
              data-tf-popover="bri3ibGM"
              data-tf-custom-icon="https://images.typeform.com/images/itLtdLPVDURh"
              data-tf-button-color="#00E1FF"
              data-tf-notification-days="7"
              data-tf-tooltip="Hey 👋, I am Arun. How can I help you?"
              data-tf-chat
              data-tf-medium="snippet"
              style={{ all: "unset" }}
            ></div>
            <Script src="//embed.typeform.com/next/embed.js"></Script>
          </div>
        </div>
      </div>
    </div>
  );
}
