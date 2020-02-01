import React from 'react';
import GenHuImage from '../../../../assets/genhuscreenshot.jpeg';
import { Button } from '../../../Button';


const Project = (props) => (
  <>
  <div className="project-cont">
    <div className="proj-img">
      <h2 className='proj-head'>{props.name}</h2>
      <a href='https://genhu.herokuapp.com' target='_blank'><img src={GenHuImage} className='project-image'/></a>
    </div>
    <div className="proj-desc-cont">
      <div className="proj-desc">
        <h3>
          {props.about}
        </h3>
        <div className='proj-btn-cont'>
        <Button
          type='button'
          buttonStyle='butn-primary-outline'
          buttonSize='butn-med'
        ><a href='https://genhu.herokuapp.com/' className='button-link'>Site Page</a>
        </Button>
        <Button
          type='button'
          buttonStyle='butn-primary-outline'
          buttonSize='butn-med'
        ><a href='https://github.com/harlanevans/genhu' className='button-link'>GitHub Repo</a>
        </Button>
      </div>

      </div>
    </div>
  </div>
  </>
);

export default Project;