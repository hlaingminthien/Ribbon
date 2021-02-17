import React, { useContext, useRef, useEffect, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import Jar from "../../../assets/images/Jar.png";
import Ribbon from "../../../assets/images/Ribbon.png";
import TabletRibbonBottle from "../../../assets/images/TabletRibbonBottle.png";
import TabletRibbonBottle1 from "../../../assets/images/TabletRibbonBottle1.png";

import MobileRibbonBottle from "../../../assets/images/mobileRibbonBottle.png";
import MobileRibbonBottle1 from "../../../assets/images/mobileRibbonBottle1.png";
import GlassJarUpdate from "../../../assets/images/GlassJarUpdate.png";

import RibbonBottle from "../../../assets/images/RibbonBottle.png";
import RibbonBottle1 from "../../../assets/images/RibbonBottle1.png";
import ButtonRibbon from "../../../assets/images/buttonRibbon.png";

import Background from "../../../assets/images/Background.png";
import BackgroundTablet from "../../../assets/images/BackgroundTablet.png";
import BackgroundMobile from "../../../assets/images/BackgroundMobile.png";

import { Counter } from "./counter";
import { paleViolet, violet } from "../../../assets/colors";
import { NCIS_Button } from "../../../tools/NCIS_Button";
import sponsors from "../../../assets/sponsors.json";
import Logo from "../../../assets/images/logo.png";
import SelectedRibbons from "../../../assets/images/SelectedRibbon.json";
import Font from "../../../app/config/font.js";

import { Base_Url } from "../../../routes/Base_Url";

export const Home = (props) => {
  const { media } = props;
  const [shareCount, setShareCount] = useState(0);
  const [minimize, setMinimize] = useState(false);
  const [count, setCount] = useState(0);

  const _handlePledge = () => {
    props.history.push("/pledge_a_ribbon");
  };
  const _handleRoute = (path) => {
    props.history.push(path);
  };
  useEffect(() => {
    console.log("work!......");
    fetch(`${Base_Url}sharecount`, {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // setShareCount(parseInt(data.payload.count / 5))
        setCount(data.payload.count);
        const defineRibbonCount = 5;
        if (parseInt(data.payload.count) > 5) {
          const ribbonCountFromServer =
            parseInt(data.payload.count) / defineRibbonCount;

          var ribbonCountForHomeUI = 0;
          if (ribbonCountFromServer > 50) {
            var tempCount = ribbonCountFromServer / 50;
            if (tempCount % 1 == 0) {
              ribbonCountForHomeUI = 50;
            } else {
              ribbonCountForHomeUI = Math.round((tempCount % 1) * 50);
            }
          } else {
            ribbonCountForHomeUI = ribbonCountFromServer;
          }
        } else {
          ribbonCountForHomeUI = 1;
        }

        setShareCount(parseInt(Math.floor(ribbonCountForHomeUI)));
      })
      .catch((error) => {
        throw error;
      });
  });
  let floaterMobileBottom = minimize ? 50 : 150;
  if (document.getElementById("floaterMobileId") !== null)
    floaterMobileBottom = document
      .getElementById("floaterMobileId")
      .getBoundingClientRect().bottom;

  if (document.getElementById("floaterMobileId") !== null)
    var floaterMobileWidth = document.getElementById("floaterMobileId")
      .clientWidth;

  return (
    <div className="m-0 pt-xl-5 pt-lg-5 pt-md-2" style={{ overflowX: "hidden" }}>
      {(media.desktop || media.tablet) && (
        <div
          className="row m-0 justify-content-between image-fluid"
          style={{
            backgroundImage: `url(${
              media.tablet ? BackgroundTablet : Background
            })`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            minHeight: "100vh",
            width:'100%'
          }}
        >
          <HomeTitle media={media} _handlePledge={_handlePledge} />
          <div
            className="d-flex justify-content-end col-10 "
            style={{
              position: "absolute",
              marginTop:
                media.desktop && window.innerWidth < 1500
                  ? "21%"
                  : minimize
                  ? 0
                  : "23%",
              bottom: minimize && 250,
            }}
          >
            <div
              style={{
                marginRight: minimize ? "-5%" : media.tablet ? "10%" : "8%",
              }}
            >
              {minimize ? (
                <img
                  src={"/floatMini.png"}
                  alt="floater"
                  id="floaterMobileId"
                  onClick={() => setMinimize(false)}
                  style={{
                    width: 70,
                    position: "fixed",
                    opacity: 0.9,
                    zIndex: 2000,
                    right:  window.innerWidth < 375 ? 10 : 20,
                    bottom: 50,
                  }}
                />
              ) : (
                <img
                  src={"/floater.png"}
                  alt="floater"
                  onClick={() => setMinimize(false)}
                  style={{
                    width:
                      window.innerWidth > 1600 && !minimize
                        ? 300
                        : media.tablet
                        ? 220
                        : 250,
                    position: "fixed",
                    zIndex: 1,
                    opacity: 0.9,
                  }}
                />
              )}
              {!minimize && (
                <i
                  className="fa fa-times-circle "
                  onClick={() => setMinimize(true)}
                  style={{
                    position: "fixed",
                    paddingTop: media.tablet ? 220 : 250,
                    paddingLeft: media.tablet ? 100 : 115,
                    fontSize: 30,
                    color: violet,
                    zIndex: 3,
                  }}
                ></i>
              )}
            </div>
          </div>
          {media.tablet ? (
            <div className="col-12 p-0 img-fluid">
              <div className="d-flex flex-row">
                <div className="img-fluid " style={{ marginTop: 150 }}>
                  {/* <div className={`d-flex justify-content-center ${(window.innerWidth > 700 && window.innerWidth < 1001) ? "move-me move-me-6" : "move-me move-me-7"} `} style={{
                    marginLeft: (window.innerWidth > 700 && window.innerWidth < 1000) ? 270 : 310, marginTop: 0
                  }} >
                    <img
                      src={"/lightViolet.png"}
                      alt="selected-ribbons"
                      style={{ zIndex: 0, width: (window.innerWidth > 700 && window.innerWidth < 1001) ? 60 : (window.innerWidth > 1000 && window.innerWidth < 1200) ? 70 : 50,height: (window.innerWidth > 700 && window.innerWidth < 1001) ? 60 : (window.innerWidth > 1000 && window.innerWidth < 1200) ? 70 : 50, }}
                    />
                  </div> */}
                  <img
                    src={
                      SelectedRibbons.SelectedRibbonsForTablet[shareCount]
                        .imgaeUrl
                    }
                    className="img-fluid"
                    style={{
                      width: window.innerWidth > 890 && "99%",
                      // height:  window.innerWidth > 890 ? "100%" : "50%" ,
                      marginTop: window.innerWidth > 890 ? 40 : 80,
                      cursor: 'pointer'
                    }}
                    onClick={_handlePledge}
                  />
                </div>
              </div>
            </div>
          ) : (
              <div className="col-lg-11 col-xl-11 col-md-12 p-0 img-fluid " style={{}}>
                {/* <div className={`d-flex justify-content-center ${ (window.innerWidth > 1400 && window.innerWidth < 1700) ? "move-me move-me-4" : (window.innerWidth > 1699) ? "move-me move-me-5" : "move-me move-me-3"} `} style={{ marginLeft: (window.innerWidth > 1200 && window.innerWidth < 1400) ? 220 : (window.innerWidth > 1399 && window.innerWidth < 1700) ? 270 : (window.innerWidth > 1699) ? 370 : 220, marginTop:window.innerWidth > 1600 ? -100 : 100 }} >
            <div
              className="col-lg-11 col-xl-12 col-md-12 p-0 img-fluid "
              style={{}}
            >
              {/* <div className={`d-flex justify-content-center ${ (window.innerWidth > 1400 && window.innerWidth < 1700) ? "move-me move-me-4" : (window.innerWidth > 1699) ? "move-me move-me-5" : "move-me move-me-3"} `} style={{ marginLeft: (window.innerWidth > 1200 && window.innerWidth < 1400) ? 220 : (window.innerWidth > 1399 && window.innerWidth < 1700) ? 270 : (window.innerWidth > 1699) ? 370 : 220, marginTop:window.innerWidth > 1600 ? -100 : 100 }} >
                  <img
                    src={"/lightViolet.png"}
                    alt="selected-ribbons"
                    style={{ zIndex: 0, width:(window.innerWidth < 1200) ? 60 : (window.innerWidth > 1600 && window.innerWidth < 1701) ? 95 : (window.innerWidth > 1700) ? 110 : (window.innerWidth < 1600) ? 80 : 90,height :(window.innerWidth < 1200) ? 60 : (window.innerWidth > 1600 && window.innerWidth < 1701) ? 95 : (window.innerWidth > 1700) ? 110 : (window.innerWidth < 1600) ? 80 : 90 }}
                  />
                </div> */}

              <img
                src={SelectedRibbons.SelectedRibbons[shareCount].imgaeUrl}
                className="img-fluid"
                style={{
                  width: window.innerWidth > 1390 && "99%",
                  height:  window.innerWidth > 1390 ? "98%" : "100%",
                  zIndex: 0,
                  position: "relative",marginTop: window.innerWidth > 1390 ? -40 : window.innerWidth < 1300 ?  30 : -25,
                  cursor: 'pointer'
                }}
                onClick={_handlePledge}
              />
            </div>
          )}
          <Counter count={count} />
          {media.mobile || (
            <div
              className="row home-second-paragraph"
              style={{
                marginTop: media.tablet
                  ? "15rem"
                  : (window.innerWidth < 1300 &&
                    window.innerWidth > 1100 &&
                    media.desktop)
                  ? "22rem"
                  : "8rem",
                position: "relative",
                paddingBottom: "5rem"
              }}
            >
              <Highlights media={media} _handleRoute={_handleRoute} />
              <Sponsors media={media} />
            </div>
          )}
        </div>
      )}
      {media.mobile && (
        <div
          className="row m-0 pt-0 justify-content-between image-fluid"
          style={{
            backgroundImage: `url(${BackgroundMobile})`,
            // backgroundSize: "cover",
            // backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className="d-flex justify-content-end col-10 mx-5"
            style={{
              position: "absolute",
              zIndex: 5,
              paddingTop: "50%",
              right: minimize && -20,
              bottom: minimize && 100,
              marginTop: minimize ? 0 : "35%",
            }}
          >
            {minimize ? (
              <img
                src={"/floatMini.png"}
                alt="floater"
                id="floaterMobileId"
                onClick={() => setMinimize(false)}
                style={{
                  zIndex: 2000,
                  width: 70,
                  position: "fixed",
                  opacity: 0.9,
                  right: media.mobile ? 10 : 20,
                  bottom: 50,
                }}
              />
            ) : (
              <img
                src={"/floater.png"}
                alt="floater"
                id="floaterMobileId"
                onClick={() => setMinimize(false)}
                style={{ width: 150, position: "fixed", opacity: 0.9 }}
              />
            )}
            {!minimize && (
              <i
                className="fa fa-times-circle "
                onClick={() => setMinimize(true)}
                style={{
                  position: "fixed",
                  paddingTop: 145,
                  right:
                    window.innerWidth > 370 && window.innerWidth < 400
                      ? 90
                      : window.innerWidth < 370
                      ? 85
                      : 100,
                  fontSize: 25,
                  color: violet,
                  zIndex: 3,
                }}
              ></i>
            )}
          </div>

          <HomeTitle media={media} />
          <div
            className="text-center px-4 d-flex justify-content-center"
            style={{
              marginTop: 20,
              zIndex: 4 /* marginLeft: media.cusHeight_600 ? -25 : 20*/,
            }}
          >
            <NCIS_Button
              text={"Pledge A Ribbon"}
              onClick={_handlePledge}
              icon={ButtonRibbon}
              width={220}
            />
          </div>
          <div className="d-flex " style={{ position: "relative" }}>
            <Counter count={count} />
            {/* <img src={SelectedRibbons.SelectedRibbonsForMobile.filter(v=>v.id == shareCount).map(img=>img.imgaeUrl)} style={{
              bottom: media.cusHeight_700 ? 20 : 50, right: -1, height: 'auto', position: 'absolute',
              maxWidth: media.cusHeight_800 ? '100%' : media.cusHeight_700 ? '80%' : '72%'
            }} /> */}

            {/* <div className={`d-flex justify-content-center ${window.innerWidth > 360 ? "move-me move-me-8" : (window.innerWidth< 360 && window.innerWidth > 310) ? "move-me move-me-9" : "move-me move-me-9" }  `} style={{
                marginLeft: window.innerWidth > 300 && window.innerWidth < 400 ? 200 : 240
              }} >
                <img
                  src={"/lightViolet.png"}
                  alt="selected-ribbons"
                  style={{ zIndex: 0, width: (window.innerWidth > 700 && window.innerWidth < 1001) ? 60 : (window.innerWidth > 1000 && window.innerWidth < 1200) ? 70 : 47, }}
                />
              </div> */}
            <div>
              <img
                src={"/balloon.png"}
                style={{
                  width: 300,
                  position: "absolute",
                  right: 25,
                  top: -50,
                }}
              />
              <img
                src={
                  SelectedRibbons.SelectedRibbonsForMobile[shareCount].imgaeUrl
                }
                style={{
                  top: -110,
                  bottom: media.cusHeight_700 ? 20 : 50,
                  right: -30,
                  height: "auto",
                  position: "absolute",
                  maxWidth: media.cusHeight_800
                    ? "100%"
                    : media.cusHeight_700
                    ? "80%"
                    : "79%",
                  cursor: 'pointer'
                }}
                onClick={_handlePledge}
              />
            </div>
          </div>

          <div
            className=""
            style={{
              marginTop: "27rem",
              position: "relative",
              marginBottom: 25,
            }}
          >
            <HighlightsForMobo media={media} _handleRoute={_handleRoute} />
          </div>
        </div>
      )}
    </div>
  );
};
export default Home;

const HomeTitle = (props) => {
  const { media, _handlePledge } = props;
  const scrollbar = useRef();
  return (
    <div
      style={{
        position: !media.mobile && "absolute",
        paddingTop: media.tablet ? "8rem" : media.mobile ? "6rem" : "11.5rem",
        paddingLeft: media.tablet ? "6.6rem" : media.mobile ? "2rem" : "7.5rem",
        zIndex: 2,
      }}
      className="text-light col-lg-6 col-md-8 "
    >
      {/* <span
        style={{
          fontSize: media.tablet ? 20 : media.mobile ? 10 : 30,
          fontWeight: "bold",
          // lineHeight: 1,
        }}
      >
        NCIS Challenge 2021
      </span>
      */}
      <div
        style={{
          fontSize: media.tablet ? 40 : media.mobile ? 33 : 52,
          fontWeight: "bold",
          // paddingBottom: (media.cusHeight_600 || media.mobile) ? "40px" : "70px",
          lineHeight: 1,
          color: "#d8cad8",
        }}
      >
        NCIS Ribbon
        <br />
        Challenge 2021
      </div>

      {/* <span
        style={{
          fontSize: media.tablet ? 20 : media.mobile ? 10 : 30,
          fontWeight: "bold",
          // lineHeight: 1,
        }}
      >
        Together, We Fight Cancer
      </span> */}

      <div
        className="pt-3"
        style={{
          fontSize: media.tablet ? 20 : media.mobile ? 18 : 28,
          fontWeight: 600,
          paddingBottom: media.cusHeight_600 || media.mobile ? "40px" : "60px",
          lineHeight: "26px",
        }}
      >
        Together, We Fight Cancer!<br/>
        22 Feb - 21 Mar
      </div>
      <div
        className={
          media.mobile
            ? "col-10 "
            : media.tablet
            ? "col-9 pb-4"
            : "col-9 pb-4 pt-2"
        }
        style={{
          fontSize: media.mobile ? Font.mobileSmall : Font.desktopBody,
          fontWeight: "lighter",
          lineHeight: media.mobile ? "22px" : "25px",
          fontFamily: "Montserrat",
          width: '80%'
        }}
      >
        {/* <Scrollbars style={{ minHeight: media.mobile ? 100 : media.tablet ? 230 : window.innerWidth > 1590 ? 270 : 150 }} ref={scrollbar} > */}
        Themed “Together, We Fight Cancer! ”, the NCIS Ribbon Challenge 2021 aims
        to increase cancer awareness, emphasise on the importance of maintaining
        a healthy lifestyle and going for regular health screenings. Let us
        spread the word among your loved ones and make a difference in the lives
        of those affected by cancer.
        <br />
        Play your part today in our fight against cancer. All you have to do is
        to select a ribbon, write a message of encouragement and then share it
        on your social media account with our hashtag <span className="hashtag">#NCISRibbonChallenge</span>.
        <br />
        For more information, visit{" "}
        <a
          href="https://www.ncis.com.sg"
          style={{ textDecoration: "none", color: "white" }}
          target="_blank"
        >
          www.ncis.com.sg
        </a>
        .{/* </Scrollbars> */}
      </div>
      {!media.mobile && (
        <div
          className=""
          style={{ position: "absolute", zIndex: 100, fontSize: "14px" }}
        >
          <NCIS_Button
            text={"Pledge A Ribbon"}
            onClick={_handlePledge}
            icon={ButtonRibbon}
            fontSize={14}
          />
        </div>
      )}
    </div>
  );
};

const Highlights = (props) => {
  const { media, _handleRoute } = props;
  return (
    <div
      style={{ paddingTop: media.tablet ? -60 : "80px", paddingLeft: "5rem" }}
      className="text-light w-50"
    >
      <div
        style={{ fontSize: 20, fontWeight: "bold", fontFamily: "Montserrat" }}
      >
        Event Highlights
      </div>
      <div
        className="w-75 py-3"
        style={{
          fontFamily: "Montserrat",
          fontSize: media.tablet ? Font.tabletBody : Font.desktopBody,
          lineHeight: "26px",
        }}
      >
        <ul>
          <li>Cancer Education Talks</li>
          <li>Mammogram screening</li>
          <li>FIT (Faecal Immunochemical Test) kit distribution</li>
        </ul>
      </div>
      <NCIS_Button
        text={"Learn More"}
        fontSize={Font.button}
        onClick={() => _handleRoute("/event_details")}
      />
    </div>
  );
};

const HighlightsForMobo = (props) => {
  const { media, _handleRoute } = props;
  return (
    <div style={{ color: "#271f57" }} className=" px-3">
      <div
        className="p-2"
        style={{
          fontSize: 20,
          fontWeight: "bold",
          fontFamily: "Montserrat",
          lineHeight: "22px",
        }}
      >
        Event Highlights
      </div>
      <div
        className=""
        style={{ fontSize: Font.mobileSmall, lineHeight: "22px" }}
      >
        <ul>
          <li>Cancer Education Talks</li>
          <li>Mammogram screening</li>
          <li>FIT (Faecal Immunochemical Test) kit distribution</li>
        </ul>
      </div>
      <div className="pb-4 px-2">
        <NCIS_Button
          text={"Learn More"}
          fontSize={Font.button}
          onClick={() => _handleRoute("/event_details")}
        />
      </div>
      <SponsorsForMobo media={media} />
    </div>
  );
};

const SponsorsForMobo = (props) => {
  const { media } = props;

  return (
    <div style={{}} className="row py-2">
      {/* <div style={{ fontSize: 20, fontWeight: "bold" }}>
        Our Partners and Sponsors
      </div> */}
      <div className="d-flex pt-3 ">
        <div
          className="align-self-center col-3 "
          style={{
            fontWeight: 600,
            fontSize: Font.mobileBody,
            lineHeight: "22px",
          }}
        >
          Organiser:
        </div>
        <div className="d-flex mx-2">
          <div
            className="d-flex mx-2 my-1 py-2 align-items-center"
            style={{
              width: 150,
              height: 50,
              borderRadius: 10,
              backgroundColor: "#fff",
            }}
          >
            <img
              className="mx-2 align-self-center"
              src={Logo}
              alt="sponsor"
              style={{ width: 120 }}
            />
          </div>
        </div>
      </div>
      <div className="d-flex pt-3 ">
        <div
          className="align-self-center col-3 mr-2"
          style={{ fontWeight: 600, fontSize: Font.mobileBody }}
        >
          Supporting Partners:
        </div>
        <div className="d-flex flex-wrap mx-1">
          {
            /*new Array(8).fill(null)*/ sponsors.supportingPartners.map(
              (v, k) => (
                <div className="mx-2" key={k}>
                  <div
                    className="d-flex my-1 py-2 align-items-center"
                    style={{
                      width: 90,
                      height: 50,
                      borderRadius: 10,
                      backgroundColor: "#fff",
                    }}
                  >
                    <img
                      className="mx-2 align-self-center"
                      src={v.imgaeUrl}
                      alt="sponsor"
                      style={{ width: 70 }}
                    />
                  </div>
                </div>
              )
            )
          }
        </div>
      </div>
      <div className="d-flex pt-3 ">
        <div
          className="col-3 mr-2 "
          style={{
            fontWeight: 600,
            fontSize: Font.mobileBody,
            lineHeight: "22px",
          }}
        >
          Sponsors by:
        </div>
        <div className="d-flex flex-wrap mx-1">
          {
            /*new Array(8).fill(null)*/ sponsors.sponsors.map((v, k) => (
              <div className="mx-2" key={k}>
                <div
                  className="d-flex my-1 py-2 align-items-center"
                  style={{
                    width:
                      v.name === "rocheSpon"
                        ? window.innerWidth > 360
                          ? 70
                          : 70
                        : window.innerWidth > 360
                        ? 80
                        : 80,
                    height: v.name === "rocheSpon" ? 50 : 50,
                    borderRadius: 10,
                    backgroundColor: "#fff",
                  }}
                >
                  <img
                    className="mx-2 align-self-center"
                    src={v.imgaeUrl}
                    alt="sponsor"
                    style={{
                      width:
                        v.name === "rocheSpon"
                          ? window.innerWidth > 360
                            ? 50
                            : 40
                          : window.innerWidth > 360
                          ? 60
                          : 50,
                    }}
                  />
                </div>
              </div>
            ))
          }
        </div>
      </div>
      
    </div>
  );
};

const Sponsors = (props) => {
  const { media } = props;

  return (
    <div
      style={{ paddingTop: 90, paddingBottom: "90px", paddingLeft: media.desktop ? "100px" : "26px" }}
      className="row w-50 col-lg-5 justify-content-end"
    >
      {/* <div style={{ fontSize: 25, fontWeight: "bold" }}>
        Our Partners and Sponsors
      </div> */}
      <div className="d-flex ">
        <div
          className="align-self-center col-3 mr-2"
          style={{
            fontWeight: 600,
            fontSize: media.tablet ? Font.tabletBody : Font.desktopBody,
          }}
        >
          Organiser:
        </div>
        <div className="d-flex col-6 mx-2">
          <div
            className="d-flex mx-2 my-1 py-2 align-items-center"
            style={{
              width: 190,
              height: 70,
              borderRadius: 10,
              backgroundColor: "#fff",
              // borderRadius: '50%',
            }}
          >
            <img
              className="mx-2 align-self-center"
              src={Logo}
              alt="sponsor"
              style={{  height:60 }}
            />
          </div>
        </div>
      </div>
      <div className="d-flex pt-3 ">
        <div
          className="align-self-center col-3 mr-2"
          style={{
            fontWeight: 600,
            fontSize: media.tablet ? Font.tabletBody : Font.desktopBody,
          }}
        >
          Supporting Partners:
        </div>
        <div className="d-flex mx-2">
          {
            /*new Array(8).fill(null)*/ sponsors.supportingPartners.map(
              (v, k) => (
                <div className="mx-2" key={k}>
                  <div
                    className="d-flex my-1 py-2 align-items-center"
                    style={{
                      width: 100,
                      height: 50,
                      // borderRadius:'50%',
                      borderRadius: 10,
                      backgroundColor: "#fff",
                    }}
                  >
                    <img
                      className="mx-2 align-self-center"
                      src={v.imgaeUrl}
                      alt="sponsor"
                      style={{ width: 55, position: "relative", right: -18 }}
                    />
                  </div>
                </div>
              )
            )
          }
        </div>
      </div>
      <div className="d-flex pt-3 ">
        <div
          className="col-3 mr-2 pt-1"
          style={{
            fontWeight: 600,
            fontSize: media.tablet ? Font.tabletBody : Font.desktopBody,
          }}
        >
          Sponsors:
        </div>
        <div className="d-flex mx-2">
          {
            /*new Array(8).fill(null)*/ sponsors.sponsors.map((v, k) => (
              <div className="mx-2" key={k}>
                <div
                  className="d-flex my-1 py-2 align-self-center"
                  style={{
                    width:
                      v.name === "rocheSpon"
                        ? media.desktop
                          ? 90
                          : 90
                        : media.tablet
                        ? 100
                        : 100,
                    height: v.name === "rocheSpon" ? 50 : 50,
                    // borderRadius: '50%',
                    borderRadius: 10,
                    backgroundColor: "#fff",
                  }}
                >
                  &nbsp;&nbsp;&nbsp;
                  <img
                    className="mx-2 align-self-center"
                    src={v.imgaeUrl}
                    alt="sponsor"
                    style={{
                      width:
                        v.name === "rocheSpon"
                          ? media.desktop
                            ? 50
                            : 40
                          : media.tablet
                          ? 60
                          : 60,
                    }}
                  />
                </div>
              </div>
            ))
          }
        </div>
      </div>
      
    </div>
  );
};
