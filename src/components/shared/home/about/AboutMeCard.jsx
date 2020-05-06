import React from 'react';

import CertificatePic from './AboutMeCertPicFull';

import '../Home.scss';

const AboutMeCard = () => (
  <>
    
    <div className="words">
      
        <p className='words-p'> Hey there! <br></br><br></br> I'm Taylor Covington, a <strong>Front-End Developer</strong> from Salt Lake City, UT. I am passionate about building effective websites using technologies such as <strong>React.js</strong>. I develope effective websites by focusing on <strong>user experience</strong>, <strong>SEO</strong>, and <strong>A/B testing</strong>.
            I'm also a husband and father of two boys!
            I recently graduated from <strong>DevPoint Labs Full-Stack Web Developer Bootcamp</strong> in Nov 2019 and finished a three month
            <strong>full-stack internship with Generations Humanitairan</strong> in December 2019. </p>
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