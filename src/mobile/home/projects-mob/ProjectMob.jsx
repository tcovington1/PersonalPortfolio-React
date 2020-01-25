import React from 'react';
import GenHuImage from '../../../assets/genhuscreenshot.jpeg';
import { HeadingMob } from "../../StylesMob";
import { Icon, InlineIcon } from '@iconify/react';
import githubIcon from '@iconify/icons-logos/github-icon';
import {Fade} from 'react-reveal';
import Slide from 'react-reveal/Slide';
import { Button } from '../../../components/Button';




const Project = (props) => (
  <>
  <div className="project-cont-mob">
    <h2>{props.name}</h2>
      <p className="proj-head-mob">{props.about}</p>
    <div className='proj-butn'>
      <Button
        type='button'
        buttonStyle='butn-primary-outline'
        buttonSize='butn-sm'
      ><a href='https://github.com/harlanevans/genhu' className='button-link'>GitHub Repo</a>
      </Button>
    </div>
    <div className='project-image-mob-div'>
      <a href='https://genhu.herokuapp.com' target='_blank'><img src={GenHuImage} className='project-image-mob'/></a>
    </div>
  </div>
  </>
);

export default Project;