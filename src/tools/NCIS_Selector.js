import React from "react";
import { orange, violet } from "../assets/colors";
import Messages from "../assets/Messages.json";

export const NCIS_Selector = (props) => {
  const { placeHolder, onClick, menuVisible, _handleSelectOption, media } = props;
  return (
    <div onClick={onClick}>
      <input
        type="text"
        className="form-control shadow px-4 py-2"
        placeholder={placeHolder}
        disabled
        style={{
          borderRadius: 20,
          border: menuVisible ? `2px solid ${violet}` : "none",
          // border:"red",
          background: "#ffffff",
          cursor: "pointer",
          fontSize : media.mobile ? 14 : window.innerWidth > 1500 ? 25 : 18 ,
        }}
      />
      <span
        style={{
          float: "right",
          position: "relative",
          marginTop: media.mobile ? "-30px" :"-35px",
          // fontSize: "16px",
          marginRight: "20px",
          width: "25px",
          height: "25px",
          background: "#efefef",
          textAlign: "center",
          borderRadius: "20px",
          cursor: "pointer",
        }}
      >
        <i className="fa fa-chevron-down " style={{color: '#868686', fontSize : media.mobile && 12 }} onClick={onClick}></i>
      </span>
      {menuVisible ? (
        <Options
          messages={Messages.messages}
          _handleSelectOption={_handleSelectOption}
          media={media}
        />
      ) : null}
    </div>
  );
};

const Options = (props) => {
  const { messages, _handleSelectOption, media } = props;
  const messageText = messages.map((v, k) => v.message);

  const _handleMouseEnter = (e) => {
    document.getElementById(e.target.id).style.background = "#cecece";
  };
  const _handleMouseLeave = (e) => {
    document.getElementById(e.target.id).style.background = "none";
  };
  return (
    <ul
      className="bg-light shadow mt-2 w-100 py-2"
      style={{
        borderRadius: 20,
        listStyleType: "none",
        // position: "absolute",
        height: 150,
        overflowY: "scroll",
        // top: 0,
        // left: 0,
        margin: 0,
        padding: 0
      }}
    >
      {messages.map((v1, k1) => (
        <React.Fragment>
          <li style={{ color: orange, fontWeight: "bold", paddingLeft: 20, paddingTop: 5, paddingBottom: 5 , fontSize: window.innerWidth > 1500 ? 24 :media.mobile? 16: 18 }}>{v1.title}</li>
          <br />
          {v1.message.map((v2, k2) => (
            <p
              style={{ cursor: "pointer", paddingLeft: 20, paddingTop: 5, paddingBottom: 5, fontWeight: 500, fontSize: window.innerWidth > 1500 ? 22 :media.mobile? 14: 18 }}
              onMouseEnter={(e) => _handleMouseEnter(e)}
              onMouseLeave={(e) => _handleMouseLeave(e)}
              id={v2.id + v2.text}
              onClick={() => _handleSelectOption(v2.text)}
            >
              {v2.text}
            </p>
          ))}
        </React.Fragment>
      ))}
    </ul>
  );
};
