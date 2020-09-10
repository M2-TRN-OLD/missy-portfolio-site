import React from 'react';

import { designProjects } from "../projects";

import "../styles/Project.scss";

class DesignProjects extends React.Component {
  render() {
    return (
      <div className="project-section dev">
        {designProjects.map((item, index) => {
          return (
            <div className="card" key={item.id}>
              <h4 className="card-title">{item.title}</h4>
              <div className="img-container">
                <img src={item.appImageSrc} className="project-image" />
              </div>
              <p className="card-description">{item.topic}</p>
              <p>{item.description}</p>
              <div className="tool-list">
                {item.tools.map((tool, index) => (
                  <div className="tool-item" key={index}>
                    <img
                      data-name={tool.name}
                      className="tech-icon"
                      src={tool.imageSrc}
                      alt={tool.alt}
                    />
                  </div>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={item.appLink}
                  className="btn-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View project
                </a>
                <a 
                  href={item.codeLink}
                  className="btn-light marg-clear-l"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View code
                </a>
              </div>
            </div>
          );
        })
      }
      </div>
    );
  }
}

export default DesignProjects;
