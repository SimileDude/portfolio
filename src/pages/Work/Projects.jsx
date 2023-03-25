import React from 'react';
import './Projects.scss';
const PROJECTS = [
  {
    title: 'CryptoHub (personal project)',
    description:
      'A personal fun project. It is a cryptocurrency webapp that allows users to search for a specific cryptocurrency and view its chart and details. All of the code is available on my github.',
    image: 'https://picsum.photos/200/300',
    link: 'https://github.com/SimileDude/CryptoHub',
  },
  {
    title: 'AshKherad.com',
    description:
      "I have the code for this portfolio site available on my github for review. It's built, from scratch, with React.js and other tools.",
    image: 'https://picsum.photos/200/300',
    link: 'https://google.com',
  },
  {
    title: 'Akindi',
    description:
      'Current part-time job. I work on the front-end and back-end of the platform.',
    image: 'https://akindi.com/',
    link: 'https://google.com',
    logoLink:
      'https://uploads-ssl.webflow.com/6127b97b577bef0aa84fcd26/6127b97b577befbc4d4fcd50_A%20mark.svg',
  },
  {
    title: 'Project 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
    image: 'https://picsum.photos/200/300',
    link: 'https://google.com',
  },
];

const Project = () => {
  return (
    <>
      <ul>
        {PROJECTS.map((project, index) => {
          return (
            <li key={index} className="project-item">
              {/* <div className="logo-container">
                {project.logoLink && (
                  <img
                    src={project.logoLink}
                    alt={project.title}
                    className="project-logo"
                  />
                )}
              </div> */}
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

export default Project;

