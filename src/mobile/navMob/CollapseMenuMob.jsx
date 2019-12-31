import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import Link from 'react-router-dom';
import { HashLink } from "react-router-hash-link";


const CollapseMenuMob = (props) => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return(
      <CollapseWrapper style={{zIndex: '2'}}
      >
        <NavLinks>
        <li><HashLink to="/#home" smooth onClick={props.handleNavbar}>Home</HashLink></li>
          <li><HashLink to="/#about" smooth onClick={props.handleNavbar}>About</HashLink></li>
          {/* <li><HashLink to="/#skils" smooth onClick={props.handleNavbar}>Skills</HashLink></li> */}
          {/* <li><HashLink to="/#projects" smooth  onClick={props.handleNavbar}>Projects</HashLink></li> */}
          <li><HashLink to="/#contact" smooth onClick={props.handleNavbar}>Contact</HashLink></li>
          <li><a href="https://codewithtaylor.netlify.com/">Blog</a></li>
          <li><a href="/resume" onClick={props.handleNavbar}>Resume</a></li>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
}

export default CollapseMenuMob;

// style={{
//   transform: open.interpolate({
//     range: [0, 0.2, 0.3, 1],
//     output: [0, -20, 0, -200],
//   }).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
// }}

const CollapseWrapper = styled(animated.div)`
  position: fixed;
  top: 6rem;
  left: 0;
  right: 0;
  // background: #2d3;
  background: #2d3436;

`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;

  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: #dfe6e9;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #009688;
      border-bottom: 1px solid #009688;
    }
  }
`;