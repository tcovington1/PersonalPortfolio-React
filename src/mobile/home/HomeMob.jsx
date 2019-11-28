import React from 'react';

import HomeHeroMob from './home-hero-mob/HomeHeroMob';
import AboutMeMob from './about-me-mob/AboutMeMob';
import MySkillsMob from './languages-mob/SkillsMob';
import ProjectsMob from './projects-mob/ProjectsMob';
import FooterMob from '../footer-mob/FooterMob';

const HomeMob = () => {

  return(
    <>
    
      <HomeHeroMob />
      <AboutMeMob />
      <MySkillsMob />
      <ProjectsMob />
      <FooterMob />
    </>
  )
};

export default HomeMob;