import React from 'react'
import { Avatar, } from 'antd'

class AntdData extends React.Component {
    render(){
        return (
            <div>
                <div className="component-wrapper">
                    <h1>头像</h1>
                    <p></p>
                    <div className="antd-demo-content">
                        <Avatar icon="user" />
                    </div>
                </div>
            </div>
        )
    }
}

export default AntdData
