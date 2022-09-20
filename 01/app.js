import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super()
        console.log('constructor')
        this.idInterval = null
    }
    state = {
        counter: 0,
    }
    componentDidMount() {
        console.log('componentDidMount');
        const idInterval = setInterval(() => {
            this.setState({ counter: this.state.counter + 1 });
        }, 5000)
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
        clearInterval(this.idInterval)
    }
    render() {
        console.log('render');
        return <h1>{ this.state.counter }</h1>
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));