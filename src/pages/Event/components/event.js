import React from "react";
import Mamogram from "../../../assets/images/Mamogram.png"
import FIT from "../../../assets/images/FIT.png"
import CancerEducationTalks from "../../../assets/images/CancerEducationTalks.png"
import drKumarakulasinghe from "../../../assets/PeopleImage/drKumarakulasinghe.png"
import drLimYiWan from "../../../assets/PeopleImage/drLimYiWan.png"
import drLimSiewEng from "../../../assets/PeopleImage/drLimSiewEng.png"
import drOuGuanWei from "../../../assets/PeopleImage/drOuGuanWei.png"
import drLingSiJing from "../../../assets/PeopleImage/drLingSiJing.png"
import drHuangYiQing from "../../../assets/PeopleImage/drHuangYiQing.png"
import { NCIS_Button } from "../../../tools/NCIS_Button";
import moment from 'moment';
export const Event = () => {
    const [w, setW] = React.useState(null)
    React.useEffect(() => {
        setW(window.innerWidth)
        window.addEventListener("resize", () => {
            // console.log(window.innerWidth)
            setW(window.innerWidth)
        })
    }, [])

    if(!w) return null;
    
    const sSize =  w >= 1920 ? "xxl" 
        : w >= 1600 ? "xl"
        : w >= 1366 ? "lg"
        : w >= 1000 ? "md"
        : w >= 700 ? "sm" : "sm"

    return (
        <>
        {["md", "sm"].includes(sSize) && <div style={{ height: 40 }}></div> }
        <div className="pb-5 text-white " 
            style={{ 
                backgroundColor:"#271f57",
                backgroundImage: "url(/assets/images/EventDesktop.svg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100%",
                paddingTop: sSize==="xxl" ? w*0.33 /*660*/ : sSize==="xl" ? 500 : sSize==="lg" ? 460 : sSize==="md" ? 450 : 200+w*0.1,
                overflow: "auto",
                fontSize: 15,
                lineHeight: 1.5,
                paddingLeft: sSize==="xxl" ?  w*0.1 : sSize==="xl" ? 160 : sSize==="lg" ? 140 : sSize==="md" ? 100 : 10,
                paddingRight: 10,
            }}> 
            {/* <div style={{ position: "absolute", left: 50, top: 150, color: "white", padding: 20, background: "green", fontSize: "2em"}}>{w } {sSize}</div> */}
            <div className="d-flex " >            
                <div className="pt-3 text-left" >
                    <div className="px-3 " style={{ fontSize: 25 }}>                        
                        <b>
                            <div>Together,</div>
                            <div>we fight Cancer!</div>
                        </b>     
                    </div>                   
                    <div className="my-4 text-left px-3" style={{ textShadow: "0px 0px 4px #464646", maxWidth: 400}}>
                        The NCIS Ribbon Challenge was started in 2018 to promote public awareness and education on cancer. Come join us at our event to build your knowledge and awareness about cancer, and what you can do to fight it!
                    </div>
                </div>
                <div className="px-3 text-dark" 
                    style={{ position: "absolute", 
                    left: "55%", 
                    top: sSize==="xxl" ? 700+(w-1920)*0.5 :  sSize==="xl" ? 600+(w-1600)*0.5 : sSize==="lg" ? 480+(w-1366)*0.5 : sSize==="md" ? 340+(w-1000)*0.5 : 200+(w-520)*0.5}}>
                    <div className="" > 
                        <span className="" style={{ fontSize: ["md", "sm"].includes(sSize) ? "1.2em" : "2em", color: "#271f57", fontWeight:"bold", textShadow: "0px 0px 2px #271f57"}}>{moment(Date.now()).format("DD MMMM  YYYY")}</span>
                        <span className="d-block" style={{ fontSize: ["md", "sm"].includes(sSize) ? "1em" : "1.8em", color: "#271f57", fontWeight:"bold", textShadow: "0px 0px 2px #271f57" }}>10am - 4pm</span>
                    </div>
                                        
                </div>
            </div>
            <div className=" pt-3 text-left ">
                <div className="d-flex px-1 justify-content-between text-left">
                    <div className=""> 
                        <div style={{ fontSize: 20, letterSpacing: 1.3 }}>
                            <b>Event Highlights:</b>
                        </div>
                        <div className="py-3 d-flex flex-wrap flex-md-nowrap" style={{ maxWidth: 1200 }}>
                            <div className="">
                                <img src={Mamogram} className="pe-3 pb-2" style={{ height: 60 }} />
                            </div>
                            <div className="flex-grow-1" style={{  }}>            
                                <b>Mammogram screening </b>
                                <div className="pt-3" style={{ textShadow: "0px 0px 2px gray" }}>
                                    Ladies, if you above 50 years old, and have not done a mammogram screening, register for one now and have a peace of mind.<br/>
                                </div>
                                <div className="pt-2" style={{ textShadow: "0px 0px 2px gray" }}>
                                    The mammobus will be at NUH Main Building Lobby B to carry out mammogram screening. Pre-registration is required. Please call 6773 7888 or click on the button below to book your slots. Terms apply.
                                </div>                                
                                <div className='pt-4 d-flex justify-content-start'>
                                    <NCIS_Button
                                        text={"Book your slot"}
                                        onClick={""}
                                        fontSize={w > 1500 ? 16 : 14}
                                        className=""
                                        fontSize={14}
                                    />
                                </div>                                
                            </div>                            
                        </div>
                        <hr />
                        <div className="py-3 d-flex flex-wrap flex-md-nowrap"  style={{ maxWidth: 1200 }}>     
                            <img src={FIT} className="pe-3 pb-2" style={{ height: 60 }} />
                                <div className="flex-grow-1" style={{  }}>  
                                    <b>FIT (Faecal Immunochemical Test) kit </b>
                                    <div className="pt-3" style={{ textShadow: "0px 0px 2px gray" }}>
                                        The Faecal Immunochemical Test (FIT) is a preliminary test that detects the presence of small amounts of blood in faeces. Colorectal polyps and cancers can be detected by the traces of blood that are bled into the colon.  
                                    </div>
                                    <div className="pt-2" style={{ textShadow: "0px 0px 2px gray" }}>
                                        If you are a Singaporean or PR aged 50 years and above, you can request for a FIT kit at no cost.
                                    </div>
                                    <div className='pt-4 d-flex justify-content-start'>
                                        <NCIS_Button
                                            text={"Request for a FIT kit"}
                                            onClick={""}
                                            fontSize={w > 1000 ? 16 : 14}
                                            className=""
                                            fontSize={12}                                            
                                        />
                                    </div>
                                </div>                                
                        </div>   
                        <hr />                         
                        <div className="py-3 d-flex flex-wrap flex-md-nowrap"  style={{ maxWidth: 1200 }}>
                            <img src={CancerEducationTalks} className="pe-3 pb-2" style={{ height: 60 }} />
                                <div className="flex-grow-1" >
                                    <span><b>Cancer Education talks in English and Mandarin</b></span>                                                                              
                                    <div className="pt-3">
                                        Join our cancer specialists as they share with you information on the cancers that affects men and women and the diet & exercise for cancer prevention.
                                    </div><br/>
                                    <div className="pt-2">
                                        <div>English sessions</div>
                                        <div style={{ color: "#d5d5d5"}}>{moment(Date.now()).format("DD MMMM  YYYY")}</div>                           
                                        <div style={{ color: "#d5d5d5"}}>10am -11.30am</div>   
                                    </div>
                                    <div className="mt-3 pt-2 " style={{ border:"1px solid #ffffff55",borderRadius: 10 }}>
                                    <div className="d-flex pb-2" style={{borderBottom:"1px solid #ffffff55"}}>
                                        <div className="px-4 w-50" style={{fontWeight:"bold"}}>
                                            Topic
                                        </div>
                                        <div className="w-50" style={{fontWeight:"bold",  }}>
                                            Speaker
                                        </div>
                                    </div>
                                    <div className="mt-2 d-flex justify-content-between pb-1" style={{ borderBottom:"1px solid #ffffff55", fontSize: 14 }}>
                                        <div className="px-4 w-50">
                                            <div>Understanding Cancer,</div>
                                            <div>its Myths and Prevention</div>
                                        </div>
                                        <div className="d-flex flex-wrap w-50 ">
                                            <div className="mt-2"><img src={drKumarakulasinghe} className="pe-3 pb-2" style={{ height: 60 }} />  </div>
                                            <div className="px-2 flex-grow-1">
                                                <div>Dr Kumarakulasinghe Barr Nesaretnam</div>
                                                <div style={{ color: "#d5d5d5"}}>Associate Consultant</div>
                                                <div style={{ color: "#d5d5d5"}}>Department of Haematology-Oncology</div>
                                                <div style={{ color: "#d5d5d5"}}>National University Cancer Institute, Singapore</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-2 d-flex justify-content-between pb-1" style={{ borderBottom:"1px solid #ffffff55", fontSize: 14 }}>
                                        <div className="px-4 w-50">
                                            The battle against female cancers: Prevention and Early intervention   
                                        </div>
                                        <div className="d-flex flex-wrap w-50 ">
                                            <div className="mt-2"><img src={drLimYiWan} className="pe-3 pb-2" style={{ height: 60 }} /></div>
                                            <div className="px-2 flex-grow-1">                                                    
                                                    <div>Dr Lim Yi Wan</div>
                                                    <div style={{ color: "#d5d5d5" }}>Senior Consultant</div>
                                                    <div style={{ color: "#d5d5d5" }}>Department of Haematology-Oncology</div>
                                                    <div style={{ color: "#d5d5d5" }}>National University Cancer Institute, Singapore</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-2 d-flex justify-content-between pb-1" style={{ borderBottom:"1px solid #ffffff55", fontSize: 14 }}>
                                        <div className="px-4 w-50">
                                            The relationship between cancer and diet  
                                        </div>
                                        <div className="d-flex flex-wrap w-50 ">
                                            <div className="mt-2"><img src={drLimSiewEng} className="pe-3 pb-2" style={{ height: 60 }} /></div>
                                            <div className="px-2 flex-grow-1">                                                 
                                                <div>Dr Lim Siew Eng</div>
                                                <div style={{ color: "#d5d5d5" }}>Senior Consultant</div>
                                                <div style={{ color: "#d5d5d5" }}>Department of Haematology-Oncology</div>
                                                <div style={{ color: "#d5d5d5" }}>National University Cancer Institute, Singapore</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-4 w-50 py-2">
                                        Q&A
                                    </div>                                        
                            </div>
                            
                            <div className='pt-4 d-flex justify-content-start'>
                                <   NCIS_Button
                                    text={"Register here for a slot"}
                                    onClick={""}
                                    fontSize={w > 1000 ? 16 : 14}
                                    fontSize={11} 
                                    className="mx-2"                                                                                       
                                />
                            </div>
                                <div className="pt-3 w-50">
                                    <div>华语讲座</div>
                                    <div style={{ color: "#e5e5e5 "}}>三月六日, 星期六</div> 
                                    <div style={{ color: "#e5e5e5 "}}>下午2点至3点30分</div>
                                </div><br/>
                                <div className="mt-3 pt-2 " style={{border:"1px solid #ffffff55",borderRadius: 10}}>
                        <div className="d-flex">
                            <div className="px-4 w-50 " style={{fontWeight:"bold"}}>
                                Topic
                            </div>
                            <div className="w-50" style={{fontWeight:"bold", }}>
                                Speaker
                            </div>
                        </div>
                        <div className="mt-2 d-flex justify-content-between pt-1" style={{borderTop:"1px solid #ffffff55"}}>
                            <div className="px-4 w-50">
                                <div>洞察癌症的误解以及如何预防</div>
                            </div>
                            <div className="d-flex flex-wrap w-50 ">
                                <div className="mb-2">
                                    <img src={drOuGuanWei} className="pe-3 pb-2" style={{ height: 60 }} /> 
                                </div>
                                <div className="px-2 flex-grow-1">
                                    <div>欧冠伟</div>
                                    <div style={{ color: "#d5d5d5 "}}>顾问医生</div>
                                    <div style={{ color: "#d5d5d5 "}}>肿瘤血液科</div>
                                    <div style={{ color: "#d5d5d5 "}}>新加坡国立大学癌症中心</div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 d-flex justify-content-between pt-1" style={{borderTop:"1px solid #ffffff55"}}>
                            <div className="px-4 w-50">
                                <dvi>妇科癌症；预防胜于治疗</dvi>   
                            </div>
                            <div className="d-flex flex-wrap w-50 ">
                                <div className="mb-2">
                                    <img src={drLingSiJing} className="pe-3 pb-2" style={{ height: 60 }} />
                                </div>
                                <div className="px-2 flex-grow-1">                                                    
                                    <div>林思静</div> 
                                    <div style={{ color: "#d5d5d5 "}}>顾问医生</div>
                                    <div style={{ color: "#d5d5d5 "}}>肿瘤血液科</div>
                                    <div style={{ color: "#d5d5d5 "}}>新加坡国立大学癌症中心</div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 d-flex justify-content-between pt-1" style={{borderTop:"1px solid #ffffff55",borderBottom:"1px solid #ffffff55"}}>
                            <div className="px-4 w-50">
                                <div>妇科癌症；预防胜于治疗</div>  
                            </div>
                            <div className="d-flex flex-wrap w-50 ">
                                <div className="mb-2">
                                    <img src={drHuangYiQing} className="pe-3 pb-2" style={{ height: 60 }} />
                                </div>
                                <div className="px-2 flex-grow-1">                                                 
                                    <div>黄艺卿</div> 
                                    <div style={{ color: "#d5d5d5 "}}>顾问医生</div>
                                    <div style={{ color: "#d5d5d5 "}}>肿瘤血液科</div>
                                    <div style={{ color: "#d5d5d5 "}}>新加坡国立大学癌症中心</div>
                                </div>
                            </div>
                        </div>
                        <div className="px-4 w-50 py-2" >
                            问答时间
                        </div>                                            
                        </div>
                            <div className='pt-4 d-flex justify-content-start'>
                                <NCIS_Button
                                    text={"现在就报名"}
                                    onClick={""}
                                    fontSize={w > 1000 ? 16 : 14}
                                    fontSize={14} 
                                    className="mx-2"                                                                                       
                                />
                            </div>   
                            </div>                          
                        </div>                                                                      
                    </div>                                        
                </div>                                                                            
            </div>
        </div>
        </>
    )}