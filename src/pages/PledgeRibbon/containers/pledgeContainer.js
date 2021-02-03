import React, { useState } from "react";
import { PledgeCard } from "../components/pledgeCard";
import  PledgeForm from "../components/pledgeForm";
import { PledgeProgress } from "../components/pledgeProgressBar";
import { withMedia } from "react-media-query-hoc";
import PledgeRibbonsForMobile from "../components/PledgeRibbonForMobile";
import PledgeRibbonsForTablet from '../components/PledgeRibbonsForTablet';

const PledgeContainer = (props) => {
  const { media } = props;
  const [menuVisible, setMenuVisible] = useState(false);
  const [step, setStep] = useState(1);
  const [recipientName, setRecipientName] = useState("");
  const [senderName, setSenderName] = useState("");

  const [message, setMessage] = useState("");
  const [imgUrl, setImgUrl] = useState(null);
  const [warning, setWarning]=useState(false);

  const _handleEdit = () => {
    setStep(step == 3 ? 2 : 1);
  };
  const _handleSelect = () => {
    setMenuVisible(!menuVisible);
  };

  const _handleReview = (e) => {
    e.preventDefault();

    if(recipientName && senderName){
      setStep(2);
      setWarning(false)
    }else{
      setWarning(true)
    }
    
  };
  const _handleConfirm = (e) => {
    e.preventDefault();
    setStep(3);
  };
  const _handleSelectOption = (e) => {
    setMessage(e);
  };
  const _handleTextChange = (e) => {
    if (e.target.id === "recipient") {
      setRecipientName(e.target.value);
      setWarning(false)
    } else {
      setSenderName(e.target.value);
      setWarning(false)
    }
  };
  const _handleRibbonClick = (state) => {
    setMenuVisible(state);
  };

  const _handleImage = (img) => {
    setImgUrl(img);
  };
  const _handleShare = () => {
    setStep(4);
  };
  let background =
    (media.desktop) ?
     "/pledgeBackground.svg" : (media.tablet) ? "PledgeRibbonTablet.jpeg" :
      "/PledgeBgMobo.png";

  return (
    <div className="d-flex justify-content-center aling-self-center pt-3">
      <div id="testsvg">
        <img
          className="img-fluid"
          src={background}
          alt="bg-svg"
          style={{ height: media.desktop ? "96vh" : media.tablet ? "100vh" : "100vh" }}
        />
      </div>
      <div className={`${(media.tablet) ? "col-12" : "col-10" } pt-4`}>
        {(media.desktop ) ? (
          <div className="row px-0 ">
            <div
              className="d-flex justify-content-start col-4 pr-5 align-self-start border border-danger"
              style={{ textAlign: "center" }}
            >
              <PledgeCard
                recipientName={recipientName}
                senderName={senderName}
                message={message}
                media={media}
                step={step}
                _handleImage={_handleImage}
                imgUrl={imgUrl}
              />
            </div>
            <div
              className="col-8 pt-4"
              style={{ height: "90vh"}}
            >
              <PledgeProgress step={step} media={media} />
              <PledgeForm
                step={step}
                _handleConfirm={_handleConfirm}
                _handleEdit={_handleEdit}
                _handleTextChange={_handleTextChange}
                _handleReview={_handleReview}
                _handleSelect={_handleSelect}
                _handleSelectOption={_handleSelectOption}
                _handleShare={_handleShare}
                recipientName={recipientName}
                message={message}
                senderName={senderName}
                menuVisible={menuVisible}
                _handleRibbonClick={_handleRibbonClick}
                media={media}
                _handleImage={_handleImage}
                warning={warning}
              />
            </div>
            
          </div>
        ) 
         :(media.tablet) ?
        <div className="d-flex justify-content-center align-self-center pt-1" style={{ marginTop: ( window.innerWidth > 780 && media.tablet) ? '20%' : '19%'}}>
          
          <PledgeRibbonsForTablet
                step={step}
                media={media}
                _handleConfirm={_handleConfirm}
                _handleEdit={_handleEdit}
                _handleTextChange={_handleTextChange}
                _handleReview={_handleReview}
                _handleSelect={_handleSelect}
                _handleSelectOption={_handleSelectOption}
                recipientName={recipientName}
                message={message}
                senderName={senderName}
                menuVisible={menuVisible}
                recipientName={recipientName}
                senderName={senderName}
                message={message}
                _handleRibbonClick={_handleRibbonClick}
              />
        </div>
        :
         (
          <div className="d-flex justify-content-center">
            <div className="">
              <PledgeProgress step={step} media={media} />
              <PledgeRibbonsForMobile
                step={step}
                media={media}
                _handleConfirm={_handleConfirm}
                _handleEdit={_handleEdit}
                _handleTextChange={_handleTextChange}
                _handleReview={_handleReview}
                _handleSelect={_handleSelect}
                _handleSelectOption={_handleSelectOption}
                recipientName={recipientName}
                message={message}
                senderName={senderName}
                menuVisible={menuVisible}
                recipientName={recipientName}
                senderName={senderName}
                message={message}
                _handleRibbonClick={_handleRibbonClick}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default withMedia(PledgeContainer);
