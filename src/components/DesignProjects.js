import React from 'react';

import { DesignData } from "../DesignProjectsData";

import "../styles/Card.scss";

class DesignProjects extends React.Component {
  render() {
    return (
      <div className="project-section dev">
        {DesignData.map((item, index) => {
          return (
            <div className="card" key={item.id}>
              <h4 className="card-title">{item.title}</h4>
              <p>{item.overview}</p>
              <div className="artifact-list">
                {item.artifacts.map((artifact, index) => {
                  return (
                    <div className="artifact-item" key={index}>
                      <div>{artifact.name}</div>
                      <img
                        data-name={artifact.name}
                        className="tech-icon"
                        src={artifact.imageSrc}
                        alt={artifact.alt}
                      />
                      <div>{artifact.artifactLink}</div>
                    <div className="tools">
                      {artifact.tools.map((tool, index) => {
                        return (
                        <div className="tools__item" key={index}>
                          <img
                            data-name={tool.name}
                            className="tools_icon"
                            src={tool.imageSrc}
                            alt={tool.alt}
                          />
                        </div>
                      );
                      })}
                    </div>
                  </div>
                  );
                })}
              </div>
            </div>
            );
          })}
      </div>
    );
  }
}

export default DesignProjects;
