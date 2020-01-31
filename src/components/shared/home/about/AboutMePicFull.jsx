import React from 'react';
import MyPic from '../../../../assets/Taylor_Covington_mob.jpeg';
import '../Home.scss';

const AboutMePic = () => (
  <>
  <div className="about-img-cont">
    <div className='img-cropper'>
      <img src={MyPic} className="about-pic"/>
    </div>
  </div>
  </>
)

export default AboutMePic;