import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            amount: 0,
        }
        this.handleCLick = this.handleCLick.bind(this)
    }

    handleCLick = () => {
        this.setState({ amount: this.state.amount + 1})
    }
    
    render() {
        return <button
            onClick={this.handleCLick}
        >click me ({ this.state.amount })</button>
    }
}

root.render(<Counter />);
