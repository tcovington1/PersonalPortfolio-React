import React from 'react';
import {Fade} from 'react-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const SkillCard = (props) => (

  <>
  <Fade left duration={2000} delay={1000}>
      <div className="skill-wrapper">
      {/* <i class={props.icon} ></i> */}
      <div className="skill-icons">
        
    <FontAwesomeIcon icon={['fab', props.icon ]}  />
      </div>
    {/* {
      img ? <img
    } */}
      <h3>{props.name}</h3>
    </div>
  </Fade>
  </>
)

export default SkillCard;