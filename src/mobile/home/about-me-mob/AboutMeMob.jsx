import React,  { Component } from 'react';

import './AboutMeMob.scss';
import AboutMePic from './AboutMePic';
import AboutMeCard from './about-me-card-mob/AboutMeCardMob';

class AboutMeMob extends Component {

  render() {
    return(
      <>
      <div className="about-wrapper-mob">
        <div className="about-me-pic">
          <AboutMePic />
        </div>
        <div className="about-words-wrapper">
          <AboutMeCard />
        </div>
      </div>
      </>
    )
  }
}

export default AboutMeMob;