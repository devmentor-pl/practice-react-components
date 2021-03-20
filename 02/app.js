import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
    state = {
        amount: 0,
    }

    render() {
        return <button onClick={this.clickButton}>click me ({this.state.amount})</button>
    }

    clickButton = e => {
        const { amount } = this.state;
        this.setState({ amount: amount + 1 })
    }
}

ReactDOM.render(<Counter />, document.querySelector('#root'));