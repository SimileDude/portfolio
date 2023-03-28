import React from 'react';
import projects from './projects';
import './Work.scss';

const Work = () => {
  return (
    <>
      <h1>Recent Work</h1>
      <ul>
        {projects.map((project, index) => {
          return (
            <li key={index} className="project-item">
              <div className="logo-container">
                {project.logoLink && (
                  <img
                    src={project.logoLink}
                    alt={project.title}
                    className="project-logo"
                  />
                )}
              </div>
              <section className="project-info">
                <h2>
                  <button onClick={() => window.open(project.link)}>
                    {project.title}
                  </button>
                </h2>
                <div className="description-container">
                  <p className="description">{project.description}</p>
                  <button
                    onClick={() => window.open(project.link)}
                    className="ext-link"
                  >
                    Go
                  </button>
                </div>
              </section>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Work;

