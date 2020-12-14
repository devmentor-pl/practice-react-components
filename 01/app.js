import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    state = {
        counter: 0,
    }

    constructor(props) {
        console.log('constructor')
        super(props)
    }

    render() {
        console.log('render');

        return <h1>{ this.state.counter }</h1>
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.intervalId = setInterval(() => {
            const counter = this.state.counter
            this.setState({ counter: counter + 1})
        }, 5000)
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
        clearInterval( this.intervalId )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));