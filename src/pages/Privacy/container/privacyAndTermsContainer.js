import React from "react";
import { violet } from "../../../assets/colors";
import { Privacy } from "../components/privacy";
import { TermOfUse } from "../components/termOfuse";

export const PrivacyContainer = () => {
  return (
<div className="text-light h-100" style={{background:violet, minHeight:'100vh' }}>
   <div className="container  py-5">
     <Privacy />
 </div> 
</div>
   )
};

export const TermContainer = () => {
  return (
<div className="text-light" style={{background:violet,minHeight:'100vh'}}>
   <div className="container py-5">
     <TermOfUse />
 </div> 
</div>
   )
};