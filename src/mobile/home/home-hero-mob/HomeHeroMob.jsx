import React from 'react';
// import styled from 'styled-components';
import Fade from 'react-reveal';
import './HomeHeroMob.scss';
const Hero = () => {
  
  return(
    
    <div className='hero-cont-mob' >
    <div className='hero-img-mob'> 
      <div className='center-col-mob'>
         <Fade duration={2000}>
           <h1>Taylor <br></br> Covington</h1>
          <h6>A Full-Stack Developer</h6>
        </Fade>
    </div>
  </div>
  </div>
  
  )
}

export default Hero;