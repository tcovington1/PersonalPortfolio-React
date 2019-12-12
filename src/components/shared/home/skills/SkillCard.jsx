import React from 'react';
import {Fade} from 'react-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const SkillCard = (props) => (

  <>
  <Fade left duration={2000} delay={1000}>
      <div className="skill-wrapper">
      {/* <i class={props.icon} ></i> */}
      <div className="skill-icons">
        
    {/* <FontAwesomeIcon icon={['fab', props.icon ]}  /> */}
      {
        props.id <= 4 ? 
        
        <FontAwesomeIcon 
        icon={['fab', props.icon ]} 
        className='skill-icons' 
        />
        :
        <FontAwesomeIcon 
        icon={['fas', props.icon ]} 
        className='skill-icons' 
        />
        
      }
      </div>
      <h3>{props.name}</h3>
    </div>
  </Fade>
  </>
)

export default SkillCard;