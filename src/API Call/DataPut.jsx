import React, { useEffect, useState } from "react";
import axios from "./axios";

const DataPut = () => {
    const [data, setData] = useState([]);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();

    const handleDataFetch =()=>{
        axios.get('/users/4')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }
    const handleEdit =()=>{
        axios.put('/users/4',{name, email, username})
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))
    }
    useEffect(()=>{
        handleDataFetch();
    },[])
    return (
        <>
        <h1>ID :- {data.id}</h1>
        <h2>Name :- {data.name}</h2>
        <h3>Email :- {data.email}</h3>
        <h4>UserName :- {data.username}</h4>
        <hr/>
        <hr/>
        <hr/>
        <div>       
            <h2>Name :- </h2>
            <input type="text" value={name} onChange={e=>setName(e.target.value)} />
            <h3>Email :- </h3>
            <input type="text" value={email} onChange={e=>setEmail(e.target.value)} />
            <h4>UserName :- </h4>
            <input type="text" value={username} onChange={e=>setUsername(e.target.value)} />
            <br/>
            <button onClick={handleEdit}>Edit</button>
        </div>
        </>
    )
}

export default DataPut