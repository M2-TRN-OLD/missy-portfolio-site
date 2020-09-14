import React from 'react';

import "../styles/About.scss";

function About() {
  return (
    <div className="project-section">
      <div className="about">
        <div id="about" className="about__text">
          <p className="about__define">
            I have worked as a sales rep, a database admin as well as website
            designer.{" "}
          </p>

          <p className="about__define">
            My business is <em>Inspired Technology Coaching</em>. I inspire my
            clients to reach business goals with interesting technologies. I
            have added some new front-end and back-end tools to my repertoire
            and would like to develop more apps.{" "}
            <em>
              <span className="bold highlight">I love web development</span>
            </em>
            .
          </p>
          <p className="about__define">Contact me and let's talk.</p>
          <ul className="social">
            <li>
              <a
                className="social-links"
                href="https://github.com/MissyM2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github fa-2x" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                className="social-links"
                href="https://www.linkedin.com/in/missymaloney/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                className="social-links"
                href="https://twitter.com/maloney_missy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a className="social-links" href="mailto:missymaloney1@gmail.com">
                <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
