import React, { useState } from "react";

const StorageAccess = () => {
    const [data, setData] = useState('');

    const handleDataSave =()=>{
        localStorage.setItem('mydata',data)
        document.getElementById('f1').value = data;
    }
    const handleDataGet =()=>{
        const localData = localStorage.getItem('mydata')
        console.log(localData);
        if (localData) {
            document.getElementById('f2').value = localData;
        } else {
            document.getElementById('f2').value = 'No Data Found';
        }
    }
    return (
    <>
        <h1>Example of Local Store Data Access</h1>
        <input type="text" placeholder="Enter any Data" onChange={(e)=>setData(e.target.value)} value={data}/>
        <button onClick={handleDataSave}>Save</button>
        <input type="text" readOnly placeholder="Output" id="f1"/>
        <br/>
        <button onClick={handleDataGet}>GetLocalData</button>
        <input type="text" readOnly placeholder="Retrive Data" id="f2"/>
        <br/>
        <button onClick={()=>localStorage.removeItem('mydata')}>RemoveData</button>
    </>
    )
}

export default StorageAccess;