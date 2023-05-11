import React, { useReducer, useState } from "react";

const reducer =(data, action)=>{
    switch(action){
        case 'incr':
            return data + 1;
        case 'decr':
            return data?data-1:data;
        case 'reset':
            return data = 0;
    }

}

const UseReduceHook = () => {
    // const [data, setData] = useState(0);
    const [data, dispatch] = useReducer(reducer, 0)
    return (
        <>
            <h1>Example of Reducer</h1>
            <h1>{data}</h1>
            <button onClick={()=>dispatch('incr')}>Increase(+)</button>
            <button onClick={()=>dispatch('decr')}>Decrease(-)</button>
            <button onClick={()=>dispatch('reset')}>Reset(0)</button>
        </>
    )
}

export default UseReduceHook;