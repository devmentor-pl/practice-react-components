import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    state = {
        counter: 0,
    }
    componentDidMount() {
        this.stopInterval = setInterval(() => {
            const { counter } = this.state;
            return this.setState({ counter: counter + 1 },()=>{console.log('Callback')})
        },1000);
        return console.log('Component DidMount');
     };
    componentDidUpdate() {
        return console.log('Component DidUpdate');
     };
    componentWillUnmount() {
        clearInterval(this.stopInterval);
        return console.log('Component WillUnmount');
     };
    render() {
        console.log('render');

        return <h1>{ this.state.counter }</h1>
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));