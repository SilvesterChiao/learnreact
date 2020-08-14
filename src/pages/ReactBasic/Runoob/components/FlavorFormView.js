/*
 * @Author: SilvesterChiao
 * @Date: 2020-04-06 13:32:05
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-04-06 16:55:01
 */
import React from 'react';

class FlavorFormView extends React.Component {
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
            <div className="component-wrapper">
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

export default FlavorFormView;
