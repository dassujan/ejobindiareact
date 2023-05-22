import React, { useState } from "react"; 

const DynSearch = () => {
    const data = ['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE', 'TEN']
    const [alpha, setAlpha] = useState(data);
    const handleSearch = (e) => {
    if(e.target.value === ''){
        setAlpha(data);
        return;
    }
    const dynamicSearch = data.filter(
        (i)=>i.toLowerCase().indexOf(e.target.value.toLowerCase())!== -1
    );
    setAlpha(dynamicSearch)
    }
    return (
        <>
            <input type="search" onChange={handleSearch} placeholder="Search Any Item"/>
            {alpha && 
            alpha.map((e,i)=>{
                return <h1 key={i}>{e}</h1>
            })
            }
        </>
    )
}

export default DynSearch