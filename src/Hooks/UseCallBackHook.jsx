import React, { useCallback, useEffect, useState } from "react";

const UseCallBackHook = () => {
    const [data, setData] = useState(0)
    const callback = useCallback(()=>{
        return data;
    },[data])
    return (
        <>
        <h1>Example of UseCallBack Hooks</h1>
        <button onClick={()=>setData(data+1)}>Update</button>
        <Child action={callback} />
        </>
    )
}
const Child =({action})=>{
    const [value, setValue] = useState(0)
    useEffect(()=>{
        var x = action();
        setValue(x);

    },[action])

    return(
        <>
        <h1>Child Component</h1>
        <h1>{value}</h1>
        </>
    )
}

export default UseCallBackHook

// instead of action, we can use any name!!!