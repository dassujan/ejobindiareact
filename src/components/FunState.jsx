import React, {useState} from "react";

const FunState =()=>{
    const [msg, setMsg] = useState('Angular');
    const [num, setNum] = useState(0)
    const handleUpdate = () => {
        setMsg('Thank You');
    }
    const handleIncrease = () => {
        setNum(num+5);
    }
    const handleDecrease = () => {
        setNum(num?num-1:num);
    }
    const handleReset = () => {
        setNum(0);
    }
    return(
        <div>
            <h2>Example of Functional State</h2>
            {msg}
            <button onClick={handleUpdate}>UpdateText</button>
            <br/>
            {num}
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}
export default FunState;