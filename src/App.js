import React from "react";
import Header from "./components/jscomponents/header";
import Main from "./Maincomp";

export default function App (){
    return(
        <div style={{overflowX:'hidden'}}>
        <Header/>
        <Main/>
        </div>
    )
}