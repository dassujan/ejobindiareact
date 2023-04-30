import React, {useRef} from "react";

const RefExample = () => {
    const inRef = useRef(null);
    const handleDataGet = () => {
        alert(inRef.current.value)
    }
    const handleFocus = () =>{
        inRef.current.focus();
    }
    return (
        <>
            <h2>Example of React ref..</h2>
            <input type='text' ref={inRef}/>
            <button onClick={handleFocus}>Focus</button>
            <button onClick={handleDataGet}>DataFetch</button>
        </>
    )
}

export default RefExample;