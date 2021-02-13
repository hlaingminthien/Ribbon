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

class Icons extends Component {

  render() {

    const {
      url = "H",//String(window.location),
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
          <section className="my-3">
          <ShareList style={{ textAlign: "center" }}>
            <EmailShareButton className="mx-3" subject={title} body="body"  >
            <img src={EmailLogo} className="img-fluid" />
              {/* <i
                className="fa fa-envelope-o" style={{
                  fontSize: 27,
                  color: "rgb(22, 16, 92)",
                }}
                aria-hidden="true"
              ></i> */}
            </EmailShareButton>

            <FacebookShareButton className="mx-3" quote={title}>
            <img src={FacebookLogo} className="img-fluid" />
              {/* <i
                className="fa fa-facebook" style={{
                  fontSize: 27,
                  color: "rgb(22, 16, 92)",
                }}
                aria-hidden="true"
              ></i> */}
            </FacebookShareButton>

            <TelegramShareButton className="mx-3" quote={title} >
              <i
                className="fa fa-telegram" style={{
                  fontSize: 27,
                  color: "rgb(22, 16, 92)",
                }}
                aria-hidden="true"
              ></i>
            </TelegramShareButton>
          </ShareList>
        </section>
      </div>
    );
  }
}

export default Icons;