import React from 'react'
import { Button, Divider, Avatar, } from 'antd'

class AntdData extends React.Component {
    render(){
        return (
            <div>
                <div className="antd-demo-box">
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
