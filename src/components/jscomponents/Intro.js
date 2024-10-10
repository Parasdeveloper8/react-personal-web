import React, { useState, useEffect } from "react";
import "../css/introduction.css";

export default function Intro() {
  const [message, setMessage] = useState("");
  const fullMessage = "I wanna become a ML engineer and also wanna open Software Startup";

  useEffect(() => {
    let index = 0;
    const typeEffect = () => {
      if (index < fullMessage.length) {
        setMessage(fullMessage.slice(0, index + 1)); // Slice up to the current index
        index++;
      } else {
        clearInterval(typingInterval); // Clear interval when message is fully typed
      }
    };

    const typingInterval = setInterval(typeEffect, 100); // Adjust typing speed here

    return () => clearInterval(typingInterval); // Cleanup the interval on component unmount
  }, []); // Empty dependency array ensures this runs only once when component mounts

  return (
    <div className="main-div">
      <div className="intro-div">
        <p className="hello">Hello,I'm Paras</p>
        <p className="txt">{message}</p>
      </div>
    </div>
  );
}
