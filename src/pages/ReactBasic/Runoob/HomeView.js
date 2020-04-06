import React from 'react';
import Animal from '../components/Animal';
import Welcome from './components/WelcomeView';
import Clock from './components/ClockView';
import FlavorForm from './components/FlavorFormView';
import Button from './components/ButtonView';
import HelloMessage from './components/HelloMessageView';
import SearchStudent from './components/SearchStudentView';
import WebSite from './components/WebsiteView';
import Toggle from './components/ToggleView';
import ActionLink from './components/ActionLinkView';

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

// 定义组件1
function HomeView(props) {
    return (
        <div>
            <div className="component-wrapper">
                <h1 className='hello-title'>Hello {props.name}</h1>
                <div style={myStyle}>
                    {/* 这里是注释 */}
                    {/* 表达式和三元运算符 */}
                    Edit <code>src/App.js</code> and save to reload.{1 + 1} - {1 === 2 ? 'true' : 'false'}
                    {arr}
                </div>
            </div>
            <Welcome />
            <Clock name="Lucy" />
            <ActionLink />
            <Toggle />
            <WebSite />
            <Button />
            <HelloMessage />
            <FlavorForm />
            <SearchStudent />
            <Animal />
        </div>
    )
}

export default HomeView;
