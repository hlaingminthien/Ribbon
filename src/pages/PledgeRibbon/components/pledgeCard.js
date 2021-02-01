import React from "react";

export const PledgeCard = ({ recipientName, senderName, message, media }) => {
    return (
        <div className={`d-flex justify-content-start pl-0 `} style={{ marginTop: window.innerWidth >1500? '8%' : (media.tablet) ? '15%' :'7%', marginLeft: '3%', position: (media.tablet || media.desktop) && 'fixed' }}>
            <div style={{ margin: 'auto', width: 200 }}>
                <img src="/card.png" alt="ribbons" style={{ width:window.innerWidth > 1500 ? 350 :(media.tablet)? 200 : 300, borderRadius: 15 }} />
                <div className={`pt-2 ${window.innerWidth > 1500 ?" move-me move-me-3" :" move-me move-me-2 "}`} style={{ padding: 20, marginTop: -200, color: 'white', fontWeight: 500, fontSize: window.innerWidth > 1500 ? 20 : 15 , textAlign: 'left' }}>
                    <div>{recipientName}</div><br />
                    <div style={{ lineHeight: 1.1}}>{message}</div><br />
                    {senderName && <div>Love, {senderName}</div>}
                </div>
            </div>
        </div>
    )
}