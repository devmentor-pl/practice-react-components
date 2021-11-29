import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
        }

        this.clickCounter = this.clickCounter.bind(this);
    }

    clickCounter() {
        const { amount } = this.state;

        this.setState({
            amount: amount + 1,
        })
    }
    
    render() {
        return <button onClick={ this.clickCounter }>click me ({ this.state.amount })</button>
    }
}

ReactDOM.render(<Counter />, document.querySelector('#root'));