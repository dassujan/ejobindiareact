import React from "react";

const Hoc2 = (props) => {
    return (
        <div className="container bg-warning">
            <header className="bg-info text-center text-light fs-1 fw-bold p-2">
                Higher Order Component Two 
            </header>
            <props.com/>

        </div>
    )
}

export default Hoc2