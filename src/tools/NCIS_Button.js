import React from "react";
import mediaQueryProvider from "react-media-query-hoc/dist/media-query-provider";
import { orange } from "../assets/colors";

export const NCIS_Button = (props) => {
    const {text,icon,onClick,className,buttonColor, fontSize }=props
  return (
    <button
      className={`btn text-light ${className} py-2`}
      style={{
        background: buttonColor||orange,
        borderRadius: 50,
        fontSize : fontSize ? fontSize : 14,
        width: icon?"190px":"140px",
        // textAlign:icon&&"left"
      }}
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
      onClick={onClick}
    >
              {text}
      <img src={icon} style={{position:"absolute",width:50,marginTop: -13}}/>
    </button>
  );
};
