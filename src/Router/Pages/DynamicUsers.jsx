import React from "react";
import { useParams } from "react-router-dom";

const DynamicUsers = () => {
    const params = useParams();
    const {name} = params;
    return (
        <>
            <h1>{name}'s Information</h1>
        </>
    )
}

export default DynamicUsers