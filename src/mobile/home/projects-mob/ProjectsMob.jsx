import React from 'react';

import './ProjectsMob.scss';
import '../HomeMob.scss';
import { HeadingMob } from "../../StylesMob";


import projectData from './ProjectData';
import Project from './ProjectMob';

const ProjectsMob = () => {

  const mapProjects = (project) => (
    <Project 
      name={project.name}
      image={project.image}
      about={project.about}
    />
  );

  return(
  <>
  <div className="port-cont-mob">
    <div >
      <HeadingMob>Projects</HeadingMob>
    </div>
    <div className="projects">
      {projectData.map(mapProjects)}
    </div>
  </div>
  </>
  )
}

export default ProjectsMob;