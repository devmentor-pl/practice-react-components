import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
    state = {
        amount: 0,
    }
    render() {
        return (
            <button onClick={this.countClick}>click me ({ this.state.amount })
            </button>)
    }

    countClick = e => {
        const {amount} = this.state;
        this.setState({amount: amount + 1})
    }
}

ReactDOM.render(<Counter />, document.querySelector('#root'));