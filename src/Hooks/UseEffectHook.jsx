import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
    const [show, setShow] = useState(0);
    const [value, setValue] = useState(0);
    const handleUpdate =()=>{
        setShow(show+1);
    }
    const handleValueUpdate =()=>{
        setValue(value+1);
    }
    useEffect(()=>{
        // handleUpdate();
        // setTimeout(()=>{
        //     handleUpdate();
        // },2000)
        // document.title = value+1;
    },[value])
    return (
        <>
        <h1>
            <em>{show}</em>
        </h1>
        {/* <button onClick={handleUpdate}>Update</button> */}
        <h1>
            <em>{value}</em>
        </h1>
        <button onClick={handleValueUpdate}>Update</button>
        </>
    );
}

export default UseEffectHook;