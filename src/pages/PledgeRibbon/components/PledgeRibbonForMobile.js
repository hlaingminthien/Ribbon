import React, { useState, useRef } from "react"
import { NCIS_Selector } from "../../../tools/NCIS_Selector";
import { NCIS_TextBox } from "../../../tools/NCIS_TextBox";
import { NCIS_Button } from "../../../tools/NCIS_Button";
import RibbonImages from "../../../assets/RibbonImages.json";
import { violet, paleViolet } from "../../../assets/colors";
import { ThankYouCard } from "../components/pledgeForm"
import { PledgeCard } from "../components/pledgeCard"
import { ShareForms } from "../components/pledgeForm"


const PledgeRibbonsForMobile = props => {
    const { _handleSelect,
        _handleSelectOption,
        menuVisible,
        _handleRibbonClick,
        _handleTextChange,
        step, media,
        _handleReview,
        _handleConfirm,
        _handleEdit,
        recipientName,
        senderName,
        message, } = props
    const [complete, setComplete] = useState(false)
    const _handleShare = () => {
        setComplete(true);
    }

    return (
        <div>
            <strong className='px-3' style={{ fontSize: 12 }}>{`Step ${step}:`}</strong>
            {
                step === 1 ?
                    <div className='px-3' style={{ fontSize: 18, fontWeight: 'bold' }}>Choose Your Ribbon and Create Your Message</div> :
                    step === 2 ? <div className='px-2' style={{ fontSize: 18, fontWeight: 'bold' }}>Review Your Ribbon </div> :
                        step === 3 ?
                            <div className='px-3'>
                                <div className='' style={{ fontSize: 18, fontWeight: 'bold' }}>Share your message</div>
                                <div className='p-2' style={{ fontSize: 13, fontWeight: 600 }}>Click Back to edit or select on the following icons to share your message</div>
                            </div> : null
            }

            <Ribbons {...props} complete={complete} />
            {
                step == 2 &&
                <div className='d-flex justify-content-center flex-wrap'>
                    <div className='py-1'>
                        <NCIS_Button
                            text={"Edit"}
                            onClick={_handleEdit}
                            className="mx-2"
                            buttonColor={paleViolet}
                        />
                    </div>
                    <div className='py-1'>
                        <NCIS_Button
                            text={"Confirm"}
                            onClick={_handleConfirm}
                            className="mx-2"
                        />
                    </div>

                </div>
            }
            {
                (step == 3 && !complete) &&
                <div className='d-flex justify-content-center'>
                    <NCIS_Button
                        text={"Back"}
                        onClick={_handleEdit}
                        className="mx-2"
                        buttonColor={paleViolet}
                    />
                    <NCIS_Button
                        text={"Share"}
                        onClick={_handleShare}
                        // onClick={_handleConfirm}
                        className="mx-2"
                    />
                </div>
            }
            {
                (complete && step == 3) &&
                <ThankuCard _handleEdit={_handleEdit} />
            }
        </div>
    )
}
export default PledgeRibbonsForMobile

const Ribbons = props => {
    const { _handleRibbonClick, step, _handleTextChange, recipientName, complete, senderName, message, _handleSelect, menuVisible, _handleSelectOption, _handleReview,
        _handleEdit, _handleConfirm, media
    } = props
    const [selected, setSelected] = useState(false);
    const [nextOfStep1, setNextOfStep1] = useState(selected ? true : false);

    const [selectedId, setSelectedId] = useState(null);
    const [number, setNumber] = useState(null);
    const [imgUrl, setImgUrl] = useState([]);
    const [cancerName, setCancerName] = useState(null);
    const [ close , setClose ]=useState(true)

    const PopupDiv = (e) => document.getElementById(e.target.id + "popup");
    const RibbonDiv = (e) => document.getElementById(e.target.id);
    const prevRibbonDiv = (e) => document.getElementById(e);

    const prevSelectedRef = useRef();
    const _handleClick = (e, name, k, imgaeUrl) => {
        prevSelectedRef.current = selectedId;
        const prevSelectedId = prevSelectedRef.current;

        setSelected(true);
        setSelectedId(e.target.id);
        setNumber(k)
        setImgUrl(imgaeUrl)
        setCancerName(name)
        setClose(true)

        if (selected === false) {
            RibbonDiv(e).style.background = "#cecece";
            if (PopupDiv(e)) {
                PopupDiv(e).style.visibility = "visible";
            } else {
                return;
            }
        }

        RibbonDiv(e).style.background = 'rgba(64,64,64,0.2)'
        RibbonDiv(e).style.color = "#ffffff";
        if (selectedId != null) {
            prevRibbonDiv(prevSelectedId).style.background = "none";
            prevRibbonDiv(prevSelectedId).style.color = "#000000";
            _handleRibbonClick(false);
        }
        if (number == k) PopupDiv(e).style.visibility = "hidden";
        // _handleRibbonClick(true);
    };

    const _handleHover = (e, name, k) => {
        console.log(e.target.id);
        setNumber(k);
        if (selected === false) {
            RibbonDiv(e).style.background = "#cecece";
            if (PopupDiv(e)) {
                PopupDiv(e).style.visibility = "visible";
            } else {
                return;
            }
        }
    };
    const _handleLeave = (e) => {
        if (selected === false) {
            RibbonDiv(e).style.background = "white";
            RibbonDiv(e).style.color = "#000000";

            if (PopupDiv(e)) {
                PopupDiv(e).style.visibility = "hidden";
            } else {
                return;
            }
        }
    };
    return (
        <div >
            {
                !nextOfStep1 && step == 1 &&
                <>
                    <div className="d-flex flex-row flex-wrap justify-content-center px-1">
                        {RibbonImages.Ribbons.map((v, k) => (
                            <div className="col-4 " style={{ cursor: "pointer" }}>
                                
                                <div className='text-center'
                                    id={k}
                                    style={{ borderRadius: "10px", minHeight: 70 }}
                                    onClick={(e) => _handleClick(e, v.name, k, v.imgaeUrl)}
                                // onMouseOver={(e) => _handleHover(e, v.name, k)}
                                // onMouseLeave={(e) => _handleLeave(e, v.name)}
                                >
                                    <img src={v.imgaeUrl} alt="ribbons" style={{ width: 40 }} id={k} />
                                    <div className='d-flex justify-content-center text-center' id={k} style={{ textAlign: 'center', marginTop: 3, fontWeight: '500', fontSize: 12, position: 'absolute', width: 120 }}>{v.name}</div>
                                </div>
                                {(number == k && close) && <div
                                    className="shadow pt-2"
                                    id={k + "popup"}
                                    style={{ position: "absolute", maxWidth: 200, padding: 20, borderRadius: 20, background: 'white', zIndex: 200 }}
                                // onMouseLeave={(e) => _handleLeave(e)}
                                // onMouseOver={(e) => _handleHover(e)}
                                >
                                    <div className='d-flex justify-content-between p-0'>
                                    <h6 className='pt-2' id={k}>{v.name}</h6>
                                    <i className="fa fa-times align-self-start " onClick={()=>setClose(false)}></i>

                                    </div>
                                    
                                    <div id={k} style={{ fontSize: 12 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.</div>
                                </div>
                                }
                            </div>
                        ))}

                    </div>
                    <div className='d-flex justify-content-center pt-3' ><NCIS_Button text={"Next"} onClick={() => setNextOfStep1(selected ? true : false)} /></div>
                </>
            }
            {
                (step === 3 && !complete) &&
                <div className='d-flex justify-content-center m-2'>
                    <div className='bg-light shadow p-3 align-self-center text-center mx-1' style={{ borderRadius: 23, width: 52, height: 52 }}>
                        <i class="fa fa-envelope-o" aria-hidden="true" style={{ fontSize: 23 }}></i>

                    </div>
                    <div className='bg-light shadow p-3 align-self-center text-center mx-1' style={{ borderRadius: 23, width: 52, height: 52 }}>
                        <i class="fa fa-facebook" aria-hidden="true" style={{ fontSize: 23 }}></i>

                    </div>
                    <div className='bg-light shadow p-3 align-self-center text-center mx-1' style={{ borderRadius: 23, width: 52, height: 52 }}>
                        <i class="fa fa-instagram" aria-hidden="true" style={{ fontSize: 23 }}></i>

                    </div>
                    <div className='bg-light p-3 shadow align-self-center text-center mx-1' style={{ borderRadius: 23, width: 52, height: 52 }}>
                        <i class="fa fa-telegram" aria-hidden="true" style={{ fontSize: 23 }}></i>

                    </div>
                </div>
            }
            {
                (step == 2 || (step == 3 && !complete) || (step == 1 && nextOfStep1)) &&
                <div>
                    <div className=" d-flex py-3 justify-content-center text-white">
                        <img className='img-responsive' src={"/card.png"} style={{ maxWidth: 270, borderRadius: 20 }} />
                        <div className='d-flex flex-column pt-5 justify-content-start text-left' style={{ position: 'absolute', width: 245  }}>
                            <div className={`d-flex flex-column move-me move-me-1`} style={{ minHeight: 120 }}>
                                <span className='' style={{ fontSize: 18, fontWeight: 'bold' }}>{recipientName}{recipientName ? "," : null}</span>
                                <span className='text-white pt-2' style={{ fontWeight: 500, fontSize: 15, lineHeight: 1.5 }}>
                                    {message}{message ? "!" : null}
                                </span>
                                <span className='pt-3' style={{ fontWeight: 600 }}>{senderName ? "Love," : null} {senderName}</span>
                            </div>

                            {
                                imgUrl &&
                                <div className='d-flex justify-content-end align-self-end '>
                                    {/* <div style={{}}>
                                   
                                    </div> */}
                                    
                                    <img src={imgUrl} alt="selected-ribbons" style={{ width: 90, height: 90 }} />

                                </div>
                            }
                        </div>

                    </div>
                    {
                (selected && step === 1 || step === 2) &&
                <form className="form-group row m-auto justify-content-center py-2" onSubmit={_handleReview}>
                    <div className="col-6">
                        <NCIS_TextBox
                            placeHolder={step === 2 ? recipientName : "Add Recipient Name"}
                            handleTextChange={_handleTextChange}
                            id={"recipient"}
                            required={true}
                            disabled={step === 2 && true}
                            media={media}
                        />
                    </div>
                    <div className="col-6">
                        <NCIS_TextBox
                            placeHolder={step === 2 ? senderName : "Add Sender Name"}
                            handleTextChange={_handleTextChange}
                            id={"sender"}
                            required={true}
                            disabled={step === 2 && true}
                            media={media}
                        />
                    </div>
                    <div className="col-12 py-4">
                        <NCIS_Selector
                            placeHolder={message !== "" ? message : "Select Message"}
                            onClick={step != 2 ? _handleSelect : undefined}
                            menuVisible={menuVisible}
                            required={true}
                            _handleSelectOption={_handleSelectOption}
                            media={media}
                        />
                    </div>
                    {!menuVisible && step == 1 ? (
                        <NCIS_Button text={"Review"} type="submit" />
                    ) : null}
                </form>
            }


        </div>

            }


        </div >
    )
}

const ThankuCard = props => {
    const { _handleEdit } = props
    return (
        <div className='d-flex justify-content-center text-center'>
            <div className='bg-light p-3 col-8 m-3' style={{ borderRadius: 10 }} >
                <div className='' style={{ fontWeight: 'bold' }}>
                    Thank for your Pledging
             </div>
                <p className='p-2' style={{ fontSize: 14 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel sollicitudin sapien. Suspendisse eu ornare erat. Nullam tristique augue sit amet lorem elementum hendrerit eu et nulla. Nullam in posuere mauris, eu fringilla magna. Praesent a sodales leo, quis feugiat eros.
                </p>

                <div className='p-2  d-flex justify-content-center'>
                    <NCIS_Button
                        text={"Pledge Another"}
                        // onClick={_handleConfirm}
                        className="mx-2"
                    />
                </div>
                <div className='p-2 d-flex justify-content-center'>
                    <NCIS_Button
                        text={"Back To Home"}
                        onClick={_handleEdit}
                        className="mx-2"
                        buttonColor={violet}
                    />
                </div>

            </div>
        </div>

    )
}