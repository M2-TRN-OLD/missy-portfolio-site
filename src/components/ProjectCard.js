import React from 'react';

const ProjectCard = ({
  title,
  logoLabel,
  tools,
  topic,
  description,
  appLink,
  codeLink,
}) => {
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
};

export default ProjectCard;
