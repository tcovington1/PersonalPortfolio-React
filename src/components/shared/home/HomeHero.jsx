import React from 'react';
// import styled from 'styled-components';
import Fade from 'react-reveal';
import Typed from 'react-typed';
import './Home.scss';


const Hero = () => {
  

  
  return(
    
    <div className='hero-cont' >
    <div className='hero-img'> 
      <div className='center-col'>
         <Fade duration={2000}>
           <h1>Taylor <br></br> Covington</h1>
           <div>
                <Typed
                className='typed-hero'
                strings={[
                    'I am a Front-End Developer',
                    'I am a Back-End Developer',
                    'I am a Full-Stack Developer']}
                    typeSpeed={40}
                    backSpeed={50}
                    // loop
                    >
                </Typed>
            </div>
        </Fade>
    </div>
  </div>
  </div>
  
  )
};

export default Hero;




