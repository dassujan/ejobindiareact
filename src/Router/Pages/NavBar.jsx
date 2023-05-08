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
            <Link className='nav-link text-decoration-none text-light' to='/d_users/shan'>Shan</Link>
            <Link className='nav-link text-decoration-none text-light' to='/login'>LOGIN</Link>
            {/* <Link className='nav-link text-decoration-none text-light' to='/d_users/sujan'>Sujan</Link>
            <Link className='nav-link text-decoration-none text-light' to='/d_users/ananya'>Ananya</Link> */}
        </nav>

    </div>
  )
}

export default NavBar