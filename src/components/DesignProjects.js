import React from 'react';

import { DesignData } from "../DesignProjectsData";

import "../styles/DesignProjects.scss";

class DesignProjects extends React.Component {
  render() {
    return (
      <div className="project-section dev">
        {DesignData.map((item, index) => {
          return (
            <div className="card" key={item.id}>
              <h4 className="card-title">{item.title}</h4>
              <p>{item.overview}</p>
              <div className="artifacts">
              <ul className="artifacts__container">
                {item.artifacts.map((artifact, index) => {
                  return (
                    <li>
                      <div key={index}>
                        <div>
                          <a
                            href={artifact.artifactLink}
                            className="artifacts__title"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {artifact.name}
                          </a>
                        </div>
                        <div className="artifacts__desc">{artifact.desc}</div>
                      </div>
                    </li>
                  );
                })}
              </ul>

              </div>
            </div>
            );
          })}
      </div>
    );
  }
}

export default DesignProjects;
