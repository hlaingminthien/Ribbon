import React, { useState } from "react";
import axios from 'axios';

import { PledgeCard } from "../components/pledgeCard";
import PledgeForm from "../components/pledgeForm";
import { PledgeProgress } from "../components/pledgeProgressBar";
import { withMedia } from "react-media-query-hoc";
import PledgeRibbonsForMobile from "../components/PledgeRibbonForMobile";
import PledgeRibbonsForTablet from '../components/PledgeRibbonsForTablet';
import domtoimage from 'dom-to-image-more';
import { saveAs } from 'file-saver';

const PledgeContainer = (props) => {
  const { media } = props;
  const [menuVisible, setMenuVisible] = useState(false);
  const [step, setStep] = useState(1);
  const [recipientName, setRecipientName] = useState("");
  const [senderName, setSenderName] = useState("");

  const [message, setMessage] = useState("");
  const [imgUrl, setImgUrl] = useState(null);
  const [warning, setWarning] = useState(false);
  const [shareImage,setShareImage]=useState(null);
  const [complete, setComplete] = useState(false);

  const _handleEdit = () => {
    setStep(step == 3 ? 2 : 1);
  };
  const _handleSelect = () => {
    setMenuVisible(!menuVisible);
  };

  const _handleReview = (e) => {
    e.preventDefault();

    if (recipientName && senderName) {
      setStep(2);
      setWarning(false)
    } else {
      setWarning(true)
    }

  };

  const _handleConfirm = (e) => {
    e.preventDefault();
    const myNode = document.getElementById('my-node')
    console.log(myNode)
    setStep(3);
    domtoimage.toJpeg(myNode)
      .then(function (blob) {
        var formData = new FormData();
        formData.append('ribbon', blob);
        let url = 'http://172.104.40.242:9898/api/uploadImage';
        axios.post(url, { ribbon : blob})
          .then(res => {
            const shareImg = res.data.payload;
            setShareImage(shareImg)
          })
          .catch(err => console.log(err));
          setStep(3);
      });
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
    setComplete(true);
    setStep(3);
  };
  let background =
    (media.desktop) ?
      "/pledgeBackground.svg" : (media.tablet) ? "PledgeRibbonTablet.jpeg" :
        "/PledgeBgMobo.png";
// console.log(">>>shareImg",shareImage)
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
      <div className={`${(media.tablet) ? "col-12" : "col-10"} pt-4`}>
        {(media.desktop) ? (
          <div className="row px-0">
            <div
              className="d-flex justify-content-start col-4 align-self-start "
              style={{ textAlign: "center" }}
            >
              <div className="pt-3 pb-1" style={{ marginTop: window.innerWidth > 1500 ? '8%' : (media.tablet) ? '15%' : '7%', marginLeft: '0%', position: (media.tablet || media.desktop) && 'fixed' }}>
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
            </div>
            <div
              className="col-8 pt-4"
              style={{ height: "90vh" }}
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
                complete={complete}
                _handleImage={_handleImage}
                warning={warning}
                shareImage={shareImage}
              />
            </div>

          </div>
        )
          : (media.tablet) ?
            <div className="d-flex justify-content-center align-self-center pt-1" style={{ marginTop: (window.innerWidth > 780 && media.tablet) ? '20%' : '19%' }}>

              <PledgeRibbonsForTablet
                step={step}
                media={media}
                _handleConfirm={_handleConfirm}
                _handleEdit={_handleEdit}
                _handleTextChange={_handleTextChange}
                _handleReview={_handleReview}
                _handleSelect={_handleSelect}
                _handleShare={_handleShare}
                _handleSelectOption={_handleSelectOption}
                recipientName={recipientName}
                message={message}
                senderName={senderName}
                menuVisible={menuVisible}
                recipientName={recipientName}
                senderName={senderName}
                message={message}
                complete={complete}
                _handleRibbonClick={_handleRibbonClick}
                shareImage={shareImage}
              />
            </div>
            :
            (
              <div className="d-flex justify-content-center">
                <div className="">
                  <div className='pt-2'>
                  <PledgeProgress step={step} media={media} />

                  </div>
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
                    shareImage={shareImage}
                    complete={complete}
                  />
                </div>
              </div>
            )}
      </div>
    </div>
  );
};
export default withMedia(PledgeContainer);
