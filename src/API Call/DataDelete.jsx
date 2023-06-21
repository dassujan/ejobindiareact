import React, { useEffect, useState } from "react";
import axios from "./axios";

const DataDelete = () => {
    const [data, setData] = useState([]);

    const handleDataFetch =()=>{
        axios.get('/users/9')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }
    const handleDelete = () => {
        axios.delete('/users/9')
        .then(res => setData(res.data))
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
        <br/>
            <button onClick={handleDelete}>Delete User</button>
        </>
    )
}

export default DataDelete;