import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
    state = {
        amount: 0,
    }

    render() {
        const {amount} = this.state;
        return <button onClick={this.incrementValue}>click me ({ amount })</button>
    }

    incrementValue = () => {
        const {amount} = this.state;
        this.setState({amount: amount + 1})
    }
}

ReactDOM.render(<Counter />, document.querySelector('#root'));