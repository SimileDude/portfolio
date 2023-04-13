import React from 'react';
import './About.scss';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <h1>About me</h1>
      <p>Hi! My name is Ash, and thanks for taking the time to be here.</p>
      <p>
        My ultimate goal is to contribute to a high-performing team, delivering
        exceptional products that make a meaningful difference in people's
        lives.
      </p>
      <p>
        I'm passionate about building web applications and features using
        robust, tried-and-tested technologies. Behind the scenes, I diligently
        strive to craft clean code that is easily extendible in the future.
      </p>
      <p>
        I bring valuable experience in leading small, agile teams that
        prioritize value and efficiency. My strong belief in lean methodologies
        has been reinforced through my time spent in the manufacturing industry.
      </p>
      <p>
        If you are a recruiter, hiring manager, and fellow software engineers,
        I'd love to discuss potential projects and opportunities.
      </p>
      <p>Feel free to reach out, and let's start a conversation!</p>
      <p>
        <Link to="/contact">
          <button className="contact-btn">Contact me</button>
        </Link>
      </p>
    </>
  );
};

export default About;

