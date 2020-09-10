import React from 'react';

import "../styles/Pvt.scss";

import ProjectViewHero from './ProjectViewHero';
import ProjectViewer from './ProjectViewer';

const LandingPage = () => {
  return (
    <section id="landing">
      <ProjectViewHero />
      <ProjectViewer />
    </section>
  );
}

export default LandingPage;
