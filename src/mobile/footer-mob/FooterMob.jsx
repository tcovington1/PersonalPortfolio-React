import React from 'react';
import {Button} from '../../components/Button'
import socialLinks from './SocialData';
import Fade from 'react-reveal/Fade';

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
          <h6>&copy; 2020 Taylor J Covington</h6>
        </div>
        {/* <div className="foot-cp-mob">
          <h6>Built using React</h6>
        </div> */}
        {/* <div className="footer-repo">
          <h6>Built using React</h6>
          <h6>Portolio <a href="">GitHub Repo</a></h6>
        </div> */}
        {/* <Button
        type='button'
        buttonStyle='butn-primary-outline'
        buttonSize='butn-xsm'
      ><a href='https://codewithtaylor.com/' className='button-link'>Blog</a>
      </Button> */}
        <div className="social-mob">
          <Fade>

        {socialLinks.map(mapSocial)}
        </Fade>
        </div>
      </div>
    </>
  )
};

export default FooterMob;