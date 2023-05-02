import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    return (
        <div className="container">
            <header className="bg-success fs-1 fw-bold p-1 text-center text-light" style={{borderRadius:10}}>
                ABOUT COMPONENT 
            </header>
            <button className="btn btn-info mt-4" onClick={()=>navigate('/profile')}>Profile</button>
        </div>
    )
}

export default About