import React from "react";
import StateManagement from "./StateManagement";
import Hoc from "./Hoc";
import Hoc2 from "./Hoc2";
import Hoc3 from "./Hoc3";

const HocParent = () => {
    return (
        <div>
            {/* <StateManagement/> */}
            <Hoc name={StateManagement}/>
            <Hoc2 com={StateManagement}/>
            <Hoc3 sujan = {StateManagement}/>
        </div>
    )
}
 
export default HocParent