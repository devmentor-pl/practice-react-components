import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    state = { // kazda zmiana state powoduje uruchomienie aktualizacji komponentu
        counter: 0,
    }
    render() {
        console.log('render');

        return <h1>{ this.state.counter }</h1> // aktualizacja 
    }

    componentDidMount(){ // uruchamiana tylko raz po załadowaniu komponentu do drzewa DOM
        console.log('componentDidMount');
        this.id = setInterval(()=>{
            const {counter} = this.state;
            this.setState({counter:counter+1}) // aktualizacja 
        },5000);
    }

    componentDidUpdate(){ // uruchamiana za kazdym razem, gdy komponent zostanie zaktualizowany
        console.log('componentDidUpdate');
    }

    componentWillUnmount(){ // uruchamiana zaraz przed usunieciem komponentu z drzewa DOM
        console.log('componentWillUnmount');
    }

}

ReactDOM.render(<App/>, document.querySelector('#root'));


// pierwsze renderowanie to proces dotyczacy montowania - metoda componentDidUpdate - nie zostanie uruchomiona