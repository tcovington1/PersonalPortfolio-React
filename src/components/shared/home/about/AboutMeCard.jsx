import React from 'react';

import CertificatePic from './AboutMeCertPicFull';

import '../Home.scss';

const AboutMeCard = () => (
  <>
          
          <div className="words">
            
              <p className='words-p'> Hey there! I'm Taylor Covington, a full-stack developer from Salt Lake City, UT. I currently specialize in React.js and Ruby on Rails, or React on Rails!
              I'm also a husband and father of two boys!
              I recently graduated from DevPoint Labs Full-Stack Web Developer Bootcamp in 2019 but
              I've been self-taught for about a year now. I love learning new technologies to build
              solutions web sites and applications. </p>
              {/* </div> */}
                {/* <CertificatePic style={{alignItems: 'left'}}/> */}
              {/* <div className="words"> */}
                <p className='words-p'>I am currently learning all aspects of React.js including Gatsby.js and GraphQL.
              I also really enjoy learning back-end languages. During bootcamp we learned Ruby and Ruby on Rails with PostgreSQL
              which makes building a full-stack application quick to get started. I'm also dabbling in Node.js, Express.js, and MongoDB to extend my stack knowledge and offering. What can I say, I love to learn!
                </p>
              </div>
    </>
)

export default AboutMeCard;