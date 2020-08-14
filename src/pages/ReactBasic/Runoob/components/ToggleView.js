/*
 * @Author: SilvesterChiao
 * @Date: 2020-04-06 13:32:05
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-04-06 16:55:59
 */
import React from 'react';

// 向事件处理器传参
class ToggleView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Lilisi',
            isToggleOn: false
        }
        // 1. 这边绑定是必要的，这样 `this` 才能在回调函数中使用
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(name, e) {
        // 2. 使用箭头函数定义事件处理器
        // this.setState接受对象或函数
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
        console.log(name)
    }
    render() {
        return (
            // 3. 绑定事件使用箭头函数 (e) => {this.handleClick(e)}
            // 传递参数  (e) => this. deleteRow(id, e) || this.deleteRow.bind(this, id)
            <div className="component-wrapper">
                <button onClick={this.handleClick.bind(this, this.state.name)}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            </div>
        )
    }
}

export default ToggleView;
