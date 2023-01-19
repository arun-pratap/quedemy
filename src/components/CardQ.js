import React from "react";

// style {cardBg,cardShadow,titleColor, paraColor}
// this card is for home page ONLY
export default function CardQ(props) {
  const { title, para, img, imgAlt, cardBgColor, headingColor, txtColor } =
    props;
  return (
    <div
      className="card p-4 h-100 border-0 shadow card--custom border--radius-30"
      style={{ backgroundColor: `${cardBgColor}` }}
    >
      <div
        className="d-flex mb-2 justify-content-center"
        style={{
          padding:"0.875rem",
          width: "65px",
          height: "65px",
          borderRadius: "18px",
          
          // background: "linear-gradient(100deg, #c3a4f488, #5916c599)",
          // background: "var(--dark-fg-color)",
          // border:"2px solid #a96fff1a",
        }}
      >
        <img src={img} alt={imgAlt} width="53px" className="img-fluid" />
      </div>
      <div className="card-body p-0">
        <h5
          className={`fs-5 mt-1 mb-2 ${headingColor}`}
          style={{ fontWeight: "500" }}
        >
          {title}
        </h5>
        <p className={`mb-2 fs-6 ${txtColor}`}>{para}</p>
      </div>
    </div>
  );
}
