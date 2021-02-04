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
import InstagramEmbed from '@aarnila/react-instagram-embed';

class Icons extends Component {

  render() {

    const {
      url = "https://github.com/nygardk/react-share",//String(window.location),
      title = "Steadylearner Website",
      shareImage = "https://www.steadylearner.com/static/images/brand/prop-passer.png",
      size = "2.5rem",
    } = this.props;
    const ShareList = Passers({
      url,
      className: "",
    })({
      className: "",
      title: `Share ${String(window.location)}`,
    })("li");

    return (
    <div>
    <section>
        <ShareList >
            <EmailShareButton subject={title} body="body"  >
              <EmailIcon size={size} round />
            </EmailShareButton>

            <FacebookShareButton quote={title}>
              <FacebookIcon size={size} round/>
            </FacebookShareButton>

            <TelegramShareButton quote={title} >
              <TelegramIcon size={size} round/>
            </TelegramShareButton>
            
        </ShareList>
        </section>
        <InstagramEmbed />
        </div>
    );
  }
}

export default Icons;