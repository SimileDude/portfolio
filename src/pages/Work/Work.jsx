import React from 'react';
import projects from '../../data/projects';
import './Work.scss';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const Work = () => {
  return (
    <>
      <h1>Recent Work</h1>
      <ul>
        {projects.map((project) => {
          return (
            <li key={project.index} className="project-item">
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
                <h2 className="project-link">
                  <button
                    onClick={() => window.open(project.link)}
                    className="project-title"
                  >
                    {project.title}
                    <HiOutlineArrowNarrowRight className="right-arrow" />
                  </button>
                </h2>
                <div className="description-container">
                  <p className="description">{project.description}</p>
                  <ul className="tools">
                    {project.tools.map((tool, index) => {
                      return (
                        <li key={index} className="tool">
                          {tool}
                        </li>
                      );
                    })}
                  </ul>
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

