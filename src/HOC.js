

import React, {Component} from 'react';

//It takes two arguments(component and the data) and returns the new component with the data
export default function Hoc(HocComponent, data){
    return class extends Component{
        constructor(props) {
            super(props);
            this.state = {
                data: data
            };
        }
        
        render(){
            return (
                <HocComponent data={this.state.data} {...this.props} />
            );
        }
    } 
}