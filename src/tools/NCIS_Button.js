import React from "react";
import mediaQueryProvider from "react-media-query-hoc/dist/media-query-provider";
import { orange } from "../assets/colors";

export const NCIS_Button = (props) => {
    const {text,icon,onClick,className,buttonColor, fontSize }=props
  return (
    <button
      className={`btn text-light ${className} ${icon && "d-flex justify-content-between" } py-2 `}
      style={{
        background: buttonColor||orange,
        borderRadius: 50,
        fontSize : fontSize ? fontSize : 13,
        width: icon?"190px":"140px",
        whiteSpace:'nowrap'
        // textAlign:icon&&"left"
      }}
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
      onClick={onClick}
    >
              <div className={`py-0 ${icon && " px-3" }`} >{text}</div>
      <img src={icon} style={{position:"absolute",width:50,marginTop: -13, marginLeft: 135}}/>
    </button>
  );
};
