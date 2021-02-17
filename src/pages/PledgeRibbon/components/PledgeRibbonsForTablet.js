import React, { useState, useRef } from "react";
import { Passers } from "prop-passer";
import {
  FacebookShareButton,
  EmailShareButton,
  TelegramShareButton,
  FacebookIcon,
  EmailIcon,
  TelegramIcon,
} from "react-share";
import domtoimage from 'dom-to-image-more';

import { NCIS_Selector } from "../../../tools/NCIS_Selector";
import { NCIS_TextBox } from "../../../tools/NCIS_TextBox";
import { NCIS_Button } from "../../../tools/NCIS_Button";
import RibbonImages from "../../../assets/RibbonImages.json";
import { violet, paleViolet } from "../../../assets/colors";
import { ThankYouCard } from "../components/pledgeForm";
import { PledgeCard } from "../components/pledgeCard";
import { ShareForms } from "../components/pledgeForm";
import { withRouter } from "react-router-dom";
import { PledgeProgress } from "../components/pledgeProgressBar";
import { SocialShare } from "./socialShareIcons";
import font from "../../../app/config/font";
import { Base_Url, webHost, webHostUi } from "../../../routes/Base_Url";
import EmailShareCard from "../../../assets/images/EmailShareCard.png";
import axios from 'axios';
import { BigPledgeCard } from "../components/BigPledgeCard";

const PledgeRibbonsForTablet = (props) => {
  const {
    _handleSelect,
    _handleSelectOption,
    menuVisible,
    _handleRibbonClick,
    _handleTextChange,
    step,
    setImgUrl,
    imgUrl,
    media,
    complete,
    _handleShare,
    _handleReview,
    showThankU,
    setShowThankU,
    _handleConfirm,
    _handleEdit,
    recipientName,
    senderName,
    cancer,
    shareImage,
    message,
    setCancerName,
    winner,
    downloadImg,
    finalImage,
  } = props;

  // const [imgUrl, setImgUrl] = useState(null);
  const [shareApp, setShareApp] = useState(null);

  const _handlePledge = () => {
    props.history.push("/");
  };
  // const setImgUrl = (img) => {
  //   setImgUrl(img);
  // };
  const handleShareApp = (app) => {
    if (app === 5) {
      setShareApp(app)
      _handleShare();

      var receiveEmail = prompt("Please enter email to share", "");

      if (receiveEmail != null && receiveEmail != "") {

        const url = `${Base_Url}uploadImage`;
        const myNode = document.getElementById('cardDivId')
        domtoimage.toPng(myNode).then(base64data => {
          axios.post(url, { ribbon: base64data })
            .then(res => {
              const shareImg = res.data.payload;
              const contentHtml1 = `<div style="width: 400px; height: 650px; background-image: url(${webHost}/${shareImg}); box-shadow: 0px 0px 8px 1px #00000033; margin: 20px; margin-left: auto; margin-right: auto;"> 
            <div style='position:relative;padding-top: 560px;' align='center'>
                <a href='${webHostUi}' style='text-decoration:none;fontSize:15px;height:28px;border-radius:14px;color:white;background-color:#fd784f !important;text-align:center;padding-left:16px;padding-right:16px;padding-top: 2px; padding-bottom: 2px;'>
                  Pledge A Ribbon
                </a>
              </div>       
            </div>`

              const bodyData = {
                receiveEmail: receiveEmail,
                subjectText: "National University Cancer Institute Singapore",
                contentHtml: contentHtml1.replace(/\s+/g, ' ').trim()
              }
              fetch(Base_Url + "share-email", {
                method: "post",
                headers: {
                  "Accept": "application/json",
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(bodyData)
              })
                .then(res => res.json())
                .then(d => console.log("data: ", d))
                .catch(error => console.error(error))

            })
        })
      } else {
        alert("Cancelled sharing!")
      }

    } else {
      setShareApp(app)
      _handleShare();
    }
  };
  return (
    <div className="pt-3 px-1 container justify-content-center">
      <div
        className={`d-flex ${window.innerWidth > 800 ? "col-8" : "col-10"
          } container justify-content-center justify-content-between`}
      >
        <div
          className="px-0 mx-0"
          style={{
            position: "absolute",
            left: 45,
            fontSize: media.tablet ? 24 : media.mobile ? 22 : 26,
            fontWeight: "bold",
            top: window.innerWidth > 800 ? 150 : 100,
            lineHeight: 1,
            color: "#d8cad8",
          }}
        >
          NCIS Ribbon Challenge 2021
          <p
            className="py-2 text-white"
            style={{ fontSize: media.tablet ? 20 : media.mobile ? 18 : 22 }}
          >
            Together, We Fight Cancer
          </p>
        </div>
        <div
          className="col-7 align-self-center pb-5 justify-content-start "
          style={{}}
        >
          <div className="col-11 pt-5" style={{}}>
            <PledgeProgress step={step} media={media} />
          </div>
          <strong
            className="px-3 py-0"
            style={{ fontSize: font.tabletBody }}
          >{`Step ${step}:`}</strong>
          {step === 1 ? (
            <div
              className="px-3 py-0"
              style={{ fontSize: 18, fontWeight: "bold" }}
            >
              Choose A Ribbon and Create Your Message
            </div>
          ) : step === 2 ? (
            <div
              className="px-3 py-0"
              style={{ fontSize: 18, fontWeight: "bold" }}
            >
              Review Your Message{" "}
            </div>
          ) : step === 3 ? (
            <div className="px-3 py-0">
              <div className="" style={{ fontSize: 18, fontWeight: "bold" }}>
                Share your message
              </div>
              <div
                className="py-0"
                style={{ fontSize: font.tabletBody, fontWeight: 600 }}
              >
                Select the following icons to share your message
              </div>
            </div>
          ) : null}
        </div>
        <div className="pt-3">
          <PledgeCardForTablet
            recipientName={recipientName}
            senderName={senderName}
            message={message}
            media={media}
            step={step}
            imgUrl={imgUrl}
            setImgUrl={setImgUrl}
            cancer={cancer}
          />
        </div>
      </div>

      <div className={` ${window.innerWidth > 1000 && "px-2"} `} style={{ paddingBottom: 52 }}>
        <Ribbon
          {...props}
          setImgUrl={setImgUrl}
          setCancerName={setCancerName}
        />
      </div>
      {step === 3 && !showThankU && (
        <SocialShare
          handleShareApp={handleShareApp}
          _handleShare={_handleShare}
          shareApp={shareApp}
          paleViolet={paleViolet}
          shareImg={shareImage}
        />
        // <ShareApp shareApp={shareApp} handleShareApp={handleShareApp} />
      )}
      {complete && step == 3 && showThankU && (
        <ThankuCard
          _handleEdit={_handleEdit}
          downloadImg={downloadImg}
          shareImage={shareImage}
          _handlePledge={_handlePledge}
          setShareApp={setShareApp}
          media={media}
          shareApp={shareApp}
          setShowThankU={setShowThankU}
          showThankU={showThankU}
          winner={winner}
          recipientName={recipientName}
          senderName={senderName}
          message={message}
          media={media}
          step={step}
          setImgUrl={setImgUrl}
          cancer={cancer}
          finalImage={finalImage}
        />
      )}
      {step == 2 && (
        <div className="d-flex justify-content-center flex-wrap">
          <div className="py-1">
            <NCIS_Button
              text={"Edit"}
              onClick={_handleEdit}
              className="mx-2"
              buttonColor={paleViolet}
              fontSize={font.button}
              media={media}
            />
          </div>
          <div className="py-1">
            <NCIS_Button
              text={"Confirm"}
              onClick={_handleConfirm}
              fontSize={font.button}
              className="mx-2"
              media={media}
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default withRouter(PledgeRibbonsForTablet);

const PledgeCardForTablet = (props) => {
  const {
    recipientName,
    senderName,
    message,
    media,
    step,
    imgUrl,
    cancer,
  } = props;
  return (
    <div
      className={` d-flex pb-1 ${window.innerWidth > 780 && media.tablet && "pt-5"
        } justify-content-center text-white`}
      id="my-node"
    >
      <img
        className="shadow img-responsive"
        src={imgUrl ? "/cardnoText.jpg" : "/card.jpg"}
        style={{
          maxWidth: window.innerWidth > 780 && media.tablet ? 330 : 280,
          borderRadius: 20,
          minHeight: window.innerWidth > 780 && media.tablet ? 325 : 275,
        }}
      />

      <div
        className={`d-flex flex-column ${window.innerWidth > 780 ? "pt-5" : "pt-4"
          } px-4 justify-content-start text-left`}
        style={{
          position: "absolute",
          width: window.innerWidth > 780 && media.tablet ? 320 : 275,
        }}
      >
        <div
          // ${step != 1 && "move-me move-me-1"}
          className={`d-flex flex-column px-2 pt-2 `}
          style={{
            minHeight: window.innerWidth > 780 && media.tablet ? 145 : 145,
            maxHeight: 145,
          }}
        >
          <span
            className=""
            style={{
              fontSize:
                window.innerWidth > 780 && media.tablet
                  ? font.tabletBody
                  : font.tabletBody,
              fontWeight: "bold",
            }}
          >
            {recipientName}
            {recipientName ? "," : null}
          </span>
          <span
            className="text-white pt-3 "
            style={{
              fontWeight: 500,
              fontSize:
                window.innerWidth > 780 && media.tablet
                  ? font.tabletBody
                  : font.tabletBody,
            }}
          >
            {message}
            {/* {message ? "!" : null} */}
          </span>
          <span
            className="pt-2 "
            style={{
              fontWeight: 600,
              fontSize:
                window.innerWidth > 780 && media.tablet
                  ? font.tabletBody
                  : font.tabletBody,
            }}
          >
            {senderName ? "Love," : null} {senderName}
          </span>
        </div>
        {imgUrl && (
          <div
            className="d-flex justify-content-end align-items-start"
            style={{
              position: "absolute",
              right: 10,
              bottom: window.innerWidth > 780 && media.tablet ? -120 : -100,
            }}
          >
            {imgUrl ? (
              <>
                <img
                  src={imgUrl}
                  alt="selected-ribbons"
                  style={{ width: 110, height: 110 }}
                />
                <svg
                  viewBox="-20 2 128 56"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    zIndex: 100,
                    position: "absolute",
                    left: -11,
                    right: 3,
                    top: -13,
                    width: 110,
                    height: 80,
                  }}
                >
                  <path
                    id="curve-path"
                    fill="none"
                    stroke="red"
                    strokeWidth={0}
                    d2="M0,58 Q50,-20 100,58"
                    d1={`M 0,120 A 32,32 0 1, 0 54,0 A 32,32 0 1, 0 -54,0`}
                    // d="M0,68 C0,68 10,34 30,30 50,20 70,30, 90,34, 99,68 Z"
                    // d="M2,62 Q50,-38 104,62"
                    // d="M 100 0 A 1 1 0 0 0 -100 0"
                    // d="M100 50C100 77.6142 77.6142 58 50 58C22.3858 58 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50"
                    d="M5.47387 40.2344C10.5 -16 117 -10.5 118.474 40.2344"
                  />

                  <text fontSize={9} fontWeight={600} fill="white">
                    <textPath
                      href="#curve-path"
                      startOffset={50 - cancer.length - 15 * 2 + "%"}
                    >
                      {cancer +
                        (cancer == "All Cancers" || !cancer ? "" : " Cancer")}
                    </textPath>
                  </text>
                </svg>{" "}
              </>
            ) : (
                <>
                  <img
                    src={imgUrl}
                    alt="selected-ribbons"
                    style={{ width: 85, height: 85 }}
                  />
                  <svg
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      position: "absolute",
                      left: 0,
                      top: -8,
                      width: 85,
                      height: 85,
                    }}
                  >
                    <path
                      id="curve-path"
                      fill="none"
                      stroke="red"
                      strokeWidth={0}
                      d="M0,48 Q50,-20 100,48"
                    />

                    <text fontSize={10} fontWeight={600} fill="white">
                      <textPath
                        href="#curve-path"
                        startOffset={50 - cancer.length - 10 * 2 + "%"}
                      >
                        Select Your Ribbon
                    </textPath>
                    </text>
                  </svg>
                </>
              )}
          </div>
        )}
        {/* {
            imgUrl &&
            <div className="d-flex justify-content-end align-items-start">
            <img
              src={imgUrl ? imgUrl : "./assets/images/ribbons/skyBlue.png"}
              alt="selected-ribbons"
              style={{ width: (window.innerWidth > 780 && media.tablet) ? 120 :100, height: (window.innerWidth > 780 && media.tablet) ? 120 :100 }}
            />
            <svg viewBox="-12 2 115 56" xmlns="http://www.w3.org/2000/svg" style={{ zIndex: 100, position: "absolute", left: -4, right: 0, top: -19, width: 88, height: 85 }} >
                <path id="curve-path" fill="none" stroke="red" strokeWidth={0}
                  d2="M0,58 Q50,-20 100,58"
                  d1={`M 0,120 A 32,32 0 1, 0 54,0 A 32,32 0 1, 0 -54,0`}  
                  // d="M0,68 C0,68 10,34 30,30 50,20 70,30, 90,34, 99,68 Z"
                  // d="M2,62 Q50,-38 104,62"
                  // d="M 100 0 A 1 1 0 0 0 -100 0"
                  // d="M100 50C100 77.6142 77.6142 58 50 58C22.3858 58 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50"
                  d="M5.47387 48.2344C10.5 -16 107 -10.5 108.474 48.2344"
                />

                <text fontSize={10} fontWeight={600} fill="white">
                  <textPath href="#curve-path" startOffset={(50 - cancer.length - 14 * 2) + "%"}>
                    {cancer+" Cancer"}
                  </textPath>
                </text>
              </svg> 
          </div>
          } */}
      </div>
    </div>
  );
};

const Ribbon = (props) => {
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
    setImgUrl,
    warning,
    media,
    setCancerName,
    imgUrl,
    cancer
  } = props;


  console.log("aayayayaya", cancer);

  const [selected, setSelected] = useState(false);
  const [nextOfStep1, setNextOfStep1] = useState(selected ? true : false);

  const [selectedId, setSelectedId] = useState(null);
  const [number, setNumber] = useState(null);
  const [close, setClose] = useState(true);
  const [rand, setRandom] = useState(0);

  const PopupDiv = (e) => document.getElementById(e.target.id + "popup");
  const RibbonDiv = (e) => document.getElementById(e.target.id);
  const prevRibbonDiv = (e) => document.getElementById(e);

  const prevSelectedRef = useRef();
  const _handleClick = (e, name, k, imgaeUrl) => {
    const min = 0;
    const max = 3;
    const rand = parseInt(min + Math.random() * (max - min));
    setRandom(rand);

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
  };

  return (
    <>
      <div>
        {!nextOfStep1 && step == 1 && (
          <>
            <div className="d-flex flex-row container flex-wrap justify-content-center px-1">
              {RibbonImages.Ribbons.map((v, k) => (
                <div
                  className="col-3 "
                  style={{ cursor: "pointer", maxWidth: 180 }}
                // onClick={() => setImgUrl(v.imgaeUrl)}
                >
                  <div
                    className="d-flex flex-row flex-wrap flex-lg-wrap flex-sm-wrap flex-md-wrap justify-content-center text-center  pb-3 pt-2"
                    id={k}
                    style={{ borderRadius: "10px", minHeight: 73 }}
                    onClick={(e) => _handleClick(e, v.name, k, v.imgaeUrl)}
                  // onMouseOver={(e) => _handleHover(e, v.name, k)}
                  // onMouseLeave={(e) => _handleLeave(e, v.name)}
                  >
                    <img
                      src={v.imgaeUrl}
                      className=""
                      alt="ribbons"
                      style={{ width: 40, height: 40 }}
                      id={k}
                    />
                    <div
                      className="d-flex justify-content-center text-center"
                      id={k}
                      style={{
                        textAlign: "center",
                        marginTop: 40,
                        fontWeight: "500",
                        fontSize: font.tabletBody,
                        position: "absolute",
                        minWidth: 160,
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
                      <div className="d-flex justify-content-between px-2">
                        <h6 className="pt-2" id={k}>
                          {v.name}
                        </h6>
                        <i
                          className="fa fa-times align-self-start "
                          onClick={() => setClose(false)}
                        ></i>
                      </div>

                      <>
                        {v.ribbonDetails ? (
                          <div
                            className="p-2"
                            id={k}
                            style={{
                              fontSize: font.mobileBody,
                              lineHeight: "22px",
                            }}
                          >
                            {v.ribbonDetails[rand]}
                            {/* {v.ribbonDetails.map((c, i) => (
                                <p key={i}>{c}</p>
                              ))} */}
                          </div>
                        ) : (
                            <div
                              className="py-2"
                              id={k}
                              style={{ fontSize: font.mobileBody }}
                            >
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Proin vel sollicitudin sapien.
                            </div>
                          )}
                      </>
                      {/* } */}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="d-flex justify-content-center pt-4">
              <NCIS_Button
                text={"Next"}
                fontSize={font.button}
                media={media}
                onClick={() => setNextOfStep1(selected ? true : false)}
              />
            </div>
          </>
        )}
        {((nextOfStep1 && step === 1) || step === 2) && (
          <div className="d-flex justify-content-center pt-4 pb-3">
            <form
              className="form-group row col-8 m-auto justify-content-center py-3"
              onSubmit={_handleReview}
            >
              <div className="col-6 py-2">
                <NCIS_TextBox
                  placeHolder={step === 2 ? recipientName : "Add Recipient Name"}
                  handleTextChange={_handleTextChange}
                  id={"recipient"}
                  required={true}
                  disabled={step === 2 && true}
                  value={recipientName}
                  media={media}
                />
              </div>
              <div className="col-6 py-2">
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
              <div className="col-12 pt-2">
                <NCIS_Selector
                  placeHolder={message !== "" ? message : "Select Message"}
                  onClick={step != 2 ? _handleSelect : undefined}
                  menuVisible={menuVisible}
                  required={true}
                  _handleSelectOption={_handleSelectOption}
                  media={media}
                />
              </div>
              {warning && step === 1 && (
                <div
                  className="d-flex text-danger justify-content-center text-center pt-2 pb-4 align-self-center"
                  style={{}}
                >
                  "Please fill out of this field"
                  <i
                    className="fa fa-exclamation px-1"
                    aria-hidden="true"
                    style={{ color: "red" }}
                  ></i>
                </div>
              )}
              {!menuVisible && step == 1 ? (
                <div className="pt-5 d-flex justify-content-center">
                  <NCIS_Button
                    text={"Review"}
                    type="submit"
                    fontSize={font.button}
                    media={media}
                  />
                </div>
              ) : null}
            </form>
          </div>
        )}
      </div>

      <div className="p-3 col-8 mx-4" id="cardDivId" style={{ zIndex: -10, position: 'absolute' }}>
        <img
          src={EmailShareCard}
          alt="EmailShareCard"
          style={{ width: 280 }}
        />
        <div
          style={{
            marginTop: -300,
            color: "white",
            paddingTop: 10,
            paddingLeft: 20,
            paddingRight: 20,
            width: 280,
          }}
        >
          <div style={{ fontSize: 13, marginTop: 10 }}>{senderName}</div>
          <div style={{ fontSize: 13, marginTop: 10 }}>{message}</div>
          <div style={{ fontSize: 13, marginTop: 10 }}>
            Love, {recipientName}
          </div>
        </div>
        <>
          <img
            src={imgUrl ? imgUrl : "./mysteryBall.png"}
            alt="selected-ribbons"
            style={{
              width: 80,
              height: 80,
              right: 20,
              bottom: -45,
              position: "absolute",
            }}
          />
          <svg
            viewBox="-12 2 115 56"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              zIndex: 100,
              position: "absolute",
              right: 30,
              bottom: -17,
              width: 76,
              height: 60,
            }}
          >
            <path
              id="curve-path"
              fill="none"
              stroke="red"
              strokeWidth={0}
              d2="M0,58 Q50,-20 100,58"
              d1={`M 0,120 A 32,32 0 1, 0 54,0 A 32,32 0 1, 0 -54,0`}
              // d="M0,68 C0,68 10,34 30,30 50,20 70,30, 90,34, 99,68 Z"
              // d="M2,62 Q50,-38 104,62"
              // d="M 100 0 A 1 1 0 0 0 -100 0"
              // d="M100 50C100 77.6142 77.6142 58 50 58C22.3858 58 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50"
              d="M5.47387 48.2344C10.5 -16 107 -10.5 108.474 48.2344"
            />
            <text fontSize={10} fontWeight={600} fill="white">
              <textPath
                href="#curve-path"
                startOffset={
                  50 - (cancer ? cancer.length : 18) - 14 * 2 + "%"
                }
              >
                {cancer + " Cancer"}
              </textPath>
            </text>
          </svg>{" "}
        </>
        <button
          onClick={() => window.location.reload()}
          style={{
            border: 1,
            borderColor: "#fd784f",
            borderRadius: 50,
            background: "#fd784f",
            color: "white",
            fontSize: 12,
            padding: 5,
            position: "absolute",
            bottom: -133,
            right: 100,
            cursor: "pointer",
          }}
        >
          Pledge A Ribbon
            </button>
      </div>


    </>
  );
};
const ThankuCard = (props) => {
  const {
    _handleEdit,
    _handlePledge,
    media,
    shareApp,
    winner,
    setShowThankU,
    shareImage,
    setImgUrl,
    step,
    finalImage,
    downloadImg, senderName, recipientName, message, imgUrl, cancerName, showThankU
  } = props;

  return (
    <>
      <div className='py-2'>
        <BigPledgeCard
          recipientName={recipientName}
          senderName={senderName}
          message={message}
          media={media}
          step={step}
          _handleImage={setImgUrl}
          imgUrl={imgUrl}
          cancer={cancerName}
          finalImage={finalImage}
        />
      </div>
      <div
        className="d-flex justify-content-center py-2 " /*style={{position:'absolute'}}*/
      >
        <div
          className="bg-light px-3 col-8 m-3 pt-0 shadow"
          style={{ borderRadius: 10 }}
        >
          <div className="d-flex justify-content-end py-2">
            <i
              className="fa fa-times align-self-start pt-1"
              onClick={() => {
                setShowThankU(false);
                props.setShareApp(null);
              }}
            ></i>
          </div>
          <div
            className="text-center"
            style={{ fontWeight: "bold", fontSize: 18 }}
          >
            Thank you for your participation!
        </div>
          {false && shareApp === 5 && (
            <div className="p-3 col-8 mx-4" id="cardDivId">
              <img
                src={EmailShareCard}
                alt="EmailShareCard"
                style={{ width: 280 }}
              />
              <div
                style={{
                  marginTop: -300,
                  color: "white",
                  paddingTop: 10,
                  paddingLeft: 20,
                  paddingRight: 20,
                  width: 280,
                }}
              >
                <div style={{ fontSize: 13, marginTop: 10 }}>{senderName}</div>
                <div style={{ fontSize: 13, marginTop: 10 }}>{message}</div>
                <div style={{ fontSize: 13, marginTop: 10 }}>
                  Love, {recipientName}
                </div>
              </div>
              <>
                <img
                  src={imgUrl ? imgUrl : "./mysteryBall.png"}
                  alt="selected-ribbons"
                  style={{
                    width: 80,
                    height: 80,
                    right: 20,
                    bottom: -45,
                    position: "absolute",
                  }}
                />
                <svg
                  viewBox="-12 2 115 56"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    zIndex: 100,
                    position: "absolute",
                    right: 30,
                    bottom: -17,
                    width: 76,
                    height: 60,
                  }}
                >
                  <path
                    id="curve-path"
                    fill="none"
                    stroke="red"
                    strokeWidth={0}
                    d2="M0,58 Q50,-20 100,58"
                    d1={`M 0,120 A 32,32 0 1, 0 54,0 A 32,32 0 1, 0 -54,0`}
                    // d="M0,68 C0,68 10,34 30,30 50,20 70,30, 90,34, 99,68 Z"
                    // d="M2,62 Q50,-38 104,62"
                    // d="M 100 0 A 1 1 0 0 0 -100 0"
                    // d="M100 50C100 77.6142 77.6142 58 50 58C22.3858 58 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50"
                    d="M5.47387 48.2344C10.5 -16 107 -10.5 108.474 48.2344"
                  />
                  <text fontSize={10} fontWeight={600} fill="white">
                    <textPath
                      href="#curve-path"
                      startOffset={
                        50 - (cancerName ? cancerName.length : 18) - 14 * 2 + "%"
                      }
                    >
                      {cancerName + " Cancer"}
                    </textPath>
                  </text>
                </svg>{" "}
              </>
              <button
                onClick={() => window.location.reload()}
                style={{
                  border: 1,
                  borderColor: "#fd784f",
                  borderRadius: 50,
                  background: "#fd784f",
                  color: "white",
                  fontSize: 12,
                  padding: 5,
                  position: "absolute",
                  bottom: -133,
                  right: 100,
                  cursor: "pointer",
                }}
              >
                Pledge A Ribbon
            </button>
            </div>
          )}
          {shareApp === 2 ? (
            <div
              className="p-3"
              style={{ fontSize: font.tabletBody, lineHeight: "24px" }}
            >
              Share the message on your Facebook to spread the word to more
              people!
              <br />
              <div style={{ fontWeight: 600 }}>Follow these steps:</div>
              <div className="p-3">
                {/* href={webHost+`/`+shareImage} download="NCIS Ribbon Challenge 2021" */}
              1. {" "}
                <span
                  style={{ fontWeight: "bold" }}
                  onClick={() => downloadImg()}
                >
                  Download
              </span>{" "}
              your pledge message onto your device
              <br />
              2. Upload your pledge message onto your Facebook. (Remember to add
              #ncisribbonchallenge in your caption)
            </div>
            </div>
          ) : shareApp === 1 ? (
            <div
              className="p-3"
              style={{ fontSize: font.tabletBody, lineHeight: "24px" }}
            >
              Share the message on your WhatsApp to spread the word to more
              people!
              <br />
              <div style={{ fontWeight: 600 }}>Follow these steps:</div>
              <div className="p-3">
                {/* 1.Right click on the Image and select "Save Image As" to save the Image on your device. */}
              1. {" "}
                <span
                  style={{ fontWeight: "bold" }}
                  onClick={() => downloadImg()}
                >
                  Download
              </span>{" "}
              your pledge message onto your device
              <br />
                <br />
              2. Go to your WhatsApp
              <br />
              3. Select your recipient and insert the Image into your message.
            </div>
            </div>
          ) : shareApp === 3 ? (
            <div
              className="p-3"
              style={{ fontSize: font.tabletBody, lineHeight: "24px" }}
            >
              Share the message on your Instagram to spread the word to more
              people!
              <br />
              <div style={{ fontWeight: 600 }}>Follow these steps:</div>
              <div className="p-3">
                1. {" "}
                <span
                  style={{ fontWeight: "bold" }}
                  onClick={() => downloadImg()}
                >
                  Download
              </span>{" "}
              your pledge message onto your device.
              <br />
              2. Upload your pledge message onto your Instagram. (Remember to add
              #ncisribbonchallenge in your caption)
            </div>
            </div>
          ) : shareApp === 4 ? (
            <div
              className="p-3"
              style={{ fontSize: font.tabletBody, lineHeight: "24px" }}
            >
              Share the message on your LinkedIn to spread the word to more
              people!
              <br />
              <div style={{ fontWeight: 600 }}>Follow these steps:</div>
              <div className="p-3">
                1.{" "}
                <span
                  style={{ fontWeight: "bold" }}
                  onClick={() => downloadImg()}
                >
                  Download
              </span>{" "}
              your pledge message onto your device.
              <br />
              2. Click "Start a Post" on Linkedin.
              <br />
              3. Upload your pledge message onto your Linkedin (Remember to add
              #ncisribbonchallenge in your caption)
            </div>
            </div>
          ) : shareApp === 5 ? (
            <div
              className="p-3"
              style={{ fontSize: font.tabletBody, lineHeight: "24px" }}
            >
              Share the message to your friends to spread the word to more people!
              <br />
              <div style={{ fontWeight: 600 }}>Follow these steps:</div>
              <div className="px-2 py-1">
                1.{" "}
                <span
                  style={{ fontWeight: "bold" }}
                  onClick={() => downloadImg()}
                >
                  Download
              </span>{" "}
              your pledge message onto your device.
              <br />
                {"2. Go to your email app and insert the image in message area."}
                <br />
                {
                  "3. Get your recipient to join you in pledging ribbon for good, by sending ribbons of their own!"
                }
              </div>
            </div>
          ) : //    <div className='p-3' style={{ fontSize: font.tabletBody, lineHeight :'24px'  }}>
                    //    Share the message via to spread the word to more people!<br />

                    //  </div>
                    shareApp === 6 ? (
                      <div
                        className="p-3"
                        style={{ fontSize: font.tabletBody, lineHeight: "24px" }}
                      >
                        Share the message on your Telegram to spread the word to more
                        people!
                        <br />
                        <div style={{ fontWeight: 600 }}>Follow these steps:</div>
                        <div className="p-3">
                          1.{" "}
                          <span
                            style={{ fontWeight: "bold" }}
                            onClick={() => downloadImg()}
                          >
                            Download
              </span>{" "}
              your pledge message onto your device.
              <br />
              2. Go to your Telegram.
              <br />
              3. Select your recipient and insert the Image into your message.
            </div>
                      </div>
                    ) : shareApp === 7 ? (
                      <div
                        className="p-3"
                        style={{ fontSize: font.tabletBody, lineHeight: "24px" }}
                      >
                        Share the message on your weChat to spread the word to more people!
                        <br />
                        <div style={{ fontWeight: 600 }}>Follow these steps:</div>
                        <div className="p-3">
                          1.{" "}
                          <span
                            style={{ fontWeight: "bold" }}
                            onClick={() => downloadImg()}
                          >
                            Download
              </span>{" "}
              your pledge message onto your device.
              <br />
              2. Go to your WeChat
              <br />
              3. Select your recipient and insert the Image into your message.
            </div>
                      </div>
                    ) : shareApp === 8 ? (
                      <div
                        className="p-3"
                        style={{ fontSize: font.tabletBody, lineHeight: "24px" }}
                      >
                        Share the message on your Line to spread the word to more people!
                        <br />
                        <div style={{ fontWeight: 600 }}>Follow these steps:</div>
                        <div className="p-3">
                          1.{" "}
                          <span
                            style={{ fontWeight: "bold" }}
                            onClick={() => downloadImg()}
                          >
                            Download
              </span>{" "}
              your pledge message onto your device.
              <br />
              2. Go to your Line
              <br />
              3. Select your recipient and insert the Image into your message.
            </div>
                      </div>
                    ) : (
                            ""
                          )}
          {winner ? (
            <div className="d-flex">
              <div className="p-2 col-8">
                <div
                  className="py-2"
                  style={{ fontSize: 18, fontWeight: 600, lineHeight: "24px" }}
                >
                  Congratulations!
              </div>
                <div className="py-2" style={{ fontSize: font.tabletBody }}>
                  You have won the NCIS Ribbon Challenge mystery Image!
                <br />
                Click on to enter your particulars and we will get in touch with
                you soon. Thank you for your support!
              </div>
              </div>
              <div className="align-self-center">
                <img src={"/mysteryRibbon.jpeg"} style={{ width: 120 }} />
              </div>
            </div>
          ) : (
              <p
                className="p-3"
                style={{ fontSize: font.tabletBody, lineHeight: "24px" }}
              >
                Don’t stop here, you can do more by pledging again!
                <br />
            Alternatively, join us at our health talks to know about cancer
            prevention. <a href="https://tinyurl.com/y36vf922" target="_blank">Click here</a> to register now . Together, We Fight Cancer
              </p>
            )}

          <div className="d-flex justify-content-center text-left">
            <div className="p-2  d-flex justify-content-center">
              <NCIS_Button
                text={"Pledge Another"}
                onClick={() => window.location.reload()}
                className="mx-2"
                media={media}
                width={200}
                fontSize={font.button}
              />
            </div>
            {winner ? (
              <div className="p-2 d-flex justify-content-center">
                <NCIS_Button
                  text={"Back To Home"}
                  onClick={() => {
                    var win = window.open(
                      "https://form.gov.sg/5fffb109fa1b62001210c2d9",
                      "_blank"
                    );
                    win.focus();
                  }}
                  className="mx-2"
                  buttonColor={violet}
                  width={200}
                  fontSize={font.button}
                />
              </div>
            ) : (
                <div className="p-2 d-flex justify-content-center">
                  <NCIS_Button
                    text={"Back To Home"}
                    onClick={_handlePledge}
                    className="mx-2"
                    buttonColor={violet}
                    media={media}
                    width={200}
                    fontSize={font.button}
                  />
                </div>
              )}
          </div>
        </div>
      </div>
    </>
  );
};
