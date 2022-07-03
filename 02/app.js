import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
    state = {
        amount: 0,
    }
    handleClick = (e) => {
        const { amount } = this.state;
        if (e.target.classList.contains('btn')) {
            this.setState({amount:amount+1})
        };
     };
    render() {
        return <button className='btn' onClick={this.handleClick}>click me ({ this.state.amount })</button>
    }
}

ReactDOM.render(<Counter />, document.querySelector('#root'));