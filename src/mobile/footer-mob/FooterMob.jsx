import React from 'react';
import socialLinks from './SocialData';

import SocialLink from './SocialLink';
import './FooterMob.scss';

const FooterMob = () => {

  const mapSocial = (social) => (
    <SocialLink 
    icon={social.icon}
    link={social.link}
    />
  )

  return(
    <>
      <div className='social-flex-cont-mob'>
        <div className="foot-cp-mob">
          <h6>&copy; Taylor J Covington. All rights reserved</h6>
        </div>
        <div className="social-mob">

        {socialLinks.map(mapSocial)}
        </div>
      </div>
    </>
  )
};

export default FooterMob;