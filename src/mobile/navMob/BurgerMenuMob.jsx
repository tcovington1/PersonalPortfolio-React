import React from 'react';
import styled from 'styled-components';
import Bounce from 'react-reveal/Bounce';

const BurgerMenu = (props) => {



  return(
    <Wrapper  onClick={props.handleNavbar}>
      <Bounce right cascade>
      <div className={ props.navbarState ? 'open' : ''}>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </div>
      </Bounce>
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
    width: 5rem;
    height: .4rem;
    margin-bottom: .8rem;
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

