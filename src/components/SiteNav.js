import React from 'react';
import { Link } from "react-router-dom";

import missyImg from "../images/missy__img.png";

import '../SiteNav.scss';

const SiteNav = () => (
  <header className="intro">
    <div className="intro__id">
      <div className="intro__id-left">
        <img src={missyImg} className="intro__image" />
      </div>
      <div className="intro__id-right">
        <div className="intro__title">
          <Link to="/" className="nav-link">
            Missy Maloney
          </Link>
        </div>
       
      </div>
    </div>
    <div className="intro__text">
      <div className="intro__text-large">
        I am a Web Designer and Developer based in Rockville, Maryland. I love to
        watch ideas come to life with digital tools. It's truly magic. People
        might describe me as a marketing or art person but I gravitate toward
        technology. I think that makes me versatile. I can see through the eyes
        of the client but can also implement the project. Feel free to contact
        me or browse some of my projects using the links below. Email me View
        projects
      </div>
    </div>
  </header>
);

export default SiteNav;
