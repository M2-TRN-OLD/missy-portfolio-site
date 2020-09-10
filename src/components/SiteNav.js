import React from 'react';
import { Link } from "react-router-dom";

import '../styles/Project.scss';

const SiteNav = () => (
  <nav id="site-nav">
    <div>
      <Link to="/" className="nav-link title">
        Missy Maloney
      </Link>
    </div>
  </nav>
);

export default SiteNav;
