import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
    const navigate = useNavigate();
    useEffect(()=>{
        const getToken = localStorage.getItem('login');
        if(!getToken){
            navigate('/login')
        }
    },[])
    return (
        <div>
            <props.name/>
        </div>
    )
}

export default ProtectedRoute;