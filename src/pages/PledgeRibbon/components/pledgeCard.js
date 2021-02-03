import React from "react";

// export const PledgeCard = ({ recipientName, senderName, message, media }) => {
//     return (
//         <div className={`d-flex justify-content-start pl-0 `} style={{ marginTop: window.innerWidth >1500? '8%' : (media.tablet) ? '15%' :'7%', marginLeft: '3%', position: (media.tablet || media.desktop) && 'fixed' }}>
//             <div style={{ margin: 'auto', width: 200 }}>
//                 <img src="/card.png" alt="ribbons" style={{ width: window.innerWidth > 1500 ? 260 :(media.tablet)? 200 : 300, borderRadius: 15 }} />
//                 <div className={`pt-2 ${(window.innerWidth > 1500 && step!= 1) ?" move-me move-me-3" :" move-me move-me-2 "}`} style={{ padding: 20, marginTop: -200, color: 'white', fontWeight: 500, fontSize: window.innerWidth > 1500 ? 20 : 15 , textAlign: 'left' }}>
//                     <div>{recipientName}</div><br />
//                     <div style={{ lineHeight: 1.1}}>{message}</div><br />
//                     {senderName && <div>Love, {senderName}</div>}
//                 </div>
//             </div>
//         </div>
//     )
// }


export const PledgeCard = (props) => {
    const { recipientName, senderName, message, media, step, imgUrl } = props;

    return (
      <div className=" d-flex pt-3 pb-1 justify-content-center text-white " style={{marginTop: window.innerWidth >1500? '8%' : (media.tablet) ? '15%' :'7%', marginLeft: '3%', position: (media.tablet || media.desktop) && 'fixed'}}>
        <img
          className="img-responsive"
          src={"/card.png"}
          style={{ maxWidth: 260, borderRadius: 20 }}
        />
  
        <div
          className=" pt-4 px-3 justify-content-start text-left"
          style={{ position: "absolute", width: 275,padding: 20, color: 'white', fontWeight: 500, fontSize: window.innerWidth > 1500 ? 20 : 18 , textAlign: 'left' }}
        >
          <div
            className={`pt-3 ${step != 1 && "move-me move-me-1"} `}
            style={{ minHeight: 150 }}
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
              {message ? "!" : null}
            </span>
            <br></br>
            <span className="pt-2" style={{ fontWeight: 600, fontSize: 14 }}>
              {senderName ? "Love," : null} {senderName}
            </span>
          </div>
  
          {imgUrl && (
            <div className="d-flex justify-content-end align-items-start">
              {/* <div style={{}}>
                                     
                                      </div> */}
  
              <img
                src={imgUrl}
                alt="selected-ribbons"
                style={{ width:80, height:80 }}
              />
            </div>
          )}
        </div>
      </div>
    );
  };
  