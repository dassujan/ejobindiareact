import React from "react";

const Hoc = (props) => {
    return (
        <div className="container bg-secondary">
            <header className="bg-primary text-center text-light fs-1 fw-bold p-2">
                Higher Order Component One
            </header>
            <props.name/>

        </div>
    )
}

export default Hoc