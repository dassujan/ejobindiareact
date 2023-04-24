import React, {Component} from 'react';

export class ClassState extends Component {
    constructor(){
        super();
        this.state={
            msg:'Welcome To React',
            count:0,
        }
    }
    handleChange=()=>{
        this.setState({
            msg:"Thank you for Visit"
        })
    }
    handleUpdate=()=>{
        this.setState({
            count:this.state.count+5,
        })
    }
    handleDelete=()=>{
        this.setState({
            count:this.state.count?this.state.count-1:this.state.count,
        })
    }
    handleReset=()=>{
        this.setState({
            count:0,
        })
    }

    render() {
        return (
            <div>
                {this.state.msg}
                <br/>
                <button onClick={this.handleChange}>Change Text</button>
                <br/>
                {this.state.count}
                <br/>
                <button onClick={this.handleUpdate}>Update</button>
                <br/>
                <button onClick={this.handleDelete}>Delete</button>
                <br/>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

export default ClassState