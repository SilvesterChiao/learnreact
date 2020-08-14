/*
 * @Author: SilvesterChiao
 * @Date: 2020-04-06 13:32:05
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-04-06 16:55:15
 */
import React from 'react';

class Teacher extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            teacherName: this.props.name
        }
        this.handleTeacherChange = this.handleTeacherChange.bind(this)
    }
    handleTeacherChange(e){
        this.setState({
            teacherName: e.target.value
        })
    }
    render(){
        return (
            <div>
                <input type="text" value={this.state.teacherName} onChange={this.handleTeacherChange} />
                <button onClick={this.props.changeTeacherName.bind(this, this.state.teacherName)}>修改老师</button>
            </div>
        )
    }
}

class HelloMessageContent extends React.Component {
    render() {
        return (
            <div>
                <input type="text" value={this.props.value} onChange={this.props.updateStateProp} />
                <p>
                    {this.props.value} from：{this.props.from}
                </p>
                {this.props.children}
            </div>
        )
    }
}

// 表单事件
class HelloMessageView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 'Hello ',
            teacherName: 'Jack'
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleChangeTeacher = this.handleChangeTeacher.bind(this)
    }
    handleChange(event) {
        this.setState({ value: event.target.value })
    }
    handleChangeTeacher(name, e){
        this.setState(
            {
                teacherName: name
            }
        )
        console.log(name)
    }
    render() {
        return (
            <div className="component-wrapper">
                <h1 style={{ color: 'darkblue', fontWeight: 'bolder' }}>组件通信示例</h1>
                <HelloMessageContent from={this.state.teacherName} value={this.state.value} updateStateProp={this.handleChange}>
                    <div>children1</div>
                </HelloMessageContent>
                <Teacher name={this.state.teacherName} changeTeacherName={this.handleChangeTeacher} />
            </div>
        )
    }
}

export default HelloMessageView;
