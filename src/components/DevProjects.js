import React from 'react';

import { devProjects } from "../projects";

import "../styles/Card.scss";

class DevProjects extends React.Component {
  render() {
    return (
      <div className="project-section dev">
        {devProjects.map((item, index) => {
          return (
            <div className="card" key={item.id}>
              <div className="card__title">{item.title}</div>
              <div className="card__img-container">
                <img src={item.appImageSrc} className="card__image" />
              </div>
              <p className="card__desc">{item.topic}</p>
              <p>{item.description}</p>
              <div className="tools">
                {item.tools.map((tool, index) => (
                  <div className="tools__item" key={index}>
                    <img
                      data-name={tool.name}
                      className="tools__icon"
                      src={tool.imageSrc}
                      alt={tool.alt}
                    />
                  </div>
                ))}
              </div>
              <div className="links">
                  <a
                    href={item.appLink}
                    className="links__btn links__btn-dark"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View project
                  </a>
                  <a
                    href={item.codeLink}
                    className="links__btn links__btn-light marg-clear-l"
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

export default DevProjects;
