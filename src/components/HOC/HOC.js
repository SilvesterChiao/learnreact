/*
 * @Author: SilvesterChiao
 * @Date: 2020-05-29 11:12:08
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-08-14 18:37:59
 */
import React, { Component } from 'react';

// 自定义 Button
export default (Button) => {
    return class extends Component {
        constructor(props) {
            super(props)
            this.state = {
                count: 0,
            }
        }

        componentDidMount() {
            console.log(this.state.count)
        }

        render() {
            return <Button></Button>
        }
    }
}
