import React from 'react';
import MyPic2 from '../../../../assets/dpl_cert2.jpg';
import '../AboutMePic.scss';

const CertPic = () => (
  <>
    <div className='img-cropper-mob'>
      <img src={MyPic2} className="about-pic-mob"/>
    </div>
  </>
)

export default CertPic;