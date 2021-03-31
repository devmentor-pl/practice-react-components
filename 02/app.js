import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
    state = {
        amount: 0,
    }
    constructor(props) {
        super(props);

        this.addCounter = this.addCounter.bind(this);
    }

    addCounter() {
        this.setState({
            amount: this.state.amount + 1,
        })
    }

    render() {
        return <button onClick={this.addCounter}>click me ({ this.state.amount })</button>
    }
}

ReactDOM.render(<Counter />, document.querySelector('#root'));