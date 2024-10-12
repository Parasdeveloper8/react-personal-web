import React from "react";
import "../css/skillcomp.css";

export default function SKill(){
    return(
        <>
        <p className="skillheading" data-aos="flip-right">MY SKILLS</p>
        <div className="skill">
        <div className="skill-animation-div">
            <div style={{boxSizing:"border-box",backgroundColor:"black",color:"white",borderRadius:"5px",boxShadow:"0 0 10px black"}}>
                <div style={{fontSize:"2rem",textAlign:"center"}}>
                    <p>HTML</p> 
                    <p>CSS</p>
                    <p>JAVASCRIPT</p>
                    <p>REACT.js</p> 
                    </div>
                <p className="descrip">I use these technologies to make static websites</p>
            </div>
            <div style={{backgroundColor:"red",color:"white",borderRadius:"5px",boxShadow:"0 0 10px black"}}>
                <div style={{fontSize:"2rem",textAlign:"center"}}>
                    <p>NODE.js</p> 
                    <p>EXPRESS.js</p>
                    <p>EJS</p>
                    <p>MYSQL</p> 
                    </div>
                <p className="descrip">I use these technologies to make dynamic websites</p>
            </div>
            <div style={{backgroundColor:"silver",color:"white",borderRadius:"5px",boxShadow:"0 0 10px black"}}>
                <div style={{fontSize:"2rem",textAlign:"center"}}>
                    <p>GIT</p>
                    </div>
                <p className="descrip">For version control</p>
            </div>
            <div style={{backgroundColor:"green",color:"white",borderRadius:"5px",boxShadow:"0 0 10px black"}}>
                <div style={{fontSize:"2rem",textAlign:"center"}}>
                    <p>GITHUB</p>
                </div>
                <p className="descrip">For storing projects</p>
            </div>
        </div>
        </div>
        </>
    )
}