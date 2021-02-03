import React from 'react';
import { Link } from "react-router-dom";
import Sac from '../../assets/sac.jpg';


function Project() {
    return (
        
        <div>
            <Link to="/">
              <picture>
                <img className="top-logo" src={Sac} alt="Logo SEYSAME" />
              </picture>
            </Link>
            WELCOME PROJECT
        </div>
    )
}

export default Project;
