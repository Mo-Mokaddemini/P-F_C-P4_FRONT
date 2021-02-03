import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Sac from "../../assets/sac.jpg";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="NavBar">
      <div className="portfolio-title">
        <h1>PORTFOLIO</h1>
      </div>

      <div className="navbar-ul">
        <ul className="ul-page">
          <li className="project">
            <Link className="text" to="/project">
              PROJECT
            </Link>
          </li>
          <li className="experience">
            <Link className="text" to="/experience">
              EXPERIENCE
            </Link>
          </li>
        </ul>
      </div>
      <div className="home">
        <Link to="/">
          <picture>
            <img className="top-logo" src={Sac} alt="Logo SEYSAME" />
          </picture>
        </Link>
      </div>
      <div className="contact">
        <Link className="text-seller" to="/contact">
          CONTACT
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
