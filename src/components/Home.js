import React from 'react';

import missyImg from "../images/missy__img.png";

import "../styles/Home.scss";

const Home = () => {
  return (
    <section className="project-section">
      <div className="home">
        <div className="home__container">
            <div className="home__image-container">
                <img src={missyImg} className="home__image" />
            </div>
            <div className="home__text">
                I am a Web Designer and Developer based in Rockville, Maryland. I
                love to watch ideas come to life with digital tools. It's truly
                magic. People might describe me as a marketing or art person but I
                gravitate toward technology. I think that makes me versatile. I can
                see through the eyes of the client but can also implement the
                project. Feel free to contact me or browse some of my projects using
                the links below.
            </div>
            <div className="home__link links__btn-dark">
                    <a href="mailto:missymaloney1@gmail.com">
                        Email me
                    </a>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
