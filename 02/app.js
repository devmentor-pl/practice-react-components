import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            amount: 0,
        }
    }
    render() {
        const {amount} = this.state;

        return <button onClick = {() => {this.setState({amount: amount + 1})}}>click me ({ this.state.amount })</button>
    }
    
}

ReactDOM.render(<Counter />, document.querySelector('#root'));