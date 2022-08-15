import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
    state = {
        amount: 0,
    }

    constructor(props){
        super(props)
    }
    
    render() {
        return <button onClick={this.incBtnValue}>click me ({ this.state.amount })</button>
    }

    incBtnValue = () => {
        const {amount} = this.state
        this.setState({amount: amount + 1})
    }
}

ReactDOM.render(<Counter />, document.querySelector('#root'));