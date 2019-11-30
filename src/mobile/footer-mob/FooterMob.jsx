import React from 'react';
import socialLinks from './SocialData';

import SocialLink from './SocialLink';

const FooterMob = () => {

  const mapSocial = (social) => (
    <SocialLink icon={social.icon}/>
  )

  return(
    <>
      <h1>Footer</h1>
      <div>
        {socialLinks.map(mapSocial)}
      </div>
    </>
  )
};

export default FooterMob;