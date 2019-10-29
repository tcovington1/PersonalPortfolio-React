import React from 'react'
import styled from "styled-components";
import Logo from '../../../assets/tcdevstudio2.png'

const Brand = () => {

  return(
    <Image src={Logo} alt='Company Logo'/>
  )
}

export default Brand;

const Image= styled.img`
  height: 85%;
  margin: auto 0;
`;
