import React, { Component } from 'react'

import { EventEmitter } from "events";

class store extends Component {

    constructor(props) {
        super(props)
    
        this.eventEmitter = new EventEmitter();

        this.state = {
             appName: "Weather Up"
        };
    }
    

    render() {
        return React.Children.map(this.props.children, child => {
            return React.cloneElement(child, { ...this.state, eventEmitter: this.eventEmitter});
        });
    }
}

export default store
