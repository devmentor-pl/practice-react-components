import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
        }
        
    }    
    render() {
        console.log('render');

        return <h1>{ this.state.counter }</h1>
    }
    componentDidMount() {
        console.log('componentDidMount');

        this.interval = setInterval(() => {
            this.setState((state) => {
                let counter = state.counter;
                return {counter: counter + 1}
            })
        }, 5000)
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');

    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
        
        clearInterval(this.interval);
        
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));