import React from "react";
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
        </div>
      </div>
    </div>
  );
}
