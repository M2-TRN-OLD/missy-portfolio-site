import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";

import "./App.scss";

import SiteHeader from "./components/SiteHeader";
import ProjectViewer from "./components/ProjectViewer";

import "./App.scss";


function App() {

  return (
    <div className="proj">
      <Router>
        <div className="proj__site-header">
          <SiteHeader />
        </div>
        <div className="proj__project-viewer">
          <ProjectViewer />
        </div>
      </Router>
    </div>
  );
}

export default App;
