import React from 'react';
import CertPic from './CertPic';
import './AboutMeCardMob.scss';

const AboutMeCardMob = () => (
  <>
    
    <div className="words-mob">
    <p className='words-p'> Hey there! <br></br> I'm Taylor Covington, a <strong>Front-End Developer</strong> from Salt Lake City, UT. I am passionate about building effective websites using technologies such as <strong>React.js</strong>. I develop effective websites by focusing on <strong>user experience</strong>, <strong>SEO</strong>, and <strong>A/B testing</strong>.
        I'm also a husband and father of two boys!
        I recently graduated from <strong>DevPoint Labs Full-Stack Web Developer Bootcamp</strong> in Nov 2019 and finished a three month
        <strong>full-stack internship with Generations Humanitairan</strong> in December 2019. </p>
      </div>
        <CertPic />
        <br></br>
      <div className="words-mob">
        <p className='words-p'>I am currently learning how to create custom themes in WordPress, implementing sales funnels, and all aspects of online marketing.
        </p>
      </div>
    </>
)

export default AboutMeCardMob;