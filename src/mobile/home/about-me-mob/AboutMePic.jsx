import React from 'react';
import MyPic from '../../../assets/Taylor_Covington_mob.jpeg';
import './AboutMePic.scss';

const AboutMePic = () => (
  <>
    <div className='img-cropper-mob'>
      <img src={MyPic} className="about-pic-mob-main"/>
    </div>
  </>
)

export default AboutMePic;