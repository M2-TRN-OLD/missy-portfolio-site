import React from 'react';
import { Link } from "react-router-dom";

/* import '..//App.scss'; */

const SiteNav = () => (
  <nav id="site-nav">
    <div>
      <h3>
        <Link to="/" className="nav-link title">
          Missy Maloney
        </Link>
      </h3>
    </div>
  </nav>
);

export default SiteNav;
