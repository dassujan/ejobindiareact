import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const handleLogin =()=>{
        localStorage.setItem('login',true)
        navigate('/')
    }
    useEffect(()=>{
        const loginId = localStorage.getItem('login')
        if(loginId){
            navigate('/')
        }
    })
    return(
        <div className="container text-center">
            <input className="text-dark border-bottom border-primary p-2 m-2" type="text" placeholder="Enter Username" />
            <br/>
            <input className="text-dark border-bottom border-primary p-2 m-2" type="password" placeholder="Enter Password"/>
            <br/>
            <button className="btn btn-success" onClick={handleLogin}>LOGIN</button>
        </div>
    )
}

export default Login;