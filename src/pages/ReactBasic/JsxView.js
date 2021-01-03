import React, { Component, useReducer } from 'react';

const name = 'Josh Perez';
const element = <h3>Hello, {name}</h3>
const user = {
    firstName: 'Silvester',
    lastName: 'Chiao',
}
function formatName (user) {
    return user.firstName + user.lastName
}

class JsxView extends Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <h3>JSX</h3>
                {/* 1. 渲染变量 */}
                {element}
                {/* 2. JavaScript 表达式 */}
                <ul>
                    <li>{ 2 + 2}</li>
                    <li>{ user.firstName }</li>
                    <li>{ formatName(user) }</li>
                </ul>
            </div>
        );
    }
}

export default JsxView;
