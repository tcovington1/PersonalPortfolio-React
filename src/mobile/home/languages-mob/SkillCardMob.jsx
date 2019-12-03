import React from 'react';
import {Fade} from 'react-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const SkillCard = (props) => (

  <>
  {/* <Fade left > */}
    <div className="skill-wrapper-mob">
      {/* <i class={props.icon} ></i> */}
    <FontAwesomeIcon icon={['fab', props.icon ]} className='skill-icons' />
    {/* {
      img ? <img
    } */}
      <h3>{props.name}</h3>
    </div>
  {/* </Fade> */}
  </>
)

export default SkillCard;