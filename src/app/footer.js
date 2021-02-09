import React from "react";
import { Link } from "react-router-dom";
import { withMedia } from "react-media-query-hoc";


const Footer = (props) => {
  const { media } = props;
    const linkStyle={ textDecoration: "none",color:"#000000" }
  return (
    <>
    {
      !media.mobile &&
      <div className="d-flex flex-row align-self-center justify-content-between p-1" style={{ background: "#ffffff", position: 'fixed', bottom: 0, boxShadow: '1px -1px 3px 1px #e4e4e4',
    width: '100%', fontSize:14 }}>
      <div className='p-2'>© NCIS All Rights Reserved</div>
      <div className='align-self-center px-2'>
        <Link to="/privacy_policy" style={linkStyle}>
          Privacy Policy |
        </Link>
        <Link to="/terms_and_condition" style={linkStyle}>
          Terms and conditions apply
        </Link>
      </div>
    </div>
    }
    </>
  );
};

export default withMedia(Footer);