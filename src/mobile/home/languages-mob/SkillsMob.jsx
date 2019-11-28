import React from 'react';

import './SkillsMob.scss';
import {Fade} from 'react-reveal';

import skills from './SkillsData';
import SkillCard from './SkillCardMob';

const MySkillsMob = () => {


  const mapSkills = (skill) => (
    <SkillCard 
      key={skill.id}
      name={skill.language}
    
    />
  );
 
    return(
  <>
    <div className='language-cont'>
      <div className="skills-head-mob">
        <h1>My Skills</h1>
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

