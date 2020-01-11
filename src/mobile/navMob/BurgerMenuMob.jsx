import React from 'react';
import styled from 'styled-components';
import { useSpring, animated, config } from "react-spring";


const BurgerMenu = (props) => {

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 100px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 5000,
    config: config.wobbly,
  });

  return(
    <Wrapper  onClick={props.handleNavbar}>
      <div className={ props.navbarState ? 'open' : ''}>
        <span style={linkAnimation}>&nbsp;</span>
        <span style={linkAnimation}>&nbsp;</span>
        <span style={linkAnimation}>&nbsp;</span>
      </div>
    </Wrapper>
  )
}

export default BurgerMenu;

const Wrapper = styled.div`
  position: relative;
  padding-top: .7rem;
  cursor: pointer;
  display: block;

  & span {
    background: black;
    display: block;
    position: relative;
    width: 3.5rem;
    height: .4rem;
    margin-bottom: .7rem;
    transition: all ease-in-out 0.2s;
  }

  .open span:nth-child(2) {
    opacity: 0;
  }

  .open span:nth-child(3) {
    transform: rotate(45deg);
    top: -11px;
  }

  .open span:nth-child(1) {
    transform: rotate(-45deg);
    top: 11px;
  }
`;

