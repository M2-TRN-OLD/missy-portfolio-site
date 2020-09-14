import React from 'react';
import { Link } from "react-router-dom";



import leftcurlyLogo from "../images/noun_Left Curly Bracket_346828.svg";


import '../styles/SiteNav.scss';

const SiteNav = () => (
  <div className="navbar">
    <div className="navbar__title">
        <div className="navbar__name">
          <Link to="/" className="nav-link">
            Missy Maloney
          </Link>
        </div>
        <div className="navbar__desc">
            <p>Web Developer and Designer</p>
        </div>
    </div>
    <div className="navbar__nav">
        <div className="navbar__left-curly">
          <img
            className="left-curly"
            src={leftcurlyLogo}
            alt="left curly brace"
          />
        </div>
        <div>
          <ul className="navbar__items">
            <li className="home-projects">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
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
    </div>
  </div>
);



export default SiteNav;
