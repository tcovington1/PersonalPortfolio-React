import React,  { Component } from 'react';

import './AboutMeMob.scss';
import AboutMePic from './AboutMePic';
import AboutMeCardMob from './about-me-card-mob/AboutMeCardMob';
import '../HomeMob.scss'

class AboutMeMob extends Component {

  render() {
    return(
      <>
      <div className="about-wrapper-mob">
        <div className="about-title-mob title">
            <h1>About Me</h1>
        </div>
        <div className="about-me-pic">
          <AboutMePic />
        </div>
        <div className="about-words-wrapper-mob">
          <AboutMeCardMob />
        </div>
      </div>
      </>
    )
  }
}

export default AboutMeMob;