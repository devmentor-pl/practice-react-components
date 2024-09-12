import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
        console.log('constructor')
    }
    render() {
        console.log('render');

        return <h1>{this.state.counter}</h1>
    }
    componentDidMount() {
        console.log('componentDidMount');
        //tu set interval
        //komponent zamontowany
        this.counter = setInterval(() => {
            const { counter } = this.state;
            this.setState({ counter: counter + 1 })
        }, 5000);
    }
    componentDidUpdate() {
        //komponent zaktualizowany
        console.log('componentDidUpdate')
    }
    componentWillUnmount() {
        //kasuje setInterval
        //uruchamiana przed odmontowaniem komponentu
        console.log('componentDidUnmoount')
        clearInterval(this.counter)
    }
}




root.render(<App />);
