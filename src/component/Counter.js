import React, {Component} from 'react';
import updateComponent from "./Withcounter";
class Counter extends Component {
 /*   constructor(props) {
        super(props);
        this.state={
            count:0
        }
    }

    increase = () => {
       // alert('hii')
        console.log(`increase Counter:${this.state.count}`);
        this.setState({
            count : this.state.count+1
        });
    };
*/

    render() {
        const {count,increase}=this.props
        return (
            <div>
                <p className="h1">Total count is {count}</p>
             <button className="btn btn-warning btn-sm" onClick={increase}>Click</button>
            </div>
        );
    }
}

export default updateComponent(Counter);