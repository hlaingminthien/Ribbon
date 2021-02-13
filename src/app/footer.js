import React from "react";
import { Link } from "react-router-dom";
import { withMedia } from "react-media-query-hoc";


const Footer = (props) => {
  const { media } = props;
    const linkStyle={ textDecoration: "none",color:"#000000",fontWeight:500, borderRight: '2px solid #696969' }
    const linkStyle1={ textDecoration: "none",color:"#000000",fontWeight:500 }
  return (
    <>
    {
      !media.mobile &&
      <div className="d-flex flex-row align-self-center justify-content-between py-1 px-3" style={{ background: "#ffffff", position: 'fixed', bottom: 0, boxShadow: '1px -1px 3px 1px #e4e4e4',
    width: '100%', fontSize:14, zIndex:5 }}>
      <div className='p-2' style={{ fontWeight:500 }}>© 2021 NCIS All Rights Reserved.
      </div>
      <div className='align-self-center px-2' >
        <Link to="/privacy_policy" className='px-3' style={linkStyle}>
          Privacy Policy
        </Link>
        <Link to="/terms_and_condition" className='px-3' style={linkStyle1}>
          Terms of Use

        </Link>
      </div>
    </div>
    }
    </>
  );
};

export default withMedia(Footer);