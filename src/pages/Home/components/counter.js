import React, { useContext } from "react";
import moment from "moment";
import "../../../counter.scss";
import { MediaContext } from "react-media-query-hoc";

export const Counter = () => {
  const TodayDate = moment(Date.now()).format("dddd MMMM DD, YYYY");
  const media = useContext(MediaContext);
  return media.mobile ?
  <CounterMobile TodayDate={TodayDate} />
   : media.tablet ? (
    <CounterTablet TodayDate={TodayDate} />
  ) : (
      <div
        className="col-3 text-center"
        style={{ position: "absolute", right: 4, top: -34 }}
      >
        <div
          style={{
            marginLeft: 50,
            marginRight: 50,
            borderBottom: "4px solid white",
            borderLeft: "4px solid white",
            borderRight: "4px solid white",
            position: "relative",
            top: 74,
            height: 250,
          }}
        />
        <div class="numbers">
          <div style={{ top: 10 }}>
            {/* <span class="digit">$</span> */}
            <span class="digit">7</span>
            <span class="digit">2</span>
            <span class="digit">5</span>
            <span class="digit">9</span>
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
  const { TodayDate } = props;
  const media = useContext(MediaContext);
  // const tabletAndMobileSize=
  return (
    <div
      className="col-5 text-center"
      style={{ position: "absolute", top: '54%', left:'8%' }}
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
          <div class="numbers px-0 pb-3" style={{ paddingTop: "50px" }}>
            <div style={{ top: 10 }}>
              {/* <span class="digit-mobile">$</span> */}
              <span class="digit-mobile">7</span>
              <span class="digit-mobile">2</span>
              <span class="digit-mobile">5</span>
              <span class="digit-mobile">9</span>
            </div>
          </div>
          <strong style={{fontSize: 12}}>Ribbons Collected</strong>
          <div style={{fontSize: 8}}>{TodayDate}</div>
        </div>
      </div>
  );
};


export const CounterTablet = (props) => {
  const { TodayDate } = props;
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
          <div class="numbers px-0 pb-3" style={{ paddingTop: "90px" }}>
            <div style={{ top: 10 }}>
              {/* <span class="digit">$</span> */}
              <span class="digit">7</span>
              <span class="digit">2</span>
              <span class="digit">5</span>
              <span class="digit">9</span>
            </div>
          </div>
          <strong>Ribbons Collected</strong>
          <div>{TodayDate}</div>
        </div>
      </div>
  );
};