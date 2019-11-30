import React from 'react'
import styled from "styled-components";
import Logo from '../../../assets/lion-logo-transp.png'

const Brand = () => {

  return(
    <Image src={Logo} alt='Company Logo'/>
  )
}

export default Brand;

const Image= styled.img`
  height: 100%;
  margin: auto 0;
  // border: 1px solid red;
`;
