import React from 'react';
import cwtImage from '../../../../assets/codewithtaylor.jpeg';
import GenHuImage from '../../../../assets/genhuscreenshot.jpeg';

import { HeadingMob } from "../../../../mobile/StylesMob";
import { Icon, InlineIcon } from '@iconify/react';
import githubIcon from '@iconify/icons-logos/github-icon';
import {Fade} from 'react-reveal';
import Slide from 'react-reveal/Slide';
import { Button } from '../../../../components/Button';

const genhuImage = {GenHuImage}
const codeWithTaylor = {cwtImage}





const Project = (props) => (
  <>
  <div className="project-cont">
    <div className="proj-content">
      <h2>{props.name}</h2>
        <p className="proj-head">{props.about}</p>
    <div className="proj-flex-end">

    <div className='proj-butn'>
      <Button
        type='button'
        buttonStyle='butn-primary-outline'
        buttonSize='butn-sm'
      ><a href={props.url} className='button-link'>Site Page</a>
      </Button>
      <Button
        type='button'
        buttonStyle='butn-primary-outline'
        buttonSize='butn-sm'
      ><a href={props.github} className='button-link'>GitHub Repo</a>
      </Button>
    </div>
    <div className='project-image-mob-div'>
      <a href={props.url} target='_blank'><img src={props.image} className='project-image'/></a>
    </div>
    <div className="proj-built-with">
    <div style={{marginTop: '1em'}}>
      <h3>Built with:</h3>
    </div>
    <div className="icon-proj-cont">
      { props.languages.map(languages => (
        <Icon 
        icon={languages} 
         
        className='project-icons-mob' 
        />
      ))}
    </div>
    </div>
    </div>
    </div>
  </div>
  </>
);

export default Project;