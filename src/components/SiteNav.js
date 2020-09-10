import React from 'react';
import { Link } from "react-router-dom";

import '../styles/Pvt.scss';

const SiteNav = () => (
  <nav id="siteNav">
    <span role="img" aria-label="picture" className="logo icon">
      Logo goes here
    </span>
    <span>
      <Link to="/" className="nav-link title">
        Missy Maloney
      </Link>
    </span>
  </nav>
);

export default SiteNav;
