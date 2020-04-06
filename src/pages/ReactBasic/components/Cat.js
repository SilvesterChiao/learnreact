import React, { Component } from 'react';
import { Button } from 'antd';

class Cat extends Component {
    render(){
        const { count, addCat } = this.props;
        return (
            <div>
                <p>猫的数量：{ count }</p>
                <Button type="primary" onClick={addCat}>加1</Button>
            </div>
        )
    }
}

export default Cat;
