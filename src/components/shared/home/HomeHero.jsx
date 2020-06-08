import React from 'react';
// import styled from 'styled-components';
import Fade from 'react-reveal';
import 'react-typed/dist/animatedCursor.css'
import Typed from 'react-typed';
import './Home.scss';
import {Button} from '../../Button'
import {Link} from 'react-router-dom'


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
                  "Design",
                  "Development",
                  "User Experience",
                  "Front-End Developer"]}
                    typeSpeed={40}
                    backSpeed={50}
                    // loop
                    >
                </Typed>
            </div>
            {/* <div className='contact-btn-div' style={{marginTop: '4rem'}}>
          <Link rel="stylesheet" href="/contact"><Button buttonStyle='btn-primary-solid' buttonSize="btn-med" >Contact Me</Button></Link>
        </div> */}

        </Fade>
    </div>
  </div>
  </div>
  
  )
};

export default Hero;




