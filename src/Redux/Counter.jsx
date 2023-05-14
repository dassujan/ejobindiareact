import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initValue, incr, decr } from './ShowList'

const Counter = () => {
    const count = useSelector(initValue)
    const dispatch = useDispatch();
  return (
    <>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(incr())}>Update</button>
        <button onClick={()=>dispatch(decr())}>Delete</button>
    </>
  )
}

export default Counter