import React, { useMemo, useState } from "react";

const UseMemoHook = () => {
    const [data, setData] = useState(0)
    const [dark, noDark] = useState(false); 
    const [blue, noBlue] = useState(false); 
    const callMemo = useMemo(()=>{
        return cal(data)
    },[data]);
    const theme = useMemo(()=>{
        return {
            backgroundColor:dark?'black':'white',
            color:dark?'white':'black'
        }
    })
    const themeBlue = useMemo(()=>{
        return {
            backgroundColor:blue?'blue':'white',
            color:blue?'white':'black'
        }
    })
    return (
        <div className="container" style={dark?theme:themeBlue}>
            <h2>Example of UseMemo Hook</h2>
            <input type="number" onChange={(e)=>setData(e.target.value)}/>
            <h2 style={dark?theme:themeBlue}>{callMemo}</h2>
            <button className="btn btn-dark text-light m-2" onClick={()=>noDark(!dark)}>Theme Change</button>
            <button className="btn btn-primary text-white m-2" onClick={()=>noBlue(!blue)}>Theme Change</button>
        </div>
    ) 
}

const cal =(x)=>{
    for(var i = 1; i<5000; i++){
        return x*2;
    }
}

export default UseMemoHook