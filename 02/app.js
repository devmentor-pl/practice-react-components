import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class Counter extends React.Component {
    state = {
        amount: 0,
    }
    
    render() {
        return <button onClick={this.clickHandler}>click me ({ this.state.amount })</button>
    }

    clickHandler = e => {
        const {amount} = this.state
        this.setState({
            amount: amount +1
        })
    }
}

root.render(<Counter />);
