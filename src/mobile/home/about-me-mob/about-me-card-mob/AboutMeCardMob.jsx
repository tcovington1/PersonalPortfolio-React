import React from 'react';
import CertPic from './CertPic';
import './AboutMeCardMob.scss';

const AboutMeCardMob = () => (
  <>
          
          <div className="words-mob">
          <p className='words-p'> Hey there! <br></br> I'm Taylor Covington, a full-stack developer from Salt Lake City, UT.
              I'm also a husband and father of two boys!
              I recently graduated from DevPoint Labs Full-Stack Web Developer Bootcamp in 2019 but
              I've been self-taught for about a year now. I love learning new technologies to build
              solutions web sites and applications. </p>
            </div>
              <CertPic />
              <br></br>
            <div className="words-mob">
              <p className='words-p'>I am currently learning all aspects of React.js which includes Gatsby.js and Next.js.
              I also really enjoy learning back-end languages. During bootcamp we learned Ruby and Ruby on Rails with PostgreSQL
              which makes building a full-stack application very easy. I'm currenly learning Node.js, Express.js, and MongoDB to extend my stack knowledge and offering. What can I say, I love to learn!
              </p>
          
            </div>
    </>
)

export default AboutMeCardMob;