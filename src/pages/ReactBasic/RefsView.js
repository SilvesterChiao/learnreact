import React, { Component } from 'react';

const FancyButton = React.forwardRef((props, ref) => (
    <div>
        <input ref={ref} type="text" />
        <button onClick={props.handleClick} className="FancyButton">
        {props.children}
    </button>
    </div>
))

class RefsView extends Component {
    constructor (props) {
        super(props)
        this.state = {}
        this.btnRef = React.createRef();
    }

    handleClick = () => {
        console.log(this.btnRef.current.value);
        this.btnRef.current.focus();
    }

    render() {
        return (
            <div>
                <h3>Ref 转发</h3>
                <p>点击按钮使输入框获取焦点, 并输入输入框的值</p>
                <FancyButton handleClick={this.handleClick} ref={this.btnRef}>Click me!</FancyButton>
            </div>
        );
    }
}

export default RefsView;
