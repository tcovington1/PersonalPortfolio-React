import React from 'react';
import { Container } from 'react-bootstrap';
import '../Shared.scss';
import HomeHero from './HomeHero';
import AboutMe from './AboutMe';
import Languages from './Languages';
import Projects from './Projects';
import { useWindowWidth } from '../../hooks/setWindowWidth';

const Home = () => {

  return(
    <>
    
      <HomeHero />
      <AboutMe />
      <Languages />
      <Projects />

    </>
  )
  
  }

export default Home;