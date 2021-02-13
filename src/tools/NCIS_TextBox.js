import React from "react";

export const NCIS_TextBox = (props) => {
  const { placeHolder, handleTextChange, id,disabled, required, media, value } = props;
 
  return (
    <input
      id={id}
      disabled={disabled}
      onChange={handleTextChange}
      required={required ?required : null }
      type="text"
      className={`form-control shadow ${ media.mobile ? " px-3" : "px-4"} ${media.mobile ? "py-0" : "py-2"}`}
      placeholder={placeHolder}
      value={value}
      style={{ borderRadius: 20,height: 45, background: "#ffffff", border: "none", fontSize : media.mobile ? 10 : window.innerWidth > 1500 ? 18 : 14}}
    />
  );
};
