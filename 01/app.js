import React from 'react';
import ReactDOM from 'react-dom';

import counter from './components/styles/counter.js';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        }
    }

    render() {
        console.log('render');
        console.log(this.state);
        return <h1 style={counter}>{this.state.counter}</h1>
    }

    componentDidMount() {
        console.log('componentDidMount');

        this.id = setInterval(() => {
            let {counter} = this.state;
            this.setState({counter: counter + 1});
            console.log(counter + 1);
            if (counter === 1000) {
                this.setState({counter: 1});
            }
        }, 5000);
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        clearInterval(this.id);
        console.log('componentWillUnmount');
    }

}

ReactDOM.render(<App/>, document.querySelector('#root'));