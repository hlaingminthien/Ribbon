import React, { useState, useRef } from "react";
import { Passers } from "prop-passer";
import {
  FacebookShareButton,
  EmailShareButton,
  TelegramShareButton,
  FacebookIcon,
  EmailIcon,LinkedinIcon,
  TelegramIcon,LineIcon,WhatsappIcon
} from "react-share";
import {Base_Url} from "../../../routes/Base_Url"
import { NCIS_Selector } from "../../../tools/NCIS_Selector";
import { NCIS_TextBox } from "../../../tools/NCIS_TextBox";
import { NCIS_Button } from "../../../tools/NCIS_Button";
import RibbonImages from "../../../assets/RibbonImages.json";
import { violet, paleViolet } from "../../../assets/colors";
import { ThankYouCard } from "../components/pledgeForm";
import { PledgeCard } from "../components/pledgeCard";
import { ShareForms } from "../components/pledgeForm";
import { withRouter } from "react-router-dom";
import {SocialShare} from "./socialShareIcons";

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
    senderName,setCancerName,winner,
    message, shareImage,cancer,setImgUrl,imgUrl,complete,_handleShare
  } = props;
  // const [complete, setComplete] = useState(false);
  const [shareApp, setShareApp] = useState(null);
  // const _handleShare = () => {
  //   setComplete(true);
  // };
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
          Review Your Message{" "}
        </div>
      ) : step === 3 ? (
        <div className="px-3 py-0">
          <div className="px-3" style={{ fontSize: 14, fontWeight: "bold" }}>
            Share your message
          </div>
          <div className="px-3 py-0" style={{ fontSize: 11, fontWeight: 600 }}>
          Select the following icons to share your message
          </div>
        </div>
      ) : null}

      <Ribbons {...props} complete={complete} _handleShare={_handleShare} handleShareApp={handleShareApp} shareApp={shareApp} shareImg={shareImage} cancer={cancer} imgUrl={imgUrl} setImgUrl={setImgUrl} setCancerName={setCancerName} />
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
      {complete && step == 3 && (
        <ThankuCard _handleEdit={_handleEdit} _handlePledge={_handlePledge} shareApp={shareApp} winner={winner} />
      )}
    </div>
  );
};
export default withRouter(PledgeRibbonsForMobile);

const Ribbons = (props) => {
  const { _handleRibbonClick,
    step,
    _handleTextChange,
    recipientName,
    complete,
    senderName, shareImg,
    message,
    _handleSelect,
    menuVisible,
    _handleSelectOption,
    _handleReview,
    _handleEdit,
    _handleConfirm,
    handleShareApp,
    shareApp,cancer,setCancerName,setImgUrl,imgUrl,
    media, paleViolet, _handleShare, url = `${Base_Url}${shareImg}`,//String(window.location),
    title = "National University Cancer Institute Singapore",
    shareImage = `${Base_Url}${shareImg}`,
    size = "2.5rem", } = props;

  const ShareList = Passers({
    url,
    className: "",
  })({
    className: "",
    // title: `Share ${String(window.location)}`,
  })("li");
  const [selected, setSelected] = useState(false);
  const [nextOfStep1, setNextOfStep1] = useState(selected ? true : false);

  const [selectedId, setSelectedId] = useState(null);
  const [number, setNumber] = useState(null);
  const [cancerDetails,setCancerDetails]=useState(["Lorem ipsum dolor sit amet, consectetur adipiscing elit.Proin vel sollicitudin sapien"]);

  // const [cancerName, setCancerName] = useState(null);
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
    if(name == "All Cancers"){
      const min = 0;
      const max = 10
      const rand =parseInt(min + Math.random() * (max - min));
      let cancerDetail = RibbonImages.Ribbons.filter((c, indx) => c.name != "All Cancers" && indx == rand).map(cancer => cancer.ribbonDetails)
      setCancerDetails(cancerDetail)
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

  return (
    <div>
      {!nextOfStep1 && step == 1 && (
        <>
          <div className="d-flex flex-row flex-wrap justify-content-center px-1">
            {RibbonImages.Ribbons.map((v, k) => (
              <div className="col-4 " style={{ cursor: "pointer" }} key={k}>
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
                    {/* {
                      (v.name == "All Cancers") ?
                        <>
                          {
                            cancerDetails.length > 0 ?
                              <div className="p-2" id={k} style={{ fontSize: 12 }}>
                                {cancerDetails.map((c, i) => (
                                  <p key={i}>{c}</p>
                                ))}
                              </div>
                              :
                              <div className="p-2" id={k} style={{ fontSize: 12 }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Proin vel sollicitudin sapien.
                              </div>
                          }

                        </> : */}
                        <>
                          {v.ribbonDetails ? (
                            <div className="p-2" id={k} style={{ fontSize: 12 }}>
                              {v.ribbonDetails.map((c, i) => (
                                <p key={i}>{c}</p>
                              ))}
                            </div>
                          ) : (
                              <div className="py-2" id={k} style={{ fontSize: 12 }}>
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
          <div className="d-flex justify-content-center pt-3">
            <NCIS_Button
              text={"Next"}
              onClick={() => setNextOfStep1(selected ? true : false)}
            />
          </div>
        </>
      )}
      {step === 3 && !complete && (
        <div className=''>
        <SocialShare
              handleShareApp={handleShareApp}
              _handleShare={_handleShare}
              shareApp={shareApp}
              paleViolet={paleViolet}
              shareImg={shareImage}

            />
        </div>

      )}
      {(step == 2 ||
        (step == 3 && !complete) ||
        (step == 1 && nextOfStep1)) && (
          <div className='py-2'>
            <div className=" d-flex py-3 justify-content-center text-white" id="my-node">
              <img
                className="img-responsive"
                src={imgUrl? "/cardnoText.jpg" : "/card.jpg"}
                style={{ maxWidth: 260, borderRadius: 20, maxHeight: 280 }}
              />
              <div
                className="d-flex flex-column pt-4 px-3 justify-content-start text-left"
                style={{ position: "absolute", width: 260 }}
              >
                <div
                  className={`d-flex flex-column pt-3 ${step != 1 && "move-me move-me-2"
                    } `}
                  style={{ minHeight: 180 }}
                >
                  <span className="" style={{ fontSize: 14, fontWeight: "bold" }}>
                    {recipientName}
                    {recipientName ? "," : null}
                  </span>
                  <span
                    className="text-white pt-3"
                    style={{ fontWeight: 500, fontSize: 13, lineHeight: 1.5 }}
                  >
                    {message}
                    {/* {message ? "!" : null} */}
                  </span>
                  <span className="pt-3" style={{ fontSize: 13, fontWeight: 600 }}>
                    {senderName ? "Love," : null} {senderName}
                  </span>
                </div>
                {imgUrl && (
          <div className="d-flex justify-content-end align-items-start" style={{ position: "absolute", right: 10, bottom: -50 }}>

            
            {imgUrl ? <>
            <img
              src={imgUrl}
              alt="selected-ribbons"
              style={{ width: 82, height: 82 }}
            />
              <svg viewBox="-3 2 105 49" xmlns="http://www.w3.org/2000/svg" style={{ zIndex: 100, position: "absolute", left: -4, right: 0, top: -19, width: 88, height: 85 }} >
                <path id="curve-path" fill="none" stroke="red" strokeWidth={0}
                  d2="M0,68 Q50,-20 100,68"
                  d1={`M 0,100 A 32,32 0 1, 0 64,0 A 32,32 0 1, 0 -64,0`}  
                  // d="M0,68 C0,68 10,34 30,30 50,20 70,30, 90,34, 99,68 Z"
                  // d="M2,62 Q50,-38 104,62"
                  // d="M 100 0 A 1 1 0 0 0 -100 0"
                  // d="M100 50C100 77.6142 77.6142 58 50 58C22.3858 58 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50"
                  d="M5.47387 48.2344C10.5 -16 97 -10.5 98.474 48.2344"
                />

                <text fontSize={10} fontWeight={600} fill="white">
                  <textPath href="#curve-path" startOffset={(50 - cancer.length - 14 * 2) + "%"}>
                    {cancer+" Cancer"}
                  </textPath>
                </text>
              </svg> </> : 
              <>
              <img
                src={imgUrl}
                alt="selected-ribbons"
                style={{ width: 85, height: 85 }}
              />
             <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", left: 0, top: -8, width: 85, height: 85 }} >
              <path id="curve-path" fill="none" stroke="red" strokeWidth={0}
                d="M0,48 Q50,-20 100,48" />

              <text fontSize={10} fontWeight={600} fill="white">
                <textPath href="#curve-path" startOffset={(50 - cancer.length - 10 * 2) + "%"}>
                  Select Your Ribbon
                </textPath>
              </text>
            </svg>
          </>
            }
          </div>
        )}
                {/* {imgUrl && (
                  <div className="d-flex justify-content-end align-self-end ">
                    <img
                      src={imgUrl}
                      alt="selected-ribbons"
                      style={{ width: 82, height: 82 }}
                    />
                  </div>
                )} */}
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
  const { _handleEdit, _handlePledge, shareApp, winner } = props;

  return (
    <div className="d-flex justify-content-center " style={{  }}>
      <div className="bg-light p-2 col-10 m-3" style={{ borderRadius: 10 }}>
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

          </div>:
          shareApp === 5 ?
          <div className='p-1' style={{ fontSize: 13 }}>
          Share the message via to spread the word to more people!<br />

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
          <div className='d-flex flex-wrap justify-content-center'>
            <div className='p-2 col-11'>
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
              <img src={"/mysteryRibbon.jpeg"} style={{ width:100 }} />
            </div>
          </div>:
          <p className="pt-2 px-2" style={{ fontSize: 13 }}>
          Don’t stop here, you can do more by pledging again!
          <br />
          Alternatively, join us at our health talks to know about cancer prevention. Click here to register now .

          Together, We Fight Cancer!
        </p>
        }

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
