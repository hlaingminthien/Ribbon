import React from "react";


// export const PledgeCard = (props) => {
//     const { recipientName, senderName, message, media, step, imgUrl } = props;
//     const noLetters = imgUrl ? 10 : 0;
//     return (
//       <div className={`d-flex justify-content-start pl-0`} style={{ marginTop: window.innerWidth >1500? '8%' : (media.tablet) ? '15%' :'7%', marginLeft: '3%', position: (media.tablet || media.desktop) && 'fixed' }}>            
//       <div style={{ margin: 'auto',  }}>                  
//           <img src="/card.png" alt="ribbons" style={{ width: window.innerWidth > 1500 ? 350 :(media.tablet)? 200 : 300, borderRadius: 15,  boxShadow: "0px 0px 4px 0px #00000044" }} />
//           <div className={`pt-2 ${window.innerWidth > 1500 ?" move-me move-me-3" :" move-me move-me-2 "}`} 
//               style={{ position: "absolute", left: 10, padding: 20, marginTop: -200, color: 'white', fontWeight: 500, fontSize: window.innerWidth > 1500 ? 20 : 15 , textAlign: 'left' }}>
//               <div>{recipientName}</div><br />
//               <div style={{ lineHeight: 1.1}}>{message}</div><br />
//                   {senderName && <div>Love, {senderName}
//               </div>} 
//           </div>

//           <div style={{ position: "absolute", right: 10, bottom: 10 }}>

//               <img className="" src={ imgUrl ? imgUrl.imgaeUrl : "./assets/images/ribbons/skyBlue.png" } style={{ width:  1500 ? 100 : 30 }} />
//               {imgUrl && 
//               <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", left: 0, top: -8, width: 100, height: 100 }} >
//                   <path id="curve-path" fill="none" stroke="red" strokeWidth={0}
//                       d="M0,48 Q50,-20 100,48" />                  
//                   <text fontSize={10} fontWeight={600} fill="white">                           
//                       <textPath href="#curve-path" startOffset={(50-noLetters*2)+"%"}>
//                           {/* {imgUrl.name} */}
//                           hello
//                       </textPath>
//                   </text>                  
//               </svg>
//               }
//           </div>
//       </div>
//   </div>
//     )
// }


export const PledgeCard = (props) => {
  const { recipientName, senderName, message, media, step, imgUrl, cancer } = props;

  return (
    <div className=" d-flex justify-content-center text-white shadow" id="my-node" style={{ background: 'transparent', border: '1px soldi #fff' }}>
      <img
        className="img-responsive"
        src={imgUrl ? "/cardnoText.jpg" : "/card.jpg"}
        style={{ width: 290, height: 300, borderRadius: 10 }}
      />

      <div
        className=" pt-4 justify-content-start text-left"
        style={{ position: "absolute", width: 295, padding: 20, color: 'white', fontWeight: 500, fontSize: window.innerWidth > 1500 ? 20 : 18, textAlign: 'left' }}
      >
        <div
          className={`pt-3 ${step != 1 && "move-me:move-me-1"} `}
          style={{ minHeight: 200 }}
        >
          <span className="" style={{ fontSize: 16, fontWeight: "bold" }}>
            {recipientName}
            {recipientName ? "," : null}
          </span>
          <br></br>
          <span
            className="text-white pt-2"
            style={{ fontWeight: 500, fontSize: 14, lineHeight: 1.5 }}
          >
            {message}
            {/* {message ? "!" : null} */}
          </span>
          <br></br>
          <span className="pt-2" style={{ fontWeight: 600, fontSize: 14 }}>
            {senderName ? "Love," : null} {senderName}
          </span>
        </div>

        {imgUrl && (
          <div style={{ position: "absolute", right: 10 }}>

            
            {imgUrl ? <>
            <img
              src={imgUrl}
              alt="selected-ribbons"
              style={{ width: 100, height: 100 }}
            />
              <svg viewBox="-12 2 115 56" xmlns="http://www.w3.org/2000/svg" style={{ zIndex: 100, position: "absolute", left: -4, right: 0, top: -19, width: 88, height: 85 }} >
                <path id="curve-path" fill="none" stroke="red" strokeWidth={0}
                  d2="M0,58 Q50,-20 100,58"
                  d1={`M 0,120 A 32,32 0 1, 0 54,0 A 32,32 0 1, 0 -54,0`}  
                  // d="M0,68 C0,68 10,34 30,30 50,20 70,30, 90,34, 99,68 Z"
                  // d="M2,62 Q50,-38 104,62"
                  // d="M 100 0 A 1 1 0 0 0 -100 0"
                  // d="M100 50C100 77.6142 77.6142 58 50 58C22.3858 58 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50"
                  d="M5.47387 48.2344C10.5 -16 107 -10.5 108.474 48.2344"
                />

                <text fontSize={10} fontWeight={600} fill="white">
                  <textPath href="#curve-path" startOffset={(50 - cancer.length - 14 * 2) + "%"}>
                    {cancer+" Cancer"}
                  </textPath>
                </text>
              </svg> </> : 
              <>
              <img
                src={imgUrl}
                alt="selected-ribbons"
                style={{ width: 85, height: 85 }}
              />
             <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", left: 0, top: -8, width: 85, height: 85 }} >
              <path id="curve-path" fill="none" stroke="red" strokeWidth={0}
                d="M0,48 Q50,-20 100,48" />

              <text fontSize={10} fontWeight={600} fill="white">
                <textPath href="#curve-path" startOffset={(50 - cancer.length - 10 * 2) + "%"}>
                  Select Your Ribbon
                </textPath>
              </text>
            </svg>
          </>
            }
          </div>
        )}
      </div>
    </div>
  );
};
