import React from 'react';
import { Link } from "react-router-dom";

import "../styles/Pvt.scss";

const PvtNav = () => (
    <nav id="pvt-nav">
      <ul className="items">
        <li className="dev-projects">
          <Link to="/development" className="nav-link">Development Projects</Link>
        </li>
        <li className="design-projects">
          <Link to="/design" className="nav-link">Design Projects</Link>
        </li>
        <li className="about">
          <Link to="/about" className="nav-link">About</Link>
        </li>
      </ul>
    </nav>
  );


export default PvtNav;
