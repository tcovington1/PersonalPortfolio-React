import React from 'react';
import GenHuImage from '../../../../assets/genhuscreenshot.jpeg';


const Project = (props) => (
  <>
  <div className="project-cont">
    <div className="proj-img">
      <h2 className='proj-head'>{props.name}</h2>
      <a href='https://genhu.herokuapp.com' target='_blank'><img src={GenHuImage} className='project-image'/></a>
    </div>
    <div className="proj-desc">
      <h3>
        {props.about}
      </h3>
    </div>
  </div>
  </>
);

export default Project;