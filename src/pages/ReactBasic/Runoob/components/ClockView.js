/*
 * @Author: SilvesterChiao
 * @Date: 2020-04-06 13:32:05
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-04-06 16:54:52
 */
import React from 'react';
import PropTypes from 'prop-types'

// state
class ClockView extends React.Component {
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
            <div className="component-wrapper">
                <h6>现在是{this.state.date.toLocaleTimeString()}</h6>
                <p>
                    name: {this.props.name}
                </p>
            </div>
        )
    }
}

// 默认参数
ClockView.defaultProps = {
    name: 'Tom'
}

// props验证 依赖prop-types
ClockView.propTypes = {
    name: PropTypes.string
};

export default ClockView;
