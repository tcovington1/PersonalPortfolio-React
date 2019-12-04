import React from 'react';
// import styled from 'styled-components';
import Fade from 'react-reveal';
import './Home.scss';

const Hero = () => {
  
  return(
    
    <div className='hero-cont' >
    <div className='hero-img'> 
      <div className='center-col'>
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