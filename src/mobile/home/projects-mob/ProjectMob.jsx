import React from 'react';
import GenHuImage from '../../../assets/genhuscreenshot.jpeg';
import { HeadingMob } from "../../StylesMob";
import { Icon, InlineIcon } from '@iconify/react';
import githubIcon from '@iconify/icons-logos/github-icon';
import {Fade} from 'react-reveal';
import Slide from 'react-reveal/Slide';




const Project = (props) => (
  <>
  <div className="project-cont-mob">
    <h2>{props.name}</h2>
    {/* <Fade right duration={1000}> */}
      <p className="proj-head-mob">{props.about}</p>
    {/* </Fade> */}
    {/* <div className="project-button">
      <button><a href={props.github}>GitHub</a></button>
    </div> */}
    <Slide bottom duration={2000}>
     <a href='https://genhu.herokuapp.com' target='_blank'><img src={GenHuImage} className='project-image-mob'/></a>
    </Slide>
  </div>
  </>
);

export default Project;