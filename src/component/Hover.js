import React, {Component} from 'react';
import updateComponent from "./Withcounter";

class Hover extends Component {
    constructor(props) {
        super(props);
        this.state={
            count:0
        }
    }
    overCount=()=>{
        this.setState({
            count:this.state.count+1
        })
    }

    render() {
        return (
            <div>
                <p className="h2 text-secondary">Over count is {this.state.count}</p>
                <button onMouseOver={this.overCount}>Over</button>
            </div>
        );
    }
}

export default updateComponent(Hover);