import React, { useState } from "react";

const StateManagement = () => {
    const [show, setShow] = useState(0);
    const handleUpdate = () => {
        setShow(show+5)
    }
    return (
        <div className="container text-center bg-dark" style={{height:100, width:300, borderRadius:20}}>
            <h1 className="text-light">
                <em>{show}</em>
            </h1 >
            <button className="btn btn-success m-1" onClick={handleUpdate}>Update</button>
            <button className="btn btn-warning m-1" onClick={()=>setShow(show-1)}>Delete</button>
            <button className="btn btn-danger m-1" onClick={()=>setShow(0)}>Reset</button>
        </div>
    )
}

export default StateManagement