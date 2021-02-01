import React from "react";
import { violet } from "../../../assets/colors";
import { Privacy } from "../components/privacy";
import { TermOfUse } from "../components/termOfuse";

export const PrivacyContainer = () => {
  return (
<div className="text-light" style={{background:violet}}>
   <div className="container">
     <Privacy />
 </div> 
</div>
   )
};

export const TermContainer = () => {
  return (
<div className="text-light" style={{background:violet}}>
   <div className="container">
     <TermOfUse />
 </div> 
</div>
   )
};