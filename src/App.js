import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";



import SiteNav from "./components/SiteNav";
import ProjectNav from "./components/ProjectNav";
import LandingPage from './components/LandingPage';
import DevProjects from './components/DevProjects';
import DesignProjects from './components/DesignProjects';
import About from './components/About';



function App() {

  return (
    <div className="app">
      <Router>
        <header className="app__header">
          <SiteNav />
        </header>
        <section>
          <div className="project__nav">
            <ProjectNav />
          </div>
          <div className="project__section">
            <Switch>
              <Route path="/" component={LandingPage} exact />
              <Route path="/development" component={DevProjects} />
              <Route path="/design" component={DesignProjects} />
              <Route path="/about" component={About} />
            </Switch>
          </div>
        </section>
      </Router>
    </div>
  );
}

export default App;
