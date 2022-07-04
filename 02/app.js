import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
    state = {
        amount: 0,
    }
    increment() {
        console.log('click')
        this.setState({ amount: this.state.amount + 1 })
    }
    render() {
        return <button onClick={this.increment.bind(this)}>click me ({ this.state.amount })</button>
    }
}

ReactDOM.render(<Counter />, document.querySelector('#root'));