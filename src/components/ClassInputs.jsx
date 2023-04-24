import React, { Component } from "react";

export class ClassInputs extends Component {
    constructor(){
        super();
        this.state = {
            name:'',
            add:'',
        }
    }
    handleChangeName=(event) => {
        this.setState({
            name:event.target.value,
        })
    }
    handleChangeAdd=(event) => {
        this.setState({
            add:event.target.value,
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.name + " && " + this.state.add)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    Name:- <input type='text' onChange={this.handleChangeName} value={this.state.name}/>
                    <br/>
                    Address:- <input type='text' onChange={this.handleChangeAdd} value={this.state.add}/>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default ClassInputs