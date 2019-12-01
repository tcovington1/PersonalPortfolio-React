import React from 'react';

import './ProjectsMob.scss';
import '../HomeMob.scss';

import projectData from './ProjectData';
import Project from './ProjectMob';

const ProjectsMob = () => {

  const mapProjects = (project) => (
    <Project 
      name={project.name}
      image={project.image}
    />
  );

  return(
  <>
  <div className="port-cont-mob">
    <div className="proj-header-mob title">
      <h2>Projects</h2>
    </div>
    <div className="projects">
      {projectData.map(mapProjects)}
    </div>
  </div>
  </>
  )
}

export default ProjectsMob;