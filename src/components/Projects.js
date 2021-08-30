import React from 'react';
import PROJECTS from '../data/projects';

const Project = (props) => {
  const { title, description, image, link } = props.project;
  return (
    <div style={{ display: 'inline-block', width: 300, margin: 10 }}>
      <h3>{title}</h3>
      <img src={image} alt="profile" style={{ width: 200, height: 120 }} />
      <p>{description}</p>
      <a href={link}>See Project</a>
    </div>
  );
};

const Projects = () => (
  <div>
    {PROJECTS.map((PROJECT) => (
      <Project key={PROJECT.id} project={PROJECT} />
    ))}
  </div>
);

export default Projects;
