import axios from "axios";
import React, { useState } from "react";
const API = "https://jsonplaceholder.typicode.com/users"
const DataPost = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [handleErr, setHandleErr] = useState('');

    const handleDataAdd =()=>{
        axios.post(API,{name,email,phone})
        .then(res=>console.log(res))
        .catch(err=>{
            setHandleErr(err.message)
        })
    }
    return (
        <>
        <h1>Example of Data Add</h1>

        {handleErr !== "" && <h1>{handleErr}</h1>}
        
            Name: <input type="text" value={name} onChange={e=>setName(e.target.value)} />
            <br/>
            Email: <input type="email" value={email} onChange={e=>setEmail(e.target.value)} />
            <br/>
            Phone: <input type="number" value={phone} onChange={e=>setPhone(e.target.value)} />
            <br/>
            <button onClick={handleDataAdd}>Create User</button>
        </>
    )
}

export default DataPost