import React from "react";
import "../css/introduction.css";
import imagemy from "../images/paras.jpg";
export default function Intro(){
    return(
        <div className="main-div">
        <div className="intro-div">
            <p>Hello</p>
            <p>I am paras prajapat and  i'm pursuing full stack web development</p>
        </div>
        <div className="image-div">
             <img src={imagemy} alt="myimage" className="image"/>
        </div>
        </div>
    )
}