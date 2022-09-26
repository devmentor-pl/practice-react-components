import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
    state = {
        counter: 0,
    }
    
    render() {
        return <button onClick={this.clickHandler}>click me ({ this.state.counter })</button>
    }

    clickHandler = e => {
        const {counter} = this.state;
        this.setState({counter: counter +1})
    }
}

ReactDOM.render(<Counter />, document.querySelector('#root'));