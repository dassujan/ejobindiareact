import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('login')
        navigate('/login')
    }
    return (
        <div className="container" >
            <header className="bg-primary fs-1 fw-bold p-1 text-center text-light" style={{borderRadius:10}}>
                HOME COMPONENT 
            </header>
            <button className="btn btn-success mt-4" onClick={()=>navigate('/about')}>About</button>
            <button className="btn btn-warning mt-4" onClick={handleLogout}>LOGOUT</button>
        </div>
    )
}

export default Home