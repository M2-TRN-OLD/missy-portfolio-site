import React from 'react';

import "../styles/Pvt.scss";

const devProjects = [
  {
    title: "getTheBook",
    tools: ["html", "css", "javascript"],
    topic: "getTheBook gets you the book",
    description: "lasdjf;lksdjf;laksdjf;lsjdf;lsjdf;lasjdf;lsdjf;",
    appLink: "https://nameless-inlet-97185.herokuapp.com/",
    codeLink: "https://github.com/MissyM2/efu-client",
  },
  {
    title: "shopYourCloset",
    tools: ["html", "css", "javascript"],
    topic: "getTheBook gets you the book",
    description: "lasdjf;lksdjf;laksdjf;lsjdf;lsjdf;lasjdf;lsdjf;",
    appLink: "https://nameless-inlet-97185.herokuapp.com/",
    codeLink: "https://github.com/MissyM2/efu-client",
  },
  {
    title: "ExecutiveFollowup",
    tools: ["html", "css", "javascript"],
    topic: "getTheBook gets you the book",
    description: "lasdjf;lksdjf;laksdjf;lsjdf;lsjdf;lasjdf;lsdjf;",
    appLink: "https://nameless-inlet-97185.herokuapp.com/",
    codeLink: "https://github.com/MissyM2/efu-client",
  },
];


class DevProjects extends React.Component {
  render() {
    return (
      <div className="project-section dev">
        {devProjects.map((item, index) => {
          return (
            <div className="project-card">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
              <p>{item.tools}</p>
              <p>{item.topic}</p>
              <p>{item.appLink}</p>
              <p>{item.codeLink}</p>
            </div>
          );
        })
      }
      </div>
    );
  }
}

export default DevProjects;