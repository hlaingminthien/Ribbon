import React, { Component } from "react";
import { Passers } from "prop-passer";
import {
  FacebookShareButton,
  EmailShareButton,
  TelegramShareButton,
  FacebookIcon, LineIcon,
  EmailIcon,
  LinkedinIcon, WhatsappIcon, LinkedinShareButton, WhatsappShareButton, LineShareButton
} from "react-share";

import { NCIS_Selector } from "../../../tools/NCIS_Selector";
import { NCIS_TextBox } from "../../../tools/NCIS_TextBox";
import { NCIS_Button } from "../../../tools/NCIS_Button";
import RibbonImages from "../../../assets/RibbonImages.json";
import { violet, paleViolet } from "../../../assets/colors";
import ShareIcons from "./socialShareIcons";
import WhatsAppLogo from "../../../assets/images/WhatsAppLogo.png";
import FacebookLogo from "../../../assets/images/FacebookLogo.png";
import Instagram from "../../../assets/images/Instagram.png";
import LinkedinLogo from "../../../assets/images/LinkedinLogo.png";
import EmailLogo from "../../../assets/images/EmailLogo.png";
import TelegramLogo from "../../../assets/images/TelegramLogo.png";
import WeChatLogo from "../../../assets/images/WeChatLogo.png";
import LineLogo from "../../../assets/images/LineLogo.png";

const hello = () => {
  console.log('hleellllll')
}
export const SocialShare = (props) => {
  const { handleShareApp, shareApp, shareImg, _handleEdit, paleViolet, _handleShare,
    url = "http://172.104.40.242:9898/" + shareImg,//String(window.location),
    title = "National University Cancer Institute Singapore",
    shareImage = "http://172.104.40.242:9898/" + shareImg,
    // shareImage = "https://www.steadylearner.com/static/images/brand/prop-passer.png",
    size = "2.5rem", } = props;

  const ShareList = Passers({
    url,
    className: ""
  })({
    className: "",
    // title: `Share ${String(window.location)}`,
  })("li");
  return (
    <>
      <div>
        <section className="d-flex justify-content-center m-2 pt-4 p-3">
        <ShareList style={{ textAlign: "center" }}>
              <WhatsappShareButton className=" shadow  align-self-center text-center mx-2"
                onClick={() => handleShareApp(1)}
                onShareWindowClose ={_handleShare}
                style={{
                  borderRadius: 23,
                  border: "1px solid #FAFAFA",
                  width: shareApp == 1 ? 54 : 59,
                  height: shareApp == 1 ? 54 : 59,
                  background: shareApp == 1 ? "rgb(22, 16, 92)" : "#fff",
                }} subject={title} body="body"  >
                  <img src={WhatsAppLogo} className="" style={{width:50}}/>
                  <div className='pt-3' style={{ fontSize: 12, fontWeight: 600 }}>WhatsApp</div>
              </WhatsappShareButton>

              <FacebookShareButton quote={title}
                className="shadow align-self-center text-center mx-3"
                style={{
                  borderRadius: 23,
                  border: "1px solid #FAFAFA",
                  width: shareApp == 2 ? 54 : 59,
                  height: shareApp == 2 ? 54 : 59,
                  background: shareApp == 2 ? "rgb(22, 16, 92)" : "#fff",
                }}
                onClick={() => handleShareApp(2)} //facebook
                onShareWindowClose ={_handleShare}
              >
                <img src={FacebookLogo} className="" style={{width:50}}/>     
                <div className='pt-3' style={{ fontSize: 12, fontWeight: 600 }}>Facebook</div>           
              </FacebookShareButton>

              <div
                className="pt-1 shadow align-self-center text-center mx-3"
                style={{
                  borderRadius: 23,
                  border: "1px solid #FAFAFA",
                  width: shareApp == 3 ? 54 : 59,
                  height: shareApp == 3 ? 54 : 59,
                  background: shareApp == 3 ? "rgb(22, 16, 92)" : "#fff",
                }}
                onClick={() => handleShareApp(3)} //telegram
                onShareWindowClose ={_handleShare}
              >
                <img src={Instagram} className="" style={{width:47}}/>
                <div className='pt-3' style={{ fontSize: 12, fontWeight: 600 }}>Instagram</div>
              </div>

              <LinkedinShareButton quote={title}
                className=" shadow  align-self-center text-center mx-3"
                style={{
                  borderRadius: 23,
                  border: "1px solid #FAFAFA",
                  width: shareApp == 4 ? 54 : 59,
                  height: shareApp == 4 ? 54 : 59,
                  background: shareApp == 4 ? "rgb(22, 16, 92)" : "#fff",
                }}
                onClick={() => handleShareApp(4)} //facebook
                onShareWindowClose ={_handleShare}
              >
                <img src={LinkedinLogo} className="" style={{width:50}}/>
                <div className='pt-3' style={{ fontSize: 12, fontWeight: 600 }}>LinkIn</div>
              </LinkedinShareButton>

          </ShareList>
        </section>
        <div className='pt-3'>
          <section className="d-flex justify-content-center m-2">
            <ShareList>
                <EmailShareButton className=" shadow align-self-center text-center mx-2"
                  onClick={() => handleShareApp(5)}
                  onShareWindowClose ={_handleShare}
                  style={{
                    borderRadius: 23,
                    border: "1px solid #FAFAFA",
                    width: shareApp == 5 ? 54 : 59,
                    height: shareApp == 5 ? 54 : 59,
                    background: shareApp == 5 ? "rgb(22, 16, 92)" : "#fff",
                  }} subject={title} body="body"  >
                    <img src={EmailLogo} className="" style={{width:50}}/>
                <div className='pt-3' style={{ fontSize: 12, fontWeight: 600 }}>E-mail</div>
                </EmailShareButton>

                <TelegramShareButton quote={title}
                  className=" shadow
                   align-self-center text-center mx-2"
                  style={{
                    borderRadius: 23,
                    border: "1px solid #FAFAFA",
                    width: shareApp == 6 ? 54 : 59,
                    height: shareApp == 6 ? 54 : 59,
                    background: shareApp == 6 ? "rgb(22, 16, 92)" : "#fff",
                  }}
                  onClick={() => handleShareApp(6)} //insta
                  onShareWindowClose ={_handleShare}
                >
                  <img src={TelegramLogo} className="" style={{width:50}}/>
                <div className='pt-3' style={{ fontSize: 12, fontWeight: 600 }}>Telegram</div>
                </TelegramShareButton>
             
                <TelegramShareButton quote={title}
                  className=" shadow align-self-center text-center mx-2"
                  style={{
                    borderRadius: 23,
                    border: "1px solid #FAFAFA",
                    width: shareApp == 7 ? 54 : 59,
                    height: shareApp == 7 ? 54 : 59,
                    background: shareApp == 7 ? "rgb(22, 16, 92)" : "#fff",
                  }}
                  onClick={() => handleShareApp(7)} //insta
                  onShareWindowClose ={_handleShare}
                >
                  <img src={WeChatLogo} className="" style={{width:50}}/>                 
                  
                <div className='pt-3' style={{ fontSize: 12, fontWeight: 600 }}>weChat</div>
                </TelegramShareButton>

                <LineShareButton
                  className=" shadow align-self-center text-center mx-3"
                  style={{
                    borderRadius: 23,
                    border: "1px solid #FAFAFA",
                    width: shareApp == 8 ? 54 : 59,
                    height: shareApp == 8 ? 54 : 59,
                    background: shareApp == 8 ? "rgb(22, 16, 92)" : "#fff",
                  }}
                  onClick={() => handleShareApp(8)} //telegram
                  onShareWindowClose ={_handleShare}
                >
                  <img src={LineLogo} className="" style={{width:50}}/>
                <div className='pt-3' style={{ fontSize: 12, fontWeight: 600 }}>Line</div>
                </LineShareButton>
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
      </div>

    </>
  );

}