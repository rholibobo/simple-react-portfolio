import React from "react";
import Main from "./components/Main";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'



export default function App(){
    return(
        <div className="main-body">
            <Main />
            <About />
            <Interests />
            <Footer />
            
        </div>
    ) 
}