import React from 'react';
import {Fade} from 'react-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const SkillCardMob = (props) => (

  <>
  <Fade left duration={1000} delay={500}>
    <div className="skill-wrapper-mob">
      {/* <i class={props.icon} ></i> */}
    {/* <FontAwesomeIcon icon={['fab', props.icon ]} className='skill-icons' /> */}
    {
      props.id <= 4 ? 
          
          <FontAwesomeIcon 
          icon={['fab', props.icon ]} 
          className='skill-icons-mob' 
          />
          :
          <FontAwesomeIcon 
          icon={['fas', props.icon ]} 
          className='skill-icons-mob' 
          />

    }
      <h3>{props.name}</h3>
    </div>
  </Fade>
  </>
)

export default SkillCardMob;