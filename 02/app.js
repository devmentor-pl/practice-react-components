// Tym razem Twoim zadaniem jest obsłużyć zdarzenie o nazwie click.

// Za każdym razem kiedy użytkownik kliknie w <button/> wartość w nawiasach na zostawć zwiększona o jeden.


// import React from 'react';
// import ReactDOM from 'react-dom';

// class Counter extends React.Component {
//     state = {
//         amount: 0,
//     }
    
//     render() {
//         return <button>click me ({ this.state.amount })</button>
//     }
// }

// ReactDOM.render(<Counter />, document.querySelector('#root'));


import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
    
    state = {
        amount: 0,
    }
    
    render() {
        console.log('render');
        return <button onClick = {this.clickHandler}>click me ({ this.state.amount })</button>
    }
 

clickHandler = () => {
    const { amount } = this.state;
    this.setState({ amount: amount + 1})
}
}

ReactDOM.render(<Counter />, document.querySelector('#root'));