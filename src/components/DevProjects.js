import React from 'react';
import { Link } from 'react-router-dom';

import htmlLogo from "../images/icons8-html-5-50.svg";
import cssLogo from "../images/icons8-css3-50.svg";
import jsLogo from "../images/icons8-javascript-50.svg";
import reactLogo from "../images/icons8-react-native-50.svg";
import nodeLogo from "../images/icons8-nodejs-50.svg";
import mongoLogo from "../images/icons8-mongodb-50.svg";
import jqueryLogo from "../images/icons8-jquery-50.svg";

import "../styles/Pvt.scss";

const devProjects = [
  {
    id: 1,
    title: "Executive FollowUp",
    tools: [
      {
        name: "html",
        imageSrc: htmlLogo,
        alt: "HTML-5",
      },
      {
        name: "css",
        imageSrc: cssLogo,
        alt: "CSS-3",
      },
      {
        name: "javascript",
        imageSrc: jsLogo,
        alt: "Javascript",
      },
      {
        name: "react",
        imageSrc: reactLogo,
        alt: "React",
      },
      {
        name: "node",
        imageSrc: nodeLogo,
        alt: "Node-JS",
      },
      {
        name: "mongodb",
        imageSrc: mongoLogo,
        alt: "HTML-5",
      },
    ],
    topic:
      "Executive FollowUp is a tool to be used by students in upper middle school through college to monitor academic performance",
    description:
      "At a glance, a student can see what is due today or this week, as well as, how much study time is needed.  The student can keep track of grades and help determine future course selections.",
    appLink: "https://nameless-inlet-97185.herokuapp.com/",
    appImageSrc: "images/executive-followup.png",
    codeLink: "https://github.com/MissyM2/efu-client",
  },
  {
    id: 2,
    title: "shopYourCloset",
    tools: [
      {
        name: "html",
        imageSrc: htmlLogo,
        alt: "HTML-5",
      },
      {
        name: "css",
        imageSrc: cssLogo,
        alt: "CSS-3",
      },
      {
        name: "javascript",
        imageSrc: jsLogo,
        alt: "Javascript",
      },
      {
        name: "react",
        imageSrc: reactLogo,
        alt: "React",
      },
      {
        name: "node",
        imageSrc: nodeLogo,
        alt: "Node-JS",
      },
      {
        name: "mongodb",
        imageSrc: mongoLogo,
        alt: "HTML-5",
      },
    ],
    topic:
      "With shopYourCloset a user can get and maintain control over his or her wardrobe.",
    description:
      "You add wardrobe items to the app.  The app will, then, analyze your wardrobe and give recommendations and options for improvement.",
    appLink: "https://serene-dawn-65763.herokuapp.com/",
    codeLink: "https://github.com/MissyM2/shopYourCloset",
  },
  {
    id: 3,
    title: "getTheBook",
    tools: [
      {
        name: "html",
        imageSrc: htmlLogo,
        alt: "HTML-5",
      },
      {
        name: "css",
        imageSrc: cssLogo,
        alt: "CSS-3",
      },
      {
        name: "javascript",
        imageSrc: jsLogo,
        alt: "Javascript",
      },
      {
        name: "jQuery",
        imageSrc: jqueryLogo,
        alt: "jQuery",
      },
      {
        name: "APIs",
        imageSrc: jqueryLogo,
        alt: "APIs",
      },
    ],
    topic: "getTheBook will help bookclubs choose the right book for the group",
    description:
      "You enter a title, author or subject a book and you are returned reviews, videos, author information and suggestions.",
    appLink: "https://missym2.github.io/getTheBook/",
    codeLink: "https://github.com/MissyM2/getTheBookFinal",
  },
];



class DevProjects extends React.Component {
  render() {
    return (
      <div className="project-section dev">
        <img src={htmlLogo} />
        {devProjects.map((item, index) => {
          return (
            <div className="project-card" key={item.id}>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
              <p>{item.topic}</p>
              <div className="tool-list">
                {item.tools.map((tool, index) => (
                  <div className="tool-item" key={index}>
                    <img data-name={tool.name} className="tech-icon" src={tool.imageSrc} alt={tool.alt} />
                  </div>
                ))}
              </div>

              <div className="project-links">
                <Link
                  to={item.appLink}
                  className="card-actions"
                  target="_blank"
                >
                  View app
                </Link>
                <Link
                  to={item.codeLink}
                  className="card-actions"
                  target="_blank"
                >
                  View code
                </Link>
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
