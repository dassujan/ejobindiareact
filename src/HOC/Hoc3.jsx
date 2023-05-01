import React from "react";

const Hoc3 = (props) => {
    return (
        <div className="container bg-success">
            <header className="bg-light text-center text-dark fs-1 fw-bold p-2">
                Higher Order Component Three
            </header>
            <props.sujan/>

        </div>
    )
}

export default Hoc3