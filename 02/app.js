import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
    state = {
        amount: 0,
    }
    
    render() {
        // return <button>click me ({ this.state.amount })</button>
        return <button onClick={this.clickedBtn}>click me ({this.state.amount})</button>
    }

    clickedBtn = (e) => {
        const {amount} = this.state;
        this.setState({amount: amount + 1});
        console.log(amount + 1);
    }
}

ReactDOM.render(<Counter />, document.querySelector('#root'));