import React, { Component } from "react";

export class LifeCycle extends Component {
    constructor(){
        super();
        this.state = {
            value:0
        }
    }
    componentWillMount(){
        alert("componentWillMount");
    }
    render() {
        return (
            <>
                <h1>{this.state.value}</h1>
                <button onClick={()=>this.setState({value:this.state.value+10})}>Update</button>
            </>
        )
    }
    componentDidMount(){
        console.log("componentDidMount");
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate");
        return true;
    }
    componentWillUpdate(){
        alert("componentWillUpdate");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }
}

export default LifeCycle