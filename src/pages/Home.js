import React from 'react';
import PropTypes from 'prop-types'
import Animal from './ReactBasic/Animal'
import axios from 'axios';

// 内联样式
var myStyle = {
    color: '#ff0000',
    fontSize: 18
}

// 渲染数组
var arr = [
    <h5 key='1'>菜鸟教程</h5>,
    <h5 key='2'>学的不仅是技术，更是梦想！</h5>,
]

// 定义组件2
class Welcome extends React.Component {
    render() {
        return <h6>Hello World!</h6>;
    }
}

// state
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() }
    }
    componentDidMount() {
        // 生命周期
        this.timeID = setInterval(
            () => this.tick(), 1000
        )
    }
    componentWillUnmount() {
        // 生命周期
        clearInterval(this.timeID)
    }
    tick() {
        this.setState({
            date: new Date()
        })
    }
    render() {
        return (
            <div>
                <h6>现在是{this.state.date.toLocaleTimeString()}</h6>
                <p>
                    name: {this.props.name}
                </p>
            </div>
        )
    }
}

// 默认参数
Clock.defaultProps = {
    name: 'Tom'
}

// props验证 依赖prop-types
Clock.propTypes = {
    name: PropTypes.string
};

// 事件处理
function ActionLink() {
    function handleClick(e) {
        e.preventDefault();
        console.log('链接点击')
    }
    return (
        <a href="/" onClick={handleClick}>
            点我
      </a>
    )
}

// 向事件处理器传参
class Toggle extends React.Component {
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
            <button onClick={this.handleClick.bind(this, this.state.name)}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        )
    }
}

// 父子组件传值
class Name extends React.Component {
    render() {
        return <p>name: {this.props.name}</p>
    }
}

class Link extends React.Component {
    render() {
        return <a href={this.props.site}>{this.props.site}</a>
    }
}

class WebSite extends React.Component {
    constructor() {
        super()
        this.state = {
            name: 'Google',
            site: 'www.google.com'
        }
    }
    render() {
        return (
            <div>
                <Name name={this.state.name} />
                <Link site={this.state.site} />
            </div>
        )
    }
}

// 列表
// let numbers = [1, 2, 3, 4]
let students = [
    {
        id: 1,
        name: 'Lilei'
    },
    {
        id: 2,
        name: 'Tom'
    },
    {
        id: 3,
        name: 'Lili'
    },
    {
        id: 4,
        name: 'Lucy'
    },
    {
        id: 5,
        name: 'Hanmeimei'
    }
]
// let listItems = numbers.map(item => <li key={item}>{item}</li>)

// class StudentList extends React.Component {
//     render(){
//         return (
//             <div>
//                 <ul>
//                     {/* {listItems} */}
//                     {students.map(item => {
//                         return item.name.includes(this.props.filterValue) ? <li key={item.id}>{item.name}</li> : ''
//                         // return <li key={item.id}>{item.name}</li>
//                     })}
//                 </ul>
//             </div>
//         )
//     }
// }
class SearchStudent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        this.setState({
            item: e.target.value
        })
    }
    render() {
        return (
            <div>
                <input value={this.state.item} onChange={this.handleChange} />
                {/* <StudentList filterValue={this.state.item} /> */}
                <ul>
                    {students.map(item => {
                        return item.name.includes(this.state.item) ? <li key={item.id}>{item.name}</li> : ''
                    })}
                </ul>
            </div>
        )
    }
}

// 生命周期
class Button extends React.Component {
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
            <div>
                <h1 style={{ color: 'darkblue', fontWeight: 'bolder' }}>生命周期示例</h1>
                <button onClick={this.setNewData}>加1</button>
                <Content myNumber={this.state.data} />
            </div>
        )
    }
}

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

// 表单事件
class HelloMessage extends React.Component {
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
            <div>
                <h1 style={{ color: 'darkblue', fontWeight: 'bolder' }}>组件通信示例</h1>
                <HelloMessageContent from={this.state.teacherName} value={this.state.value} updateStateProp={this.handleChange}>
                    <div>children1</div>
                </HelloMessageContent>
                <Teacher name={this.state.teacherName} changeTeacherName={this.handleChangeTeacher} />
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

class FlavorForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 'Apple'
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ value: event.target.value })
    }
    handleSubmit(event) {
        console.log('选择： ' + this.state.value)
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="Google">Google</option>
                        <option value="Apple">苹果</option>
                        <option value="MW">微软</option>
                        <option value="FB">Facebook</option>
                    </select>
                    <input type="submit" value="提交" />
                </form>
            </div>
        )
    }
}

// 定义组件1
function Home(props) {
    return (
        <div>
            <h1 className='hello-title'>Hello {props.name}</h1>
            <div style={myStyle}>
                {/* 这里是注释 */}
                {/* 表达式和三元运算符 */}
                Edit <code>src/App.js</code> and save to reload.{1 + 1} - {1 == 2 ? 'true' : 'false'}
                {arr}
            </div>
            <Welcome />
            <hr/>
            <Clock name="Lucy" />
            <hr/>
            <ActionLink />
            <hr/>
            <Toggle />
            <hr/>
            <WebSite />
            <hr/>
            <Button />
            <hr/>
            <HelloMessage />
            <hr/>
            <FlavorForm />
            <hr/>
            <SearchStudent />
            <Animal />
        </div>
    )
}

export default Home;
