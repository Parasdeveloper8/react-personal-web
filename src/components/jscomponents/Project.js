import React from "react";
import "../css/project.css";
import projectimage from "../images/projectimage.png";
export default function Project(){
    return(
        <div className="main-divofproject">
        <p className="aboutme-heading" data-aos="flip-right">My projects</p>

        <div className="npm" data-aos="zoom-out-right">
            <p>To fasten js development ,developed this package</p>
            <p>easier-jsever</p>
            <p>I have provided complete documentation on npm website</p>
            <p className="lnkp">Visit npm website:<a target="_blank" href="https://www.npmjs.com/package/easier-jsever">easier-jsever</a></p>
        </div>
        <div className="admin" data-aos="zoom-out-left" >
            <p>Introducing My backend project</p>
            <p>Admin Panel</p>
            <img src={projectimage} alt="admin-panel" height="200px"/>
        </div>
        </div>
    )
}