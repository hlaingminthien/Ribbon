import React, { useEffect, useRef, useState } from "react";
import { NCIS_Selector } from "../../../tools/NCIS_Selector";
import { NCIS_TextBox } from "../../../tools/NCIS_TextBox";
import { NCIS_Button } from "../../../tools/NCIS_Button";
import RibbonImages from "../../../assets/RibbonImages.json";
import { violet } from "../../../assets/colors";
import ShareIcons from "./socialShareIcons";

export const PledgeForm = (props) => {
  const {
    _handleSelect,
    _handleSelectOption,
    menuVisible,
    _handleRibbonClick,
    _handleTextChange,
    step,
    _handleReview,
    _handleConfirm,
    _handleEdit,
    recipientName,
    senderName,
    message,
    media
  } = props;

  return (
    <div className="py-4">
      <form>
        <div>
          <strong>{`Step ${step}:`}</strong>
        </div>
        <label style={{ fontWeight: "bold", fontSize: 25 }}>
          {step === 1
            ? "Choose Your Ribbon and Create Your Message"
            : step === 2
              ? "Review Your Ribbon"
              : "Share Your Message"}
        </label>
        <br />
        {step === 3 &&
          "Click Back to edit or select on the following icons to share your message"}
        {step === 1 && <PledgeRibbons {...props} />}
        {/* //  _handleSelect={_handleSelect} _handleRibbonClick={_handleRibbonClick} menuVisible={menuVisible} */}
        {step === 4 ? (
          <ThankYouCard />
        ) : step === 3 ? (
          <ShareForms />
        ) : (
              <div className="form-group row mx-auto justify-content-center py-4" style={{padding: 50}}>
                <div className="col-6 py-2">
                  <NCIS_TextBox
                    placeHolder={step === 2 ? recipientName : "Add Recipient Name"}
                    handleTextChange={_handleTextChange}
                    id={"recipient"}
                    disabled={step === 2 && true}
                    media={media}
                  />
                </div>
                <div className="col-6 ">
                  <NCIS_TextBox
                    placeHolder={step === 2 ? senderName : "Add Sender Name"}
                    handleTextChange={_handleTextChange}
                    id={"sender"}
                    disabled={step === 2 && true}
                    media={media}
                  />
                </div>
                <div className="col-12 py-4">
                  <NCIS_Selector
                    placeHolder={message !== "" ? message : "Select Message"}
                    onClick={step != 2 ? _handleSelect : undefined}
                    menuVisible={menuVisible}
                    _handleSelectOption={_handleSelectOption}
                    media={media}
                  />
                </div>
                {!menuVisible && step === 1 ? (
                  <NCIS_Button text={"Review"} onClick={_handleReview} fontSize={ window.innerWidth > 1500 ? 25 : 18 } />
                ) : step === 2 ? (
                  <div className='py-3 d-flex justify-content-center'>
                    <NCIS_Button
                      text={"Edit"}
                      onClick={_handleEdit}
                      fontSize={ window.innerWidth > 1500 ? 25 : 18 }
                      className="mx-2"
                    />
                    <NCIS_Button
                      text={"Confirm"}
                      onClick={_handleConfirm}
                      fontSize={ window.innerWidth > 1500 ? 25 : 18 }
                      className="mx-2"
                    />
                  </div>
                ) : null}
              </div>
            )}
      </form>
    </div>
  );
};

const PledgeRibbons = (props) => {
  const { _handleRibbonClick, menuVisible } = props;
  const [selected, setSelected] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [number, setNumber ] = useState(null);

  const PopupDiv = (e) => document.getElementById(e.target.id + "popup");
  const RibbonDiv = (e) => document.getElementById(e.target.id);
  const prevRibbonDiv = (e) => document.getElementById(e);

  const prevSelectedRef = useRef();

  const _handleClick = (e) => {
    prevSelectedRef.current = selectedId;
    const prevSelectedId = prevSelectedRef.current;

    setSelected(true);
    setSelectedId(e.target.id);

    RibbonDiv(e).style.background = violet;
    RibbonDiv(e).style.color = "#ffffff";
    if (selectedId != null) {
      prevRibbonDiv(prevSelectedId).style.background = "none";
      prevRibbonDiv(prevSelectedId).style.color = "#000000";
      _handleRibbonClick(false);
    }
    PopupDiv(e).style.visibility = "hidden";
    // _handleRibbonClick(true);
  };

  const _handleHover = (e, name, k) => {
    console.log(e.target.id);
    setNumber(k);
    if (selected === false) {
      RibbonDiv(e).style.background = "#cecece";
      if (PopupDiv(e)) {
        PopupDiv(e).style.visibility = "visible";
      } else {
        return;
      }
    }
  };
  const _handleLeave = (e) => {
    if (selected === false) {
      RibbonDiv(e).style.background = "white";
      RibbonDiv(e).style.color = "#000000";

      if (PopupDiv(e)) {
        PopupDiv(e).style.visibility = "hidden";
      } else {
        return;
      }
    }
  };
  return (
    <div className="d-flex flex-row flex-wrap">
      {RibbonImages.Ribbons.map((v, k) => (
        <div className="w-25  align-items-center py-1" style={{ cursor: "pointer" }}>
          <div
          className="d-flex py-2"
            id={k}
            style={{ borderRadius: "50px" }}
            onClick={(e) => _handleClick(e)}
            onMouseOver={(e) => _handleHover(e, v.name, k)}
            onMouseLeave={(e) => _handleLeave(e, v.name)}
          >
            <img src={v.imgaeUrl} alt="ribbons" style={{ width: window.innerWidth > 1500 ? 50 : 30 }} id={k} />
            <span id={k} style={{ marginTop: 3, marginLeft: 10, fontWeight: '500',fontSize : window.innerWidth > 1500 ? 25: 18}}>{v.name}</span>
          </div>
          {number == k && <div
            className="shadow"
            id={k + "popup"}
            style={{ position: "absolute", width: 280, padding: 20, borderRadius: 20, background: 'white', zIndex: 200 }}
            onMouseLeave={(e) => _handleLeave(e)}
            onMouseOver={(e) => _handleHover(e)}
          >
            <h6 id={k}>{v.name}</h6>
            <div id={k} style={{fontSize: 12}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.</div>
          </div>
}
        </div>
      ))}
    </div>
  );
};

export const ThankYouCard = () => {
  return (
    <div
      className="bg-light shadow mt-2 w-100 p-5"
      style={{
        borderRadius: 25,
        // position: "absolute",
        // top: 0,
        // left: 0,
        margin: 0,
      }}
    >
      <strong>Thank you for Pledging</strong>
      <br />
      {/* <p></p> */}
      <div className="row justify-content-center">
        <NCIS_Button
          text={"Back To Home"}
          // onClick={_handleEdit}
          className="mx-2"
          buttonColor={violet}
        />
        <NCIS_Button
          text={"Pledge Another"}
          // onClick={_handleConfirm}
          className="mx-2"
        />
      </div>
    </div>
  );
};

export const ShareForms = () => {
  return (
    <div className="row justify-content-center">
      <div className="mx-2 row col-12">npm
          <ShareIcons/>
      </div>
      <br />
      <NCIS_Button
        text={"Back To Home"}
        // onClick={_handleEdit}
        className="mx-2"
        buttonColor={violet}
      />
      <NCIS_Button
        text={"Pledge Another"}
        // onClick={_handleConfirm}
        className="mx-2"
      />
    </div>
  );
};
