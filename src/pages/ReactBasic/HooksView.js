/*
 * @Author: SilvesterChiao
 * @Date: 2020-05-29 11:00:37
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2021-01-03 23:57:20
 */
import React, { Component } from 'react';
import UseStateView from './Hooks/UseStateView';
import UseContextView from './Hooks/UseContextView';
import UseReducerView from './Hooks/UseReducerView';
import UseEffectView from './Hooks/UseEffectView';
import HooksCustomView from './Hooks/HooksCustomView';

class HooksView extends Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <h2>Hooks</h2>
                <UseStateView />
                <UseContextView />
                <UseReducerView />
                <UseEffectView personId="123" />
                <HooksCustomView personId="123" />
            </div>
        );
    }
}

export default HooksView;
