import React from 'react';
// import styled from 'styled-components';
import Fade from 'react-reveal';
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css'
import './HomeHeroMob.scss';
import '../HomeMob.scss';

const Hero = () => {
  
  return(
    
    <div className='hero-cont-mob' >
    <div className='hero-img-mob'> 
      <div className='center-col-mob'>
         <Fade duration={2000}>
           <h1>Taylor <br></br> Covington</h1>
           <div>
                <Typed
                className='typed-hero-mob'
                strings={[
                    "I'm a Front-End Developer",
                    "I'm a Back-End Developer",
                    "I'm a Full-Stack Developer"]}
                    typeSpeed={40}
                    backSpeed={50}
                    // loop
                    >
                </Typed>
            </div>        </Fade>
    </div>
  </div>
  </div>
  
  )
}

export default Hero;