import React from 'react';
import './Skills.scss';
import skillsList from '../../data/skillsList';

const Skills = () => {
  return (
    <>
      <h1>Skills</h1>
      <p>Some of the tools in my toolbelt:</p>
      <div className="skills-grid">
        {Object.entries(skillsList).map(([key, value]) => (
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

