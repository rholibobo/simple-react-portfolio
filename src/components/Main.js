import React from "react";
// import myImage from "../images/rholipop.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
library.add(fas, far, fab)

export default function main() {
    return(
        <div className="main-div">
            <div className="pix-div">
                
            </div>
            <main>
                <h1>Roland Umoh</h1>
                <h3>Web Developer</h3>
                {/* <h5><a href="https://www.github.com/rholibobo">rholipop.com</a></h5> */}
                <div className="for-buttons">
                    <button className="button1"><FontAwesomeIcon icon={faEnvelope} className="envelop"/><a href="mailto: rholibobo@gmail.com">Email</a></button>
                    <button className="button2"><FontAwesomeIcon icon={faLinkedin} className="linked" /><a href="https://www.linkedin.com/in/roland-umoh-a5388b174/">LinkedIn</a></button>
                </div>
            </main>
        </div>

    )
}