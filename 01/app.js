// Twoim pierwszym wyzwaniem będzie napisać wszystkie metody cuklu życia komponentu jakie do tej pory poznałeś.

// Następnie do każdej z nich dodaj odpowiednie console-ogi, które będą jednoznacznie identyfikować daną metodę np.

// componentDidMount() {
//     console.log('componentDidMount');
// }
// Dodatkowo w odpowiedniej metodzie uruchom setInterval z czasem 5. sekund, który będzie ikrementował state o nazwie counter. Pamiętaj, aby "posprzątać" po tym interwale w odpowiedniej metodzie.

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 }
    }

   
    render() {
        console.log('render');

        return <h1>{ this.state.counter }</h1>
    }
    
    componentDidMount() {
        // console.log('Komponent został zmontowany')
        this.id = setInterval(() => {
            const {counter} = this.state;
            this.setState({ counter: counter + 1 })
        }, 5000);
    }
    componentDidUpdate() {
        console.log('komponent został zamontowany');
    }

    componentWillUnmount() {
        console.log('Komunikat po aktualizacji')
        clearInterval(this.id);
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));