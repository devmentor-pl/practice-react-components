import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class App extends React.Component {

    constructor(props){
        super(props)
        this.state = { counter: 0}
        console.log('constructor');
    }
    // state = {
    //     counter: 0,
    // }
    render() {
        console.log('render');

        return <h1>{ this.state.counter }</h1>
    }
    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState((prevState) => ({ counter: prevState.counter + 1 }));
            console.log("co 5 sekund - aktualny stan licznika:", this.state.counter);
        }, 5000);
        console.log('componentDidMount');
    }

    componentDidUpdate() {
        console.log('komunikat po aktualizacji - aktualny stan licznika:', this.state.counter);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
        console.log('componentWillUnmount');
    }
  
}

root.render(<App/>);
