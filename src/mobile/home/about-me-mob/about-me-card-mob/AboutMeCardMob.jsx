import React from 'react';
import CertPic from './CertPic';
import './AboutMeCardMob.scss';

const AboutMeCardMob = () => (
  <>
    
    <div className="words-mob">
    <p className='words-p'> Hey there! <br></br> I'm Taylor Covington, a full-stack developer from Salt Lake City, UT. I am passionate about building web applications. I currently specialize in React.js and Ruby on Rails, or React on Rails!
        I'm also a husband and father of two boys!
        I recently graduated from <strong>DevPoint Labs Full-Stack Web Developer Bootcamp</strong> in Nov 2019 and finished a three month
        <strong>full-stack internship with Generations Humanitairan</strong> in December 2019. </p>
      </div>
        <CertPic />
        <br></br>
      <div className="words-mob">
        <p className='words-p'>I am currently learning the <strong>MERN</strong> stack which includes <strong>React.js, MongoDB, Node.js, and Express.js</strong>. While coding my projects, I'm also learning how to write <strong>tests</strong> using Jest.
          What can I say, I love to learn!
        </p>
      </div>
    </>
)

export default AboutMeCardMob;