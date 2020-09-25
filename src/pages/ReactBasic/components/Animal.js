import React, { Component } from 'react';
import Dog from './Dog';
import Cat from './Cat';

class Animal extends Component {
    constructor(){
        super();
        this.state = {
            dogCount: 2,
            catCount: 3,
        }
    }

    addDog = () => {
        this.setState(state => ({
            dogCount: state.dogCount + 1,
        }));
        console.log(this.state);

    }

    addCat = () => {
        console.log(this.state);
        this.setState(state => ({
            catCount: state.catCount + 1,
        }));
        console.log(this.state);

    }

    render(){
        const { dogCount, catCount } = this.state;
        return (
            <div className="component-wrapper">
                <Dog count={dogCount} addDog={this.addDog} />
                <Cat count={catCount} addCat={this.addCat} />
            </div>
        )
    }
}

export default Animal;
