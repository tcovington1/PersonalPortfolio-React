import React from 'react';

import HomeHeroMob from './home-hero-mob/HomeHeroMob';
import AboutMeMob from './about-me-mob/AboutMeMob';
import MySkillsMob from './languages-mob/SkillsMob';
import ProjectsMob from './projects-mob/ProjectsMob';
import FooterMob from '../footer-mob/FooterMob';

import {Fade} from 'react-reveal';

const HomeMob = () => {

  return(
    <>
    
      <HomeHeroMob />
      <Fade duration={2000}>
        <AboutMeMob />
        <MySkillsMob />
        <ProjectsMob />
        <FooterMob />
      </Fade>
    </>
  )
};

export default HomeMob;