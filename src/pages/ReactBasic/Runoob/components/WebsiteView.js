/*
 * @Author: fu.nan
 * @Date: 2020-04-06 13:32:05
 * @LastEditors: fu.nan
 * @LastEditTime: 2020-04-06 16:56:27
 */
import React from 'react';

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

class WebSiteView extends React.Component {
    constructor() {
        super()
        this.state = {
            name: 'Google',
            site: 'www.google.com'
        }
    }
    render() {
        return (
            <div className="component-wrapper">
                <Name name={this.state.name} />
                <Link site={this.state.site} />
            </div>
        )
    }
}

export default WebSiteView;
