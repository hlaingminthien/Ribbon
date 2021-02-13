import React, { useState, useEffect } from "react";
import axios from 'axios';

import { PledgeCard } from "../components/pledgeCard";
import PledgeForm from "../components/pledgeForm";
import { PledgeProgress } from "../components/pledgeProgressBar";
import { withMedia } from "react-media-query-hoc";
import PledgeRibbonsForMobile from "../components/PledgeRibbonForMobile";
import PledgeRibbonsForTablet from '../components/PledgeRibbonsForTablet';
import domtoimage from 'dom-to-image-more';
import { saveAs } from 'file-saver';
import RibbonImages from "../../../assets/RibbonImages.json";

const PledgeContainer = (props) => {
  const { media } = props;
  const [menuVisible, setMenuVisible] = useState(false);
  const [step, setStep] = useState(1);
  const [recipientName, setRecipientName] = useState("");
  const [senderName, setSenderName] = useState("");
  const [cancerName, setCancerName] = useState(null);

  const [message, setMessage] = useState("");
  const [imgUrl, setImgUrl] = useState(null);
  const [warning, setWarning] = useState(false);
  const [shareImage, setShareImage] = useState(null);
  const [complete, setComplete] = useState(false);
  const [ winner, setWinner ]=useState(0);

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
    // console.log(myNode)
    setStep(3);
    domtoimage.toJpeg(myNode)
      .then(function (blob) {
        var formData = new FormData();
        formData.append('ribbon', blob);
        let url = 'http://172.104.40.242:9898/api/uploadImage';
        axios.post(url, { ribbon: blob })
          .then(res => {
            const shareImg = res.data.payload;
            setShareImage(shareImg)
          })
          .catch(err => console.log(err));
        setStep(3);
      });
      fetch('http://172.104.40.242:9898/api/sharecount', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify({
        //   firstParam: 'yourValue',
        //   secondParam: 'yourOtherValue',
        // })
})
      // console.log("da",data)
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
  const _handleImage = (img, cancer) => {
    setImgUrl(img);
    setCancerName(cancer);
  };
  const _handleShare = () => {
    setComplete(true);
    setStep(3);
    fetch("http://172.104.40.242:9898/api/luckydrawcount", {
      headers: {
          "Accept": "application/json",
      }
  })
      .then(res => res.json())
      .then(data => setWinner(data.payload.count))
      .catch(error => {
        throw error
      })

      //   fetch('http://172.104.40.242:9898/api/luckydrawcount', {
      //   method: 'POST',
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json',
      //   }
      // })
      fetch("http://172.104.40.242:9898/api/luckydrawcount", {
        "method": "POST",
        "headers": {
          "content-type": "application/json",
          "accept": "application/json"
        },
        // "body": []
      })
      .then(response => response.json())
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err);
      });

  };
// console.log("winen",winner)
  let background =
    (media.desktop) ?
      "/Desktop_PledgeARibbonPage.jpg" : (media.tablet) ? "PledgeRibbonTablet.jpeg" :
        "/PledgeBgMobo.png";
  
  return (
    <div className="d-flex justify-content-center align-self-center pt-3">
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
          <div className="row px-0 ">
            <div
              className="d-flex justify-content-start col-4 align-self-start "
              style={{ textAlign: "center" }}
            >
              <div className="pt-3 pb-1" style={{ marginTop: window.innerWidth > 1500 ? '4%' : (media.tablet) ? '13%' : '5%', marginLeft: '-1%', position: (media.tablet || media.desktop) && 'fixed' }}>
                <PledgeCard
                  recipientName={recipientName}
                  senderName={senderName}
                  message={message}
                  media={media}
                  step={step}
                  _handleImage={_handleImage}
                  imgUrl={imgUrl}
                  cancer={cancerName}
                />
              </div>
            </div>
            <div
              className="col-8 pt-4 justify-content-center"
              style={{ height: "90vh" }}
            >
              <div className='d-flex justify-content-center'>
                <div className='col-7'>
                  <PledgeProgress step={step} media={media} />

                </div>
              </div>

              <PledgeForm
                step={step}
                _handleConfirm={_handleConfirm}
                _handleEdit={_handleEdit}
                _handleTextChange={_handleTextChange}
                _handleReview={_handleReview}
                _handleSelect={_handleSelect}
                _handleSelectOption={_handleSelectOption}
                _handleShare={_handleShare}
                setCancerName={setCancerName}
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
                winner={winner}
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
                setImgUrl={_handleImage}
                imgUrl={imgUrl}
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
                cancer={cancerName}
                setCancerName={setCancerName}
                winner={winner}

              />
            </div>
            :
            (
              <div className="d-flex justify-content-center">
                <div className="">
                  <div className='d-flex pt-3 justify-content-center'>
                    <div className='col-10'>
                      <PledgeProgress step={step} media={media} />

                    </div>
                  </div>
                  <PledgeRibbonsForMobile
                    step={step}
                    media={media}
                    _handleConfirm={_handleConfirm}
                    _handleEdit={_handleEdit}
                    _handleTextChange={_handleTextChange}
                    _handleReview={_handleReview}
                    _handleSelect={_handleSelect}
                    _handleShare={_handleShare}
                    _handleSelectOption={_handleSelectOption}
                    setImgUrl={_handleImage}
                    setCancerName={setCancerName}
                    imgUrl={imgUrl}
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
                    cancer={cancerName}
                    winner={winner}
                  />
                </div>
              </div>
            )}
      </div>
    </div>
  );
};
export default withMedia(PledgeContainer);
