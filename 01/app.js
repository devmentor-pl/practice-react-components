import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 }
    }
    render() {
        return <h1>{ this.state.counter }</h1>
    }
    componentDidMount() {
        this.id = setInterval(() => {
            const { counter } = this.state;
            this.setState( {counter: counter + 1} )
        }, 5000)
    }
    componentDidUpdate() {
        console.log('Komunikat po aktualizacji');
    }
    componentWillUnmount() {
        clearInterval( this.id );
    }
}

root.render(<App/>);
