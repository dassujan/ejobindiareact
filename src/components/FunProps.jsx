import React from 'react'

// const FunProps = (props) => {}
const FunProps = ({name, add, pin, children}) => {
    // const {name, add, pin, children} = props;
  return (
    <div>
        {/* <h1>Example of Functional Props</h1> */}
        {/* <h1>{props.name} and {props.add} and {props.pin}</h1>
        {props.children} */}
        <h1>{name} and {add} and {pin}</h1>
        {children}
    </div>
  )
}

export default FunProps