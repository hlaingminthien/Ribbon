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
import WhatsAppLogoActive from "../../../assets/images/WhatsAppLogoActive.png";
import FacebookLogoActive from "../../../assets/images/FacebookLogoActive.png";
import InstagramActive from "../../../assets/images/InstagramActive.png";
import LinkedinLogoActive from "../../../assets/images/LinkedinLogoActive.png";
import EmailLogoActive from "../../../assets/images/EmailLogoActive.png";
import TelegramLogoActive from "../../../assets/images/TelegramLogoActive.png";
import WeChatLogoActive from "../../../assets/images/WeChatLogoActive.png";
import LineLogoActive from "../../../assets/images/LineLogoActive.png";
import { Base_Url } from "../../../routes/Base_Url";


export const SocialShare = (props) => {
  const { handleShareApp, shareApp, shareImg, _handleEdit, paleViolet, _handleShare,
    url = `172.104.40.242:9898/${shareImg}`,//String(window.location),
    title = "National University Cancer Institute Singapore",
    shareImage = `${Base_Url}${shareImg}`,
    // shareImage = "https://www.steadylearner.com/static/images/brand/prop-passer.png",
    size = "2.5rem", } = props;

  const ShareList = Passers({
    url,
    className: ""
  })({
    className: "",
    // title: `Share ${String(window.location)}`,
  })("li");

  const hello = () => {
    console.log('Hello hello');
    <EmailShareButton></EmailShareButton>
  }

  return (
    <div className='d-flex flex-column'>
      <div className='pt-3'>
        <section className="d-flex justify-content-center m-2">
          {/* <ShareList> */}
          <div quote={title}
            className=" shadow
                   align-self-center text-center mx-3"
            style={{
              borderRadius: 23,
              border: "1px solid #FAFAFA",
              width: shareApp == 6 ? 54 : 59,
              height: shareApp == 6 ? 54 : 59,
              background: shareApp == 6 ? "rgb(22, 16, 92)" : "#fff",
              cursor: "pointer"
            }}
            onClick={() => handleShareApp(6)}
          //
          >
            <img src={shareApp == 6 ? TelegramLogoActive : TelegramLogo} className="" style={{ width: 50 }} />
            <div className='pt-3' style={{ fontSize: 12, fontWeight: 600 }}>Telegram</div>
          </div>
          <div className=" shadow  align-self-center text-center mx-2"
            onClick={() => handleShareApp(1)}
            style={{
              borderRadius: 23,
              border: "1px solid #FAFAFA",
              width: shareApp == 1 ? 54 : 59,
              height: shareApp == 1 ? 54 : 59,
              background: shareApp == 1 ? "rgb(22, 16, 92)" : "#fff",
              cursor: "pointer"
            }} subject={title} body="body"  >
            <img src={shareApp == 1 ? WhatsAppLogoActive : WhatsAppLogo} className="" style={{ width: 50 }} />
            <div className='pt-3' style={{ fontSize: 12, fontWeight: 600 }}>WhatsApp</div>
          </div>
          <div quote={title}
            className=" shadow align-self-center text-center mx-3"
            style={{
              borderRadius: 23,
              border: "1px solid #FAFAFA",
              width: shareApp == 7 ? 54 : 59,
              height: shareApp == 7 ? 54 : 59,
              background: shareApp == 7 ? "rgb(22, 16, 92)" : "#fff",
              cursor: "pointer"
            }}
            onClick={() => handleShareApp(7)}
          >
            <img src={shareApp == 7 ? WeChatLogoActive : WeChatLogo} className="" style={{ width: 50 }} />

            <div className='pt-3' style={{ fontSize: 12, fontWeight: 600 }}>weChat</div>
          </div>
          <div
            className=" shadow align-self-center text-center mx-3"
            style={{
              borderRadius: 23,
              border: "1px solid #FAFAFA",
              width: shareApp == 8 ? 54 : 59,
              height: shareApp == 8 ? 54 : 59,
              background: shareApp == 8 ? "rgb(22, 16, 92)" : "#fff",
              cursor: "pointer"
            }}
            onClick={() => handleShareApp(8)}
          >
            <img src={shareApp == 8 ? LineLogoActive : LineLogo} className="" style={{ width: 50 }} />
            <div className='pt-3' style={{ fontSize: 12, fontWeight: 600 }}>Line</div>
          </div>
          {/* </ShareList> */}
        </section>
        {/* {shareApp && (
            <div
              className="d-flex justify-content-center text-center"
              style={{ fontSize: 14, fontWeight: 600 }}
            >
              <div className="col-5">
                Spread the world by tagging your recipient and add the hashtag
                #Compagin
            </div>
            </div>
          )} */}

        {/* <div className="d-flex justify-content-center pt-5">
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
        </div> */}
      </div>
      <div className=''>
        <section className="d-flex justify-content-center m-2 pt-4 p-3" >
          <ShareList style={{ textAlign: "center" }}>
            <EmailShareButton 
              className=" shadow align-self-center text-center mx-3"
              style={{
                borderRadius: 23,
                border: "1px solid #FAFAFA",
                width: shareApp == 5 ? 54 : 59,
                height: shareApp == 5 ? 54 : 59,
                background: shareApp == 5 ? "rgb(22, 16, 92)" : "#fff",
                cursor: "pointer"
              }} 
              subject={title} 
              body="body"
              beforeOnClick = { () => {}}
              onClick={()=>{handleShareApp(5)}}
            >
              <img src={shareApp == 5 ? EmailLogoActive : EmailLogo} className="" style={{ width: 50 }} />
              <div className='pt-3' style={{ fontSize: 12, fontWeight: 600 }}>E-mail</div>
            </EmailShareButton>
            <div
              className="pt-1 shadow align-self-center text-center mx-3"
              style={{
                borderRadius: 23,
                border: "1px solid #FAFAFA",
                width: shareApp == 3 ? 54 : 59,
                height: shareApp == 3 ? 54 : 59,
                background: shareApp == 3 ? "rgb(22, 16, 92)" : "#fff",
                cursor: "pointer"
              }}
              onClick={() => handleShareApp(3)} 
            >
            <img src={shareApp == 3 ? InstagramActive : Instagram} className="" style={{ width: 47 }} />
            <div className='pt-3' style={{ fontSize: 12, fontWeight: 600 }}>Instagram</div>
          </div>

          <div quote={title}
            className="shadow align-self-center text-center mx-3"
            style={{
              borderRadius: 23,
              border: "1px solid #FAFAFA",
              width: shareApp == 2 ? 54 : 59,
              height: shareApp == 2 ? 54 : 59,
              background: shareApp == 2 ? "rgb(22, 16, 92)" : "#fff",
              cursor: "pointer"
            }}
            onClick={() => handleShareApp(2)} 
          >
            <img src={shareApp == 2 ? FacebookLogoActive : FacebookLogo} className="" style={{ width: 50 }} />
            <div className='pt-3' style={{ fontSize: 12, fontWeight: 600 }}>Facebook</div>
          </div>
          <div quote={title}
            className=" shadow  align-self-center text-center mx-3"
            style={{
              borderRadius: 23,
              border: "1px solid #FAFAFA",
              width: shareApp == 4 ? 54 : 59,
              height: shareApp == 4 ? 54 : 59,
              background: shareApp == 4 ? "rgb(22, 16, 92)" : "#fff",
              cursor: "pointer"
            }}
            onClick={() => handleShareApp(4)} 
          >
            <img src={shareApp == 4 ? LinkedinLogoActive : LinkedinLogo} className="" style={{ width: 50 }} />
            <div className='pt-3' style={{ fontSize: 12, fontWeight: 600 }}>LinkIn</div>
          </div>
          </ShareList>
        </section>
      </div>
    </div>
  );
}