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
import EventDesktop from "../../../assets/images/EventDesktop.svg"
import { NCIS_Button } from "../../../tools/NCIS_Button";

export const Event = () => {
    
    return (
        <div className="container-fluid px-xl-5 px-lg-4 px-md-1 px-sm-0 py-5 text-white " style={{backgroundColor:"#4f3fb4"}}> 
                       
            <div className="d-flex " >            
                <div className="px-5 pt-3 text-left w-50">
                    <div className="px-3 " style={{fontSize:"25px",}} >                        
                        <b>Together,<br/>
                        we fight Cancer!</b>                        
                    <div className="my-4 text-left w-40" style={{fontSize:"22px",}}>
                        The NCIS Ribbon Challenge was started in 2018 to promote public awareness and education on cancer. Come join us at our event to build your knowledge and awareness about cancer, and what you can do to fight it!
                    </div>
                    </div>
                </div>
                <div className="pt-5 px-3 justify-content-between text-left w-50">
                    <div className="" style={{fontSize:"40px",fontWeight:"bold"}}> 
                        6 March 2021 <br /></div>
                        <div style={{fontSize:"25px",fontWeight:"bold"}}>10 am - 4 pm</div>                    
                </div>
            </div>
            <div className="px-5 pt-3 text-left ">
                <div className="d-flex  px-3 justify-content-between text-left">
                    <div className=""> 
                        <div style={{fontSize:"25px",}}>
                            <b>Event Highlight:</b>
                        </div>
                        <div className="py-3 d-flex flex-nowrap">
                            <img src={Mamogram} className="" style={{ height: 65 }} />
                                <div className="px-5  " style={{fontSize:"20px"}}>            
                                    <b>Mammogram screening </b>
                                        <div className="">
                                            Ladies, if you above 50 years old, and have not done a mammogram screening, register for one now and have a peace of mind.<br/>
                                        </div>
                                        <div className="">
                                            The mammobus will be at NUH Main Building Lobby B to carry out mammogram screening. Pre-registration is required. Please call 6773 7888 or click on the button below to book your slots. Terms apply.
                                        </div>                                
                                        <div className='pt-4 d-flex justify-content-start'>
                                            <NCIS_Button
                                                text={"Book your slot"}
                                                onClick={""}
                                                fontSize={window.innerWidth > 1500 ? 16 : 14}
                                                className=""
                                                fontSize={14}
                                            />
                                        </div>                                
                                </div>                            
                        </div>                                                                                                                                                                            
                            <div className="py-3 d-flex flex-nowrap">     
                                <img src={FIT} className="" style={{ height: 65 }} />
                                    <div className="px-5  " style={{fontSize:"20px"}}>  
                                        <b>FIT (Faecal Immunochemical Test) kit </b>
                                            <div className="">
                                                The Faecal Immunochemical Test (FIT) is a preliminary test that detects the presence of small amounts of blood in faeces. Colorectal polyps and cancers can be detected by the traces of blood that are bled into the colon.  
                                            </div>
                                            <div className="">
                                                If you are a Singaporean or PR aged 50 years and above, you can request for a FIT kit at no cost.
                                            </div>
                                            <div className='pt-4 d-flex justify-content-start'>
                                                <NCIS_Button
                                                    text={"Request for a FIT kit"}
                                                    onClick={""}
                                                    fontSize={window.innerWidth > 1000 ? 16 : 14}
                                                    className=""
                                                    fontSize={12}                                            
                                                />
                                            </div>
                                    </div>                                
                            </div>                            
                            <div className="py-3 d-flex flex-nowrap">
                                <img src={CancerEducationTalks} className="px-2" style={{ height: 65 }} />
                                    <div className="px-5  " style={{fontSize:"20px"}}>
                                        <b>Cancer Education talks in English and Mandarin </b>                                                                              
                                            <div className="">
                                                Join our cancer specialists as they share with you information on the cancers that affects men and women and the diet & exercise for cancer prevention.
                                            </div><br/>
                                            <div className="">
                                                English sessions<br/>   
                                                6 March 2021, Saturday<br/>                               
                                                10am -11.30am   
                                            </div>
                                            <div className="mt-3 pt-2 " style={{border:"1px solid white",borderRadius:"4px"}}>
                                            <div className="d-flex " >
                                                <div className="px-4 w-50 " style={{fontWeight:"bold"}}>
                                                    Topic
                                                </div>
                                                <div className="w-50" style={{fontWeight:"bold"}}>
                                                    Speaker
                                                </div>
                                            </div>
                                            <div className="mt-2 d-flex justify-content-between ">
                                                <div className="px-4 w-50">
                                                    Understanding Cancer,
                                                    its Myths and Prevention
                                                </div>
                                                <div className="mt-2"><img src={drKumarakulasinghe} className="" style={{ height: 60 }} />  </div>
                                                <div className="px-4 w-50">
                                                    Dr Kumarakulasinghe Barr Nesaretnam
                                                    Associate Consultant 
                                                    Department of Haematology-Oncology
                                                    National University Cancer Institute, Singapore
                                                </div>
                                            </div>
                                            <div className="mt-2 d-flex justify-content-between ">
                                                <div className="px-4 w-50">
                                                    The battle against female cancers: Prevention and Early intervention   
                                                </div>
                                                <div className="mt-2"><img src={drLimYiWan} className=" " style={{ height: 60 }} /></div>
                                                <div className="px-4 w-50">                                                    
                                                        Dr Lim Yi Wan
                                                        Senior Consultant
                                                        Department of Haematology-Oncology
                                                        National University Cancer Institute, Singapore
                                                </div>
                                            </div>
                                            <div className="mt-2 d-flex justify-content-between ">
                                                <div className="px-4 w-50">
                                                    The relationship between cancer and diet  
                                                </div>
                                                <div className="mt-2"><img src={drLimSiewEng} className="" style={{ height: 60 }} /></div>
                                                <div className="px-4 w-50">                                                 
                                                        Dr Lim Siew Eng
                                                        Senior Consultant
                                                        Department of Haematology-Oncology
                                                        National University Cancer Institute, Singapore
                                                </div>
                                            </div>
                                            <div className="px-4 w-50">
                                                "Q & A"
                                            </div>
                                            
                                </div>
                                <div className='pt-4 d-flex justify-content-start'>
                                    <   NCIS_Button
                                        text={"Register here for a slot"}
                                        onClick={""}
                                        fontSize={window.innerWidth > 1000 ? 16 : 14}
                                        fontSize={11} 
                                        className="mx-2"                                                                                       
                                    />
                                </div>
                                    <div className="pt-3 w-50">
                                        华语讲座 
                                        三月六日, 星期六 
                                        下午2点至3点30分
                                    </div><br/>
                                    <div className="mt-3 pt-2 " style={{border:"1px solid white",borderRadius:"4px"}}>
                        <div className="d-flex ">
                            <div className="px-4 w-50 " style={{fontWeight:"bold"}}>
                                  Topic
                            </div>
                            <div className="w-50" style={{fontWeight:"bold"}}>
                                Speaker
                            </div>
                            </div>
                            <div className="mt-2 d-flex justify-content-between" style={{borderTop:"1px solid white"}}>
                                <div className="px-4 w-50">
                                    洞察癌症的误解以及如何预防
                                </div>
                                <div className="mt-2"><img src={drOuGuanWei} className="" style={{ height: 60 }} /> </div>
                                    <div className="px-4 w-50">
                                                    欧冠伟
                                                    顾问医生
                                                    肿瘤血液科
                                                    新加坡国立大学癌症中心
                                    </div>
                                </div>
                                    <div className="mt-2 d-flex justify-content-between " style={{borderTop:"1px solid white"}}>
                                        <div className="px-4 w-50">
                                            妇科癌症；预防胜于治疗   
                                        </div>
                                        <div className="mt-2"><img src={drLingSiJing} className=" " style={{ height: 60 }} /></div>
                                            <div className="px-4 w-50">                                                    
                                                林思静 
                                                顾问医生
                                                肿瘤血液科
                                                新加坡国立大学癌症中心
                                            </div>
                                        </div>
                                        <div className="mt-2 d-flex justify-content-between" style={{borderTop:"1px solid white",borderBottom:"1px solid white"}}>
                                            <div className="px-4 w-50">
                                                妇科癌症；预防胜于治疗  
                                            </div>
                                                <div className="mt-2"><img src={drHuangYiQing} className="" style={{ height: 60 }} /></div>
                                                    <div className="px-4 w-50">                                                 
                                                        黄艺卿 
                                                        顾问医生
                                                        肿瘤血液科
                                                        新加坡国立大学癌症中心
                                                    </div>
                                                </div>
                                                <div className="px-4 w-50" >
                                                    问答时间
                                                </div>                                            
                                        </div>
                                        <div className='pt-4 d-flex justify-content-start'>
                                            <NCIS_Button
                                                text={"现在就报名"}
                                                onClick={""}
                                                fontSize={window.innerWidth > 1000 ? 16 : 14}
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
    )}