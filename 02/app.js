import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
        }
    }
    handleClick = () => {
        this.setState({ amount: this.state.amount + 1 })
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.amount}
            </button>
        )
    }
    componentDidMount() {
        const { amount } = this.state;

        const newState = {
            amount: amount + 1
        }

        this.setState(newState)

    }
}

root.render(<Counter />);

// componentDidMount() {
//     const newState = (state, props) => {
//     const { counter } = state;
//     const { step } = props;
//     return {
//     counter: counter + step,
//     }
//     }
//     this.setState(newState);
//     }