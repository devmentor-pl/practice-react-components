import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class App extends React.Component {
    constructor(props) {
        super(props);
        // Inicializacja stanu komponentu
        this.state = {
            counter: 0,
        };
        // Zmienna do przechowwania identyfikatora interval
        this.interval = null;
        console.log('constructor');
    }
    
    render() {
        console.log('render');
        // Renderowanie wartosci licznika
        return <h1>{ this.state.counter }</h1>
    }

    componentDidMount() {
        console.log('componentDidMount');
        // Ustawianie interval ktory aktualizuje stan co 5 sekund
        this.intervalId = setInterval(() => {
            this.setState(prevState => ({ counter: prevState.counter + 1 }));
        }, 5000);
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        // Wyczyszczenie intervalu przed usunieciem komponentu
        clearInterval(this.intervalId);
    }
}

root.render(<App/>);
