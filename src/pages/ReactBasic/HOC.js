import React, { Component } from 'react';
import hoc from '../../components/HOC/HOC'

@hoc
class HOCView extends Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                123
            </div>
        );
    }
}

export default HOCView;
