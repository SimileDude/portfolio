import React from 'react';
import './Skills.scss';

const Skills = () => {
  const skills = {
    languages: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Java', 'Python'],
    frontend: [
      'React',
      'Redux',
      'Material UI',
      'Sass',
      'VueJS',
      'Jest',
      'Styled Components',
      'Bootstrap',
    ],
    backend: ['SQL', 'NoSQL', 'Express', 'NodeJS'],
    other: [
      'Google Cloud Platform',
      'Git',
      'UI/UX',
      'Illustrator',
      'Figma',
      'Notion',
      'Advanced Excel',
      'UML',
    ],
  };

  return (
    <>
      <h1>Skills</h1>
      <p>Some of the tools in my toolbelt:</p>
      <div className="skills-grid">
        {Object.entries(skills).map(([key, value]) => (
          <div key={key} className="skills-column">
            <h3>{key.toUpperCase()}</h3>
            <ul>
              {value.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;

