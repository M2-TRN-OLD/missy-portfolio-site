import React from 'react';
import '../index.css';

import { projectData } from '../lib/projectStore.js';

function DevProjects() {

console.log('here are the project', projectData);

const devData = this.props.

  return (
    <div classNameName="dev-projects">
      <div classNameName="projects">
        <div id="project-1" className="project">
            <div className="card">
              <h4 className="card-title"></h4>
              <div className="img-container">
                <a href="https://nameless-inlet-97185.herokuapp.com/" target="_blank" />
                  <img className="card-img-top" src="images/executive-followup.png" alt="Executive FollowUp" />
                  <span className="view-project-hover">View project</span>
              </div>
              <div className="card-block">
                <div className="project-tech">
                  <img data-name="html" className="tech-icon" src="images/icons8-html-5-50.svg" alt="HTML-5" />
                  <img data-name="css" className="tech-icon" src="images/icons8-css3-50.svg" alt="CSS-3" />
                  <img data-name="javascript" className="tech-icon" src="images/icons8-javascript-50.svg" alt="Javascript" />
                  <img data-name="react" className="tech-icon" src="images/icons8-react-native-50.svg" alt="React Native" />
                  <img data-name="node" className="tech-icon" src="images/icons8-nodejs-50.svg" alt="Node-JS" />
                  <img data-name="mongodb" className="tech-icon" src="images/icons8-mongodb-50.svg" alt="MongoDB" />
                </div>
                <p className="card-text"></p>
                <em><span className="bold highlight">Executive FollowUp</span> is a tool to be used by students in upper middle school through college to 
                    monitor academic performance</em>. 
                <p className="card-text">At a glance, a student can see what is due today or this week, as well as, how
                    much study time is needed.  The student can keep track of grades and help determine future course selections.
                </p>
                <div className="card-footer">
                  <div className="project-links">
                    <a className="card-actions" href="https://github.com/MissyM2/efu-client" target="blank">
                      <button type="button" className="btn-light marg-clear-l">View code</button>
                    </a>
                    <a href="https://nameless-inlet-97185.herokuapp.com/" target="_blank" />
                      <button type="button" className="btn-dark">View project</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div> 
    </div>        
  );
}

export default DevProjects;
