import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        }
    }

    render() {
        
        return <h1>{ this.state.counter }</h1>
    }

    componentDidMount() {
        console.log('Komponent został zamontowany');
        this.id = setInterval(() => {
            const { counter } = this.state;
            this.setState({
                counter: counter + 1,
            })
        }, 100)
    }

    componentDidUpdate() {
        console.log('Aktualizacja komponentu!');
    }

    componentWillUnmount() {
        console.log('Komponent został odmontowany');
        clearInterval( this.id )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));