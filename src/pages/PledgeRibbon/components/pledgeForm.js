import React, { useEffect, useRef, useState } from "react";
import { withRouter } from "react-router-dom";
import { Passers } from "prop-passer";
import {
  FacebookShareButton,
  EmailShareButton,
  TelegramShareButton,
  FacebookIcon, LineIcon,
  EmailIcon,
  LinkedinIcon, WhatsappIcon, LinkedinShareButton
} from "react-share";

import { NCIS_Selector } from "../../../tools/NCIS_Selector";
import { NCIS_TextBox } from "../../../tools/NCIS_TextBox";
import { NCIS_Button } from "../../../tools/NCIS_Button";
import RibbonImages from "../../../assets/RibbonImages.json";
import { violet, paleViolet } from "../../../assets/colors";
import { SocialShare } from "./socialShareIcons";

const PledgeForm = (props) => {
  const {
    _handleSelect,
    _handleSelectOption,
    menuVisible,
    _handleRibbonClick,
    _handleTextChange,
    step, complete,
    _handleReview,
    _handleConfirm,
    _handleEdit,
    recipientName,
    senderName,
    message,
    _handleShare,
    media, shareImage,
    _handleImage, warning,winner,imgUrl
  } = props;
  const [shareApp, setShareApp] = useState(null);
  const handleShareApp = (app) => {
    setShareApp(app == shareApp ? null : app);
  };
  const _handlePledge = () => {
    props.history.push("/");
  };


  return (
    <div className="py-2">
      <form>
        <div className='pt-1'>
          <strong>{step && `Step ${step}:`}</strong>
        </div>
        <label className='pb-2' style={{ fontWeight: "bold", fontSize: 20 }}>
          {step === 1
            ? "Choose Your Ribbon and Create Your Message"
            : step === 2
              ? "Review Your Message"
              : (step === 3) ? "Share Your Message" : ""}
        </label>
        <br />
        {(step === 3 && !complete) &&
          "Select the following icons to share your message"}
        {step === 1 && <PledgeRibbons {...props} />}
        {/* //  _handleSelect={_handleSelect} _handleRibbonClick={_handleRibbonClick} menuVisible={menuVisible} */}
        {(step === 3 && complete) ? (
          <ThankYouCard _handlePledge={_handlePledge} shareApp={shareApp} winner={winner} />
        ) : (step === 3 ) ? (
          <div className='d-flex justify-content-center'>
            <div className='px-2 pt-5' style={{ fontWeight: 600 }}>Share Via:</div>
            <SocialShare
              handleShareApp={handleShareApp}
              _handleShare={_handleShare}
              shareApp={shareApp}
              paleViolet={paleViolet}
              shareImg={shareImage}

            />
          </div>

        ) : (step === 2 || step === 1) && (
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
            {/* {
              ((warning && (!recipientName || !senderName)) && step === 1) && (
                <div className="d-flex text-danger justify-content-center text-center pt-2 align-self-center" style={{}}>
                  <i className="fa fa-exclamation" aria-hidden="true" style={{ color:'red' }}></i>
                    Please fill out of this field!
                </div>
              )} */}
            <div className="col-12 pt-4">
              <NCIS_Selector
                placeHolder={message !== "" ? message : "Select Message"}
                onClick={step != 2 ? _handleSelect : undefined}
                menuVisible={menuVisible}
                _handleSelectOption={_handleSelectOption}
                media={media}
              />
            </div>
            {
              ((warning ) && step === 1) && (
                <div className="d-flex text-danger justify-content-center text-center pt-3 align-self-center" style={{}}>
                  
                  {
                    imgUrl ? "Please fill out of this field" : (!imgUrl && (!recipientName || !senderName || !message)) ? "Please Select your Ribbon and fill out of this field " : "Please Select your Ribbon" 
                  }
                    <i className="fa fa-exclamation px-1" aria-hidden="true" style={{ color:'red' }}></i>
                </div>
              )}
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
  const { _handleRibbonClick, menuVisible, _handleImage, setCancerName } = props;
  const [selected, setSelected] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [number, setNumber] = useState(null);
  const [cancerDetails, setCancerDetails] = useState(["Lorem ipsum dolor sit amet, consectetur adipiscing elit.Proin vel sollicitudin sapien"]);
const [ rand, setRandom ]=useState(0);
  const PopupDiv = (e) => document.getElementById(e.target.id + "popup");
  const RibbonDiv = (e) => document.getElementById(e.target.id);
  const prevRibbonDiv = (e) => document.getElementById(e);

  const prevSelectedRef = useRef();

  const _handleClick = (e, img, cancer) => {
    prevSelectedRef.current = selectedId;
    const prevSelectedId = prevSelectedRef.current;

    setSelected(true);
    setSelectedId(e.target.id);
    _handleImage(img)
    setCancerName(cancer)
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
    setNumber(k);
    if (selected === false) {
      if (RibbonDiv(e)) RibbonDiv(e).style.background = "#cecece";
      if (PopupDiv(e)) {
        PopupDiv(e).style.visibility = "visible";
      } else {
        return;
      }
    }
    if (name == "All Cancers") {
      const min = 0;
      const max = 10
      const rand = parseInt(min + Math.random() * (max - min));
      let cancerDetail = RibbonImages.Ribbons.filter((c, indx) => c.name != "All Cancers" && indx == rand).map(cancer => cancer.ribbonDetails)
      setCancerDetails(cancerDetail)
    }
    const min = 0;
    const max = 3;
    const rand = parseInt(min + Math.random() * (max - min)); 
    setRandom(rand)

  };
  const _handleLeave = (e) => {
    if (selected === false) {
      RibbonDiv(e).style.background = "#e6e0e6";
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
        // onClick={() => _handleImage(v.imgaeUrl)}
        >
          <div
            className="d-flex py-1"
            id={k}
            style={{ borderRadius: "50px" }}
            onClick={(e) => _handleClick(e, v.imgaeUrl, v.name)}
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
              <h6 className='px-2' id={k}>{v.name}</h6>
              {/* {
                (v.name == "All Cancers") ?
                  <>
                    {
                      cancerDetails.length >0 ?
                        <div className="px-2" id={k} style={{ fontSize: 12 }}>
                          {cancerDetails.map((c, i) => (
                            <p key={i}>{c}</p>
                          ))}
                        </div> :
                        <div className="px-2" id={k} style={{ fontSize: 12 }}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Proin vel sollicitudin sapien.
                    </div>
                    }

                  </>
                  : */}
              <>
                {v.ribbonDetails ? (
                  <div className="px-2" id={k} style={{ fontSize: 12 }}>
                    {
                      v.ribbonDetails[rand]
                    }
                  </div>
                ) : (
                    <div className="px-2" id={k} style={{ fontSize: 12 }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin vel sollicitudin sapien.
                    </div>
                  )}</>
              {/* } */}

            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export const ThankYouCard = (props) => {
  const { _handleEdit, _handlePledge, shareApp,winner } = props;

  return (
    <div className="d-flex justify-content-center px-2 " style={{ position:'absolute' }}>
      <div
        className="bg-light p-3 col-8 my-3 mx-4 shadow"
        style={{ borderRadius: 10 }}
      >
        <div
          className="text-center"
          style={{ fontWeight: "bold", fontSize: 18 }}
        >
          Thank you for your participation!
        </div>
        {
          shareApp === 2 ?
            <div className='p-1' style={{ fontSize: 13 }}>
              Share the message on your Facebook to spread the word to more people!<br />
              <div style={{ fontWeight: 600 }}>Follow these steps:</div>
              <div className='px-2 py-1'>
                1.Download your pledge message onto your device​<br />
                2.Upload your pledge message onto your Facebook. (Remember to add #ncisribbonchallenge in your caption)

              </div>

            </div> :
            shareApp === 1 ?
            <div className='p-1' style={{ fontSize: 13 }}>
              Share the message on your WhatsApp  to spread the word to more people!<br />
              <div style={{ fontWeight: 600 }}>Follow these steps:</div>
              <div className='px-2 py-1'>
                1.Right click on the GIF and select "Save Image As" to save the GIF on your device.
                <br />
                2.Go to your WhatsApp
                <br />
                3.Select your recipient and insert the GIF into your message.
              </div>

            </div> :
            shareApp === 3 ?
            <div className='p-1' style={{ fontSize: 13 }}>
              Share the message on your Instagram  to spread the word to more people!<br />
              <div style={{ fontWeight: 600 }}>Follow these steps:</div>
              <div className='px-2 py-1'>
                1.Download your pledge message onto your device.
                <br />
                2.Upload your pledge message onto your Instagram. (Remember to add #ncisribbonchallenge in your caption)​
              </div>

            </div> :
            shareApp === 4 ?
            <div className='p-1' style={{ fontSize: 13 }}>
            Share the message on your LinkIn  to spread the word to more people!<br />
            <div style={{ fontWeight: 600 }}>Follow these steps:</div>
            {/* <div className='px-2 py-1'>
              1.Right click on the GIF and select "Save Image As" to save the GIF on your device.
              <br />
              2.Go to your WhatsApp
              <br />
              3.Select your recipient and insert the GIF into your message.
            </div> */}

          </div>:
          shareApp === 5 ?
          <div className='p-1' style={{ fontSize: 13 }}>
          Share the message via to spread the word to more people!<br />
          {/* <div style={{ fontWeight: 600 }}>Follow these steps:</div>
          <div className='px-2 py-1'>
            1.Download your pledge message onto your device.
            <br />
            2.Upload your pledge message onto your Instagram. (Remember to add #ncisribbonchallenge in your caption)​
          </div> */}

        </div> :
        shareApp === 6 ?
        <div className='p-1' style={{ fontSize: 13 }}>
          Share the message on your Telegram  to spread the word to more people!<br />
          <div style={{ fontWeight: 600 }}>Follow these steps:</div>
          <div className='px-2 py-1'>
            1.Right click on the GIF and select "Save Image As" to save the GIF on your device.
            <br />
            2.Go to your Telegram.
            <br />
            3.Select your recipient and insert the GIF into your message.
          </div>

        </div>:
        shareApp === 7 ?
        <div className='p-1' style={{ fontSize: 13 }}>
          Share the message on your weChat  to spread the word to more people!<br />
          <div style={{ fontWeight: 600 }}>Follow these steps:</div>
          <div className='px-2 py-1'>
            1.Right click on the GIF and select "Save Image As" to save the GIF on your device.
            <br />
            2.Go to your WeChat
            <br />
            3.Select your recipient and insert the GIF into your message.​
          </div>

        </div>:
        shareApp === 8 ?
        <div className='p-1' style={{ fontSize: 13 }}>
          Share the message on your Line to spread the word to more people!<br />
          <div style={{ fontWeight: 600 }}>Follow these steps:</div>
          <div className='px-2 py-1'>
            1.Right click on the GIF and select "Save Image As" to save the GIF on your device.
            <br />
            2.Go to your Line
            <br />
            3.Select your recipient and insert the GIF into your message.
          </div>

        </div>:
        ""

        }
        {
          winner ?
          <div className='d-flex'>
            <div className='p-2 col-8'>
              <div className='py-2' style={{ fontSize:14, fontWeight:600 }}>
              Congratulations!
              </div>
              <div className='py-2' style={{ fontSize:12 }}>
              You have won the NCIS Ribbon Challenge mystery gift!
              <br />
              Click on to enter your particulars and we will get in touch with you soon. Thank you for your support!
              </div>
            </div>
            <div className='align-self-center'>
              <img src={"/mysteryRibbon.jpeg"} style={{ width:120 }} />
            </div>
          </div>:
          <p className="pt-2 px-2" style={{ fontSize: 13 }}>
          Don’t stop here, you can do more by pledging again!
          <br />
          Alternatively, join us at our health talks to know about cancer prevention. Click here to register now .

          Together, We Fight Cancer!
        </p>
        }
        
        <div className="d-flex justify-content-center text-left mx-2">
          <div className="pb-2  d-flex justify-content-center">
            <NCIS_Button
              text={"Pledge Another"}
              onClick={() => window.location.reload()}
              className="mx-1"
            />
          </div>
          <div className="pb-2 d-flex justify-content-center">
            <NCIS_Button
              text={"Back To Home"}
              onClick={_handlePledge}
              className="mx-1"
              buttonColor={violet}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
