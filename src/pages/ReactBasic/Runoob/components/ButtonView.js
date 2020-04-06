/*
 * @Author: fu.nan
 * @Date: 2020-04-06 13:32:05
 * @LastEditors: fu.nan
 * @LastEditTime: 2020-04-06 16:54:35
 */
import React from 'react';
import axios from 'axios';

class Content extends React.Component {
    componentWillMount() {
        console.log('componentWillMount')
    }
    componentDidMount() {
        // 在这里使用AJAX请求数据
        console.log('componentDidMount')
        axios.get('http://127.0.0.1:3004/student/list').then(res => {
            console.log(res)
        })
    }
    componentWillReceiveProps(newProps) {
        console.log('componentWillReceiveProps')
    }
    shouldComponentUpdate(newProps, newState) {
        console.log('shouldComponentUpdate')
        return true
    }
    componentWillUpdate(newProps, newState) {
        console.log('componentWillUpdate')
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate')
        console.log('--------------------')
    }
    componentWillUnmount() {
        // 在这里取消未完成的请求
        console.log('componentWillUnmount')
    }
    render() {
        return <p>{this.props.myNumber}</p>
    }
}

// 生命周期
class ButtonView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: 0
        }
        this.setNewData = this.setNewData.bind(this)
    }
    setNewData() {
        this.setState({ data: this.state.data + 1 })
    }
    render() {
        return (
            <div className="component-wrapper">
                <h1 style={{ color: 'darkblue', fontWeight: 'bolder' }}>生命周期示例</h1>
                <button onClick={this.setNewData}>加1</button>
                <Content myNumber={this.state.data} />
            </div>
        )
    }
}

export default ButtonView;
