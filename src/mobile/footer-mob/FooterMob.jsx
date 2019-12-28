import React from 'react';
import socialLinks from './SocialData';

import SocialLinkMob from './SocialLink';
import './FooterMob.scss';

const FooterMob = () => {

  const mapSocial = (social) => (
    <SocialLinkMob 
    icon={social.icon}
    link={social.link}
    />
  )

  return(
    <>
      <div className='social-flex-cont-mob'>
        <div className="foot-cp-mob">
          <h6>&copy; 2019 Taylor J Covington</h6>
        </div>
        <div className="social-mob">

        {socialLinks.map(mapSocial)}
        </div>
      </div>
    </>
  )
};

export default FooterMob;