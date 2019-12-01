import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './FooterMob.scss';


const SocialLink = (props) => (
  <>
  <div className="social-link-cont">

    <div className="social-wrapper-mob">
      {/* <i class={props.icon} ></i> */}
     <a href={props.link}><FontAwesomeIcon icon={['fab', props.icon ]} className='skill-icons' /></a>
      
    </div>
  </div>
  </>
)
export default SocialLink;