import React, { useEffect, useRef, useState } from "react";
import { withRouter } from "react-router-dom";
import { NCIS_Selector } from "../../../tools/NCIS_Selector";
import { NCIS_TextBox } from "../../../tools/NCIS_TextBox";
import { NCIS_Button } from "../../../tools/NCIS_Button";
import RibbonImages from "../../../assets/RibbonImages.json";
import { violet, paleViolet } from "../../../assets/colors";
import ShareIcons from "./socialShareIcons";

const PledgeForm = (props) => {
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
    _handleShare,
    media,
    _handleImage,warning
  } = props;
  const [shareApp, setShareApp] = useState(null);
  const handleShareApp = (app) => {
    setShareApp(app == shareApp ? null : app);
  };
  const _handlePledge = () => {
    console.log(">>>",props.history)
    props.history.push("/");
  };
  return (
    <div className="py-2">
      <form>
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
        {step === 1 && <PledgeRibbons {...props} />}
        {/* //  _handleSelect={_handleSelect} _handleRibbonClick={_handleRibbonClick} menuVisible={menuVisible} */}
        {step === 4 ? (
          <ThankYouCard _handlePledge={_handlePledge} />
        ) : step === 3 ? (
          <ShareApp
            handleShareApp={handleShareApp}
            _handleShare={_handleShare}
            shareApp={shareApp}
            paleViolet={paleViolet}
            
          />
        ) : (
          <div
            className="form-group row mx-auto justify-content-center py-4"
            style={{ padding: 50 }}
          >
            <div className="col-6 ">
              <NCIS_TextBox
                placeHolder={step === 2 ? recipientName : "Add Recipient Name"}
                handleTextChange={_handleTextChange}
                id={"recipient"}
                required={true}
                disabled={step === 2 && true}
                media={media}
              />
            </div>
            <div className="col-6 ">
              <NCIS_TextBox
                placeHolder={step === 2 ? senderName : "Add Sender Name"}
                handleTextChange={_handleTextChange}
                id={"sender"}
                required={true}
                disabled={step === 2 && true}
                media={media}
              />
            </div>
            {
                (warning && step === 1) && (
                  <div className="d-flex text-warning justify-content-center text-center pt-2 align-self-center" style={{  }}>
                    <i className="fa fa-exclamation" aria-hidden="true"></i>
                    Please fill out of this field!
                  </div>
                )}
            <div className="col-12 pt-4">
              <NCIS_Selector
                placeHolder={message !== "" ? message : "Select Message"}
                onClick={step != 2 ? _handleSelect : undefined}
                menuVisible={menuVisible}
                _handleSelectOption={_handleSelectOption}
                media={media}
              />
            </div>
            {!menuVisible && step === 1 ? (
              <div className='pb-4' >
                <div className='pt-4 d-flex justify-content-center'>
                <NCIS_Button
                  text={"Review"}
                  onClick={_handleReview}
                  fontSize={window.innerWidth > 1500 ? 16 : 14}
                />
                </div>
                
              </div>
            ) : step === 2 ? (
              <div className="pt-5 d-flex justify-content-center">
                <NCIS_Button
                  text={"Edit"}
                  onClick={_handleEdit}
                  fontSize={window.innerWidth > 1500 ? 16 : 14}
                  className="mx-2"
                />
                <NCIS_Button
                  text={"Confirm"}
                  onClick={_handleConfirm}
                  fontSize={window.innerWidth > 1500 ? 16 : 14}
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
export default withRouter(PledgeForm)

const PledgeRibbons = (props) => {
  const { _handleRibbonClick, menuVisible, _handleImage } = props;
  const [selected, setSelected] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [number, setNumber] = useState(null);

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
      if(RibbonDiv(e)) RibbonDiv(e).style.background = "#cecece";
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
        <div
        key={k}
          className="w-25  align-items-center py-1"
          style={{ cursor: "pointer" }}
          onClick={() => _handleImage(v.imgaeUrl)}
        >
          <div
            className="d-flex py-1"
            id={k}
            style={{ borderRadius: "50px" }}
            onClick={(e) => _handleClick(e)}
            onMouseOver={(e) => _handleHover(e, v.name, k)}
            onMouseLeave={(e) => _handleLeave(e, v.name)}
          >
            <img
              src={v.imgaeUrl}
              alt="ribbons"
              style={{ width: window.innerWidth > 1500 ? 50 : 40 }}
              id={k}
            />
            <span
              className="pt-1"
              id={k}
              style={{
                marginTop: 3,
                marginLeft: 3,
                fontWeight: "500",
                fontSize: window.innerWidth > 1500 ? 18 : 15,
              }}
            >
              {v.name}
            </span>
          </div>
          {number == k && (
            <div
              className="shadow"
              id={k + "popup"}
              style={{
                position: "absolute",
                width: 280,
                padding: 20,
                borderRadius: 20,
                background: "white",
                zIndex: 200,
              }}
              onMouseLeave={(e) => _handleLeave(e)}
              onMouseOver={(e) => _handleHover(e)}
            >
              <h6 id={k}>{v.name}</h6>
              {v.ribbonDetails ? (
                      <div className="px-2" id={k} style={{ fontSize: 12 }}>
                        {v.ribbonDetails.map((c, i) => (
                          <p key={i}>{c}</p>
                        ))}
                      </div>
                    ) : (
                      <div className="px-2" id={k} style={{ fontSize: 12 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin vel sollicitudin sapien.
                      </div>
                    )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export const ThankYouCard = (props) => {
  const { _handleEdit, _handlePledge } = props;

  return (
    <div className="d-flex justify-content-center p-2 ">
      <div
        className="bg-light p-3 col-6 m-3 shadow"
        style={{ borderRadius: 10 }}
      >
        <div
          className="text-center"
          style={{ fontWeight: "bold", fontSize: 18 }}
        >
          Thank for your Pledging
        </div>
        <p className="p-2" style={{ fontSize: 14 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel
          sollicitudin sapien. Suspendisse eu ornare erat. Nullam tristique
          augue sit amet lorem elementum hendrerit eu et nulla. Nullam in
          posuere mauris, eu fringilla magna. Praesent a sodales leo, quis
          feugiat eros.
        </p>
        <div className="d-flex justify-content-center text-left">
          <div className="p-2  d-flex justify-content-center">
            <NCIS_Button
              text={"Pledge Another"}
              onClick={() => window.location.reload()}
              className="mx-2"
            />
          </div>
          <div className="p-2 d-flex justify-content-center">
            <NCIS_Button
              text={"Back To Home"}
              onClick={_handlePledge}
              className="mx-2"
              buttonColor={violet}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ShareApp = (props) => {
  const { handleShareApp, shareApp, _handleEdit, paleViolet,_handleShare } = props;

  return (
    <div>
      <ShareIcons/>
      {/* <div className="d-flex justify-content-center m-2 pt-5 py-3">
        <div
          className=" shadow p-3 align-self-center text-center mx-2"
          style={{
            borderRadius: 23,
            border: "1px solid #FAFAFA",
            width: shareApp == 1 ? 54 : 59,
            height: shareApp == 1 ? 54 : 59,
            background: shareApp == 1 ? "rgb(22, 16, 92)" : "#fff",
          }}
          onClick={() => handleShareApp(1)} //gmail
        >
          <i
            className="fa fa-envelope-o"
            aria-hidden="true"
            style={{
              fontSize: shareApp == 1 ? 23 : 27,
              color: shareApp == 1 ? "#fff" : "rgb(22, 16, 92)",
            }}
          ></i>
        </div>
        <div
          className=" shadow p-3 align-self-center text-center mx-3"
          style={{
            borderRadius: 23,
            border: "1px solid #FAFAFA",
            width: shareApp == 2 ? 54 : 59,
            height: shareApp == 2 ? 54 : 59,
            background: shareApp == 2 ? "rgb(22, 16, 92)" : "#fff",
          }}
          onClick={() => handleShareApp(2)} //facebook
        >
          <i
            className="fa fa-facebook"
            aria-hidden="true"
            style={{
              fontSize: shareApp == 2 ? 23 : 27,
              color: shareApp == 2 ? "#fff" : "rgb(22, 16, 92)",
            }}
          ></i>
        </div>
        <div
          className=" shadow p-3 align-self-center text-center mx-2"
          style={{
            borderRadius: 23,
            border: "1px solid #FAFAFA",
            width: shareApp == 3 ? 54 : 59,
            height: shareApp == 3 ? 54 : 59,
            background: shareApp == 3 ? "rgb(22, 16, 92)" : "#fff",
          }}
          onClick={() => handleShareApp(3)} //insta
        >
          <i
            className="fa fa-instagram"
            aria-hidden="true"
            style={{
              fontSize: shareApp == 3 ? 23 : 27,
              color: shareApp == 3 ? "#fff" : "rgb(22, 16, 92)",
            }}
          ></i>
        </div>
        <div
          className=" p-3 shadow align-self-center text-center mx-3"
          style={{
            borderRadius: 23,
            border: "1px solid #FAFAFA",
            width: shareApp == 4 ? 54 : 59,
            height: shareApp == 4 ? 54 : 59,
            background: shareApp == 4 ? "rgb(22, 16, 92)" : "#fff",
          }}
          onClick={() => handleShareApp(4)} //telegram
        >
          <i
            className="fa fa-telegram"
            aria-hidden="true"
            style={{
              fontSize: shareApp == 4 ? 23 : 27,
              color: shareApp == 4 ? "#fff" : "rgb(22, 16, 92)",
            }}
          ></i>
        </div>
      </div> */}
      {shareApp && (
        <div
          className="d-flex justify-content-center text-center"
          style={{ fontSize: 14, fontWeight: 600 }}
        >
          <div className="col-5">
            Spread the world by tagging your recipient and add the hashtag
            #Compagin
          </div>
        </div>
      )}
      <div className="d-flex justify-content-center pt-5">
        <NCIS_Button
          text={"Back"}
          onClick={_handleEdit}
          className="mx-2"
          fontSize={14}
          buttonColor={paleViolet}
        />
        <NCIS_Button
          text={"Share"}
          onClick={_handleShare}
          // onClick={_handleConfirm}
          className="mx-2"
          fontSize={14}
        />
      </div>
    </div>
  );
};
