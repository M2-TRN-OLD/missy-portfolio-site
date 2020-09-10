import React from 'react';
import { Link } from "react-router-dom";

import '../styles/Pvt.scss';

const SiteNav = () => (
  <nav id="siteNav">
    <span role="img" aria-label="picture" className="logo icon">
      Logo goes here
    </span>
    <span className="title">
      <Link to="/">Missy's Portfolio</Link>
    </span>
  </nav>
);

export default SiteNav;
