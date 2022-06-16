import React from 'react';

const updateComponent =Originalcomponent => {
    class NewComponent extends React.component{
        constructor(props) {
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

        render(){
           return  <Originalcomponent count={this.state.count} increase ={this.increase}/>
        }
    }
    return NewComponent
}
export default updateComponent;
