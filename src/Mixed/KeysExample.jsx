import React, { useState } from 'react'

const KeysExample = () => {
    const initData = [
        {id:1,name:'React'},
        {id:2,name:'Angular'},
        {id:3,name:'NodeJS'},
        {id:4,name:'NextJS'},
        {id:5,name:'ExpressJS'},
        {id:6,name:'VueJS'},
        {id:7,name:'SolidJS'},
    ]
    const [data, setData] = useState(initData);
    // console.log(data);

    const handleDelete = (id) => {
        setData(data.filter((e)=>e.id !== id));
    }
    return (
        <>
        <ul>
            {data.map((e)=>{
                return (
                    <li key={e.id}>{e.name}
                    <button onClick={()=>handleDelete(e.id)}>Delete</button>
                    </li>
                )
            })}
        </ul>
        </>
    )
}

export default KeysExample;

// https://jsonplaceholder.typicode.com/posts