import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div>
      <nav className='nav-bar'>

     <NavLink className='nav' to='/'> Home </NavLink>
     <a className='nav' href='#about-us'> About-Us </a>
     <NavLink className='nav' to='/programs'> Programs </NavLink>
     <NavLink className='nav' to='/contactus'> Contact-Us </NavLink>
     <NavLink className='nav' to='/login'> Login </NavLink>
   
      </nav>



    </div>
  )
}

export default Navbar
