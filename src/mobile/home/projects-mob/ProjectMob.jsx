import React from 'react';
import GenHuImage from '../../../assets/genhuscreenshot.jpeg';
import { HeadingMob } from "../../StylesMob";

const Project = (props) => (
  <>
  <div className="project-cont-mob">
    <h2>{props.name}</h2>
    <p className="proj-head-mob">{props.about}</p>
    <a href='https://genhu.herokuapp.com' target='_blank'><img src={GenHuImage} className='project-image-mob'/></a>
  </div>
  </>
);

export default Project;