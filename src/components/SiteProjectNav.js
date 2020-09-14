import React from 'react';
import { Link } from "react-router-dom";

import leftcurlyLogo from "../images/noun_Left Curly Bracket_346828.svg";



import "../styles/SiteProjectNav.scss";

const SiteProjectNav = () => (
  <nav className="site-project-nav">
    <div>
      <img className="left-curly" src={leftcurlyLogo} alt="left curly brace" />
    </div>
    <div>
      <ul className="items">
        <li className="dev-projects">
          <Link to="/development" className="nav-link">
            Development Projects
          </Link>
        </li>
        <li className="design-projects">
          <Link to="/design" className="nav-link">
            Design Projects
          </Link>
        </li>
        <li className="about">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);


export default SiteProjectNav;
