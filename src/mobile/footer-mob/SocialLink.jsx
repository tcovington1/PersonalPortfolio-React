import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SocialLink = (props) => (
  <>
    <div className="skill-wrapper-mob">
      {/* <i class={props.icon} ></i> */}
     <FontAwesomeIcon icon={['fab', props.icon ]} className='skill-icons' />
      <h3>{props.name}</h3>
    </div>
  </>
)
export default SocialLink;