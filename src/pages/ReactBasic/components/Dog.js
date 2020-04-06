import React, { Component } from 'react';
import { Button } from 'antd';

class Dog extends Component {
    render(){
        const { count, addDog } = this.props;
        return (
            <div>
                <p>狗的数量：{ count }</p>
                <Button type="primary" onClick={addDog}>加1</Button>
            </div>
        )
    }
}

export default Dog;
