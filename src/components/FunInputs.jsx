import React, { useState } from "react";

const FunInputs = () => {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    
    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handlePassChange = (e) => {
        setPass(e.target.value)
    }
    return (
        <div>
            <h1>Example of Functional Inputs</h1>
            name:-
            <input type="text" placeholder="Enter your Name" value={name} onChange={handleNameChange} />
            <br/>
            Password:- 
            <input type="password" placeholder="Enter your Password" value={pass} onChange={handlePassChange}/>
            <h1><em>{name} && {pass}</em></h1>
        </div>
    )
}

export default FunInputs