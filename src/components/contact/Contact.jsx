import React from 'react';
import { Link } from "react-router-dom";
import Sac from '../../assets/sac.jpg';

function Contact() {
    return (
        <div>
            <Link to="/">
              <picture>
                <img className="top-logo" src={Sac} alt="Logo SEYSAME" />
              </picture>
            </Link>
           <h1>WELCOME TO CONTACT</h1> 
        </div>
    )
}

export default Contact
