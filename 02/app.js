import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class Counter extends React.Component {
    state = {
        amount: 0,
    }

    inc = () => {
        const {amount} = this.state
        this.setState({
            amount: amount + 1
        })
    }

    render() {
        return (
            <button
                onClick={this.inc}
            >
                click me ({this.state.amount})
            </button>)
    }


}

root.render(<Counter />);
