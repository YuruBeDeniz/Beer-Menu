import React from 'react';
import { Link } from 'react-router-dom';
import NavBarPic from '../assets/home.png';

export default function NavBar() {
  return (
    <div>
    <Link to='/'><img src={NavBarPic} alt='nav-bar-pic' className='nav-bar-pic'/></Link>
    </div>
  )
}
