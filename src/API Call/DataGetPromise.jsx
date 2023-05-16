import axios from "axios";
import React, { useState } from "react";

const API = "https://jsonplaceholder.typicode.com/posts";

const DataGetPromise = () => {
    const [show, setShow] = useState([])
    const [errMsg, setErrMsg] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleDataGet =()=>{
        setIsLoading(true);
        axios.get(API)
        .then((res)=>{
            setIsLoading(false)
            setShow(res.data)
            console.log(res.data)
        })
        .catch((err)=>{
            setErrMsg(err.message)
        })
    }
    if(errMsg){
        return <h1>{errMsg}</h1>
    }
    if(isLoading){
        return <h1>Loading.....</h1>
    }
    return (
        <>
            <button onClick={handleDataGet}>Fetch Data</button>
            {/* {errMsg} */}
            <ol>
            {show.slice(5,98).map((e)=>{
                return <li key={e.id}>{e.body.slice(0,100)}</li>
            })}
            </ol>
        </>
    )
}

export default DataGetPromise;