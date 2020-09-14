import React from 'react';
import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import DevProjects from "./DevProjects";
import DesignProjects from "./DesignProjects";
import About from "./About";

import balsamiqLogo from "../images/balsamiq-ar21.svg";
import aiLogo from "../images/icons8-adobe-illustrator.svg";
import xdLogo from "../images/icons8-adobe-xd.svg";
import idLogo from "../images/icons8-adobe-xd.svg";
import psLogo from "../images/icons8-adobe-photoshop.svg"
import muralLogo from "../images/muralco-ar21.svg";
import figmaLogo from "../images/figma-ar21.svg";


import "../styles/ProjectViewer.scss";

const ProjectViewer = () => (
  <div className="project-viewer">
    <div className="project-viewer__items">
      <div className="project-viewer__header-items">
        <div className="project-viewer__header-title">Tools used</div>
        <div className="tool-container">
          <div className="tool-group">
            <div className="tool-title">Image Creation</div>
            <div className="project-viewer__header-tools left">
              <div>
                <img src={aiLogo} className="tool-icon" />
              </div>
              <div>
                <img src={psLogo} className="tool-icon" />
              </div>
            </div>
          </div>
          <div className="tool-group">
            <div className="tool-title">Wireframe/Mockup</div>
            <div className="project-viewer__header-tools center">
              <div className="top-tools">
                <div>
                  <img src={idLogo} className="tool-icon" />
                </div>
                <div>
                  <img src={xdLogo} className="tool-icon" />
                </div>
              </div>
              <div className="bottom-tools">
                <div>
                  <img src={figmaLogo} className="tool-icon" />
                </div>
                <div>
                  <img src={balsamiqLogo} className="tool-icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="tool-group">
            <div className="tool-title">Data Convergence</div>
            <div className="project-viewer__header-tools right">
              <div>
                <img src={muralLogo} className="tool-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/development" component={DevProjects} />
        <Route path="/design" component={DesignProjects} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  </div>
);


export default ProjectViewer;
