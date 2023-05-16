import axios from "axios";
import React, { useEffect, useState } from "react";

const DataGetAsync = () => {
    const [value, setValue] = useState([]);
    const [err, setErr] = useState();
    const [load, setload] = useState(true);

    const handleDataGet = async ()=>{
        try {
            const fetch = await axios.get("https://jsonplaceholder.typicode.com/users");
            console.log(fetch.data);
            setValue(fetch.data);
            setload(false)

        } catch (error) {
            console.log(error.message);
            setErr(error.message);
            setload(false)
        }
    }
    useEffect(()=>{
        setTimeout(()=>{
            handleDataGet();
        },3000)
        handleDataGet();
    },[])
    if(err){
        return <h1><em>{err}</em></h1>
    }
    if(load){
        return <h1><em>Taking loading time...</em></h1>
    }
    return (
        <>
        {value.map(({name, email, id})=>{
            return <h1 key={id}>{name}:= {email}</h1>
        })}
        </>
    )
}

export default DataGetAsync;