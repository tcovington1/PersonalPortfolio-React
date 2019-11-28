import React from 'react';
import GenHuImage from '../../../assets/genhuscreenshot.jpeg';


const Project = (props) => (
  <>
    <a href='https://genhu.herokuapp.com' target='_blank'><img src={GenHuImage} className='project-image-mob'/></a>
    <h3>{props.name}</h3>
  </>
);

export default Project;