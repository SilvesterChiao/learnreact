import React, { Component } from 'react';

class LifecycleView extends Component {
    constructor (props) {
        super(props)
        this.state = {
            name: 'Damo'
        }
        console.log('constructor')
    }

    static getDerivedStateFromProps (props, state) {
        console.log('getDerivedStateFromProps')
        return null;
    }

    static getDerivedStateFromError (error) {}

    componentDidCatch (error, info) {}

    componentDidMount () {
        console.log('componentDidMount')
    }

    shouldComponentUpdate (nextProps, nextState) {
        // return false 将不会调用 render()
        console.log('shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate (prevProps, prevState) {
        return null;
    }

    componentDidUpdate (prevProps, prevState, snapshot) {
        console.log(prevState);
        console.log('componentDidUpdate')
    }

    componentWillUnmount () {
        /**
         * componentWillUnmount() 会在组件卸载及销毁之前直接调用。在此方法中执行必要的清理操作，例如，
         * 1. 清除计时器
         * 2. 取消网络请求
         * 3. 清除在 componentDidMount() 中创建的订阅
         * 不应调用 setState()
         */
        console.log('componentWillUnmount')
    }

    handleChangeState = () => {
        // this.forceUpdate();
        this.setState({
            name: 'Stanfa'
        })
    }

    render() {
        console.log('render')
        const { name } = this.state;
        return (
            <div>
                React 生命周期
                <p>
                    Name: {name}
                </p>
                <button onClick={this.handleChangeState}>修改 state</button>
            </div>
        );
    }
}

export default LifecycleView;
