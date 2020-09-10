import React from 'react';
import { Link } from "react-router-dom";

import "../styles/Pvt.scss";

/* const isActive = (active, section) => (active === section ? "active": null); */

/* const PvtNav = ({ activeSection }) => ( */
  const PvtNav = () => (
    <nav id="pvt-nav">
      <ul className="items">
        <li className="dev-projects">
          <Link to="/development">Development Projects</Link>
        </li>
        <li className="design-projects">
          <Link to="/design">Design Projects</Link>
        </li>
        <li className="about">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );


export default PvtNav;
