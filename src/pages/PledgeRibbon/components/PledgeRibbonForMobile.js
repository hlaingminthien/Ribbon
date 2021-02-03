import React, { useState, useRef } from "react";
import { NCIS_Selector } from "../../../tools/NCIS_Selector";
import { NCIS_TextBox } from "../../../tools/NCIS_TextBox";
import { NCIS_Button } from "../../../tools/NCIS_Button";
import RibbonImages from "../../../assets/RibbonImages.json";
import { violet, paleViolet } from "../../../assets/colors";
import { ThankYouCard } from "../components/pledgeForm";
import { PledgeCard } from "../components/pledgeCard";
import { ShareForms } from "../components/pledgeForm";
import { withRouter } from "react-router-dom";

const PledgeRibbonsForMobile = (props) => {
  const {
    _handleSelect,
    _handleSelectOption,
    menuVisible,
    _handleRibbonClick,
    _handleTextChange,
    step,
    media,
    _handleReview,
    _handleConfirm,
    _handleEdit,
    recipientName,
    senderName,
    message,
  } = props;
  const [complete, setComplete] = useState(false);
  const [shareApp, setShareApp] = useState(null);
  const _handleShare = () => {
    setComplete(true);
  };
  const _handlePledge = () => {
    props.history.push("/");
  };
  const handleShareApp = (app) => {
    setShareApp(app == shareApp ? null : app);
  };
  return (
    <div>
      <strong
        className="px-3 py-0"
        style={{ fontSize: 12 }}
      >{`Step ${step}:`}</strong>
      {step === 1 ? (
        <div className="px-3 py-0" style={{ fontSize: 14, fontWeight: "bold" }}>
          Choose Your Ribbon and Create Your Message
        </div>
      ) : step === 2 ? (
        <div className="px-2 py-0" style={{ fontSize: 14, fontWeight: "bold" }}>
          Review Your Ribbon{" "}
        </div>
      ) : step === 3 ? (
        <div className="px-3 py-0">
          <div className="" style={{ fontSize: 14, fontWeight: "bold" }}>
            Share your message
          </div>
          <div className=" py-0" style={{ fontSize: 11, fontWeight: 600 }}>
            Click Back to edit or select on the following icons to share your
            message
          </div>
        </div>
      ) : null}

      <Ribbons {...props} complete={complete} handleShareApp={handleShareApp} shareApp={shareApp} />
      {step == 2 && (
        <div className="d-flex justify-content-center flex-wrap">
          <div className="py-1">
            <NCIS_Button
              text={"Edit"}
              onClick={_handleEdit}
              className="mx-2"
              buttonColor={paleViolet}
            />
          </div>
          <div className="py-1">
            <NCIS_Button
              text={"Confirm"}
              onClick={_handleConfirm}
              className="mx-2"
            />
          </div>
        </div>
      )}
      {step == 3 && !complete && (
        <div className="d-flex justify-content-center">
          <NCIS_Button
            text={"Back"}
            onClick={_handleEdit}
            className="mx-2"
            buttonColor={paleViolet}
          />
          <NCIS_Button
            text={"Share"}
            onClick={_handleShare}
            // onClick={_handleConfirm}
            className="mx-2"
          />
        </div>
      )}
      {complete && step == 3 && (
        <ThankuCard _handleEdit={_handleEdit} _handlePledge={_handlePledge} />
      )}
    </div>
  );
};
export default withRouter(PledgeRibbonsForMobile);

const Ribbons = (props) => {
  const {
    _handleRibbonClick,
    step,
    _handleTextChange,
    recipientName,
    complete,
    senderName,
    message,
    _handleSelect,
    menuVisible,
    _handleSelectOption,
    _handleReview,
    _handleEdit,
    _handleConfirm,
    handleShareApp,
    shareApp,
    media,
  } = props;
  const [selected, setSelected] = useState(false);
  const [nextOfStep1, setNextOfStep1] = useState(selected ? true : false);

  const [selectedId, setSelectedId] = useState(null);
  const [number, setNumber] = useState(null);
  const [imgUrl, setImgUrl] = useState([]);
  const [cancerName, setCancerName] = useState(null);
  const [close, setClose] = useState(true);

  const PopupDiv = (e) => document.getElementById(e.target.id + "popup");
  const RibbonDiv = (e) => document.getElementById(e.target.id);
  const prevRibbonDiv = (e) => document.getElementById(e);

  const prevSelectedRef = useRef();
  const _handleClick = (e, name, k, imgaeUrl) => {
    prevSelectedRef.current = selectedId;
    const prevSelectedId = prevSelectedRef.current;

    setSelected(true);
    setSelectedId(e.target.id);
    setNumber(k);
    setImgUrl(imgaeUrl);
    setCancerName(name);
    setClose(number == k ? false : true);
    if (selected === false) {
      RibbonDiv(e).style.background = "#cecece";
      if (PopupDiv(e)) {
        PopupDiv(e).style.visibility = "visible";
      } else {
        return;
      }
    }

    RibbonDiv(e).style.background = "rgba(64,64,64,0.2)";
    RibbonDiv(e).style.color = "#ffffff";
    if (selectedId != null) {
      prevRibbonDiv(prevSelectedId).style.background = "none";
      prevRibbonDiv(prevSelectedId).style.color = "#000000";
      _handleRibbonClick(false);
    }
    // if (number == k) PopupDiv(e).style.visibility = "hidden";
    // _handleRibbonClick(true);
  };
console.log("SH",shareApp)
  return (
    <div>
      {!nextOfStep1 && step == 1 && (
        <>
          <div className="d-flex flex-row flex-wrap justify-content-center px-1">
            {RibbonImages.Ribbons.map((v, k) => (
              <div className="col-4 " style={{ cursor: "pointer" }}>
                <div
                  className="text-center"
                  id={k}
                  style={{ borderRadius: "10px", minHeight: 70 }}
                  onClick={(e) => _handleClick(e, v.name, k, v.imgaeUrl)}
                  // onMouseOver={(e) => _handleHover(e, v.name, k)}
                  // onMouseLeave={(e) => _handleLeave(e, v.name)}
                >
                  <img
                    src={v.imgaeUrl}
                    alt="ribbons"
                    style={{ width: 40 }}
                    id={k}
                  />
                  <div
                    className="d-flex justify-content-center text-center"
                    id={k}
                    style={{
                      textAlign: "center",
                      marginTop: 3,
                      fontWeight: "500",
                      fontSize: 11,
                      position: "absolute",
                      width: 100,
                    }}
                  >
                    {v.name}
                  </div>
                </div>
                {number == k && close && (
                  <div
                    className="shadow p-2"
                    id={k + "popup"}
                    style={{
                      position: "absolute",
                      maxWidth: 300,
                      minWidth: 100,
                      borderRadius: 20,
                      background: "white",
                      zIndex: 200,
                    }}
                    // onMouseLeave={(e) => _handleLeave(e)}
                    // onMouseOver={(e) => _handleHover(e)}
                  >
                    <div className="d-flex justify-content-between px-1">
                      <h6 className="pt-2" id={k}>
                        {v.name}
                      </h6>
                      <i
                        className="fa fa-times align-self-start "
                        onClick={() => setClose(false)}
                      ></i>
                    </div>
                    {v.ribbonDetails ? (
                      <div id={k} style={{ fontSize: 12 }}>
                        {v.ribbonDetails.map((c, i) => (
                          <p key={i}>{c}</p>
                        ))}
                      </div>
                    ) : (
                      <div id={k} style={{ fontSize: 12 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin vel sollicitudin sapien.
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center pt-3">
            <NCIS_Button
              text={"Next"}
              onClick={() => setNextOfStep1(selected ? true : false)}
            />
          </div>
        </>
      )}
      {step === 3 && !complete && (
        <div className="d-flex justify-content-center m-2">
          <div
            className=" shadow p-3 align-self-center text-center mx-1"
            style={{ borderRadius: 23, width: 52, height: 52,backgroundColor: shareApp == 1 ? "rgba(22, 16, 92)" : "#fff", }}
            onClick={() => handleShareApp(1)} //gmail
          >
            <i
              className="fa fa-envelope-o"
              aria-hidden="true"
              style={{ fontSize: 20,color: shareApp == 1 ? "#fff" : "rgba(22, 16, 92)", }}
              
            ></i>
          </div>
          <div
            className=" shadow p-3 align-self-center text-center mx-1"
            style={{ borderRadius: 23, width: 52,backgroundColor: shareApp == 2 ? "rgba(22, 16, 92)" : "#fff", height: 52 }}
            onClick={() => handleShareApp(2)} //facebook
          >
            <i
              className="fa fa-facebook"
              aria-hidden="true"
              style={{ color: shareApp == 2 ? "#fff" : "rgba(22, 16, 92)", fontSize: 20 }}
            ></i>
          </div>
          <div
            className=" shadow p-3 align-self-center text-center mx-1"
            style={{ borderRadius: 23, width: 52,backgroundColor: shareApp == 3 ? "rgba(22, 16, 92)" : "#fff", height: 52 }}
            onClick={() => handleShareApp(3)} //insta
          >
            <i
              className="fa fa-instagram"
              aria-hidden="true"
              style={{ color: shareApp == 3 ? "#fff" : "rgba(22, 16, 92)", fontSize: 20 }}
            ></i>
          </div>
          <div
            className=" p-3 shadow align-self-center text-center mx-1"
            style={{ borderRadius: 23, width: 52,backgroundColor: shareApp == 4 ? "rgba(22, 16, 92)" : "#fff", height: 52 }}
            onClick={() => handleShareApp(4)} //telegram
          >
            <i
              className="fa fa-telegram"
              aria-hidden="true"
              style={{ color: shareApp == 4 ? "#fff" : "rgba(22, 16, 92)",fontSize: 20 }}
            ></i>
          </div>
        </div>
      )}
      {(step == 2 ||
        (step == 3 && !complete) ||
        (step == 1 && nextOfStep1)) && (
        <div>
          <div className=" d-flex py-3 justify-content-center text-white">
            <img
              className="img-responsive"
              src={"/card.png"}
              style={{ maxWidth: 230, borderRadius: 20 }}
            />

            <div
              className="d-flex flex-column pt-5 justify-content-start text-left"
              style={{ position: "absolute", width: 200 }}
            >
              <div
                className={`d-flex flex-column ${
                  step != 1 && "move-me move-me-1"
                } `}
                style={{ minHeight: 90 }}
              >
                <span className="" style={{ fontSize: 14, fontWeight: "bold" }}>
                  {recipientName}
                  {recipientName ? "," : null}
                </span>
                <span
                  className="text-white pt-2"
                  style={{ fontWeight: 500, fontSize: 12, lineHeight: 1.5 }}
                >
                  {message}
                  {message ? "!" : null}
                </span>
                <span className="pt-3" style={{fontSize: 13, fontWeight: 600 }}>
                  {senderName ? "Love," : null} {senderName}
                </span>
              </div>

              {imgUrl && (
                <div className="d-flex justify-content-end align-self-end ">
                  {/* <div style={{}}>
                                   
                                    </div> */}

                  <img
                    src={imgUrl}
                    alt="selected-ribbons"
                    style={{ width: 78, height: 78 }}
                  />
                </div>
              )}
            </div>
          </div>
          {((selected && step === 1) || step === 2) && (
            <form
              className="form-group row m-auto justify-content-center py-1"
              onSubmit={_handleReview}
            >
              <div className="col-6">
                <NCIS_TextBox
                  placeHolder={
                    step === 2 ? recipientName : "Add Recipient Name"
                  }
                  handleTextChange={_handleTextChange}
                  id={"recipient"}
                  required={true}
                  disabled={step === 2 && true}
                  value={recipientName}
                  media={media}
                />
              </div>
              <div className="col-6">
                <NCIS_TextBox
                  placeHolder={step === 2 ? senderName : "Add Sender Name"}
                  handleTextChange={_handleTextChange}
                  id={"sender"}
                  required={true}
                  value={senderName}
                  disabled={step === 2 && true}
                  media={media}
                />
              </div>
              <div className="col-12 pt-2 pb-3">
                <NCIS_Selector
                  placeHolder={message !== "" ? message : "Select Message"}
                  onClick={step != 2 ? _handleSelect : undefined}
                  menuVisible={menuVisible}
                  required={true}
                  _handleSelectOption={_handleSelectOption}
                  media={media}
                />
              </div>
              {!menuVisible && step == 1 ? (
                <NCIS_Button text={"Review"} type="submit" />
              ) : null}
            </form>
          )}
        </div>
      )}
    </div>
  );
};

const ThankuCard = (props) => {
  const { _handleEdit, _handlePledge } = props;

  return (
    <div className="d-flex justify-content-center text-center">
      <div className="bg-light p-3 col-8 m-3" style={{ borderRadius: 10 }}>
        <div className="" style={{ fontWeight: "bold", fontSize: 14 }}>
          Thank for your Pledging
        </div>
        <p className="p-2" style={{ fontSize: 11 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel
          sollicitudin sapien. Suspendisse eu ornare erat. Nullam tristique
          augue sit amet lorem elementum hendrerit eu et nulla. Nullam in
          posuere mauris, eu fringilla magna. Praesent a sodales leo, quis
          feugiat eros.
        </p>

        <div className="p-2  d-flex justify-content-center">
          <NCIS_Button
            text={"Pledge Another"}
            onClick={() => window.location.reload()}
            className="mx-2"
            fontSize={11}
          />
        </div>
        <div className="p-2 d-flex justify-content-center">
          <NCIS_Button
            text={"Back To Home"}
            onClick={_handlePledge}
            className="mx-2"
            buttonColor={violet}
            fontSize={11}
          />
        </div>
      </div>
    </div>
  );
};
