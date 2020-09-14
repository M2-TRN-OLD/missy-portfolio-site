import React from 'react';
import { Route, Switch } from "react-router-dom";

import LandingPage from "./LandingPage";
import DevProjects from "./DevProjects";
import DesignProjects from "./DesignProjects";
import About from "./About";

import "../styles/ProjectViewer.scss";

const ProjectViewer = () => (
  <div className="project-viewer">
    <div className="project-viewer__items">
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/development" component={DevProjects} />
        <Route path="/design" component={DesignProjects} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  </div>
);


export default ProjectViewer;
