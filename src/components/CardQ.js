import React from "react";

// style {cardBg,cardShadow,titleColor, paraColor}
// this card is for home page ONLY
export default function CardQ(props) {
  const { title, para, img, imgAlt, cardBgColor, headingColor, txtColor } =
    props;
  return (
    <div
      className="card p-4 h-100 border-0 shadow-lg card--custom border--radius-40"
      style={{ backgroundColor: `${cardBgColor}` }}
    >
      <div
        className="d-flex ms-3 mt-3 p-3 justify-content-center"
        style={{

          width:"75px",
          height:"75px",
          border:"2px solid #75d1f0",
          background: "linear-gradient(100deg, #c3a4f488, #5916c599)",
          background: "#75d1f0",
          borderRadius: "18px",
        }}
      >
        <img src={img} alt={imgAlt} width="53px" className="img-fluid" />
      </div>
      <div className="card-body">
        <h5
          className={`fs-2 mt-1 mb-3 ${headingColor}`}
          style={{ fontWeight: "500" }}
        >
          {title}
        </h5>
        <p className={`fs-5 ${txtColor}`}>{para}</p>
      </div>
    </div>
  );
}
