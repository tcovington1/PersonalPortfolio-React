import React from 'react';

import './SkillsMob.scss';
import '../HomeMob.scss';
import { HeadingMob } from "../../StylesMob";

import {Fade} from 'react-reveal';

import skills from './SkillsData';
import SkillCardMob from './SkillCardMob';
// import SkillCardMob2 from './SkillCardMob2';

const MySkillsMob = () => {


  const mapSkills = (skill) => (
    <SkillCardMob
      key={skill.id}
      id={skill.id}
      name={skill.language}
      icon={skill.icon}
    
    />
    // <SkillCardMob
    //   key={skill.id}
    //   name={skill.language}
    //   icon={skill.icon}
    
    // />
  );
 
    return(
  <>
    <div className='language-cont-mob'>
      <div className=" title">
        <HeadingMob>My Skills</HeadingMob>
      </div>
      <div className="skills-intro">
        <h3></h3>
      </div>
      <div className="skills-mob">
        { skills.map(mapSkills)}
      </div>
    </div>
  </>
    )
}


export default MySkillsMob;

