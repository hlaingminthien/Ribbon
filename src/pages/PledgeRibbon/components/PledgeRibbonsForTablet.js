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


const PledgeRibbonsForTablet = (props) => {
  const {
    _handleSelect,
    _handleSelectOption,
    menuVisible,
    _handleRibbonClick,
    _handleTextChange,
    step,
    media,complete,_handleShare,
    _handleReview,
    _handleConfirm,
    _handleEdit,
    recipientName,
    senderName,
    message,shareImage
  } = props;
  
  const [imgUrl, setImgUrl] = useState(null);
  const [shareApp, setShareApp] = useState(null);
  
  const _handlePledge = () => {
    props.history.push("/");
  };
  const _handleImage = (img) => {
    setImgUrl(img);
  };
  const handleShareApp = (app) => {
    setShareApp(app == shareApp ? null : app);
  };

  return (
    <div className="pt-3 px-1 container justify-content-center">
      <div className={`d-flex ${window.innerWidth > 800 ? "col-8" : "col-10"} container justify-content-center justify-content-between`}>
        <div
          className="col-7 align-self-center pb-5 justify-content-start "
          style={{}}
        >
          <div className='col-10 pt-5' style={{}}>
            <PledgeProgress step={step} media={media} />
          </div>
          <strong
            className="px-3 py-0"
            style={{ fontSize: 16 }}
          >{`Step ${step}:`}</strong>
          {step === 1 ? (
            <div
              className="px-3 py-0"
              style={{ fontSize: 18, fontWeight: "bold" }}
            >
              Choose Your Ribbon and Create Your Message
            </div>
          ) : step === 2 ? (
            <div
              className="px-3 py-0"
              style={{ fontSize: 18, fontWeight: "bold" }}
            >
              Review Your Ribbon{" "}
            </div>
          ) : step === 3 ? (
            <div className="px-3 py-0">
              <div className="" style={{ fontSize: 18, fontWeight: "bold" }}>
                Share your message
              </div>
              <div className="py-0" style={{ fontSize: 14, fontWeight: 600 }}>
                Click Back to edit or select on the following icons to share
                your message
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
            _handleImage={_handleImage}
          />
        </div>
      </div>
      <div className={` ${window.innerWidth > 1000 && "px-2" } `}>
        <Ribbon {...props} _handleImage={_handleImage} />

      </div>
      {(step === 3 && !complete) && (
        <ShareApp
        handleShareApp={handleShareApp}
        _handleShare={_handleShare}
        shareApp={shareApp}
        paleViolet={paleViolet}
        media={media}
        shareImg={shareImage}
        
      />
        // <ShareApp shareApp={shareApp} handleShareApp={handleShareApp} />
      )}
      {complete && step == 3 && (
        <ThankuCard _handleEdit={_handleEdit} _handlePledge={_handlePledge}  media={media} />
      )}
      {step == 2 && (
        <div className="d-flex justify-content-center flex-wrap">
          <div className="py-1">
            <NCIS_Button
              text={"Edit"}
              onClick={_handleEdit}
              className="mx-2"
              buttonColor={paleViolet}
              fontSize={14}
              media={media}
            />
          </div>
          <div className="py-1">
            <NCIS_Button
              text={"Confirm"}
              onClick={_handleConfirm}
              fontSize={14}
              className="mx-2"
              media={media}
            />
          </div>
        </div>
      )}
      {step == 3 && !complete && (
        <div className="d-flex justify-content-center pt-5">
          <NCIS_Button
            text={"Back"}
            onClick={_handleEdit}
            className="mx-2"
            fontSize={14}
            buttonColor={paleViolet}
            media={media}
          />
          <NCIS_Button
            text={"Share"}
            onClick={_handleShare}
            // onClick={_handleConfirm}
            className="mx-2"
            fontSize={14}
            media={media}
          />
        </div>
        
      )}
    </div>
  );
};
export default withRouter(PledgeRibbonsForTablet);

const PledgeCardForTablet = (props) => {
  const { recipientName, senderName, message, media, step, imgUrl } = props;
  return (
    <div className={` d-flex pb-1 ${(window.innerWidth > 780 && media.tablet) && "pt-5"} justify-content-center text-white`} id="my-node" >
      <img
        className="shadow img-responsive"
        src={imgUrl? "cardnoText.jpg" : "/cardDefault.jpg"}
        style={{ maxWidth: (window.innerWidth > 780 && media.tablet) ? 280 : 230, borderRadius: 20, minHeight: (window.innerWidth > 780 && media.tablet) ? 300 : 250 }}
      />

      <div
        className={`d-flex flex-column ${window.innerWidth > 780 ? "pt-5" : "pt-4"} px-3 justify-content-start text-left`}
        style={{ position: "absolute", width: (window.innerWidth > 780 && media.tablet) ? 250 : 240 }}
      >
        <div
          className={`d-flex flex-column pt-4 ${step != 1 && "move-me move-me-1"} `}
          style={{ minHeight: (window.innerWidth > 780 && media.tablet) ? 200 : 170 }}
        >
          <span className="" style={{ fontSize: (window.innerWidth > 780 && media.tablet) ? 17 : 14, fontWeight: "bold" }}>
            {recipientName}
            {recipientName ? "," : null}
          </span>
          <span
            className="text-white pt-3"
            style={{ fontWeight: 500, fontSize: (window.innerWidth > 780 && media.tablet) ? 14 : 13, lineHeight: 1.8 }}
          >
            {message}
            {message ? "!" : null}
          </span>
          <span className="pt-2" style={{ fontWeight: 600, fontSize: (window.innerWidth > 780 && media.tablet) ? 14 : 12 }}>
            {senderName ? "Love," : null} {senderName}
          </span>
        </div>
          {
            imgUrl &&
            <div className="d-flex justify-content-end align-items-start">
            <img
              src={imgUrl ? imgUrl : "./assets/images/ribbons/skyBlue.png"}
              alt="selected-ribbons"
              style={{ width: (window.innerWidth > 780 && media.tablet) ? 90 : 80, height: (window.innerWidth > 780 && media.tablet) ? 90 : 80 }}
            />
          </div>
          }
          
        
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
    _handleImage,
    media,
  } = props;
  const [selected, setSelected] = useState(false);
  const [nextOfStep1, setNextOfStep1] = useState(selected ? true : false);

  const [selectedId, setSelectedId] = useState(null);
  const [number, setNumber] = useState(null);

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
    <div>
      {!nextOfStep1 && step == 1 && (
        <>
          <div className="d-flex flex-row container flex-wrap justify-content-center px-1">
            {RibbonImages.Ribbons.map((v, k) => (
              <div
                className="col-3 "
                style={{ cursor: "pointer", maxWidth: 180 }}
                onClick={() => _handleImage(v.imgaeUrl)}
              >
                <div
                  className="text-center align-self-center pb-3 pt-2"
                  id={k}
                  style={{ borderRadius: "10px", minHeight: 73 }}
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
                      fontSize: 14,
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
          <div className="d-flex justify-content-center pt-4">
            <NCIS_Button
              text={"Next"}
              fontSize={14}  media={media}
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
            <div className="col-12 pt-2 pb-5">
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
              <div className="pt-3 d-flex justify-content-center">
                <NCIS_Button text={"Review"} type="submit" fontSize={14}  media={media} />
              </div>
            ) : null}
          </form>
        </div>
      )}
    </div>
  );
};
const ThankuCard = (props) => {
  const { _handleEdit, _handlePledge, media } = props;

  return (
    <div className="d-flex justify-content-center py-2 ">
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
              media={media}
            />
          </div>
          <div className="p-2 d-flex justify-content-center">
            <NCIS_Button
              text={"Back To Home"}
              onClick={_handlePledge}
              className="mx-2"
              buttonColor={violet}
              media={media}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ShareApp = (props) => {
  const { handleShareApp,shareImg, shareApp, _handleEdit, paleViolet,_handleShare,url = "http://172.104.40.242:9898/" + shareImg,//String(window.location),
  title = "National University Cancer Institute Singapore",
  shareImage =  "http://172.104.40.242:9898/" + shareImg,
  size = "2.5rem", } = props;

  const ShareList = Passers({
    url,
    className: "",
  })({
    className: "",
    // title: `Share ${String(window.location)}`,
  })("li");
  return (
    <div>
      <section className="d-flex justify-content-center m-2 pt-5 py-3">
      <ShareList style={{ textAlign: "center" }}>
        <EmailShareButton className=" shadow p-3 align-self-center text-center mx-2"
        onClick={() => handleShareApp(1)} 
          style={{
            borderRadius: 23,
            border: "1px solid #FAFAFA",
            width: shareApp == 1 ? 54 : 59,
            height: shareApp == 1 ? 54 : 59,
            background: shareApp == 1 ? "rgb(22, 16, 92)" : "#fff",
          }} subject={title} body="body"  >
              <i
                className="fa fa-envelope-o" style={{
                  fontSize: shareApp == 1 ? 23 : 27,
                  color: shareApp == 1 ? "#fff" : "rgb(22, 16, 92)",
                }}
                aria-hidden="true"
              ></i>
            </EmailShareButton>
        <FacebookShareButton quote={title}
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
        </FacebookShareButton>
        <TelegramShareButton quote={title}
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
            className="fa fa-telegram"
            aria-hidden="true"
            style={{
              fontSize: shareApp == 3 ? 23 : 27,
              color: shareApp == 3 ? "#fff" : "rgb(22, 16, 92)",
            }}
          ></i>
        </TelegramShareButton>
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
            className="fa fa-instagram"
            aria-hidden="true"
            style={{
              fontSize: shareApp == 4 ? 23 : 27,
              color: shareApp == 4 ? "#fff" : "rgb(22, 16, 92)",
            }}
          ></i>
        </div>
      </ShareList>
        
      </section>
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
      
    </div>
  );
  // const { handleShareApp, shareApp } = props;

  // return (
  //   <div>
  //     <div className="d-flex justify-content-center m-2 pt-5 py-3">
  //       <div
  //         className=" shadow p-3 align-self-center text-center mx-2"
  //         style={{
  //           borderRadius: 23,
  //           border: "1px solid #FAFAFA",
  //           width: shareApp == 1 ? 54 : 59,
  //           height: shareApp == 1 ? 54 : 59,
  //           background: shareApp == 1 ? "rgb(22, 16, 92)" : "#fff",
  //         }}
  //         onClick={() => handleShareApp(1)} //gmail
  //       >
  //         <i
  //           className="fa fa-envelope-o"
  //           aria-hidden="true"
  //           style={{
  //             fontSize: shareApp == 1 ? 23 : 27,
  //             color: shareApp == 1 ? "#fff" : "rgb(22, 16, 92)",
  //           }}
  //         ></i>
  //       </div>
  //       <div
  //         className=" shadow p-3 align-self-center text-center mx-3"
  //         style={{
  //           borderRadius: 23,
  //           border: "1px solid #FAFAFA",
  //           width: shareApp == 2 ? 54 : 59,
  //           height: shareApp == 2 ? 54 : 59,
  //           background: shareApp == 2 ? "rgb(22, 16, 92)" : "#fff",
  //         }}
  //         onClick={() => handleShareApp(2)} //facebook
  //       >
  //         <i
  //           className="fa fa-facebook"
  //           aria-hidden="true"
  //           style={{
  //             fontSize: shareApp == 2 ? 23 : 27,
  //             color: shareApp == 2 ? "#fff" : "rgb(22, 16, 92)",
  //           }}
  //         ></i>
  //       </div>
  //       <div
  //         className=" shadow p-3 align-self-center text-center mx-2"
  //         style={{
  //           borderRadius: 23,
  //           border: "1px solid #FAFAFA",
  //           width: shareApp == 3 ? 54 : 59,
  //           height: shareApp == 3 ? 54 : 59,
  //           background: shareApp == 3 ? "rgb(22, 16, 92)" : "#fff",
  //         }}
  //         onClick={() => handleShareApp(3)} //insta
  //       >
  //         <i
  //           className="fa fa-instagram"
  //           aria-hidden="true"
  //           style={{
  //             fontSize: shareApp == 3 ? 23 : 27,
  //             color: shareApp == 3 ? "#fff" : "rgb(22, 16, 92)",
  //           }}
  //         ></i>
  //       </div>
  //       <div
  //         className=" p-3 shadow align-self-center text-center mx-3"
  //         style={{
  //           borderRadius: 23,
  //           border: "1px solid #FAFAFA",
  //           width: shareApp == 4 ? 54 : 59,
  //           height: shareApp == 4 ? 54 : 59,
  //           background: shareApp == 4 ? "rgb(22, 16, 92)" : "#fff",
  //         }}
  //         onClick={() => handleShareApp(4)} //telegram
  //       >
  //         <i
  //           className="fa fa-telegram"
  //           aria-hidden="true"
  //           style={{
  //             fontSize: shareApp == 4 ? 23 : 27,
  //             color: shareApp == 4 ? "#fff" : "rgb(22, 16, 92)",
  //           }}
  //         ></i>
  //       </div>
  //     </div>
  //     {shareApp && (
  //       <div
  //         className="d-flex justify-content-center text-center"
  //         style={{ fontSize: 14, fontWeight: 600 }}
  //       >
  //         <div className="col-5">
  //           Spread the world by tagging your recipient and add the hashtag
  //           #Compagin
  //         </div>
  //       </div>
  //     )}
  //   </div>
  // );
};
