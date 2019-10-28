import React from 'react';
import { NavLink, Link} from "react-router-dom";
import './NavBar.styles.scss';
import Logo from '../../../assets/tcdevstudio2.png'
import { Image } from 'react-bootstrap';

const NavBar = () => (

  <div className='nav-cont'>
    <div className='nav-logo'>
      <NavLink to="/"><Image src={Logo} className='logo-image' alt='logo'/></NavLink>
    </div>
      <div className='nav-items-col'>
    <div className='grouped-nav-items'>
        <NavLink to="/portfolio" className='nav-item'>Portfolio</NavLink>
        <NavLink to="/portfolio" className='nav-item'>About</NavLink>
        <NavLink to="/portfolio" className='nav-item'>Contact</NavLink>
      </div>

    </div>


  </div>

)

export default NavBar;