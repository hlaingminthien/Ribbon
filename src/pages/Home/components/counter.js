import React, { useContext } from "react";
import moment from "moment";
import "../../../counter.scss";
import { MediaContext } from "react-media-query-hoc";
import DumblesIcon from "../../../assets/images/dumbles.png";

export const Counter = props => {
  const { count } = props

  var splitCount=(count).toString().split('')
    var loopcount=5-parseInt((count).toString().length);
    for (let index = 0; index < loopcount; index++) {
      splitCount.unshift('0')
    }
    

  const TodayDate = moment(Date.now()).format("dddd MMMM DD, YYYY");
  const media = useContext(MediaContext);
  return media.mobile ?
  <CounterMobile TodayDate={TodayDate} splitCount={splitCount} />
   : media.tablet ? (
    <CounterTablet TodayDate={TodayDate} splitCount={splitCount} />
  ) : (
      <div
        className="col-4 text-center"
        style={{ position: "absolute", right: 4, top: -34 }}
      >
        <div className="borderPipe"><span></span> <span></span></div>
          
        
        <div className="numbers">
          <div style={{ top: 10 }}>
            {
              splitCount.map((v,k)=>(
                <span className="digit" key={k}>{v}
                  <img className="overlayImage"  src={DumblesIcon} />
                </span>
                
              ))
            }
            
            {/* <span className="digit">{splitCount[1]}</span>
            <span className="digit">{splitCount[0]}</span>
            <span className="digit">{splitCount[0]}</span>
            <span className="digit">{splitCount[0]}</span> */}
          </div>
        </div>
        <div style={{ fontSize: 23, fontWeight: "bolder" }}>
          Ribbons Collected
      </div>
        {TodayDate}
      </div>
    );
};

export const CounterMobile = (props) => {
  const { TodayDate, splitCount } = props;
  const media = useContext(MediaContext);
  // const tabletAndMobileSize=
  return (
    <div
      className="col-5 text-center"
      style={{ position: "absolute", top: '54%', left:'8%', zIndex:2 }}
    >
      <div
        style={{
          background: "#ffffff",
          width: 150,
          height: 150,
          borderRadius: "50%",
          boxShadow: "0 0 30px #9f9f9f",
        }}
      >
          <div className="numbers px-0 pb-3" style={{ paddingTop: "50px" }}>
            <div style={{ top: 10 }}>
            {
              splitCount.map((v,k)=>(
                <span className="digit-mobile" key={k}>{v}
                <img className="overlayImage"  src={DumblesIcon} />
                </span>
              ))
            }
              {/* <span className="digit-mobile">0</span>
              <span className="digit-mobile">7</span>
              <span className="digit-mobile">2</span>
              <span className="digit-mobile">5</span>
              <span className="digit-mobile">9</span> */}
            </div>
          </div>
          <strong style={{fontSize: 12}}>Ribbons Collected</strong>
          <div style={{fontSize: 8}}>{TodayDate}</div>
        </div>
      </div>
  );
};


export const CounterTablet = (props) => {
  const { TodayDate, splitCount } = props;
  const media = useContext(MediaContext);
  // const tabletAndMobileSize=
  return (
    <div
      className="col-5 text-center"
      style={{ position: "absolute", right: 4 }}
    >
      <div
        style={{
          marginLeft: 50,
          marginRight: 50,
          background: "#ffffff",
          width: 250,
          height: 250,
          // position: "relative",
          borderRadius: "50%",
          marginTop: 50,
          boxShadow: "0 0 30px #9f9f9f",
        }}
      >
        {/* <div style={{
          marginLeft: 135,
          background: "#ffffff",
          width: 250,
          height: 250,
          borderRadius: '50%',
          marginTop: 185,
          boxShadow: "0 0 30px #9f9f9f"
        }}> */}
          <div className="numbers px-0 pb-3" style={{ paddingTop: "90px" }}>
            <div style={{ top: 10 }}>
            {
              splitCount.map((v,k)=>(
                <span className="digit" key={k}>{v}
                <img className="overlayImage"  src={DumblesIcon} />
                </span>
              ))
            }
              {/* <span className="digit">0</span>
              <span className="digit">7</span>
              <span className="digit">2</span>
              <span className="digit">5</span>
              <span className="digit">9</span> */}
            </div>
          </div>
          <strong>Ribbons Collected</strong>
          <div>{TodayDate}</div>
        </div>
      </div>
  );
};