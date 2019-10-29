import React from 'react';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';


const Hero = () => {

  const transition = useTransition({
    from: { opacity: 0, marginLeft: -100, marginRight: 100 },
    to: { opacity: 1, marginLeft: 0, marginRight: 0 }
  });

  return(
  <HeroContainer >
    <HeroTitle style={{transition}}>Hey There!</HeroTitle>
  </HeroContainer>
  )
}

export default Hero;

const HeroContainer = styled.div`
    margin-top: 5em;
    height: 100vh;
    width: 100%;
    border: red 1px red;
`;

const HeroTitle = styled(animated.h1)`

`;