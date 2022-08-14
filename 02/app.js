import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
    state = {
        amount: 0,
    }

    render() {
        return (<button
            onClick={() => this.clickHandler()}>
            click me ({this.state.amount})
        </button>)
    }

    clickHandler() {
        console.log('click')
        const {amount} = this.state
        this.setState({amount: amount + 1})
    }
}

ReactDOM.render(<Counter />, document.querySelector('#root'));