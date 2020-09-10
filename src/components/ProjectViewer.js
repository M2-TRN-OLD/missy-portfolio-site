import React from 'react';

import "../styles/Pvt.scss";

const ProjectCard = ({ title, logoLabel, tools, topic, description, appLink, codeLink }) => {
    return (
      <div className="project-card">
        <span className="logo" role="img" aria-label={logoLabel}>
          {logoLabel}
        </span>
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <p>{tools}</p>
        <p>{topic}</p>
        <p>{appLink}</p>
        <p>{codeLink}</p>
      </div>
    );
}


const ProjectViewer = () => {
  return (
    <section id="project-viewer">
      <h1 className="title">Here are my Projects</h1>
      <div className="project-container">
          <ProjectCard 
            logoLabel="LogoLabel" 
            title="proj 1" 
            description="description of project"
            tools="html, css, js, react"
            appLink="http://www.disney.com"
            codeLink="http://www.github.com" 
        />
      </div>
    </section>
  );
}

export default ProjectViewer;
