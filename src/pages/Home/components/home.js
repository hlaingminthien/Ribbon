import React, { useContext } from "react";
import Jar from "../../../assets/images/Jar.png";
import Ribbon from "../../../assets/images/Ribbon.png";
import TabletRibbonBottle from "../../../assets/images/TabletRibbonBottle.png";
import TabletRibbonBottle1 from "../../../assets/images/TabletRibbonBottle1.png";

import MobileRibbonBottle from "../../../assets/images/mobileRibbonBottle.png";
import MobileRibbonBottle1 from "../../../assets/images/mobileRibbonBottle1.png";
import GlassJarUpdate from "../../../assets/images/GlassJarUpdate.png"

import RibbonBottle from "../../../assets/images/RibbonBottle.png";
import RibbonBottle1 from "../../../assets/images/RibbonBottle1.png";
import ButtonRibbon from "../../../assets/images/buttonRibbon.png";

import Background from "../../../assets/images/Background.png";
import BackgroundTablet from "../../../assets/images/BackgroundTablet.png";
import BackgroundMobile from "../../../assets/images/BackgroundMobile.png";

import { Counter } from "./counter";
import { paleViolet } from "../../../assets/colors";
import { NCIS_Button } from "../../../tools/NCIS_Button";
import sponsors from "../../../assets/sponsors.json"
import Logo from "../../../assets/images/logo.png"

export const Home = (props) => {
  const { media } = props;

  const _handlePledge = () => {
    props.history.push("/pledge_a_ribbon");
  };

  return (
    <>
      {
        (media.desktop || media.tablet) &&
        <div
          className="row m-0 pt-0 justify-content-between image-fluid"
          style={{
            backgroundImage: `url(${media.tablet ? BackgroundTablet : Background})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: media.tablet ? "center" : "none",
            minHeight:media.mobile && '100vh'
          }}
        >

          <HomeTitle media={media} _handlePledge={_handlePledge} />
          <div className='d-flex justify-content-end col-10 mx-5' style={{ position: 'absolute', marginTop: media.desktop ? '23%' : '35%' }}>
            <img src={"/floater.png"} alt='floater' style={{ width: 250, position: 'fixed', opacity:0.9 }} />

          </div>
          {media.tablet ? (
            <div className="col-12 p-0 img-fluid">
              <div className="d-flex flex-row">
                <div className="w-100" style={{ marginTop: 150 }}>
                  {/* <img src={TabletRibbonBottle} className="img-fluid" /> */}
                  <img src={TabletRibbonBottle1} className="img-fluid" />

                  {/* <img src={Ribbon} className="img-fluid" />
            </div>
            <div className="w-50">
              <img src={Jar} className="img-fluid" /> */}
                </div>
              </div>
            </div>
          ) : (
              <div className="col-lg-11 col-md-12 p-0 img-fluid">
                {/* <img src={RibbonBottle} className="img-fluid" /> */}
                <img src={RibbonBottle1} className="img-fluid" />
              </div>
            )}
          <Counter />
          {media.mobile || (
            <div className="row">
              <Highlights media={media} />
              <Sponsors media={media} />
            </div>
          )}
        </div>
      }
      {
        media.mobile && <div className='row m-0 pt-0 justify-content-between image-fluid' style={{
          backgroundImage: `url(${BackgroundMobile})`, backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
          <div className='d-flex justify-content-end col-10 mx-5' style={{ position: 'absolute', zIndex:1, paddingTop:'35%' }}>
            <img src={"/floater.png"} alt='floater' style={{ width: 150, position: 'fixed', opacity:0.9 }} />

          </div>
          <HomeTitle media={media} />
          
          <div className='d-flex ' >
          <Counter />
          <img src={MobileRibbonBottle1} style={{
            bottom: media.cusHeight_700 ? 20 : 50, right: -1, height: 'auto',position:'absolute',
            maxWidth: media.cusHeight_800 ? '100%' : media.cusHeight_700 ? '80%' : '72%'
          }} />
          {/* <img src={MobileRibbonBottle} style={{
            bottom: media.cusHeight_700 ? 20 : 50, right: -1, height: 'auto',position:'absolute',
            maxWidth: media.cusHeight_800 ? '100%' : media.cusHeight_700 ? '80%' : '77%'
          }} /> */}
          </div>
          
          <div className=' pt-5'>
            <HighlightsForMobo media={media} />
            
          </div>
        </div>
      }
    </>
  );
};
export default Home;

const HomeTitle = (props) => {
  const { media, _handlePledge } = props;
  return (
    <div
      style={{
        position:!media.mobile && "absolute",
        paddingTop: media.tablet ? "8rem" : media.mobile ? '6rem' : "11.5rem",
        paddingLeft: media.tablet ? "6.6rem" : media.mobile ? '2rem' : "7.5rem",
      }}
      className="text-light col-lg-6 col-md-8 "
    >
      <span
        style={{
          fontSize: media.tablet ? 20 : media.mobile ? 10 : 30,
          fontWeight: "bold",
          lineHeight: 1,
        }}
      >
        NCIS Challenge 2021
      </span>
      {/* <div
        style={{
          fontSize: media.tablet ? 35 : media.mobile ? 20 : 58,
          fontWeight: "bold",
          color: paleViolet,
          lineHeight: 1,
        }}
      >
        Virtual Ribbon
      </div> */}
      <div
        style={{
          fontSize: media.tablet ? 30 : media.mobile ? 18 : 38,
          fontWeight: "bold",
          paddingBottom: (media.cusHeight_600 || media.mobile) ? "40px" : "70px",
          lineHeight: 1,
        }}
      >
        Together, We Fight Cancer
      </div>
      <div
        className={media.mobile ? "col-10 " : media.tablet ? "col-9 pb-4" : "col-9 pb-4 pt-2"}
        style={{ fontSize: media.mobile ? 10 : 13, fontWeight: "lighter", lineHeight: 1.6 }}
      >
        Themed “Together, we fight cancer”, the virtual NCIS Ribbon Challenge 2021 aims to increase cancer awareness, emphasise on the importance of maintaining a healthy lifestyle and going for regular health screenings. Let us spread the word among your loved ones and make a difference in the lives of those affected by cancer.
        <br />
        Play your part today in our fight against cancer. All you have to do is to select a ribbon, write a message of encouragement and then share it on your social media account with our hashtag #ncisribbonchallenge.
        <br />
        For each ribbon pledged, $3 will go towards the NCIS Cancer Fund to provide timely financial aid to our needy cancer patients.
        <br />
        Thank you for your generous support and together, we fight cancer! For more information, visit www.ncis.com.sg.
      </div>
      {media.mobile ?
        <div className='text-center' onClick={console.log('hello')} style={{ marginTop: 20, marginLeft: media.cusHeight_600 ? -25 : -9 }}>
          <NCIS_Button text={"Pledge a Ribbon"} icon={ButtonRibbon} />
        </div>
        :
        <div className='' style={{ position: 'absolute', zIndex: 0.8 }}>
          <NCIS_Button text={"Pledge a Ribbon"} onClick={_handlePledge} icon={ButtonRibbon} />

        </div>
      }
    </div>
  );
};

const Highlights = props => {
  const { media }= props
  return (
    <div
      style={{ paddingTop: "90px", paddingLeft: "100px" }}
      className="text-light w-50"
    >
      <div style={{ fontSize: 25, fontWeight: "bold" }}>Highlights</div>
      <div className="w-75 py-3">
        <ul>
          <li>
            Health talks on cancer screening and prevention
          </li>
          <li>
            Mammogram screening
        </li>
          <li>
            FIT (Faecal Immunochemical Test) kit distribution

        </li>
        </ul>
      </div>
    </div>
  );
};

const HighlightsForMobo = props => {
  const { media }= props
  return (
    <div
  style={{ paddingTop:200,color:'#271f57' /*position:'absolute', zIndex:1 */ }}
      className=" px-3"
    >
      <div className='p-2' style={{ fontSize: 20, fontWeight: "bold" }}>Highlights</div>
      <div className=" pb-3">
        <ul>
          <li>
            Health talks on cancer screening and prevention
          </li>
          <li>
            Mammogram screening
        </li>
          <li>
            FIT (Faecal Immunochemical Test) kit distribution

        </li>
        </ul>
      </div>
      <SponsorsForMobo media={media} />
    </div>
  );
};

const SponsorsForMobo = props => {
  const { media } = props

  return (
    <div
      style={{ }}
      className="row p-2"
    >
      <div style={{ fontSize: 20, fontWeight: "bold" }}>Our Partners and Sponsors</div>
      <div className='d-flex pt-3 '>
        <div className='align-self-center col-3 mr-2' style={{ fontWeight: 600 }}>
          Organised by:
          </div>
        <div className="d-flex col-10 mx-2">
          <div
            className="d-flex bg-light mx-2 my-1 py-2 align-items-center"
            style={{
              width: 130,
              // height: 70,
              borderRadius: 10,
            }}
          >
            <img className='mx-2 align-self-center' src={Logo} alt="sponsor" style={{ width: 110 }} />
          </div>
        </div>

      </div>
      <div className='d-flex pt-3 '>
        <div className='col-3 mr-2 pt-4' style={{ fontWeight: 600 }}>
          Sponsors:
          </div>
        <div className='d-flex flex-wrap col-10 mx-2'>
          {/*new Array(8).fill(null)*/sponsors.sponsors.map((v, k) => (
            <div className="mx-2" key={k}>
              <div
                className="d-flex bg-light my-1 py-2 align-items-center"
                style={{
                  width: 100,
                  height: 60,
                  borderRadius: 10,
                }}
              >
                <img className='mx-2 align-self-center' src={v.imgaeUrl} alt="sponsor" style={{ width: 90 }} />
              </div>
            </div>
          ))}
        </div>


      </div>
      <div className='d-flex pt-3 '>
        <div className='align-self-center col-3 mr-2' style={{ fontWeight: 600 }}>
          Supporting Partners:
          </div>
        <div className='d-flex flex-wrap col-10 mx-2'>
          {/*new Array(8).fill(null)*/sponsors.supportingPartners.map((v, k) => (
            <div className="mx-2" key={k}>
              <div
                className="d-flex bg-light my-1 py-2 align-items-center"
                style={{
                  width: 100,
                  height: 60,
                  borderRadius: 10,
                }}
              >
                <img className='mx-2 align-self-center' src={v.imgaeUrl} alt="sponsor" style={{ width: 80 }} />
              </div>
            </div>
          ))}
        </div>

      </div>
     
    </div>
  );
};


const Sponsors = props => {
  const { media } = props

  return (
    <div
      style={{ paddingTop: "100px", paddingBottom: "90px", paddingLeft: media.desktop ? "50px" : "30px" }}
      className="row w-50 col-lg-5  justify-content-end"
    >
      <div style={{ fontSize: 25, fontWeight: "bold" }}>Our Partners and Sponsors</div>
      <div className='d-flex pt-3 '>
        <div className='align-self-center col-3 mr-2' style={{ fontWeight: 600 }}>
          Organised by:
          </div>
        <div className="d-flex col-10 mx-2">
          <div
            className="d-flex bg-light mx-2 my-1 py-2 align-items-center"
            style={{
              width: 130,
              // height: 70,
              borderRadius: 10,
            }}
          >
            <img className='mx-2 align-self-center' src={Logo} alt="sponsor" style={{ width: 110 }} />
          </div>
        </div>

      </div>
      <div className='d-flex pt-3 '>
        <div className='col-3 mr-2 pt-4' style={{ fontWeight: 600 }}>
          Sponsors:
          </div>
        <div className='d-flex flex-wrap col-10 mx-2'>
          {/*new Array(8).fill(null)*/sponsors.sponsors.map((v, k) => (
            <div className="mx-2" key={k}>
              <div
                className="d-flex bg-light my-1 py-2 align-items-center"
                style={{
                  width: 100,
                  height: 60,
                  borderRadius: 10,
                }}
              >
                <img className='mx-2 align-self-center' src={v.imgaeUrl} alt="sponsor" style={{ width: 90 }} />
              </div>
            </div>
          ))}
        </div>


      </div>
      <div className='d-flex pt-3 '>
        <div className='align-self-center col-3 mr-2' style={{ fontWeight: 600 }}>
          Supporting Partners:
          </div>
        <div className='d-flex flex-wrap col-10 mx-2'>
          {/*new Array(8).fill(null)*/sponsors.supportingPartners.map((v, k) => (
            <div className="mx-2" key={k}>
              <div
                className="d-flex bg-light my-1 py-2 align-items-center"
                style={{
                  width: 100,
                  height: 60,
                  borderRadius: 10,
                }}
              >
                <img className='mx-2 align-self-center' src={v.imgaeUrl} alt="sponsor" style={{ width: 80 }} />
              </div>
            </div>
          ))}
        </div>

      </div>
     
    </div>
  );
};
