import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare, faFacebookSquare, faInstagramSquare, faGithubSquare, } from '@fortawesome/free-brands-svg-icons';
library.add(fas, far, fab);

export default function footer(){
    return(
        <footer>
            <a href="htttps://www.twitter.com/UmohRoland"><FontAwesomeIcon className="f-icon" icon={faTwitterSquare}/></a>
            <a href="https://www.facebook.com/Rholipop"><FontAwesomeIcon className="f-icon" icon={faFacebookSquare}/></a>
            <a href="https://www.instagram.com/mr_rholipop"><FontAwesomeIcon className="f-icon" icon={faInstagramSquare}/></a>
            <a href="https://www.github.com/rholibobo"><FontAwesomeIcon className="f-icon" icon={faGithubSquare}/></a>

        </footer>
        
    )
}