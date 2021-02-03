import React, { Component } from "react";
import { Passers } from "prop-passer";
import {
  FacebookShareButton,
  EmailShareButton,
  TelegramShareButton,
  FacebookIcon,
  EmailIcon,
  TelegramIcon,
} from "react-share";


class ShareIcons extends Component {

  render() {

    const {
      url = "https://github.com/nygardk/react-share",//String(window.location),
      title = "Steadylearner Website",
      shareImage = "https://www.steadylearner.com/static/images/brand/prop-passer.png",
      size = "3.2rem",
    } = this.props;
    const ShareList = Passers({
      url,
      className: "",
      style:"padding-left:3",
    })({
      className: "",
      title: `Share ${String(window.location)}`,
    })("li");

    return (
    <div >
    <section className=" my-3">
        <ShareList className="mx-3">
            <div className=""style={{textAlign:"center"}}>
                
            <EmailShareButton className="mx-3" subject={title} body="body"  >
              <EmailIcon size={size} round />
            </EmailShareButton>

            <FacebookShareButton className="mx-3" quote={title}>
              <FacebookIcon size={size} round />
            </FacebookShareButton>

            <TelegramShareButton className="mx-3" quote={title} >
              <TelegramIcon size={size} round  />
            </TelegramShareButton>
            </div>
        </ShareList>
        </section>
        </div>
    );
  }
}

export default ShareIcons;

