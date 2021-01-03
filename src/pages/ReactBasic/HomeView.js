import React, { Component } from 'react';

export default class HomeView extends Component {
    constructor (props) {
        super(props)
        this.state = {
            newFriend: '',
            name: 'Elina',
            parent: false,
            friends: ['Banel', 'Clakdfo']
        }
    }
    render () {
        const { newFriend, name, parent, friends } = this.state;
        return (
            <div>
                <h3>React 基础</h3>
                <div>
                    <h3>state</h3>
                    <p>
                        姓名: { name }
                    </p>
                </div>
                <div>
                    <h3>props</h3>
                </div>
                <div>
                    <h3>事件处理</h3>
                </div>
                <div>
                    <h3>条件渲染</h3>
                    <p>
                        {
                            parent ? parent : '无'
                        }
                    </p>
                </div>
                <div>
                    <h3>列表 & Key</h3>
                    <ul>
                        {
                            friends.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <h3>表单</h3>
                    <input type="text" value={newFriend} onChange={(e) => {
                        this.setState({
                            newFriend: e.target.value
                        })
                    }}/>
                    <button onClick={() => {
                        const newFriends = friends.concat([newFriend]);
                        this.setState({
                            newFriend: '',
                            friends: newFriends
                        })
                    }}>添加friend</button>

                </div>
            </div>
        )
    }
}
