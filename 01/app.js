import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    state = {
        counter: 0,
    }
    
    render() {
        console.log('render...');
        return <h1>{ this.state.counter }</h1>
    }
    componentDidMount() {
        console.log('componentDidMount...');
        this.counterInterval = setInterval(() => {
            const { counter } = this.state
            this.setState({counter: counter + 1})
            }, 5000)
    }
    componentDidUpdate() {
        console.log('componentDidUpdate...');
        clearInterval(this.counterInterval);
    }
    componentWillUnmount() {
        console.log('componentWillUnmount...');
    }
    forceUpdate() {
        console.log('forceUpdate...');
    }

}

ReactDOM.render(<App/>, document.querySelector('#root'));