import React from 'react';
import MyPic from '../../../assets/Taylor_Covington.jpeg';
import './AboutMePic.scss';

const AboutMePic = () => (
  <>
    <div className='img-cropper-mob'>
      <img src={MyPic} className="about-pic-mob"/>
    </div>
  </>
)

export default AboutMePic;