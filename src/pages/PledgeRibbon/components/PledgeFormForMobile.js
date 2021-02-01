import React, { useEffect, useRef, useState } from "react";
import { NCIS_Selector } from "../../../tools/NCIS_Selector";
import { NCIS_TextBox } from "../../../tools/NCIS_TextBox";
import { NCIS_Button } from "../../../tools/NCIS_Button";
import RibbonImages from "../../../assets/RibbonImages.json";
import { violet } from "../../../assets/colors";
import { ThankYouCard } from "../components/pledgeForm"
import { PledgeCard } from "../components/pledgeCard"
import { ShareForms } from "../components/pledgeForm"

export const PledgeFormForMobile = (props) => {
  const {
    _handleSelect,
    _handleSelectOption,
    menuVisible,
    _handleRibbonClick,
    _handleTextChange,
    step,media,
    _handleReview,
    _handleConfirm,
    _handleEdit,
    recipientName,
    senderName,
    message,
  } = props;


  return (
    <div>
      <div>
        <strong>{`Step ${step}:`}</strong>
      </div>
      <label style={{ fontWeight: "bold", fontSize: 20 }}>
        {step === 1
          ? "Choose Your Ribbon and Create Your Message"
          : step === 2
            ? "Review Your Ribbon"
            : "Share Your Message"}
      </label>
      <br />
      {step === 3 &&
        "Click Back to edit or select on the following icons to share your message"}
      {step === 1 && <PledgeRibbonsForMobile {...props} />}

    </div>
  )
}

const PledgeRibbonsForMobile = props => {
  const { _handleRibbonClick, menuVisible, recipientName, senderName, message,_handleSelect, media,
    _handleSelectOption,
    _handleTextChange,
    step,
    _handleReview,
    _handleConfirm,
    _handleEdit, } = props;
    console.log("?>>",menuVisible,step)
  const [selected, setSelected] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [number, setNumber] = useState(null);
  const [goNext, setGotoNext] = useState(false)
  const PopupDiv = (e) => document.getElementById(e.target.id + "popup");
  const RibbonDiv = (e) => document.getElementById(e.target.id);
  const prevRibbonDiv = (e) => document.getElementById(e);

  const prevSelectedRef = useRef();
  const _handleClick = (e) => {
    prevSelectedRef.current = selectedId;
    const prevSelectedId = prevSelectedRef.current;

    setSelected(true);
    setSelectedId(e.target.id);

    RibbonDiv(e).style.background = 'rgba(64,64,64,0.2)'
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
  const gotoNext = () => {
    setGotoNext(selected ? true : false)

  }

  return (
    <div>
      {
        !goNext &&
        <>
          <div className="d-flex flex-row flex-wrap justify-content-center px-2">
            {RibbonImages.Ribbons.map((v, k) => (
              <div className="col-4 px-1" style={{ cursor: "pointer" }}>
                <div className='text-center'
                  id={k}
                  style={{ borderRadius: "10px", minHeight: 90 }}
                  onClick={(e) => _handleClick(e)}
                  onMouseOver={(e) => _handleHover(e, v.name, k)}
                  onMouseLeave={(e) => _handleLeave(e, v.name)}
                >
                  <img src={v.imgaeUrl} alt="ribbons" style={{ width: 50 }} id={k} />
                  <div className='text-center' id={k} style={{ textAlign: 'right', marginTop: 3, fontWeight: '500', fontSize: 13, position: 'absolute', width: 120 }}>{v.name}</div>
                </div>
                {number == k && <div
                  className="shadow"
                  id={k + "popup"}
                  style={{ position: "absolute", width: 280, padding: 20, borderRadius: 20, background: 'white', zIndex: 200 }}
                  onMouseLeave={(e) => _handleLeave(e)}
                  onMouseOver={(e) => _handleHover(e)}
                >
                  <h6 id={k}>{v.name}</h6>
                  <div id={k} style={{ fontSize: 12 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.</div>
                </div>
                }
              </div>
            ))}

          </div>
          <div className='d-flex flex-column justify-content-center'>

            <div className='d-flex justify-content-center pt-2' ><NCIS_Button text={"Next"} onClick={gotoNext} /></div>
          </div>
        </>}
      {
        goNext &&
        <PledgeCard recipientName={recipientName} senderName={senderName} message={message} media={media} />
      }
      {step === 4 ? (
        <ThankYouCard />
      ) : step === 3 ? (
        <ShareForms />
      ) : (
            <>
            {
              goNext &&
              <div className="form-group row m-auto justify-content-center py-4" style={{ }}>
              <div className="col-6">
                <NCIS_TextBox
                  placeHolder={step === 2 ? recipientName : "Add Recipient Name"}
                  handleTextChange={_handleTextChange}
                  id={"recipient"}
                  disabled={step === 2 && true}
                />
              </div>
              <div className="col-6">
                <NCIS_TextBox
                  placeHolder={step === 2 ? senderName : "Add Sender Name"}
                  handleTextChange={_handleTextChange}
                  id={"sender"}
                  disabled={step === 2 && true}
                />
              </div>
              <div className="col-12 py-4">
                <NCIS_Selector
                  placeHolder={message !== "" ? message : "Select Message"}
                  onClick={step != 2 ? _handleSelect : undefined}
                  menuVisible={menuVisible}
                  _handleSelectOption={_handleSelectOption}
                />
              </div>
              {!menuVisible && step == 1 ? (
                <NCIS_Button text={"Review"} onClick={_handleReview} />
              ) : null}
            </div>
            }
            </>
          )}
           {
             step == 2 && (
              <>
                <NCIS_Button
                  text={"Edit"}
                  onClick={_handleEdit}
                  className="mx-2"
                />
                <NCIS_Button
                  text={"Confirm"}
                  onClick={_handleConfirm}
                  className="mx-2"
                />
              </>
            )
           }
    </div>


  )
}