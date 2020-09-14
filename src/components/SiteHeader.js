import React from 'react';
import { Link } from "react-router-dom";

import missyImg from "../images/missy__img.png";

import leftcurlyLogo from "../images/noun_Left Curly Bracket_346828.svg";


import '../SiteHeader.scss';

const SiteHeader = () => (
  <div className="intro">
    <div className="intro__header">
      <div className="intro__id">
        <div className="intro__id-left">
          <img src={missyImg} className="intro__image" />
        </div>
        <div className="intro__id-center">
          <div className="intro__title">
            <Link to="/" className="nav-link">
              Missy Maloney
            </Link>
          </div>
        </div>
        <div className="intro__nav">
          <div className="intro__left-curly">
            <img
              className="left-curly"
              src={leftcurlyLogo}
              alt="left curly brace"
            />
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
        </div>
      </div>

      <div className="intro__text">
        <div className="intro__text-small">
          <p>Web Designer and Developer</p>
          <Link to="/about" className="nav-link">
            More about me
          </Link>
        </div>
        <div className="intro__text-large">
          I am a Web Designer and Developer based in Rockville, Maryland. I love
          to watch ideas come to life with digital tools. It's truly magic.
          People might describe me as a marketing or art person but I gravitate
          toward technology. I think that makes me versatile. I can see through
          the eyes of the client but can also implement the project. Feel free
          to contact me or browse some of my projects using the links below.
          <div className="links__btn links__btn-dark">Email me</div>
        </div>
      </div>
    </div>
  </div>
);



export default SiteHeader;
