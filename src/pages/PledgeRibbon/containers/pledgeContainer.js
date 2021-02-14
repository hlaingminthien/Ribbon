import React, { useState, useEffect } from "react";
import axios from 'axios';

import { Base_Url } from "../../../routes/Base_Url"

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
  const [winner, setWinner] = useState(0);
  const [loading, setLoading] = useState(false);
  const [finalImage, setFinalImage] = useState(null);
  const _handleEdit = () => {
    setStep(step == 3 ? 2 : 1);
  };
  const _handleSelect = () => {
    setMenuVisible(!menuVisible);
  };

  const _handleReview = (e) => {
    e.preventDefault();

    if (recipientName && senderName && message && imgUrl) {
      setStep(2);
      setWarning(false)
    } else {
      setWarning(true)
    }

  };

  const _handleConfirm = (e) => {
    setLoading(true);
    e.preventDefault();
    const myNode = document.getElementById('my-node')

    domtoimage.toPng(myNode).then(base64data=>{
      const url = `${Base_Url}uploadImage`;
      saveAs(base64data, "ribbon.png");
      setFinalImage(base64data);
      axios.post(url, { ribbon: base64data })
        .then(res => {
          const shareImg = res.data.payload;
          setShareImage(shareImg);
          setLoading(false);
        })
        .catch(err => console.log(err));
      setLoading(false);
      setStep(3);
    })
    // setup gif
    // const gif = new window.GIF({
    //   workers: 1,
    //   quality: 10,
    //   background: "#ffffff00",
    //   transparent: "#ffffff00",
    //   width: media.desktop ? 290 : media.tablet ? 110 : 260,
    //   height: media.desktop ? 300 : media.tablet ? 120 : 270
    // });

    // let count = 0
    // const delayMs = 80;
    // let mInterval = setInterval(async () => {
    //   count = count + delayMs
    //   if (count === 4000) {
    //     if (mInterval) {
    //       await clearInterval(mInterval)
    //       mInterval = null
    //       gif.on('finished', saveGIf);
    //       gif.render();
    //     }
    //   } else if (count < 4000) {
    //     const dataUrl = await domtoimage.toPng(myNode)
    //     const imageElement = document.createElement("IMG")
    //     imageElement.setAttribute("src", dataUrl);
    //     await gif.addFrame(imageElement, { delay: delayMs });
    //   }
    // }, delayMs);

    axios.post(`${Base_Url}sharecount`).then(data => {
      console.log('sharecountdata =>', data);
    }).catch(error =>{
      console.log('error is=>', error);
    });

    axios.post(`${Base_Url}luckydrawcount`)
    .then(data => {
      // console.log('lucky data is=>', data);
      setWinner(data.data.lucky)
    }).catch(error =>{
      console.log('error is=>', error);
    });
  }

  // const saveGIf = (blob) => {
  //   console.log("Trigger finished. Going to save to server!");
  //   saveAs(blob, "ribbon.gif");
  //   const reader = new FileReader();
  //   reader.readAsDataURL(blob);
  //   reader.onloadend = function () {
  //     const base64data = reader.result;
  //     const url = `${Base_Url}uploadImage`;
  //     axios.post(url, { ribbon: base64data })
  //       .then(res => {
  //         const shareImg = res.data.payload;
  //         setShareImage(shareImg);
  //         setLoading(false);
  //       })
  //       .catch(err => console.log(err));
  //     setLoading(false);
  //     setStep(3);
  //   }
  // }

  const _handleSelectOption = (e) => {
    setMessage(e);
    setWarning(false)
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
  };
  
  let background =
    (media.desktop) ?
      "/Desktop_PledgeARibbonPage.jpg" : (media.tablet) ? "PledgeRibbonTablet.jpeg" :
        "/PledgeBgMobo.png";
  return (
    <>
    {loading && <div style={{ position: 'absolute', width: '100%', height: '100vh', zIndex: 2000}}></div>}
     <div style={{opacity:loading ? 1 : 0}} class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    <div className="d-flex justify-content-center align-self-center pt-3 ">
      <div id="testsvg">
        <img
          className="img-fluid  w-100"
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
                  finalImage={finalImage}
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
                cancerName={cancerName}
                menuVisible={menuVisible}
                _handleRibbonClick={_handleRibbonClick}
                media={media}
                complete={complete}
                _handleImage={_handleImage}
                warning={warning}
                shareImage={shareImage}
                winner={winner}
                imgUrl={imgUrl}
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
                warning={warning}
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
                    warning={warning}
                  />
                </div>
              </div>
            )}
      </div>
    </div>
    </>
  );
};
export default withMedia(PledgeContainer);