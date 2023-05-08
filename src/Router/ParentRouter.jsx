import React from "react";
import Errors from "./Pages/Errors";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Help from "./Pages/Help";
import Profile from "./Pages/Profile";
import Contact from "./Pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Pages/NavBar";
import AcProfile from "./Pages/AcProfile";
import PrProfile from "./Pages/PrProfile";
import DynamicUsers from "./Pages/DynamicUsers";
import Login from "./Pages/Login";
import ProtectedRoute from "./Pages/ProtectedRoute";

const ParentRouter = () => {
    return (
        <div className="container mt-4">
        <Router>
            <NavBar/>
            <Routes>
                {/* <Route path='/' element={<Home/>}/> */}
                <Route path='/' element={<ProtectedRoute name={Home}/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/profile' element={<ProtectedRoute name={Profile}/>}> 
                    <Route path="ac_profile" element={<AcProfile/>}/>
                    <Route path="pr_profile" element={<PrProfile/>}/>
                </Route>
                <Route path='/contact' element={<ProtectedRoute name={Contact}/>}/>
                <Route path='/help' element={<Help/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/d_users/:name' element={<ProtectedRoute name={DynamicUsers}/>}/>

                <Route path='*' element={<Errors/>}/>
            </Routes>
        </Router>
        </div>
    )
}

export default ParentRouter