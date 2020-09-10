import React from 'react';

import "../styles/Project.scss";

const LandingPage = () => {
  return (
    <section className="project-section">
        <p className="define">
          I am a <span className="bold highlight">Web Developer</span> based in
          Rockville, Maryland. I love to watch ideas come to life with digital
          tools.{" "}
          <span className="bold highlight">
            It's truly <em>magic</em>
          </span>
          .
        </p>
        <p className="define">
          People might describe me as a <em>marketing</em> or <em>art</em>{" "}
          person but I gravitate toward <span className="bold">technology</span>. I
          think that makes me{" "}
          <em>
            <span className="bold highlight">versatile</span>
          </em>
          . I can see through the eyes of the client but can also implement the
          project.
        </p>
        <p className="define">
          {" "}
          Feel free to contact me or browse some of my projects using the links
          below.
        </p>
        <div className="home-links">
          <a href="mailto:missymaloney1@gmail.com">
            <button type="button" className="btn-dark">
              Email me
            </button>
          </a>
          <button id="projects-button" type="button" className="btn-light">
            View projects
          </button>
        </div>
    </section>
  );
}

export default LandingPage;
