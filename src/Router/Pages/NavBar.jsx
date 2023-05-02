import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='container text-center d-flex justify-content-end'>
        <nav className='nav bg-dark text-center d-flex justify-content-center mb-2' style={{borderRadius:10}}>
            <Link className='nav-link text-decoration-none text-light' to='/'>Home</Link>
            <Link className='nav-link text-decoration-none text-light' to='/about'>About</Link>
            <Link className='nav-link text-decoration-none text-light' to='/profile'>Profile</Link>
            <Link className='nav-link text-decoration-none text-light' to='/contact'>Contact</Link>
            <Link className='nav-link text-decoration-none text-light' to='/help'>Help</Link>
        </nav>

    </div>
  )
}

export default NavBar