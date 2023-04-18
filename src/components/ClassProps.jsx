import React, {Component} from 'react'

export class ClassProps extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {name, add, pin, children} = this.props;
        return (
            <div>
                {/* <h1>{this.props.com} And {this.props.besi} And</h1> */}
                <h1>{name} and {add} and {pin}</h1>
                {children}
                
            </div>
        )
    }
}

export default ClassProps;