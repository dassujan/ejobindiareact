import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Profile = () => {
    return (
        <div className="container">
            <header className="bg-info fs-1 fw-bold p-1 text-center text-light" style={{borderRadius:10}}>
                PROFILE COMPONENT 
            </header>
            <div className="text-center d-flex justify-content-end">
                <nav className="nav bg-dark d-flex justify-content-center m-2" style={{width:'40%',borderRadius:10}}>
                <NavLink className='nav-link text-decoration-none text-light' to='ac_profile'>Account Profile</NavLink>
                <NavLink className='nav-link text-decoration-none text-light' to='pr_profile'>Personal Profile</NavLink>
                </nav>
            </div>
            <Outlet/>
        </div>
    )
}

export default Profile