import React from "react";
import { Link, withRouter } from "react-router-dom";
import { orange } from "../assets/colors";
import Logo from "../assets/images/logo.png"
import { NCIS_Button } from "../tools/NCIS_Button";
const NavBar = (props) => {
	const _handlePledge = () => {
		props.history.push("/pledge_a_ribbon");
	};

	return (
		<div
			className="navbar navbar-expand-lg navbar-light shadow bg-light justify-content-between py-1 px-2 w-100"
			style={{ position: "fixed", zIndex: 999 }}>
			<div className="d-flex justify-content-between align-items-center flex-fill" style={{/* paddingTop: '.5em', paddingBottom: '1em'*/}}>
				<div className='px-lg-3 pl-xl-3 px-md-3'  style={{ zIndex: 2 }}>
					<a className="navbar-brand" href="/">
						<img src={Logo} alt="logo" height={window.innerWidth>500 ? '60px' : "40px"} />
					</a>
				</div>	
				<div className="d-flex flex-wrap flex-lg-nowrap justify-content-end" style={{ position: "absolute", left: '10px', right: window.innerWidth > 700 ? '15px' : '0px'}}>
					<div className="d-flex justify-content-end order-lg-2">
						<div className="d-flex justify-content-end align-items-center" style={{ whiteSpace: 'nowrap' }}>
							<NCIS_Button text={"Pledge a Ribbon"} onClick={_handlePledge} />
						</div>
						<div
							className="navbar-toggler" 
							type="button" 
							data-bs-toggle="collapse" 
							data-bs-target="#navbarSupportedContent" 
							aria-controls="navbarSupportedContent" 
							aria-expanded="false"
							aria-label="Toggle navigation"
							style={{ border: "none" }} >
							<span class="navbar-toggler-icon"></span>
						</div>
					</div>
					<div className="collapse navbar-collapse px-2 justify-content-end order-lg-1 bg-light" style={{borderTop: '1 solid #e0e0e0', paddingTop: '.5em', paddingBottom: '.5em'}} id="navbarSupportedContent">
						<div className="navbar-nav">
							<div className="mt-sm-4" style={{ height: 1, background: "lightgray"}} />
							<div className="nav-item text-start" style={{ whiteSpace: 'nowrap' }}>
								<Link
									className="nav-link"
									style={{ fontSize: 14 }}
									to="/event_details">
									<span class="new-link">Event Details</span>
								</Link>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	);
};
export default withRouter(NavBar);
